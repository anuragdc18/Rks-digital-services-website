/**
 * Extra social profiles beyond the four main ones (Admin → Branding / Contact).
 * Any Instagram / Facebook / YouTube / LinkedIn link added under Admin → SEO & Google → "Other profiles"
 * is shown as an "Also find us" link in the footer and on the contact page — handy when a business
 * runs more than one page (RKS Digital Services + RKS Creations).
 */
import type { SiteSettings } from "../../api/lib/site-schema";

export type Network = "instagram" | "facebook" | "youtube" | "linkedin";
export type ExtraSocial = { url: string; network: Network; label: string };

const NETWORKS: { network: Network; test: RegExp }[] = [
  { network: "instagram", test: /instagram\.com/i },
  { network: "facebook", test: /(facebook|fb)\.com/i },
  { network: "youtube", test: /(youtube\.com|youtu\.be)/i },
  { network: "linkedin", test: /linkedin\.com/i },
];

const norm = (u: string) => u.trim().toLowerCase().replace(/^https?:\/\/(www\.)?/, "").replace(/\/+$/, "");

/** A readable label for a profile link: "@rks_creations4", "RKS Creations" … */
export function socialLabel(url: string, network: Network) {
  try {
    const path = decodeURIComponent(new URL(url).pathname).replace(/\/+$/, "");
    const parts = path.split("/").filter(Boolean);
    if (network === "facebook") {
      const i = parts.indexOf("people");
      if (i >= 0 && parts[i + 1]) return parts[i + 1].replace(/-/g, " ");
      if (parts[0] && parts[0] !== "share" && parts[0] !== "profile.php") return parts[0].replace(/[-.]/g, " ");
      return "Facebook page";
    }
    const handle = parts.find((p) => p.startsWith("@")) ?? parts[parts.length - 1];
    if (!handle) return network;
    return handle.startsWith("@") ? handle : `@${handle}`;
  } catch {
    return network;
  }
}

export function extraSocialLinks(sameAs: string[], socials: SiteSettings["socials"]): ExtraSocial[] {
  const primary = new Set(Object.values(socials).filter(Boolean).map(norm));
  const seen = new Set<string>();
  const out: ExtraSocial[] = [];
  for (const url of sameAs) {
    const n = norm(url);
    if (!n || primary.has(n) || seen.has(n)) continue;
    const hit = NETWORKS.find((x) => x.test.test(url));
    if (!hit) continue;
    seen.add(n);
    out.push({ url, network: hit.network, label: socialLabel(url, hit.network) });
  }
  return out;
}
