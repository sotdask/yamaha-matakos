# Yamaha Matakos Backend API

Backend server για τη φόρμα επικοινωνίας.

## Setup

### 1. Εγκατάσταση Dependencies

```bash
cd server
npm install
```

### 2. Email Configuration

Δημιούργησε `.env` file (αντίγραψε το `.env.example`):

```bash
cp .env.example .env
```

#### Για Gmail (Προτεινόμενη για testing):

1. Πήγαινε στο Google Account Settings
2. Enable 2-Factor Authentication
3. Δημιούργησε App Password:
   - Security → 2-Step Verification → App passwords
   - Επίλεξε "Mail" και "Other"
   - Αντιγράψε το password

4. Στο `.env`:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
CONTACT_EMAIL=info@yamaha-matakos.gr
```

#### Για SMTP (Production):

```env
EMAIL_SERVICE=smtp
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=noreply@yamaha-matakos.gr
EMAIL_PASS=your-password
CONTACT_EMAIL=info@yamaha-matakos.gr
```

### 3. Run Server

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

Server θα τρέχει στο: `http://localhost:3000`

## API Endpoints

### POST /contact
Στέλνει email από τη φόρμα επικοινωνίας.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Hello, I'm interested in..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Error message"
}
```

### GET /health
Health check endpoint.

## Frontend Configuration

Στο frontend `.env` file:
```env
VITE_API_ENDPOINT=http://localhost:3000/contact
```

Για production:
```env
VITE_API_ENDPOINT=https://api.yamaha-matakos.gr/contact
```

## Deployment

### Option 1: Vercel / Netlify Functions
Μετατρέψτε το server σε serverless functions.

### Option 2: Railway / Render
Deploy ως Node.js application.

### Option 3: VPS / Dedicated Server
Run με PM2:
```bash
npm install -g pm2
pm2 start server.js --name yamaha-api
pm2 save
pm2 startup
```

## Security Notes

- Μην commit-άρεις το `.env` file
- Χρησιμοποίησε environment variables στο production
- Προσθήκη rate limiting για production
- Προσθήκη validation και sanitization

