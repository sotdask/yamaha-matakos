# Yamaha Matakos Backend Server

Backend server για την αποστολή φορμών επικοινωνίας μέσω BRAVO API.

## Εγκατάσταση

```bash
cd server
npm install
```

## Ρύθμιση Environment Variables

Δημιουργήστε ένα αρχείο `.env` στον φάκελο `server/` με τα εξής:

```env
PORT=3000
FRONTEND_URL=https://yamaha-matakos.gr
BRAVO_API_URL=https://api.bravo.gr/v1/email/send
BRAVO_API_KEY=your_bravo_api_key_here
CONTACT_EMAIL=info@yamaha-matakos.gr
FROM_EMAIL=noreply@yamaha-matakos.gr
```

## Local Development

```bash
npm run dev
```

Ο server θα τρέξει στο `http://localhost:3000`

## Production Deployment στο Render.com

### Βήματα:

1. **Push τον κώδικα στο GitHub**

2. **Σύνδεση με Render.com:**
   - Πηγαίνετε στο [Render.com](https://render.com)
   - Κάντε login και συνδεθείτε με το GitHub account σας

3. **Δημιουργία Νέας Web Service:**
   - Κάντε κλικ στο "New" → "Web Service"
   - Επιλέξτε το repository σας

4. **Ρυθμίσεις:**
   - **Name:** `yamaha-matakos-backend`
   - **Environment:** `Node`
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
   - **Plan:** Επιλέξτε το δωρεάν plan ή paid plan

5. **Environment Variables:**
   Προσθέστε τα εξής environment variables στο Render dashboard:
   - `NODE_ENV` = `production`
   - `PORT` = `3000` (αυτό θα οριστεί αυτόματα από το Render)
   - `FRONTEND_URL` = `https://yamaha-matakos.gr`
   - `BRAVO_API_URL` = `https://api.bravo.gr/v1/email/send`
   - `BRAVO_API_KEY` = `your_bravo_api_key_here` (από το BRAVO API)
   - `CONTACT_EMAIL` = `info@yamaha-matakos.gr`
   - `FROM_EMAIL` = `noreply@yamaha-matakos.gr`

6. **Deploy:**
   - Κάντε κλικ στο "Create Web Service"
   - Το Render θα κάνει build και deploy τον server

## API Endpoints

### POST /api/contact

Αποστολή φόρμας επικοινωνίας.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+302310522774",
  "message": "Hello, I'm interested in..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Το μήνυμά σας στάλθηκε επιτυχώς!"
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

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## BRAVO API Configuration

Για να λάβετε το BRAVO API key:
1. Επισκεφτείτε το [BRAVO API](https://bravo.gr/api)
2. Δημιουργήστε λογαριασμό
3. Λάβετε το API key από το dashboard
4. Προσθέστε το στο environment variable `BRAVO_API_KEY`

## Troubleshooting

- **CORS Errors:** Βεβαιωθείτε ότι το `FRONTEND_URL` είναι σωστά ρυθμισμένο
- **Email Not Sending:** Ελέγξτε ότι το `BRAVO_API_KEY` είναι σωστό και valid
- **Server Not Starting:** Ελέγξτε τα logs στο Render dashboard

