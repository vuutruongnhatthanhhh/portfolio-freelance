import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // Nodemailer cần Node.js runtime

type Body = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  locale?: "vi" | "en";
};

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "BAD_JSON" }, { status: 400 });
  }

  const { name, email, phone = "—", message, locale = "vi" } = body || {};
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "VALIDATION" },
      { status: 400 }
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    FROM_EMAIL,
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !CONTACT_TO ||
    !FROM_EMAIL
  ) {
    return NextResponse.json(
      { ok: false, error: "ENV_MISSING" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject =
    locale === "en"
      ? `[Contact] New message from ${name}`
      : `[Liên hệ] Tin nhắn mới từ ${name}`;

  const plain =
    locale === "en"
      ? [
          `You have a new contact message from tjzenn.com`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          ``,
          `Message:`,
          message,
        ].join("\n")
      : [
          `Bạn có tin nhắn liên hệ mới từ tjzenn.com`,
          `Họ tên: ${name}`,
          `Email: ${email}`,
          `SĐT: ${phone}`,
          ``,
          `Nội dung:`,
          message,
        ].join("\n");

  const html =
    locale === "en"
      ? `
      <h2 style="margin:0 0 8px">New contact message from tjzenn.com</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <hr/>
      <p style="white-space:pre-wrap">${message}</p>
    `
      : `
      <h2 style="margin:0 0 8px">Tin nhắn liên hệ mới từ tjzenn.com</h2>
      <p><b>Họ tên:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>SĐT:</b> ${phone}</p>
      <hr/>
      <p style="white-space:pre-wrap">${message}</p>
    `;

  try {
    await transporter.sendMail({
      from: `"TJZenn" <${FROM_EMAIL}>`, // người gửi: contact.tjzenn@gmail.com
      to: CONTACT_TO, // người nhận: vuutruongnhatthanh@gmail.com
      subject,
      text: plain,
      html,
      replyTo: `${name} <${email}>`, // bấm Reply sẽ trả lời thẳng cho khách
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("MAIL_SEND_ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "SEND_FAILED" },
      { status: 500 }
    );
  }
}
