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

The contact form uses `@emailjs/browser`, which runs in the browser, so the three
credentials must be exposed with the `NEXT_PUBLIC_` prefix. EmailJS is designed for
this — its "Public Key" is a publishable key, not a secret.

1. Create an account at [emailjs.com](https://www.emailjs.com)
2. **Email Services** → add a service (e.g. Gmail) → copy the **Service ID**
3. **Email Templates** → create a template → copy the **Template ID**
   The template must use these variables, which match `components/contact/Contact.tsx`:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   Set the template's "To email" to your own address and "Reply To" to `{{from_email}}`.
4. **Account → General** → copy the **Public Key**
5. **Account → Security** → enable the domain allowlist and add your Vercel domain
   (and `localhost` for development). This is what stops other sites using your key.

### Local development

```bash
cp .env.example .env.local
```

Then fill in `.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Restart `npm run dev` after editing — Next.js only inlines `NEXT_PUBLIC_*` values at
build time. `.env.local` is gitignored; `.env.example` is committed as the template.

## Vercel Deployment

### Deploy from GitHub

1. Push the repository to GitHub
2. Import the repo in Vercel — it auto-detects the **Next.js** preset
3. Add the environment variables below **before** the first build
4. Deploy

### Recommended Vercel settings

Leave everything on the defaults for the Next.js preset:

- Framework Preset: `Next.js`
- Build Command: `npm run build` (default)
- Output Directory: leave empty (default)
- Install Command: `npm install` (default)

Do not add a `vercel.json` with a `@vercel/static-build` builder — that disables the
Next.js preset and breaks the App Router build.

### Environment variables

In Vercel → Project → **Settings → Environment Variables**, add all three for the
**Production**, **Preview**, and **Development** environments:

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | your EmailJS Service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | your EmailJS Template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | your EmailJS Public Key |

Or via the CLI:

```bash
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID production
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production
```

Because these are `NEXT_PUBLIC_*`, they are baked into the client bundle at build
time. Changing them in the dashboard requires a **redeploy** to take effect.


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
