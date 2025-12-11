# Postman Testing Guide - BREVO Backend

## 1. Setup BREVO API Key

1. Create account: https://www.brevo.com
2. Get API Key: Settings → API Keys → Generate
3. Create `server/.env`:
```env
BREVO_API_KEY=xkeysib-your-api-key-here
BREVO_SENDER_EMAIL=noreply@yamaha-matakos.gr
CONTACT_EMAIL=info@yamaha-matakos.gr
```

## 2. Start Backend Server

```bash
cd server
npm install
npm run dev
```

Server θα τρέχει στο: `http://localhost:3000`

## 2. Postman Setup

### Test 1: Health Check

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/health`

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-XX..."
}
```

### Test 2: Contact Form (Valid Request)

**Request:**
- Method: `POST`
- URL: `http://localhost:3000/contact`
- Headers:
  ```
  Content-Type: application/json
  ```
- Body (raw JSON):
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+302310522774",
  "message": "This is a test message from Postman"
}
```

**Expected Response (Success):**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

### Test 3: Contact Form (Missing Fields)

**Request:**
- Method: `POST`
- URL: `http://localhost:3000/contact`
- Body:
```json
{
  "firstName": "John",
  "email": "john@example.com"
}
```

**Expected Response (Error):**
```json
{
  "success": false,
  "error": "Missing required fields"
}
```

### Test 4: Contact Form (Invalid Email)

**Request:**
- Method: `POST`
- URL: `http://localhost:3000/contact`
- Body:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "invalid-email",
  "message": "Test message"
}
```

**Expected Response (Error):**
```json
{
  "success": false,
  "error": "Invalid email address"
}
```

## 3. Postman Collection

Μπορείς να δημιουργήσεις Postman Collection με αυτά τα requests:

1. New Collection → "Yamaha Matakos API"
2. Add requests:
   - GET Health Check
   - POST Contact (Valid)
   - POST Contact (Missing Fields)
   - POST Contact (Invalid Email)

## 4. Environment Variables (Optional)

Στο Postman, δημιούργησε Environment:
- `base_url`: `http://localhost:3000`
- Χρησιμοποίησε `{{base_url}}/contact` στα requests

## 5. Testing Email Sending with BREVO

Για να δοκιμάσεις το email sending:

1. **Get BREVO API Key:**
   - Sign up: https://www.brevo.com
   - Settings → API Keys → Generate
   - Copy the key (starts with `xkeysib-...`)

2. **Verify Sender Email:**
   - Settings → Senders → Add sender
   - Verify via email confirmation

3. **Update `server/.env`:**
   ```env
   BREVO_API_KEY=xkeysib-your-key-here
   BREVO_SENDER_EMAIL=noreply@yamaha-matakos.gr
   CONTACT_EMAIL=info@yamaha-matakos.gr
   ```

4. **Restart server:**
   ```bash
   npm run dev
   ```

5. **Test with Postman:**
   - Send POST request to `/contact`
   - Check `CONTACT_EMAIL` inbox

## Troubleshooting

### Server δεν ξεκινάει
- Ελέγξτε αν το port 3000 είναι free
- Άλλαξε PORT στο `.env`

### "BREVO API key not configured"
- Βεβαιώσου ότι το `BREVO_API_KEY` είναι στο `.env`
- Restart το server μετά την προσθήκη

### CORS Error
- Βεβαιώσου ότι το `FRONTEND_URL` στο `.env` είναι σωστό

### Email Error
- Ελέγξτε ότι το BREVO API key είναι valid
- Ελέγξτε ότι το sender email είναι verified στο BREVO
- Ελέγξτε τα server logs για error details
- Check BREVO dashboard για email statistics

