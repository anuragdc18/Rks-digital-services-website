import { z } from "zod";
import { BRAND_LOGO } from "./brand-logo";

/** Pure schema + defaults for site settings. No server imports — safe to use in the web bundle. */

const hex = z.string().regex(/^#[0-9a-fA-F]{6}$/, "Use a hex colour like #FF7A1A");
const txt = (max: number) => z.string().trim().max(max);

export const botButtonSchema = z.object({
  label: txt(60).min(1, "Button text cannot be empty"),
  message: txt(300),
});

export const botFaqSchema = z.object({
  q: txt(200),
  keywords: txt(400),
  a: txt(1500).min(1, "Answer cannot be empty"),
});
export const botPriceSchema = z.object({ service: txt(120), price: txt(80) });

export const botSchema = z.object({
  enabled: z.boolean(),
  name: txt(60),
  status: txt(60),
  hint: txt(120),
  welcome: txt(600),
  returning: txt(300),
  collectDetails: z.boolean(),
  askName: txt(300),
  askPhone: txt(300),
  invalidPhone: txt(300),
  collectEmail: z.boolean(),
  askEmail: txt(300),
  invalidEmail: txt(300),
  askNeed: txt(300),
  savedMessage: txt(300),
  buttons: z.array(botButtonSchema).max(10),
  placeholder: txt(80),
  callLabel: txt(30),
  whatsappLabel: txt(30),
  whatsappMessage: txt(300),
  errorMessage: txt(300),
  /** Reply when the bot can't understand a question. */
  fallback: txt(500),
  /** Optional line added to price answers, e.g. a running offer. */
  offer: txt(300),
  /** Owner-written answers. Checked before the built-in knowledge. */
  faqs: z.array(botFaqSchema).max(150),
  /** Optional "starting from" prices per service. Empty = bot offers a quote on a call. */
  prices: z.array(botPriceSchema).max(200),
});
export type BotSettings = z.infer<typeof botSchema>;
export type BotButton = z.infer<typeof botButtonSchema>;
export type BotFaq = z.infer<typeof botFaqSchema>;
export type BotPrice = z.infer<typeof botPriceSchema>;

export const siteSchema = z.object({
  siteName: txt(40).min(1, "Business name is required"),
  tagline: txt(160),
  logo: z
    .string()
    .max(700_000, "Logo is too large (max ~500 KB)")
    .refine((v) => v === "" || v.startsWith("data:image/"), "Logo must be an image"),
  logoHeight: z.number().int().min(20).max(80),
  colors: z.object({ navy: hex, royal: hex, brand: hex }),
  // primary contact (used across the website)
  phone: txt(30).min(1, "Main phone number is required"),
  whatsapp: z.string().trim().regex(/^\d{10,13}$/, "WhatsApp number: digits only with country code, e.g. 919876543210"),
  email: z.string().trim().email("Enter a valid main email ID"),
  hours: txt(60),
  city: txt(80),
  // extra contact details
  phones: z.array(z.object({ label: txt(40), number: txt(30).min(1, "Phone number cannot be empty") })).max(10),
  emails: z.array(z.object({ label: txt(40), email: z.string().trim().email("Enter a valid email ID") })).max(10),
  addresses: z
    .array(z.object({ label: txt(40), line: txt(300).min(1, "Address cannot be empty"), mapUrl: txt(500) }))
    .max(10),
  socials: z.object({ facebook: txt(200), instagram: txt(200), linkedin: txt(200), youtube: txt(200) }),
  bot: botSchema,
});
export type SiteSettings = z.infer<typeof siteSchema>;

export const DEFAULT_BOT: BotSettings = {
  enabled: true,
  name: "{business} Assistant",
  status: "Online · replies instantly",
  hint: "Hi! Have a question? Ask me 👋",
  welcome: "Namaste! 🙏 Welcome to {business}. I can help you with AI-powered content, logo & design, websites, social media, registration & legal documentation and Microsoft training.",
  returning: "Welcome back, {name}! 😊 How can I help you today?",
  collectDetails: true,
  askName: "Before we start, may I know your name?",
  askPhone: "Nice to meet you, {name}! Please share your 10-digit mobile number so our expert can call you if needed.",
  invalidPhone: "Sorry {name}, that doesn't look like a valid 10-digit mobile number. Please try again.",
  collectEmail: false,
  askEmail: "Thanks! What is your email ID? (Type “skip” if you don't want to share)",
  invalidEmail: "That email doesn't look right. Please check it, or type “skip”.",
  askNeed: "Thank you, {name}! What are you looking for today? Pick an option or type your question.",
  savedMessage: "Got it, {name}. Your details are saved — our expert will call you within 30 minutes during working hours.",
  buttons: [
    { label: "Logo & Branding", message: "I need a logo and branding for my business." },
    { label: "Website", message: "I need a website for my business." },
    { label: "Social Media", message: "I want help with Instagram and Facebook for my business." },
    { label: "AI Videos & Content", message: "I want an AI-generated promo video or ad for my business." },
    { label: "GST / Registration", message: "I want to register my business. Which option is best for me?" },
    { label: "Microsoft Training", message: "I want Microsoft training or certification. Which course should I start with?" },
  ],
  placeholder: "Type your message...",
  callLabel: "Call us",
  whatsappLabel: "WhatsApp",
  whatsappMessage: "Hi, I need help with your services",
  errorMessage: "Sorry, something went wrong. Please call {phone} or WhatsApp us.",
  fallback:
    "Sorry {name}, I didn't fully get that. 🙏 I can help with logo & design, AI videos and content, websites, social media, GST & business registration, legal documentation and Microsoft training — or our team can call you and answer anything.",
  offer: "",
  faqs: [
    {
      q: "Do I need to visit your office?",
      keywords: "visit office, come to office, offline, in person, physically, online process, rajahmundry",
      a: "No need to visit! 🙌 We are based in Rajahmundry and work with clients everywhere, 100% online. You share your requirement and files on WhatsApp or email, and we keep you updated at every step until delivery.",
    },
    {
      q: "Who runs RKS Digital Services?",
      keywords: "founder, owner, who are you, about you, rajeswari, team, company, about rks",
      a: "RKS Digital Services is founded by Rajeswari D — a web coder, certified trainer and AI content creator. We help individuals, entrepreneurs and businesses with AI-powered content, design, websites, social media, legal documentation and Microsoft training.",
    },
    {
      q: "Do you make AI videos and songs?",
      keywords: "ai video, ai song, custom song, brand song, jingle, ad video, promo video, reel, birthday video, wedding invitation video, invitation",
      a: "Yes! 🎬 We create AI-generated promo videos, product ad videos, brand songs & jingles, birthday and wedding invitation videos — made for WhatsApp, Instagram and YouTube. Share your idea and our team will call you with options.",
    },
    {
      q: "How do I pay?",
      keywords: "payment, pay, upi, gpay, phonepe, card, net banking, cash, bank transfer, emi",
      a: "You can pay by UPI (GPay, PhonePe, Paytm), debit/credit card or bank transfer. We share a clear invoice before you pay — no hidden charges.",
    },
  ],
  prices: [],
};

export const DEFAULT_SITE: SiteSettings = {
  siteName: "RKS Digital Services",
  tagline: "Your Needs. Our Solutions.",
  logo: BRAND_LOGO,
  logoHeight: 60,
  // Taken from the RKS logo: deep navy letters, gold "K" accent.
  colors: { navy: "#0D234F", royal: "#1E46B4", brand: "#B5801A" },
  phone: "+91 93981 28825",
  whatsapp: "919398128825",
  email: "rksdigitalservices26@gmail.com",
  hours: "Mon–Sat, 9 AM – 8 PM",
  city: "Rajahmundry, Andhra Pradesh",
  phones: [],
  emails: [],
  addresses: [],
  socials: {
    facebook: "https://www.facebook.com/share/1EjqG8qJn8/",
    instagram: "https://www.instagram.com/rks_digitalservices26",
    linkedin: "",
    youtube: "https://www.youtube.com/@rksdigitalservices",
  },
  bot: DEFAULT_BOT,
};

/** Merge saved (possibly older-shaped) JSON over defaults. */
export function mergeSite(parsed: Partial<SiteSettings> | null | undefined): SiteSettings {
  if (!parsed || typeof parsed !== "object") return DEFAULT_SITE;
  return {
    ...DEFAULT_SITE,
    ...parsed,
    colors: { ...DEFAULT_SITE.colors, ...parsed.colors },
    socials: { ...DEFAULT_SITE.socials, ...parsed.socials },
    bot: { ...DEFAULT_BOT, ...parsed.bot, faqs: parsed.bot?.faqs ?? DEFAULT_BOT.faqs, prices: parsed.bot?.prices ?? [] },
  };
}

/** Replace {name}, {business}, {phone} tokens in bot text. */
export function fillTokens(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (m, k: string) => vars[k] ?? m);
}
