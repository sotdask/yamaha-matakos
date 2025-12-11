# Quick Start - BREVO + Render

## 🚀 Fast Setup (5 minutes)

### 1. BREVO Account Setup (2 min)

1. Sign up: https://www.brevo.com
2. Get API Key: Settings → API Keys → Generate
3. Verify Sender: Settings → Senders → Add `noreply@yamaha-matakos.gr`

### 2. Local Testing (1 min)

Create `server/.env`:
```env
BREVO_API_KEY=xkeysib-your-key-here
BREVO_SENDER_EMAIL=noreply@yamaha-matakos.gr
CONTACT_EMAIL=info@yamaha-matakos.gr
```

Run:
```bash
cd server
npm install
npm run dev
```

Test with Postman:
- **POST** `http://localhost:3000/contact`
- Body: JSON with firstName, lastName, email, message

### 3. Deploy to Render (2 min)

1. Push to GitHub
2. Render Dashboard → New Web Service
3. Connect repo
4. Set Environment Variables:
   - `BREVO_API_KEY=your-key`
   - `BREVO_SENDER_EMAIL=noreply@yamaha-matakos.gr`
   - `CONTACT_EMAIL=info@yamaha-matakos.gr`
   - `FRONTEND_URL=https://yamaha-matakos.gr`
5. Deploy!

### 4. Update Frontend

In frontend `.env`:
```env
VITE_API_ENDPOINT=https://your-render-url.onrender.com/contact
```

## ✅ Done!

Your contact form is now live with BREVO email sending!

