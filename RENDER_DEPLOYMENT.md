# Render Deployment Guide - BREVO API

## Prerequisites

1. BREVO Account (https://www.brevo.com)
   - Free tier: 300 emails/day
   - Sign up and verify your email

2. BREVO API Key
   - Go to: https://app.brevo.com/settings/keys/api
   - Create new API key
   - Copy the key (you'll need it for Render)

3. Verify Sender Email in BREVO
   - Go to: https://app.brevo.com/settings/senders
   - Add and verify your sender email (e.g., noreply@yamaha-matakos.gr)

## Deployment Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Add BREVO backend"
git push origin main
```

### 2. Deploy on Render

1. **Go to Render Dashboard**
   - https://dashboard.render.com
   - Sign up/Login

2. **New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Service**
   - **Name:** `yamaha-matakos-api`
   - **Environment:** `Node`
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
   - **Root Directory:** (leave empty)

4. **Environment Variables**
   Add these in Render dashboard:
   ```
   NODE_ENV=production
   PORT=10000
   FRONTEND_URL=https://yamaha-matakos.gr
   BREVO_API_KEY=your-brevo-api-key-here
   BREVO_SENDER_EMAIL=noreply@yamaha-matakos.gr
   CONTACT_EMAIL=info@yamaha-matakos.gr
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)

### 3. Get Your API URL

After deployment, Render will give you a URL like:
```
https://yamaha-matakos-api.onrender.com
```

Your API endpoint will be:
```
https://yamaha-matakos-api.onrender.com/contact
```

### 4. Update Frontend

In your frontend `.env` (or Render environment variables if frontend is also on Render):
```env
VITE_API_ENDPOINT=https://yamaha-matakos-api.onrender.com/contact
```

## Testing

### 1. Health Check
```bash
curl https://yamaha-matakos-api.onrender.com/health
```

### 2. Test Contact Form (Postman)
- Method: `POST`
- URL: `https://yamaha-matakos-api.onrender.com/contact`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "firstName": "Test",
  "lastName": "User",
  "email": "test@example.com",
  "phone": "+302310522774",
  "message": "Test message from Postman"
}
```

## BREVO Setup Details

### Getting API Key

1. Login to BREVO: https://app.brevo.com
2. Go to: Settings → API Keys
3. Click "Generate a new API key"
4. Name it: "Yamaha Matakos API"
5. Copy the key (starts with `xkeysib-...`)

### Verify Sender Email

1. Go to: Settings → Senders
2. Click "Add a sender"
3. Enter email: `noreply@yamaha-matakos.gr`
4. Enter name: `Yamaha Matakos`
5. Verify via email confirmation

### Free Tier Limits

- 300 emails/day
- Unlimited contacts
- Email support

## Troubleshooting

### Deployment Fails
- Check build logs in Render
- Ensure `server/package.json` is correct
- Check that all dependencies are listed

### API Returns 500 Error
- Check Render logs
- Verify BREVO_API_KEY is set correctly
- Verify sender email is verified in BREVO

### Emails Not Sending
- Check BREVO dashboard for email logs
- Verify sender email is verified
- Check daily email limit (300/day free tier)

### CORS Errors
- Update `FRONTEND_URL` in Render environment variables
- Make sure it matches your frontend domain

## Custom Domain (Optional)

1. In Render dashboard → Settings
2. Add Custom Domain
3. Point DNS to Render
4. Update `FRONTEND_URL` if needed

## Monitoring

- Render provides logs and metrics
- BREVO dashboard shows email statistics
- Check both for debugging

