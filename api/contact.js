export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed. Use POST." });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required fields.",
      });
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || "mdalifhosen876@gmail.com";
    const cleanSubject = subject?.trim() || `New Portfolio Message from ${name}`;

    // 1. Optional MongoDB Atlas Message Storage
    let dbSaved = false;
    if (process.env.MONGODB_URI) {
      try {
        const { MongoClient } = await import("mongodb");
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        const db = client.db(process.env.MONGODB_DB || "portfolio");
        await db.collection("messages").insertOne({
          name,
          email,
          subject: cleanSubject,
          message,
          ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || "Unknown",
          createdAt: new Date(),
        });
        await client.close();
        dbSaved = true;
      } catch (dbErr) {
        console.error("MongoDB storage warning:", dbErr.message);
      }
    }

    // 2. Email Delivery via Nodemailer (Gmail SMTP)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `[Portfolio Inquiry] ${cleanSubject}`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 24px; background-color: #0b1120; color: #f8fafc;">
            <div style="max-width: 600px; margin: 0 auto; background: #131d33; border: 1px solid #1e293b; border-radius: 16px; padding: 28px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
              <div style="border-bottom: 2px solid #2dd4bf; padding-bottom: 16px; margin-bottom: 20px;">
                <h2 style="color: #2dd4bf; margin: 0; font-size: 22px;">New Portfolio Contact Message</h2>
                <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0 0;">Received from alif-portfolio website</p>
              </div>

              <div style="margin-bottom: 16px;">
                <p style="margin: 6px 0; color: #cbd5e1; font-size: 14px;"><strong style="color: #2dd4bf;">Sender Name:</strong> ${name}</p>
                <p style="margin: 6px 0; color: #cbd5e1; font-size: 14px;"><strong style="color: #2dd4bf;">Sender Email:</strong> <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></p>
                <p style="margin: 6px 0; color: #cbd5e1; font-size: 14px;"><strong style="color: #2dd4bf;">Subject:</strong> ${cleanSubject}</p>
              </div>

              <div style="margin-top: 20px; padding: 18px; background-color: #070d18; border-left: 4px solid #2dd4bf; border-radius: 8px;">
                <h4 style="color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">Message Content</h4>
                <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #f1f5f9; font-size: 14px;">${message}</p>
              </div>

              <div style="margin-top: 28px; text-align: center; border-top: 1px solid #1e293b; padding-top: 16px;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(cleanSubject)}" style="display: inline-block; background-color: #2dd4bf; color: #042f2e; padding: 10px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 13px;">Reply to ${name}</a>
              </div>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({
        success: true,
        message: "Thank you! Your message has been sent directly to Md Alif Hosen.",
        dbSaved,
      });
    }

    // 3. Fallback when env variables are yet to be configured
    return res.status(200).json({
      success: true,
      message: "Message received! (Direct Gmail SMTP is ready. Add EMAIL_USER & EMAIL_PASS in Vercel settings to activate live inbox delivery)",
      dbSaved,
    });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to deliver message automatically right now. Please reach out via WhatsApp or Email.",
      error: error.message,
    });
  }
}
