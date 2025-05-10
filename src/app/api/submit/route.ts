import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * IMPORTANT: When using Gmail SMTP with Vercel or other serverless platforms:
 * 
 * Gmail blocks login attempts from unknown servers by default as a security measure.
 * To fix email sending on Vercel, you need to:
 * 
 * 1. Enable 2-Step Verification for your Google account:
 *    - Go to https://myaccount.google.com/security
 *    - Enable 2-Step Verification
 * 
 * 2. Create an App Password specifically for this application:
 *    - Go to https://myaccount.google.com/apppasswords
 *    - Select "App: Mail" and "Device: Other (Custom name)"
 *    - Name it something recognizable like "Vercel IJELS Website"
 *    - Use the generated 16-character password in your SMTP_PASSWORD env variable
 */

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

    // Configure email transport with detailed debugging options
    const transportOptions = {
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Gmail specific settings to improve reliability
      tls: {
        // Disable TLS verification in development for testing
        rejectUnauthorized: process.env.NODE_ENV === 'production',
      },
      // Enable debug logging if SMTP_DEBUG env variable is set
      ...(process.env.SMTP_DEBUG === "true" && {
        debug: true,
        logger: true
      })
    };

    console.log(`SMTP Configuration: ${process.env.SMTP_HOST}:${process.env.SMTP_PORT} (secure: ${process.env.SMTP_SECURE})`);
    const transporter = nodemailer.createTransport(transportOptions);

    // Verify SMTP connection before sending emails
    try {
      console.log("Verifying SMTP connection...");
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      if (verifyError instanceof Error) {
        // Check for common Gmail authentication errors
        if (verifyError.message.includes("Invalid login") || 
            verifyError.message.includes("Username and Password not accepted")) {
          throw new Error(
            "Gmail authentication failed. If using Gmail on Vercel, you need to use an App Password instead of your regular password. See comments at the top of this file for instructions."
          );
        }
      }
      throw verifyError;
    }

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
    console.log(`From: ${process.env.SMTP_USER}, To: sanskar.bugbattlers@gmail.com`);
    const adminEmailResult = await transporter.sendMail({
      from: `"${firstAuthorName} via IJELS" <${process.env.SMTP_USER}>`,
      to: "sanskar.bugbattlers@gmail.com",
      replyTo: correspondingAuthorEmail,
      subject: `New Article Submission: ${paperTitle}`,
      html: adminEmailHtml,
      attachments: attachments,
    });
    console.log("Admin email sent successfully:", adminEmailResult.messageId);

    console.log("Sending confirmation email...");
    console.log(`From: ${process.env.SMTP_USER}, To: ${correspondingAuthorEmail}`);
    const authorEmailResult = await transporter.sendMail({
      from: `"IJELS Editorial Team" <${process.env.SMTP_USER}>`,
      to: correspondingAuthorEmail,
      subject: `Submission Received: ${paperTitle}`,
      html: authorConfirmationHtml,
    });
    console.log("Author confirmation email sent successfully:", authorEmailResult.messageId);

    console.log("All emails sent successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in /api/submit route:", error);
    
    // Detailed error logging
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
      
      // Specific error handling for common SMTP issues
      let errorMessage = error.message;
      
      // Check for Gmail authentication issues
      if (error.message.includes("Invalid login") || 
          error.message.includes("Username and Password not accepted") ||
          error.message.includes("Invalid credentials")) {
        errorMessage = "Gmail authentication failed. If using Gmail with Vercel, you need to use an App Password. Visit https://myaccount.google.com/apppasswords to create one.";
      } 
      // Check for connection issues
      else if (error.message.includes("Connection timed out") || 
               error.message.includes("Connection refused")) {
        errorMessage = "SMTP server connection failed. This may be due to firewall restrictions on Vercel or incorrect SMTP settings.";
      }
      // Check for TLS/SSL issues
      else if (error.message.includes("SSL routines") || 
               error.message.includes("certificate")) {
        errorMessage = "SMTP TLS/SSL error. Try setting SMTP_SECURE to 'false' and ensure port 587 is used for Gmail.";
      }
      
      return NextResponse.json(
        {
          success: false,
          error: errorMessage,
          originalError: error.message,
        },
        { status: 500 },
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Unknown error occurred.",
      },
      { status: 500 },
    );
  }
}
