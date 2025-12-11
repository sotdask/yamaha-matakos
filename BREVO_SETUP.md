# BREVO API Setup Guide

## 1. Create BREVO Account

1. Go to https://www.brevo.com
2. Sign up for free account (300 emails/day free tier)
3. Verify your email address

## 2. Get API Key

1. Login to BREVO Dashboard: https://app.brevo.com
2. Go to: **Settings** → **API Keys**
3. Click **"Generate a new API key"**
4. Name it: "Yamaha Matakos API"
5. **Copy the API key** (starts with `xkeysib-...`)
   - ⚠️ Save it immediately - you won't see it again!

## 3. Verify Sender Email

1. Go to: **Settings** → **Senders**
2. Click **"Add a sender"**
3. Enter:
   - **Email:** `noreply@yamaha-matakos.gr` (or your verified email)
   - **Name:** `Yamaha Matakos`
4. Click **"Save"**
5. Check your email and click verification link

## 4. Local Testing

### Create `.env` file in `server/` directory:

```env
PORT=3000
FRONTEND_URL=http://localhost:5173
BREVO_API_KEY=xkeysib-your-api-key-here
BREVO_SENDER_EMAIL=noreply@yamaha-matakos.gr
CONTACT_EMAIL=info@yamaha-matakos.gr
```

### Start Server:

```bash
cd server
npm run dev
```

### Test with Postman:

**POST** `http://localhost:3000/contact`
```json
{
  "firstName": "Test",
  "lastName": "User",
  "email": "test@example.com",
  "phone": "+302310522774",
  "message": "Test message"
}
```

## 5. Render Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add BREVO backend"
git push
```

### Step 2: Deploy on Render

1. Go to https://dashboard.render.com
2. **New +** → **Web Service**
3. Connect GitHub repository
4. Configure:
   - **Name:** `yamaha-matakos-api`
   - **Environment:** `Node`
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
   - **Root Directory:** (leave empty)

### Step 3: Environment Variables

Add these in Render dashboard:

```
NODE_ENV=production
PORT=10000
FRONTEND_URL=https://yamaha-matakos.gr
BREVO_API_KEY=xkeysib-your-api-key-here
BREVO_SENDER_EMAIL=noreply@yamaha-matakos.gr
CONTACT_EMAIL=info@yamaha-matakos.gr
```

### Step 4: Deploy

Click **"Create Web Service"** and wait for deployment.

### Step 5: Get API URL

After deployment, you'll get a URL like:
```
https://yamaha-matakos-api.onrender.com
```

Your endpoint: `https://yamaha-matakos-api.onrender.com/contact`

### Step 6: Update Frontend

In frontend `.env` or Render environment variables:
```env
VITE_API_ENDPOINT=https://yamaha-matakos-api.onrender.com/contact
```

## Testing on Render

### Health Check:
```bash
curl https://yamaha-matakos-api.onrender.com/health
```

### Test Contact Form (Postman):
- **Method:** `POST`
- **URL:** `https://yamaha-matakos-api.onrender.com/contact`
- **Headers:** `Content-Type: application/json`
- **Body:**
```json
{
  "firstName": "Test",
  "lastName": "User",
  "email": "test@example.com",
  "phone": "+302310522774",
  "message": "Test from Render"
}
```

## BREVO Free Tier Limits

- ✅ 300 emails/day
- ✅ Unlimited contacts
- ✅ Email support
- ✅ Transactional emails
- ✅ Email templates

## Troubleshooting

### "BREVO API key not configured"
- Check that `BREVO_API_KEY` is set in environment variables
- Restart server after adding environment variable

### "Invalid sender email"
- Verify sender email in BREVO dashboard
- Make sure email is verified (check email inbox)

### "Daily limit exceeded"
- Free tier: 300 emails/day
- Check usage in BREVO dashboard
- Wait for next day or upgrade plan

### CORS Errors
- Update `FRONTEND_URL` in Render environment variables
- Make sure it matches your frontend domain exactly

### Server Crashes on Render
- Check Render logs
- Verify all environment variables are set
- Check BREVO API key is valid

## Security Notes

- ⚠️ Never commit `.env` file to git
- ⚠️ Keep BREVO API key secret
- ⚠️ Use environment variables in production
- ⚠️ Rotate API keys periodically

