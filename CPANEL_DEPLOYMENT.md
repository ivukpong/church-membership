# cPanel Deployment Guide (Vite + React SPA)

## 1) Build locally

```bash
npm install
npm run build:cpanel
```

This creates a production-ready `dist` folder and adds `dist/.htaccess` for SPA route rewrites.

## 2) Upload to cPanel

### Option A: File Manager

1. Log in to cPanel.
2. Open **File Manager**.
3. Go to your domain root (usually `public_html/`).
4. Upload all files inside `dist/` (not the `dist` folder itself unless deploying to a subfolder).
5. Extract if uploaded as ZIP.

### Option B: FTP/SFTP

Upload the contents of `dist/` to your target web root.

## 3) Configure environment variables (important)

This app needs:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Since cPanel static hosting does not inject Vite env vars at runtime, they must be present at build time.

Use one of these approaches:

1. Create a local `.env.production` before running `npm run build:cpanel`, then upload the generated `dist`.
2. If your cPanel supports Node.js app builds, set environment variables in cPanel, then build on server.

## 4) Verify deployment

- Open your domain
- Refresh a nested route (SPA routing should still work)
- Test login and Supabase-backed actions

## If deploying to a subfolder

If your app is hosted at `https://example.com/church/` instead of domain root:

1. In `vite.config.js`, set `base: '/church/'`.
2. In `.htaccess`, change `RewriteBase /` to `RewriteBase /church/`.
3. Rebuild and re-upload.
