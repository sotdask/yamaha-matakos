# API Setup Guide - Contact Form

Η φόρμα επικοινωνίας χρειάζεται ένα API endpoint για να λειτουργήσει. Έχεις 3 επιλογές:

## Επιλογή 1: Formspree (Προτεινόμενη - Εύκολη)

1. Πήγαινε στο https://formspree.io
2. Δημιούργησε δωρεάν λογαριασμό
3. Δημιούργησε νέο form
4. Αντιγράψε το Form ID (π.χ. `xvgkqyzw`)
5. Δημιούργησε `.env` file στο root directory:
   ```env
   VITE_API_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
6. Αντικατέστησε `YOUR_FORM_ID` με το Form ID σου

**Παράδειγμα:**
```env
VITE_API_ENDPOINT=https://formspree.io/f/xvgkqyzw
```

## Επιλογή 2: EmailJS (Απευθείας Email)

1. Πήγαινε στο https://www.emailjs.com
2. Δημιούργησε δωρεάν λογαριασμό
3. Setup email service
4. Πάρε το Service ID, Template ID, και Public Key
5. Χρειάζεται να αλλάξεις τον κώδικα για EmailJS format

## Επιλογή 3: Custom Backend API

Αν έχεις δικό σου backend server:

1. Δημιούργησε `.env` file:
   ```env
   VITE_API_ENDPOINT=https://your-backend.com/api/contact
   ```

2. Το API πρέπει να:
   - Δέχεται POST requests
   - Accept JSON format:
     ```json
     {
       "firstName": "string",
       "lastName": "string",
       "email": "string",
       "phone": "string",
       "message": "string"
     }
     ```
   - Επιστρέφει 200 status για success

## Quick Start με Formspree

1. Δημιούργησε `.env` file στο root:
   ```env
   VITE_API_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

2. Restart το dev server:
   ```bash
   npm run dev
   ```

3. Η φόρμα θα στέλνει τα emails στο email που δήλωσες στο Formspree!

## Σημείωση

Το `.env` file **ΔΕΝ** πρέπει να commit-τεί στο git (προστίθεται αυτόματα στο .gitignore).

