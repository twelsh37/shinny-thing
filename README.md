# European Cars

Two ways to run the same European Cars experience: a **Next.js app** and a **plain HTML5** version for comparison.

## What’s included

- **Next.js app** – `app/`, `components/`, `data/`, full stack. Run with `npm run dev` (or `npm run build` then `npm start`).
- **HTML5 version** – **index.html** – single file with inline CSS and vanilla JavaScript (no frameworks or modules). Open in a browser or serve statically.
- **assets/** – Brand logos (SVG/PNG) used by the HTML5 detail panel. The Next.js app uses **public/** for logos.

## How to run

### Next.js app

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

### HTML5 index.html

- **Open in browser:** Open `index.html` from the project folder (file://), or  
- **Local server:** `npx serve .` or `python -m http.server 8080` then open the URL shown.

No Node dependencies are required to use the HTML5 version; the Next.js app needs `npm install` and the packages in `package.json`.
