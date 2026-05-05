import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, packageName } = await request.json();

    if (!name || !email || !phone || !packageName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const port = Number(process.env.SMTP_PORT) || 587;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL;

    await transporter.sendMail({
      from: `"RABT Films Bookings" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New package booking — ${packageName} · ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPackage: ${packageName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New package booking</h2>
          <p><strong>Package:</strong> ${escapeHtml(packageName)}</p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("booking send failed", error);
    return NextResponse.json(
      { error: "Failed to send booking" },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
