import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

// ── HTTP → HTTPS redirect ──────────────────────────────────────────────────────
// Reads the x-forwarded-proto header set by Cloudflare, Railway, Render, etc.
// In development this middleware is skipped to keep localhost working over HTTP.
if (IS_PROD) {
  app.use((req, res, next) => {
    const proto = req.headers['x-forwarded-proto'];
    if (proto && proto !== 'https') {
      return res.redirect(301, `https://${req.hostname}${req.originalUrl}`);
    }
    next();
  });
}

// ── Security headers ───────────────────────────────────────────────────────────
// HSTS: instructs browsers to only connect over HTTPS for the next 365 days.
// Covers the "Domains without HSTS" and "Domains without Always Use HTTPS" items.
app.use((_req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=(), payment=(), usb=()',
  );
  next();
});

// ── security.txt (RFC 9116) ────────────────────────────────────────────────────
// Served at both canonical paths so all scanners and security researchers find it.
const securityTxtPath = path.join(__dirname, '.well-known', 'security.txt');
app.get(['/.well-known/security.txt', '/security.txt'], (_req, res) => {
  res.type('text/plain').sendFile(securityTxtPath);
});

// ── Root-level static files ────────────────────────────────────────────────────
for (const file of ['favicon.svg', 'robots.txt', 'CNAME']) {
  app.get(`/${file}`, (_req, res) => {
    res.sendFile(path.join(__dirname, file));
  });
}

// ── Static assets (JS, CSS) ────────────────────────────────────────────────────
app.use(
  '/assets',
  express.static(path.join(__dirname, 'assets'), {
    maxAge: IS_PROD ? '7d' : 0,
    etag: true,
  }),
);

// ── SPA catch-all → index.html ─────────────────────────────────────────────────
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Pacdora.ca server running on port ${PORT}`);
});
