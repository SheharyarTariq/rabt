import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, instagram, packageName } = await request.json();

    if (!name || !email || !phone || !instagram || !packageName) {
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
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInstagram: ${instagram}\nPackage: ${packageName}`,
      html: renderBookingEmail({
        name: escapeHtml(name),
        email: escapeHtml(email),
        phone: escapeHtml(phone),
        instagram: escapeHtml(instagram),
        packageName: escapeHtml(packageName),
      }),
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

function renderBookingEmail(fields: {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  packageName: string;
}) {
  const igHandle = fields.instagram.replace(/^@/, "");
  const igUrl = `https://instagram.com/${encodeURIComponent(igHandle)}`;
  const igDisplay = `@${igHandle}`;
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 14px 24px; border-bottom: 1px solid rgba(189,149,62,0.18); font-family: Georgia, 'Times New Roman', serif; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #BD953E; width: 140px; vertical-align: top;">${label}</td>
      <td style="padding: 14px 24px; border-bottom: 1px solid rgba(189,149,62,0.18); font-family: Georgia, 'Times New Roman', serif; font-size: 15px; color: #F5E9D4; line-height: 1.6;">${value}</td>
    </tr>
  `;

  return `
    <!DOCTYPE html>
    <html>
      <body style="margin: 0; padding: 0; background: #0a0505; font-family: Georgia, 'Times New Roman', serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: #0a0505; padding: 40px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background: linear-gradient(180deg, #1a0504 0%, #0a0505 100%); border: 1px solid rgba(189,149,62,0.25); border-radius: 4px; overflow: hidden;">
                <tr>
                  <td style="padding: 36px 40px 24px 40px; border-bottom: 1px solid rgba(189,149,62,0.25); background: linear-gradient(180deg, #6C0200 0%, #350200 60%, #1a0504 100%);">
                    <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 11px; letter-spacing: 0.4em; text-transform: uppercase; color: #EEDFB1; margin-bottom: 12px;">RABT Films · Bookings</div>
                    <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 28px; line-height: 1.2; color: #F5E9D4; font-weight: normal;">New Package Booking</div>
                    <div style="margin-top: 16px; height: 1px; width: 60px; background: linear-gradient(90deg, #D4B356 0%, transparent 100%);"></div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 28px 40px 8px 40px;">
                    <p style="margin: 0 0 4px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 14px; line-height: 1.7; color: rgba(245,233,212,0.75);">A new client has selected a package and is ready to begin.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px 40px 8px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: rgba(108,2,0,0.18); border: 1px solid rgba(189,149,62,0.3); border-radius: 4px;">
                      <tr>
                        <td style="padding: 22px 24px;">
                          <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #BD953E; margin-bottom: 8px;">Selected Package</div>
                          <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 22px; line-height: 1.3; color: #F5E9D4;">${fields.packageName}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 16px 8px 16px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      ${row("Name", fields.name)}
                      ${row("Email", `<a href="mailto:${fields.email}" style="color: #D4B356; text-decoration: none;">${fields.email}</a>`)}
                      ${row("Phone", `<a href="tel:${fields.phone}" style="color: #D4B356; text-decoration: none;">${fields.phone}</a>`)}
                      ${row("Instagram", `<a href="${igUrl}" style="color: #D4B356; text-decoration: none;">${igDisplay}</a>`)}
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 40px 32px 40px;">
                    <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 13px; line-height: 1.7; color: rgba(245,233,212,0.7); padding: 16px 20px; background: rgba(53,2,0,0.35); border-left: 2px solid #BD953E;">Reach out to the client within 24 hours to confirm the booking and outline next steps.</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px 40px 32px 40px; border-top: 1px solid rgba(189,149,62,0.18); background: #060303;">
                    <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(189,149,62,0.7); text-align: center;">Crafted in cinema · RABT Films</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
