# Environment Variables Guide

## Frontend `.env` Αρχείο

### Για Production (IP: 207.154.226.88)

**Το `.env` μπορεί να παραμείνει άδειο ή να μην υπάρχει καθόλου!**

Ο λόγος: Το Form component έχει default URL που δείχνει στο Render backend:

```javascript
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || "https://yamaha-matakos-backend.onrender.com/api/contact";
```

Αν δεν υπάρχει `VITE_API_ENDPOINT`, θα χρησιμοποιήσει αυτόματα το production URL.

**Σημείωση:** Το frontend τρέχει στο IP `207.154.226.88` και το backend στο Render.com. Το CORS στο backend έχει ήδη ρυθμιστεί να επιτρέπει το IP.

### Για Local Development

Αν θέλετε να test-άρετε τοπικά με τον local backend server, δημιουργήστε `.env.local`:

```env
VITE_API_ENDPOINT=http://localhost:3000/api/contact
```

**Σημείωση:** Το `.env.local` είναι ήδη στο `.gitignore`, οπότε δεν θα commit-άρει.

### Πότε χρειάζεται `.env`:

✅ **ΔΕΝ χρειάζεται** για production (χρησιμοποιεί default URL)  
✅ **Χρειάζεται** μόνο αν θέλετε custom backend URL  
✅ **Χρειάζεται** για local development testing

---

## Backend `server/.env` Αρχείο

### Για Production (Render.com)

**ΔΕΝ χρειάζεται `.env` αρχείο!**

Το Render.com χρησιμοποιεί environment variables από το dashboard. Προσθέστε τα εκεί:
- `BRAVO_API_KEY`
- `BRAVO_API_URL`
- `CONTACT_EMAIL`
- `FROM_EMAIL`
- `FRONTEND_URL`

### Για Local Development

Δημιουργήστε `server/.env` από το `server/.env.example`:

```bash
cd server
cp .env.example .env
```

Στη συνέχεια επεξεργαστείτε το `.env` με τα σωστά values.

---

## Σύνοψη

| Περιβάλλον | Frontend `.env` | Backend `server/.env` |
|------------|-----------------|----------------------|
| **Production** | ❌ Άδειο ή δεν υπάρχει | ❌ Χρησιμοποιεί Render env vars |
| **Local Dev** | ✅ `.env.local` με `VITE_API_ENDPOINT` | ✅ `.env` με όλα τα values |

