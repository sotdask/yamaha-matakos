# Yamaha Matakos

Επίσημη αντιπροσωπεία Yamaha στη Θεσσαλονίκη.

## Ανάπτυξη (Development)

```bash
npm install
npm run dev
```

## Build για Production

```bash
npm run build
```

## Deployment στο GitHub Pages

### Προαπαιτούμενα

1. Δημιούργησε ένα repository στο GitHub με όνομα `yamaha-matakos`
2. Βεβαιώσου ότι έχεις εγκαταστήσει το Git στον υπολογιστή σου

### Βήματα Deployment

1. **Αρχικοποίηση Git repository** (αν δεν το έχεις κάνει ήδη):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/yamaha-matakos.git
   git push -u origin main
   ```

2. **Deploy στο GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Ενεργοποίηση GitHub Pages**:
   - Πήγαινε στο repository σου στο GitHub
   - Κάνε click στο **Settings**
   - Στο αριστερό μενού, πάτα **Pages**
   - Στο **Source**, διάλεξε **Deploy from a branch**
   - Στο **Branch**, διάλεξε **gh-pages** και **/ (root)**
   - Κάνε click **Save**

4. **Πρόσβαση στο site**:
   Το site θα είναι διαθέσιμο σε: `https://YOUR_USERNAME.github.io/yamaha-matakos/`

### Σημαντικές Σημειώσεις

- Αν αλλάξεις το όνομα του repository, πρέπει να ενημερώσεις:
  - Το `base` path στο `vite.config.js`
  - Το `basename` στο `src/main.jsx`
- Μετά από κάθε αλλαγή, τρέξε `npm run deploy` για να ανανεώσεις το site

## Τεχνολογίες

- React 19
- Vite
- Tailwind CSS
- React Router DOM

