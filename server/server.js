import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// Allow both domain and IP address for frontend
const allowedOrigins = process.env.FRONTEND_URL 
  ? [process.env.FRONTEND_URL, 'http://207.154.226.88', 'https://207.154.226.88']
  : ['http://207.154.226.88', 'https://207.154.226.88', '*'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, true); // Allow all for now, can be restricted later
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: firstName, lastName, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // BRAVO API Configuration
    const BRAVO_API_URL = process.env.BRAVO_API_URL || 'https://api.bravo.gr/v1/email/send';
    const BRAVO_API_KEY = process.env.BRAVO_API_KEY;
    
    if (!BRAVO_API_KEY) {
      console.error('BRAVO_API_KEY is not configured');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: BRAVO API key is missing'
      });
    }

    // Prepare email data for BRAVO API
    const emailData = {
      to: process.env.CONTACT_EMAIL || 'info@yamaha-matakos.gr',
      from: process.env.FROM_EMAIL || 'noreply@yamaha-matakos.gr',
      subject: `Νέα Επικοινωνία από ${firstName} ${lastName} - Yamaha Matakos`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #720303; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f7f7f7; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #720303; }
            .value { margin-top: 5px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Νέα Επικοινωνία - Yamaha Matakos</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Όνομα:</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Τηλέφωνο:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Μήνυμα:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Αυτό το email στάλθηκε από τη φόρμα επικοινωνίας του yamaha-matakos.gr</p>
              <p>Ημερομηνία: ${new Date().toLocaleString('el-GR', { timeZone: 'Europe/Athens' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Νέα Επικοινωνία - Yamaha Matakos

Όνομα: ${firstName} ${lastName}
Email: ${email}
${phone ? `Τηλέφωνο: ${phone}` : ''}

Μήνυμα:
${message}

---
Αυτό το email στάλθηκε από τη φόρμα επικοινωνίας του yamaha-matakos.gr
Ημερομηνία: ${new Date().toLocaleString('el-GR', { timeZone: 'Europe/Athens' })}
      `
    };

    // Send email via BRAVO API
    const response = await axios.post(BRAVO_API_URL, emailData, {
      headers: {
        'Authorization': `Bearer ${BRAVO_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200 || response.status === 201) {
      console.log('Email sent successfully via BRAVO API');
      return res.status(200).json({
        success: true,
        message: 'Το μήνυμά σας στάλθηκε επιτυχώς!'
      });
    } else {
      throw new Error('Unexpected response from BRAVO API');
    }

  } catch (error) {
    console.error('Error sending email:', error.response?.data || error.message);
    
    // Return user-friendly error message
    return res.status(500).json({
      success: false,
      error: 'Σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά αργότερα.'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📧 BRAVO API configured: ${process.env.BRAVO_API_KEY ? 'Yes' : 'No'}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'Not set'}`);
});

