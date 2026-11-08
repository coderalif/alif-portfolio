import fs from "fs";

function buildPdf(lines) {
  // Helvetica and Helvetica-Bold fonts
  let content = "";
  for (const line of lines) {
    const font = line.bold ? "/F2" : "/F1";
    const escaped = line.text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    content += `BT ${font} ${line.size} Tf ${line.x} ${line.y} Td (${escaped}) Tj ET\n`;
  }
  const streamBuf = Buffer.from(content, "utf8");

  const objects = [
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n`,
    `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
    `6 0 obj\n<< /Length ${streamBuf.length} >>\nstream\n${content}endstream\nendobj\n`
  ];

  let pdfHeader = "%PDF-1.4\n";
  let curOffset = Buffer.byteLength(pdfHeader, "utf8");
  const offsets = [];

  for (const obj of objects) {
    offsets.push(curOffset);
    curOffset += Buffer.byteLength(obj, "utf8");
  }

  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets) {
    xref += String(offset).padStart(10, "0") + " 00000 n \n";
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${curOffset}\n%%EOF\n`;

  const fullPdf = pdfHeader + objects.join("") + xref + trailer;
  return Buffer.from(fullPdf, "utf8");
}

const lines = [
  { text: "Md Alif Hosen", size: 20, bold: true, x: 50, y: 745 },
  { text: "Full Stack Web Developer (MERN / React & Node.js)", size: 12, bold: true, x: 50, y: 727 },
  { text: "Email: mdalifhosen876@gmail.com | Phone: +8801795713804 | Location: Rangpur, Bangladesh", size: 9, bold: false, x: 50, y: 710 },
  { text: "GitHub: https://github.com/coderalif | LinkedIn: https://www.linkedin.com/in/alif26/", size: 9, bold: false, x: 50, y: 698 },
  { text: "Portfolio: https://alif-portfolio-two.vercel.app/", size: 9, bold: false, x: 50, y: 686 },

  { text: "PROFESSIONAL SUMMARY", size: 11, bold: true, x: 50, y: 660 },
  { text: "Passionate Full Stack Developer with practical experience engineering high-performance web applications,", size: 9, bold: false, x: 50, y: 646 },
  { text: "responsive user interfaces with React & Tailwind CSS, robust REST APIs with Node.js and Express, and scalable", size: 9, bold: false, x: 50, y: 634 },
  { text: "database architectures with MongoDB and MySQL. Proven ability to deliver production-ready software.", size: 9, bold: false, x: 50, y: 622 },

  { text: "TECHNICAL SKILLS", size: 11, bold: true, x: 50, y: 598 },
  { text: "Frontend: React.js, Next.js, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5, CSS3", size: 9, bold: false, x: 50, y: 584 },
  { text: "Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, API Security Middleware", size: 9, bold: false, x: 50, y: 572 },
  { text: "Databases: MongoDB, Mongoose ODM, MySQL, Database Normalization & Modeling", size: 9, bold: false, x: 50, y: 560 },
  { text: "DevOps & Tools: Git, GitHub, Vite, Postman, Vercel, Netlify, Docker (Basics), VS Code", size: 9, bold: false, x: 50, y: 548 },

  { text: "FEATURED PROJECTS", size: 11, bold: true, x: 50, y: 524 },
  { text: "1. StudioSpace - Creative Studio Booking Platform (Next.js, React, Tailwind CSS, Vercel)", size: 9.5, bold: true, x: 50, y: 510 },
  { text: "   Live: https://studiospace-pearl.vercel.app/ | GitHub: https://github.com/coderalif", size: 8.5, bold: false, x: 50, y: 498 },
  { text: "   - Built full stack studio discovery and booking portal with real-time category filtering and dynamic routing.", size: 8.5, bold: false, x: 50, y: 486 },

  { text: "2. SaaS Analytics Admin Dashboard (React, Node.js, Express, MongoDB, Recharts)", size: 9.5, bold: true, x: 50, y: 468 },
  { text: "   - Built high-performance admin dashboard with KPI metrics, role-based views, and real-time visual charts.", size: 8.5, bold: false, x: 50, y: 456 },

  { text: "3. Commerce API & Store Platform (Node.js, Express, MongoDB, JWT Auth)", size: 9.5, bold: true, x: 50, y: 438 },
  { text: "   - Engineered scalable RESTful e-commerce API with cart persistence, order status pipeline, and admin guards.", size: 8.5, bold: false, x: 50, y: 426 },

  { text: "4. Developer Portfolio System (React, Vite, Framer Motion, Tailwind CSS)", size: 9.5, bold: true, x: 50, y: 408 },
  { text: "   - Designed modern responsive developer portfolio with dark/light themes and Serverless API contact engine.", size: 8.5, bold: false, x: 50, y: 396 },

  { text: "PRACTICAL EXPERIENCE", size: 11, bold: true, x: 50, y: 372 },
  { text: "Full Stack Web Developer | Self-Employed & Remote Projects (2023 - Present)", size: 9.5, bold: true, x: 50, y: 358 },
  { text: "- Developed and deployed 18+ web applications including SaaS dashboards, REST APIs, and full stack portals.", size: 8.5, bold: false, x: 50, y: 346 },
  { text: "- Designed responsive frontend interfaces using React, Tailwind CSS, and modern UI component patterns.", size: 8.5, bold: false, x: 50, y: 334 },
  { text: "- Implemented secure authentication, session management, and database pipelines.", size: 8.5, bold: false, x: 50, y: 322 },

  { text: "EDUCATION", size: 11, bold: true, x: 50, y: 298 },
  { text: "Diploma in Electronics Technology | Kurigram Polytechnic Institute (2021 - Present / Running)", size: 9.5, bold: true, x: 50, y: 284 },
  { text: "Studying core electronics engineering, digital logic circuits, microprocessors, and applied technical mathematics.", size: 8.5, bold: false, x: 50, y: 272 },
  { text: "Secondary School Certificate (SSC) | Science Group (Completed)", size: 9.5, bold: true, x: 50, y: 254 },

  { text: "LANGUAGE PROFICIENCY", size: 11, bold: true, x: 50, y: 230 },
  { text: "Bengali (Native) | English (Professional Working Proficiency)", size: 9, bold: false, x: 50, y: 216 },
];

const pdfBuffer = buildPdf(lines);
fs.writeFileSync("public/resume.pdf", pdfBuffer);
console.log("Successfully generated public/resume.pdf (" + pdfBuffer.length + " bytes)");
