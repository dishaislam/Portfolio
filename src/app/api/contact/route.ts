import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const DEFAULT_RECIPIENT = "rmtumon@gmail.com";

function generateEmailHtml({ name, email, projectType, message }: Required<ContactPayload>) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry</title>
</head>
<body style="margin:0;padding:24px;background-color:#070E1E;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#E2E8F0;">
  <div style="max-width:580px;margin:0 auto;background:#0F172A;border-radius:16px;border:1px solid #1E293B;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.5);">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0F172A 0%,#1E3A8A 100%);padding:28px 32px;border-bottom:1px solid #334155;">
      <div style="display:inline-block;padding:4px 10px;background:rgba(59,130,246,0.2);border:1px solid rgba(147,197,253,0.3);border-radius:999px;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#93C5FD;margin-bottom:12px;">
        Direct Contact Form Submission
      </div>
      <h1 style="margin:0;font-size:22px;font-weight:700;color:#FFFFFF;letter-spacing:-0.02em;">
        New Inquiry: ${escapeHtml(projectType)}
      </h1>
      <p style="margin:6px 0 0;font-size:14px;color:#94A3B8;">
        Received from utsho studio website
      </p>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      
      <!-- Sender details -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr>
          <td style="padding:8px 0;width:110px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#64748B;">Client Name</td>
          <td style="padding:8px 0;font-size:15px;font-weight:600;color:#F8FAFC;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#64748B;">Email Address</td>
          <td style="padding:8px 0;font-size:15px;color:#38BDF8;">
            <a href="mailto:${escapeHtml(email)}" style="color:#38BDF8;text-decoration:none;">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#64748B;">Project Type</td>
          <td style="padding:8px 0;font-size:15px;color:#CBD5E1;">
            <span style="display:inline-block;padding:2px 10px;background:#1E293B;border-radius:6px;font-size:13px;border:1px solid #334155;color:#E2E8F0;">
              ${escapeHtml(projectType)}
            </span>
          </td>
        </tr>
      </table>

      <!-- Message block -->
      <div style="margin-top:20px;">
        <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#64748B;margin-bottom:8px;">
          Project Scope / Message
        </div>
        <div style="background:#070E1E;border:1px solid #1E293B;border-radius:12px;padding:18px;font-size:14px;line-height:1.6;color:#E2E8F0;white-space:pre-wrap;">
${escapeHtml(message)}
        </div>
      </div>

      <!-- Action Button -->
      <div style="margin-top:32px;text-align:center;">
        <a href="mailto:${escapeHtml(email)}?subject=Re:%20utsho%20Inquiry%20-%20${encodeURIComponent(projectType)}" 
           style="display:inline-block;background:#2563EB;color:#FFFFFF;padding:12px 28px;border-radius:10px;font-size:14px;font-weight:600;text-decoration:none;box-shadow:0 4px 14px rgba(37,99,235,0.4);">
          Reply directly to ${escapeHtml(name)}
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="padding:16px 32px;background:#090F1D;border-top:1px solid #1E293B;font-size:12px;color:#475569;text-align:center;">
      utsho • Geospatial Engineering & AI Systems Studio • <a href="https://utsho-ai.vercel.app" style="color:#64748B;text-decoration:none;">utsho-ai.vercel.app</a>
    </div>

  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, projectType, message } = body;

    // Validate inputs
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECEIVER_EMAIL || DEFAULT_RECIPIENT;
    const project = projectType || "General Inquiry";
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const subject = `[utsho Inquiry] ${project} from ${cleanName}`;
    const htmlContent = generateEmailHtml({
      name: cleanName,
      email: cleanEmail,
      projectType: project,
      message: cleanMessage,
    });
    const textContent = `
New Inquiry from utsho studio website:

Name: ${cleanName}
Email: ${cleanEmail}
Project Type: ${project}

Message:
${cleanMessage}
    `.trim();

    let deliveredVia = "";

    // 1. Try Resend if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const resendFrom =
          process.env.RESEND_FROM_EMAIL || "utsho Studio <onboarding@resend.dev>";

        const { error: resendError } = await resend.emails.send({
          from: resendFrom,
          to: recipient,
          replyTo: cleanEmail,
          subject,
          html: htmlContent,
          text: textContent,
        });

        if (resendError) {
          console.error("Resend API error:", resendError);
        } else {
          deliveredVia = "resend";
        }
      } catch (err) {
        console.error("Resend delivery exception:", err);
      }
    }

    // 2. Try Nodemailer SMTP if SMTP_USER & SMTP_PASS are configured (e.g. Gmail App Password)
    if (!deliveredVia && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 465,
          secure: Number(process.env.SMTP_PORT) === 465 || !process.env.SMTP_PORT,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"${cleanName} via utsho" <${process.env.SMTP_USER}>`,
          to: recipient,
          replyTo: cleanEmail,
          subject,
          html: htmlContent,
          text: textContent,
        });

        deliveredVia = "smtp";
      } catch (err) {
        console.error("Nodemailer SMTP exception:", err);
      }
    }

    // 3. Try Web3Forms if WEB3FORMS_ACCESS_KEY is configured
    if (!deliveredVia && process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const w3res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            name: cleanName,
            email: cleanEmail,
            subject,
            project_type: project,
            message: cleanMessage,
            from_name: "utsho Studio Portfolio",
          }),
        });

        const w3data = await w3res.json();
        if (w3data.success) {
          deliveredVia = "web3forms";
        } else {
          console.error("Web3Forms error:", w3data);
        }
      } catch (err) {
        console.error("Web3Forms submission exception:", err);
      }
    }

    // 4. Fallback: Log received lead so no message is ever dropped
    if (!deliveredVia) {
      console.log("=== NEW INCOMING CONTACT MESSAGE (AWAITING EMAIL SERVICE KEY) ===");
      console.log({
        timestamp: new Date().toISOString(),
        name: cleanName,
        email: cleanEmail,
        projectType: project,
        message: cleanMessage,
        intendedRecipient: recipient,
      });
      deliveredVia = "lead-log";
    }

    return NextResponse.json({
      success: true,
      deliveredVia,
      message: "Message received successfully. We will reply within one working day.",
    });
  } catch (error: unknown) {
    console.error("Contact API uncaught error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please write to rmtumon@gmail.com directly." },
      { status: 500 }
    );
  }
}
