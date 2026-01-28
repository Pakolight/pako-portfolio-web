# PaKo Lending Web

Marketing website and case studies for PaKo (full‑stack developer). Built with React Router, Tailwind CSS, and i18next, with a contact form that sends email via Microsoft Graph.

## Features

- Server‑side rendering with React Router
- Multi‑language UI (i18next)
- Case‑study pages and marketing content
- Contact form with email notifications (Microsoft Graph)
- Tailwind CSS styling

## Tech Stack

- React 19 + React Router 7
- Vite
- Tailwind CSS 4
- i18next / react-i18next
- Microsoft Graph SDK + Azure Identity

## Getting Started

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server runs on http://localhost:5173 by default.

### Typecheck

```bash
npm run typecheck
```

### Production Build

```bash
npm run build
npm run start
```

## Environment Variables

Copy `.env.example` to `.env` in the project root:

```bash
cp .env.example .env
```

Then fill in:

```bash
MS_TENANT_ID=your-azure-tenant-id
MS_CLIENT_ID=your-azure-client-id
MS_CLIENT_SECRET=your-azure-client-secret
MAIL_FROM=you@yourdomain.com
```

These are required for Microsoft Graph email sending in the contact form.

## Project Structure

```
app/
  components/         Shared UI components
  i18n/               i18n setup and locale files
  routes/             Route modules
  services/           Email + Microsoft Graph integration
public/               Static assets
```

## Docker

```bash
docker build -t pako-lending-web .
docker run -p 3000:3000 pako-lending-web
```

## Notes

- Email sending uses Microsoft Graph with a configured Azure app and mailbox.
- Translations live in `app/i18n/locales`.
