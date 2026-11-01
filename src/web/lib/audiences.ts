/**
 * "Who we help" block on the home page: the customer types RKS Digital Services serves
 * (from the client's business document) and the services each type usually starts with.
 * Service names must match names in site.ts; a name that is renamed/hidden in Admin → Services
 * is simply skipped.
 */
import { asset } from "./demo";

export type Audience = {
  label: string;
  short: string;
  image: string;
  /** [category slug, service name] pairs — the "start here" chips. An empty service name links to the whole category. */
  starts: [string, string][];
};

export const AUDIENCES: Audience[] = [
  {
    label: "Shops & Local Businesses",
    short: "Get found on Google and WhatsApp, and look professional in your area.",
    image: asset("/images/who-shops.webp"),
    starts: [
      ["social-media", "Google Business Profile"],
      ["design", "Flyer / Posters"],
      ["ai-tools", "AI Promo & Ad Videos"],
      ["social-media", "WhatsApp Marketing"],
    ],
  },
  {
    label: "Startups & Entrepreneurs",
    short: "Register the right way and launch with a brand people remember.",
    image: asset("/images/slide-registration.jpg"),
    starts: [
      ["registration", "Private Limited Registration"],
      ["branding", "Logo Design"],
      ["website", "WordPress Website Development"],
      ["branding", "Brand Guidelines"],
    ],
  },
  {
    label: "Professionals & Freelancers",
    short: "Doctors, CAs, trainers, consultants — a profile that brings clients.",
    image: asset("/images/cat-registration.jpg"),
    starts: [
      ["website", "Portfolio & Personal Website"],
      ["branding", "Digital Visiting Card"],
      ["registration", "Legal Documentation Support"],
      ["social-media", "Social Media Management"],
    ],
  },
  {
    label: "Content Creators",
    short: "Reels, songs, thumbnails and a channel that grows.",
    image: asset("/images/cat-social.jpg"),
    starts: [
      ["social-media", "Reel Content Planning"],
      ["ai-tools", "AI Brand Song & Jingle"],
      ["social-media", "YouTube Channel Setup"],
      ["design", "YouTube Thumbnail Design"],
    ],
  },
  {
    label: "Students & Learners",
    short: "Job-ready Microsoft certificates with guided training.",
    image: asset("/images/cat-microsoft-v2.jpg"),
    starts: [
      ["microsoft-certifications", ""],
      ["microsoft-certifications", "Digital Skills & AI Tools Training"],
      ["microsoft-certifications", "AZ-900: Azure Fundamentals"],
      ["microsoft-certifications", "AI-901: Azure AI Fundamentals"],
    ],
  },
  {
    label: "Individuals & Families",
    short: "Invitations, greeting videos and songs for your special days.",
    image: asset("/images/cat-design.jpg"),
    starts: [
      ["design", "Wedding & Event Invitations"],
      ["ai-tools", "Invitation & Greeting Videos"],
      ["ai-tools", "AI Brand Song & Jingle"],
      ["design", "Festival & Greeting Creatives"],
    ],
  },
];
