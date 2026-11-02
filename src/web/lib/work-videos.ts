/** Sample videos made by RKS, shown on the matching service pages. Files live in public/videos/work/. */
export type WorkVideo = { file: string; title: string };

export const WORK_VIDEOS: Record<string, WorkVideo[]> = {
  "AI Promo & Ad Videos": [
    { file: "jewellery-ad", title: "Jewellery Ad" },
    { file: "saree-ad", title: "Saree Ad" },
    { file: "perfume-ad", title: "Perfume Ad" },
    { file: "real-estate", title: "Real Estate Promo" },
    { file: "combo-offer", title: "Combo Offer Ad" },
    { file: "rks-services", title: "RKS Services Promo" },
  ],
  "AI Brand Song & Jingle": [
    { file: "rks-brand-song", title: "RKS Brand Song" },
    { file: "brand-name-song", title: "Brand Name Song" },
  ],
  "Invitation & Greeting Videos": [
    { file: "wedding-invitation", title: "Wedding Invitation" },
    { file: "birthday-greeting", title: "Birthday Greeting" },
  ],
};
