# Backend Setup Guide

## Quick Start

### 1. Εγκατάσταση Backend

```bash
cd server
npm install
```

### 2. Email Configuration

Δημιούργησε `.env` file στο `server/` directory:

```env
PORT=3000
FRONTEND_URL=http://localhost:5173

# Gmail Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=info@yamaha-matakos.gr
```

**Για Gmail App Password:**
1. Google Account → Security
2. Enable 2-Step Verification
3. App Passwords → Generate
4. Copy το password στο `.env`

### 3. Run Backend

```bash
npm run dev
```

Server θα τρέχει στο: `http://localhost:3000`

### 4. Frontend Configuration

Δημιούργησε `.env` file στο root directory:

```env
VITE_API_ENDPOINT=http://localhost:3000/contact
```

### 5. Test

1. Start backend: `cd server && npm run dev`
2. Start frontend: `npm run dev`
3. Στείλε test message από τη φόρμα

## Production Deployment

### Option 1: Railway (Προτεινόμενη)

1. Πήγαινε στο https://railway.app
2. New Project → Deploy from GitHub
3. Select το repository
4. Add environment variables:
   - `EMAIL_SERVICE=gmail`
   - `EMAIL_USER=...`
   - `EMAIL_PASS=...`
   - `CONTACT_EMAIL=...`
   - `FRONTEND_URL=https://yamaha-matakos.gr`
5. Deploy!

### Option 2: Render

1. Πήγαινε στο https://render.com
2. New → Web Service
3. Connect GitHub repository
4. Settings:
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && npm start`
5. Add environment variables
6. Deploy!

### Option 3: VPS (DigitalOcean, AWS, etc.)

```bash
# SSH to server
ssh user@your-server

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone your-repo
cd yamaha-matakos/server

# Install dependencies
npm install

# Install PM2
sudo npm install -g pm2

# Create .env file
nano .env
# (Add your email configuration)

# Start with PM2
pm2 start server.js --name yamaha-api
pm2 save
pm2 startup
```

## Email Providers

### Gmail (Testing)
- Χρειάζεται App Password
- Limit: 500 emails/day

### SendGrid (Production)
```env
EMAIL_SERVICE=smtp
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

### Mailgun (Production)
```env
EMAIL_SERVICE=smtp
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-mailgun-username
EMAIL_PASS=your-mailgun-password
```

## Troubleshooting

### Email δεν στέλνεται
- Ελέγξτε το App Password (Gmail)
- Ελέγξτε τα SMTP credentials
- Ελέγξτε τα logs: `npm run dev`

### CORS Error
- Βεβαιώσου ότι το `FRONTEND_URL` στο `.env` είναι σωστό
- Για production: `FRONTEND_URL=https://yamaha-matakos.gr`

### Port already in use
- Άλλαξε το PORT στο `.env`
- Ή kill το process: `lsof -ti:3000 | xargs kill`

