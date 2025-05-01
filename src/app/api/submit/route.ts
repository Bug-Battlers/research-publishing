import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    console.log("API route called, processing form data...");
    const formData = await request.formData();
    console.log("Form data received:", Object.fromEntries(formData.entries()));

    // Extract author information
    const firstAuthorName = formData.get("firstAuthorName") as string;
    const firstAuthorEmail = formData.get("firstAuthorEmail") as string;
    const correspondingAuthorName = formData.get(
      "correspondingAuthorName",
    ) as string;
    const correspondingAuthorEmail = formData.get(
      "correspondingAuthorEmail",
    ) as string;

    // Extract additional authors (if any)
    const additionalAuthors = [];
    let index = 2;
    while (formData.has(`author${index}Name`)) {
      additionalAuthors.push({
        name: formData.get(`author${index}Name`) as string,
        email: formData.get(`author${index}Email`) as string,
      });
      index++;
    }

    // Extract paper details
    const paperTitle = formData.get("paperTitle") as string;
    const paperType = formData.get("paperType") as string;

    // Handle file upload
    const document = formData.get("document") as File;
    let attachments = [];

    if (document && document.size > 0) {
      const fileBuffer = await document.arrayBuffer();
      attachments.push({
        filename: document.name,
        content: Buffer.from(fileBuffer),
      });
    }

    // Configure email transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Create authors HTML table rows
    let additionalAuthorsHtml = "";
    additionalAuthors.forEach((author, i) => {
      const authorPosition = i === 0 ? "Second" : "Third";
      additionalAuthorsHtml += `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">${authorPosition} Author:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${author.name} (${author.email})</td>
        </tr>
      `;
    });

    // Create HTML email template for admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h1 style="color: #3b82f6; text-align: center; padding-bottom: 10px; border-bottom: 2px solid #f0f0f0;">
          New Article Submission
        </h1>

        <div style="margin-top: 20px;">
          <h2 style="color: #4b5563; font-size: 18px;">Author Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 40%;">First Author:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${firstAuthorName} (${firstAuthorEmail})</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Corresponding Author:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${correspondingAuthorName} (${correspondingAuthorEmail})</td>
            </tr>
            ${additionalAuthorsHtml}
          </table>
        </div>

        <div style="margin-top: 20px;">
          <h2 style="color: #4b5563; font-size: 18px;">Paper Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 40%;">Paper Title:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${paperTitle}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Paper Type:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${paperType}</td>
            </tr>
          </table>
        </div>

        <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>This is an automated email sent from the IJELS article submission system.</p>
        </div>
      </div>
    `;

    // Create HTML email template for author confirmation
    const authorConfirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h1 style="color: #3b82f6; text-align: center; padding-bottom: 10px; border-bottom: 2px solid #f0f0f0;">
          Article Submission Confirmation
        </h1>

        <div style="margin-top: 20px; color: #4b5563;">
          <p>Dear ${correspondingAuthorName},</p>
          <p>Thank you for submitting your article to the International Journal of English Literature and Social Sciences (IJELS).</p>
          <p>We have received your submission with the following details:</p>
        </div>

        <div style="margin: 20px 0; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
          <p><strong>Paper Title:</strong> ${paperTitle}</p>
          <p><strong>Paper Type:</strong> ${paperType}</p>
          <p><strong>First Author:</strong> ${firstAuthorName}</p>
          ${additionalAuthors.length > 0 ? `<p><strong>Additional Authors:</strong> ${additionalAuthors.map((a) => a.name).join(", ")}</p>` : ""}
        </div>

        <div style="margin-top: 20px; color: #4b5563;">
          <p>Your submission will be reviewed by our editorial team, and we will get back to you shortly regarding the status of your paper.</p>
          <p>If you have any questions or need further assistance, please feel free to reply to this email.</p>
        </div>

        <div style="margin-top: 30px; color: #4b5563;">
          <p>Best regards,</p>
          <p><strong>IJELS Editorial Team</strong></p>
          <p><a href="https://ijels.com" style="color: #3b82f6;">www.ijels.com</a></p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
          <p>This is an automated confirmation email. Please do not reply to this email if you have specific questions about the submission process or your manuscript.</p>
        </div>
      </div>
    `;

    console.log("Sending admin email...");
    await transporter.sendMail({
      from: `"${firstAuthorName} via IJELS" <${process.env.SMTP_USER}>`,
      to: "sanskar.bugbattlers@gmail.com",
      replyTo: correspondingAuthorEmail,
      subject: `New Article Submission: ${paperTitle}`,
      html: adminEmailHtml,
      attachments: attachments,
    });

    console.log("Sending confirmation email...");
    await transporter.sendMail({
      from: `"IJELS Editorial Team" <${process.env.SMTP_USER}>`,
      to: correspondingAuthorEmail,
      subject: `Submission Received: ${paperTitle}`,
      html: authorConfirmationHtml,
    });

    console.log("Emails sent successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in /api/submit route:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 },
    );
  }
}
