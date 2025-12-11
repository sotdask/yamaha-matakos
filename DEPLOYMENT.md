# Deployment Guide - Yamaha Matakos

## Backend Deployment στο Render.com

### Προαπαιτούμενα

1. GitHub repository με τον κώδικα
2. BRAVO API account και API key
3. Render.com account

### Βήματα Deployment

#### 1. Προετοιμασία Repository

Βεβαιωθείτε ότι όλος ο κώδικας είναι committed και pushed στο GitHub:

```bash
git add .
git commit -m "Add backend server with BRAVO API integration"
git push origin main
```

#### 2. Δημιουργία Web Service στο Render.com

1. **Login στο Render.com:**
   - Πηγαίνετε στο https://render.com
   - Κάντε login ή δημιουργήστε account

2. **Σύνδεση με GitHub:**
   - Στο dashboard, κάντε κλικ στο "New" → "Web Service"
   - Επιλέξτε "Connect GitHub" αν δεν έχετε ήδη συνδεθεί
   - Επιλέξτε το repository `yamaha-matakos`

3. **Ρυθμίσεις Service:**
   - **Name:** `yamaha-matakos-backend`
   - **Environment:** `Node`
   - **Region:** Επιλέξτε την πλησιέστερη περιοχή (π.χ. Frankfurt)
   - **Branch:** `main` (ή το branch που θέλετε)
   - **Root Directory:** (άδειο - το Render θα βρει τον server folder)
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
   - **Plan:** Επιλέξτε το δωρεάν plan ή paid plan

4. **Environment Variables:**
   Προσθέστε τα εξής στο "Environment" section:
   
   ```
   NODE_ENV=production
   PORT=3000
   FRONTEND_URL=https://yamaha-matakos.gr
   BRAVO_API_URL=https://api.bravo.gr/v1/email/send
   BRAVO_API_KEY=your_bravo_api_key_here
   CONTACT_EMAIL=info@yamaha-matakos.gr
   FROM_EMAIL=noreply@yamaha-matakos.gr
   ```

   **Σημαντικό:** Αντικαταστήστε το `your_bravo_api_key_here` με το πραγματικό BRAVO API key σας.

5. **Deploy:**
   - Κάντε κλικ στο "Create Web Service"
   - Το Render θα ξεκινήσει το build process
   - Περιμένετε 2-3 λεπτά για το deployment

#### 3. Λήψη BRAVO API Key

1. Επισκεφτείτε το https://bravo.gr/api (ή το επίσημο BRAVO API portal)
2. Δημιουργήστε account ή login
3. Μεταβείτε στο API Keys section
4. Δημιουργήστε νέο API key
5. Αντιγράψτε το key και προσθέστε το στο Render environment variables

#### 4. Ενημέρωση Frontend

Μετά το deployment, το Render θα σας δώσει ένα URL όπως:
`https://yamaha-matakos-backend.onrender.com`

Ενημερώστε το frontend environment variable:

**Για production:**
- Το frontend ήδη χρησιμοποιεί το default URL: `https://yamaha-matakos-backend.onrender.com`
- Αν θέλετε να αλλάξετε το URL, προσθέστε στο `.env`:
  ```
  VITE_API_ENDPOINT=https://your-custom-backend-url.onrender.com/api/contact
  ```

**Για local development:**
Δημιουργήστε `.env.local`:
```
VITE_API_ENDPOINT=http://localhost:3000/api/contact
```

#### 5. Testing

1. **Test Health Endpoint:**
   ```
   GET https://yamaha-matakos-backend.onrender.com/health
   ```
   Θα πρέπει να επιστρέψει: `{"status":"ok","message":"Server is running"}`

2. **Test Contact Form:**
   - Ανοίξτε το site
   - Συμπληρώστε τη φόρμα επικοινωνίας
   - Στείλτε το μήνυμα
   - Ελέγξτε ότι λάβετε success message

3. **Check Logs:**
   - Στο Render dashboard, πηγαίνετε στο "Logs" tab
   - Ελέγξτε για errors ή warnings

### Troubleshooting

#### Server δεν ξεκινάει
- Ελέγξτε τα logs στο Render dashboard
- Βεβαιωθείτε ότι το `package.json` στο server folder είναι σωστό
- Ελέγξτε ότι το `BRAVO_API_KEY` είναι σωστό

#### CORS Errors
- Ελέγξτε ότι το `FRONTEND_URL` είναι σωστό
- Βεβαιωθείτε ότι δεν υπάρχουν trailing slashes

#### Emails δεν στέλνονται
- Ελέγξτε το `BRAVO_API_KEY` στο Render
- Ελέγξτε τα logs για error messages
- Βεβαιωθείτε ότι το BRAVO API account είναι active

#### Build Fails
- Ελέγξτε ότι όλα τα dependencies είναι στο `server/package.json`
- Βεβαιωθείτε ότι το build command είναι σωστό: `cd server && npm install`

### Auto-Deploy

Το Render θα κάνει auto-deploy κάθε φορά που push-άρετε στο GitHub repository. Μπορείτε να απενεργοποιήσετε αυτό στο "Settings" → "Auto-Deploy".

### Custom Domain (Optional)

Μπορείτε να προσθέσετε custom domain στο Render:
1. Πηγαίνετε στο "Settings" → "Custom Domains"
2. Προσθέστε το domain σας
3. Ακολουθήστε τις οδηγίες για DNS configuration

### Monitoring

Το Render παρέχει:
- **Logs:** Real-time logs από το server
- **Metrics:** CPU, Memory usage
- **Events:** Deploy history

### Cost

- **Free Plan:** 
  - 750 hours/month
  - Spins down after 15 minutes inactivity
  - Perfect για development/testing
  
- **Paid Plans:**
  - Always-on service
  - Better performance
  - Recommended για production

## Local Development

Για να τρέξετε τον server τοπικά:

```bash
cd server
npm install
cp .env.example .env
# Επεξεργαστείτε το .env με τα σωστά values
npm run dev
```

## Support

Για προβλήματα:
- Render Support: https://render.com/docs
- BRAVO API Support: Επικοινωνήστε με το BRAVO API support

