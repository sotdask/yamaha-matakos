import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as brevo from '@getbrevo/brevo';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Initialize BREVO API client
let apiInstance = null;

if (process.env.BREVO_API_KEY) {
  apiInstance = new brevo.TransactionalEmailsApi();
  apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);
  console.log('✅ BREVO API initialized');
} else {
  console.warn('⚠️  BREVO_API_KEY not set. Email sending will not work.');
}

// Email sending function using BREVO
const sendEmailWithBrevo = async (emailData) => {
  if (!apiInstance) {
    throw new Error('BREVO API key not configured');
  }

  const sendSmtpEmail = new brevo.SendSmtpEmail();
  
  sendSmtpEmail.subject = emailData.subject;
  sendSmtpEmail.htmlContent = emailData.html;
  sendSmtpEmail.textContent = emailData.text;
  sendSmtpEmail.sender = {
    name: 'Yamaha Matakos',
    email: process.env.BREVO_SENDER_EMAIL || process.env.CONTACT_EMAIL || 'noreply@yamaha-matakos.gr'
  };
  sendSmtpEmail.to = [{
    email: process.env.CONTACT_EMAIL || process.env.BREVO_SENDER_EMAIL
  }];
  
  // Add reply-to if provided
  if (emailData.replyTo) {
    sendSmtpEmail.replyTo = {
      email: emailData.replyTo
    };
  }

  try {
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('✅ Email sent via BREVO:', result.messageId || 'success');
    return result;
  } catch (error) {
    console.error('❌ BREVO API Error:', error);
    if (error.response) {
      console.error('BREVO Error Response:', error.response.body);
    }
    throw error;
  }
};

// Contact form endpoint
app.post('/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address'
      });
    }

    // Email content
    const emailSubject = `Νέο Μήνυμα από ${firstName} ${lastName} - Yamaha Matakos`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #720303;">Νέο Μήνυμα Επικοινωνίας</h2>
        <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Όνομα:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Τηλέφωνο:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #720303; margin: 20px 0;">
          <p><strong>Μήνυμα:</strong></p>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          Αυτό το email στάλθηκε από τη φόρμα επικοινωνίας του 
          <a href="https://yamaha-matakos.gr" style="color: #720303;">yamaha-matakos.gr</a>
        </p>
      </div>
    `;
    const emailText = `
Νέο Μήνυμα Επικοινωνίας

Όνομα: ${firstName} ${lastName}
Email: ${email}
${phone ? `Τηλέφωνο: ${phone}` : ''}

Μήνυμα:
${message}

---
Αυτό το email στάλθηκε από τη φόρμα επικοινωνίας του yamaha-matakos.gr
    `;

    // Send email using BREVO
    await sendEmailWithBrevo({
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
      replyTo: email
    });

    // Optional: Save to database or log
    console.log(`Contact form submitted: ${firstName} ${lastName} (${email})`);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/contact`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});

