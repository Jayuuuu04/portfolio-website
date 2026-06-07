# Premium Portfolio Website

A modern one-page developer portfolio built with Next.js, TypeScript, Tailwind CSS, Shadcn-inspired UI, Framer Motion, Lucide Icons, React Hook Form, EmailJS / Resend support, and Vercel-ready deployment.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- React Hook Form
- @emailjs/browser
- Resend
- Next Themes
- Vercel deployment ready

## Features

- Responsive one-page layout with sections for About, Projects, Experience, Skills, Blogs, and Contact
- Dark/Light theme toggle
- Smooth animations and premium UI styling
- SEO-friendly metadata and clean route structure
- Contact form integration with EmailJS
- Production-ready build configuration

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm run start
```

## EmailJS / Contact Form Setup

The contact form uses `@emailjs/browser` and requires your EmailJS service credentials.

1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. Update `components/contact/Contact.tsx` with your credentials:

- `YOUR_SERVICE_ID`
- `YOUR_TEMPLATE_ID`
- `YOUR_USER_ID`

You can also replace the EmailJS integration with Resend or a custom API route if needed.

## Vercel Deployment

This project is ready for Vercel deployment.

### Deploy from GitHub

1. Push the repository to GitHub
2. Import the repo in Vercel
3. Use the default Next.js settings
4. Set environment variables if you use EmailJS or Resend

### Recommended Vercel settings

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: `.`

### Environment variables

If you use EmailJS, add the following in Vercel dashboard:

- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_USER_ID`

If you use Resend or another email provider, add the provider-specific secrets.

## Files to Review

- `app/page.tsx` — homepage layout
- `components/navbar/Navbar.tsx` — navigation and theme toggle
- `components/hero/Hero.tsx` — hero section
- `components/contact/Contact.tsx` — contact form logic
- `styles/globals.css` — Tailwind v4 global styles
- `tailwind.config.ts` — Tailwind content and theme configuration

## Notes

- The project is built and verified with `npm run build`
- If you want, you can also add analytics, more blog content, or a CMS integration
