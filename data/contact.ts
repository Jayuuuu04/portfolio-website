// Central place for the WhatsApp click-to-chat details.
// Edit the two values below — nothing else needs to change.

// International format, DIGITS ONLY: no "+", spaces, dashes or brackets.
// India = country code 91 followed by the 10-digit number, e.g. 919876543210
export const WHATSAPP_NUMBER = '917777957606'; // +91 77779 57606

// Pre-filled message the visitor sees in their WhatsApp compose box.
export const WHATSAPP_MESSAGE =
  "Hello, Jaydeep Kadiya. I'd like to discuss a project with you.";

// wa.me opens the native app on mobile and WhatsApp Web on desktop.
export const whatsappUrl = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
