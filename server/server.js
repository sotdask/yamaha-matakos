import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["POST", "GET"],
  credentials: false
}));

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields."
      });
    }

    const htmlContent = `
      <h2>Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>
      <p><strong>Όνομα:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Τηλέφωνο:</strong> ${phone}</p>` : ""}
      <p><strong>Μήνυμα:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    const data = {
      sender: {
        name: process.env.BREVO_SENDER_NAME,
        email: process.env.BREVO_SENDER_EMAIL
      },
      to: [
        { email: process.env.BREVO_TO_EMAIL }
      ],
      subject: `Νέα Επικοινωνία από ${firstName} ${lastName}`,
      htmlContent
    };

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      data,
      {
        headers: {
          "accept": "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json"
        }
      }
    );

    return res.status(200).json({
      success: true,
      message: "Το μήνυμα στάλθηκε επιτυχώς!"
    });

  } catch (err) {
    console.error("Brevo error:", err?.response?.data || err.message);

    return res.status(500).json({
      success: false,
      error: "Σφάλμα κατά την αποστολή του μηνύματος."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
