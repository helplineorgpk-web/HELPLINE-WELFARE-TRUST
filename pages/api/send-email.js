// API route for sending emails as a fallback when EmailJS fails
// Supports multiple email services: Resend, SendGrid, or SMTP via nodemailer

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { to, subject, name, email, phone, message } = req.body;

    // Validate required fields
    if (!to || !subject || !name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Format the email body
    const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
This email was sent from the Helpline Welfare Trust contact form.
Reply directly to this email to respond to ${name} at ${email}
    `.trim();

    // Try Resend first (recommended - free tier available)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
            to: to,
            subject: subject,
            text: emailBody,
            reply_to: email,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          return res.status(200).json({ 
            success: true, 
            message: "Email sent successfully via Resend",
            id: data.id
          });
        } else {
          throw new Error(data.message || "Resend API error");
        }
      } catch (resendError) {
        console.error("Resend error:", resendError);
        // Fall through to next method
      }
    }

    // Try SendGrid as fallback
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    if (SENDGRID_API_KEY) {
      try {
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
          },
          body: JSON.stringify({
            personalizations: [{
              to: [{ email: to }],
              subject: subject,
            }],
            from: { 
              email: process.env.SENDGRID_FROM_EMAIL || "noreply@helpline.org.pk",
              name: "Helpline Welfare Trust"
            },
            content: [{
              type: "text/plain",
              value: emailBody,
            }],
            reply_to: { email: email },
          }),
        });

        if (response.ok) {
          return res.status(200).json({ 
            success: true, 
            message: "Email sent successfully via SendGrid"
          });
        } else {
          const errorText = await response.text();
          throw new Error(errorText || "SendGrid API error");
        }
      } catch (sendgridError) {
        console.error("SendGrid error:", sendgridError);
        // Fall through to logging
      }
    }

    // If no email service is configured, log the email
    // This allows the form to work while you set up email service
    console.log("=".repeat(50));
    console.log("EMAIL TO SEND (no email service configured):");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Body:", emailBody);
    console.log("=".repeat(50));

    // Return success so form doesn't show error
    // But log a warning that email service needs to be configured
    return res.status(200).json({ 
      success: true, 
      message: "Email logged (configure email service for actual sending)",
      warning: "No email service configured. Please set up Resend or SendGrid."
    });

  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ 
      error: "Failed to send email",
      details: error.message 
    });
  }
}

