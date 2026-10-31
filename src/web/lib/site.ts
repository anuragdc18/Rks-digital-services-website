import { asset } from "./demo";
export type Service = {
  name: string;
  text: string;
  days?: string;
  /** optional service-specific landing content (falls back to category defaults) */
  who?: string[];
  includes?: string[];
  docs?: string[];
};
export type Category = {
  slug: string;
  menu: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  /** names shown in the nav dropdown (subset of services) */
  menuItems: string[];
  /** landing-page defaults for every service in this category */
  who: string[];
  includes: string[];
  docs?: string[];
  services: Service[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "registration",
    menu: "Registration",
    title: "Registration & Legal Documentation",
    short: "GST, Company, MSME, Trademark, licences and legal documents.",
    intro:
      "Starting or running a business? We handle the government paperwork and legal documentation for you, fully online. You share documents on WhatsApp and we do the rest.",
    image: asset("/images/cat-registration.jpg"),
    menuItems: [
      "GST Registration",
      "Company Registration (Pvt Ltd)",
      "LLP Registration",
      "MSME / Udyam",
      "Trademark",
      "FSSAI (Food License)",
      "Import Export Code (IEC)",
      "Trade License",
      "GST & Income Tax Filing",
      "Legal Documentation Support",
    ],
    who: ["New business owners and startups", "Shops, traders, professionals and freelancers", "Anyone who needs a legal business identity or proper paperwork"],
    includes: ["Free call to pick the right option", "Document check before filing", "Application filed by our expert", "Regular updates on WhatsApp", "Final certificate sent to you"],
    docs: ["PAN card of owner(s)", "Aadhaar card of owner(s)", "Passport-size photo", "Address proof of business (rent agreement / electricity bill)", "Bank details (cancelled cheque or statement)"],
    services: [
      { name: "GST Registration", text: "Get your GST number so you can bill customers legally.", days: "3–7 days", who: ["Turnover above ₹40 lakh (₹20 lakh for services)", "Selling online on Amazon, Flipkart, etc.", "Selling to other states"], docs: ["PAN card of business / owner", "Aadhaar card of owner", "Photo of owner", "Business address proof", "Bank statement or cancelled cheque"] },
      { name: "Company Registration (Pvt Ltd)", text: "Register a Private Limited company — best for startups that want to grow.", days: "7–10 days", who: ["Startups planning to raise funds", "Businesses with 2 or more owners", "Anyone who wants limited liability"], docs: ["PAN & Aadhaar of all directors", "Photo of all directors", "Office address proof + NOC from owner", "Latest bank statement or utility bill of directors"] },
      { name: "LLP Registration", text: "A partnership with limited risk. Good for small teams and professionals.", days: "10–15 days", who: ["Professionals like CAs, lawyers, consultants", "Small partnerships", "Businesses that want low compliance"], docs: ["PAN & Aadhaar of all partners", "Photo of all partners", "Office address proof + NOC", "Bank statement or utility bill of partners"] },
      { name: "Proprietorship / Firm Registration", text: "The easiest way to start a business on your own.", days: "3–5 days" },
      { name: "MSME / Udyam", text: "Get MSME benefits like easy loans and government schemes.", days: "1–2 days", who: ["Small and medium businesses", "Manufacturers and service providers", "Anyone wanting MSME loan benefits"], docs: ["Aadhaar card of owner", "PAN card", "Basic business details"] },
      { name: "Trademark", text: "Protect your business name and logo so no one can copy it.", days: "2–3 days to file", who: ["Anyone with a business name or logo", "Brands selling online", "Startups that want to protect their identity"], docs: ["Logo (if any)", "Applicant PAN & Aadhaar", "MSME certificate (for lower government fee)", "Signed authorization form (we prepare it)"] },
      { name: "FSSAI (Food License)", text: "Must-have license for any food business, cloud kitchen or shop.", days: "7–15 days", who: ["Restaurants, cafes and cloud kitchens", "Home food businesses", "Food traders and manufacturers"], docs: ["Photo ID of owner", "Passport-size photo", "Business address proof", "List of food items"] },
      { name: "Import Export Code (IEC)", text: "Needed if you want to import or export goods.", days: "2–4 days", who: ["Exporters and importers", "Businesses selling abroad online", "Traders working with foreign suppliers"], docs: ["PAN card", "Aadhaar card", "Business address proof", "Cancelled cheque"] },
      { name: "Trade License", text: "Local municipal license to run your shop or business.", days: "7–15 days" },
      { name: "Shop & Establishment", text: "State registration for shops, offices and businesses.", days: "3–7 days" },
      { name: "ISO Certification", text: "Show customers your business follows quality standards.", days: "7–15 days" },
      { name: "GST & Income Tax Filing", text: "We file your GST returns and ITR on time — no penalties.", days: "Monthly / yearly" },
      { name: "TDS, PF & ESIC Filing", text: "Employee-related filings done correctly every month.", days: "Monthly" },
      { name: "Company Yearly Compliance", text: "ROC annual returns, director KYC and reminders for every deadline.", days: "Yearly" },
      { name: "Legal Documentation Support", text: "Rental agreements, partnership deeds, affidavits, NOCs, declarations and other documents drafted correctly.", days: "1–3 days", who: ["Business owners signing agreements", "Landlords, tenants and partners", "Anyone who needs a document drafted properly"], includes: ["Short call to understand your need", "Document drafted in simple, correct language", "Changes until you are satisfied", "Print-ready PDF / Word file", "Guidance on stamp paper and notary"], docs: ["ID proof of the parties", "Basic details (names, addresses, terms)", "Any existing documents to refer to"] },
      { name: "Project Reports & Business Documents", text: "Project reports for bank loans, company profiles and official letters prepared professionally.", days: "3–5 days" },
    ],
  },
  {
    slug: "branding",
    menu: "Branding",
    title: "Logo & Branding",
    short: "Logo, visiting cards and a brand look people remember.",
    intro:
      "Your brand is how customers recognise you. We create a logo and a matching look for your cards, letterheads, social profiles and company profile — with AI-assisted design options to choose from.",
    image: asset("/images/cat-branding.jpg"),
    menuItems: ["Logo Design", "Business Card", "Letterhead", "Brand Name & Tagline", "Company Profile", "Full Brand Kit"],
    who: ["New businesses that need a look", "Businesses with an old or unclear brand", "Shops, clinics, cafes and startups"],
    includes: ["Short call to understand your business", "2–3 design options to choose from", "Changes until you are happy", "Final files for print and online (PNG, PDF, SVG)"],
    services: [
      { name: "Logo Design", text: "A unique logo with all the files you need for print and online." },
      { name: "Business Card", text: "Visiting cards that look professional and print perfectly." },
      { name: "Letterhead", text: "Letterhead for invoices, quotes and official letters." },
      { name: "Brand Name & Tagline", text: "We help you pick a catchy name and a short tagline." },
      { name: "Company Profile", text: "A neat document that introduces your company to clients." },
      { name: "Full Brand Kit", text: "Logo, colours, fonts and rules — so your brand always looks the same." },
      { name: "Rebranding", text: "Give your old brand a fresh, modern look." },
      { name: "ID Cards & Stamps", text: "Staff ID cards and rubber stamp designs." },
      { name: "T-Shirt & Merchandise", text: "Branded t-shirts, caps and gifts for your team and events." },
      { name: "Email Signature", text: "A professional signature for Gmail and Outlook." },
      { name: "Digital Visiting Card", text: "A tap-to-call, tap-to-WhatsApp digital card you can share on WhatsApp and social media." },
    ],
  },
  {
    slug: "design",
    menu: "Design",
    title: "Design & Printing",
    short: "Posters, banners, brochures, invitations and packaging, ready to print or post.",
    intro:
      "Need something designed for print or online? We create ready-to-use files — posters, banners, brochures, invitations and social media creatives — that look great and send the right message.",
    image: asset("/images/cat-design.jpg"),
    menuItems: ["Flyer & Poster", "Flex & Hoarding", "Brochure", "Wedding & Event Invitations", "Social Media Post Design", "Packaging", "Menu Card"],
    who: ["Businesses printing marketing material", "Shops and restaurants", "Event and exhibition teams"],
    includes: ["Design based on your brand", "Ready-to-print files with correct size", "Changes included", "Help with printing if needed"],
    services: [
      { name: "Brochure", text: "Bi-fold and tri-fold brochures that explain your business clearly." },
      { name: "Flyer & Poster", text: "Eye-catching posters, flyers and banners with one clear message — for print, WhatsApp and social media." },
      { name: "Packaging", text: "Product box and label designs that stand out on the shelf." },
      { name: "Flex & Hoarding", text: "Big banners and hoardings that can be read from far away." },
      { name: "Menu Card", text: "Easy-to-read menus for restaurants, cafes and cloud kitchens." },
      { name: "Certificates & ID Cards", text: "Certificates, awards and ID cards in your brand style." },
      { name: "Catalogue", text: "Product catalogues that are easy to browse." },
      { name: "Presentation (PPT)", text: "Professional slides for pitches and meetings." },
      { name: "Social Media Post Design", text: "Ready-made post designs for Instagram and Facebook." },
      { name: "YouTube Thumbnail", text: "Thumbnails that get more clicks." },
      { name: "Newspaper Ad", text: "Print ads made to the newspaper's size rules." },
      { name: "Wedding & Event Invitations", text: "Digital and print invitations for weddings, birthdays, house-warmings and business events." },
      { name: "Festival & Greeting Creatives", text: "Branded festival wishes and greeting posts for your business, ready to share." },
    ],
  },
  {
    slug: "social-media",
    menu: "Social Media",
    title: "Social Media & Digital Marketing",
    short: "We post, manage and grow your Instagram, Facebook and Google presence.",
    intro:
      "No time for social media? We plan, design and post for you every month — and run ads and Google listings that bring real enquiries.",
    image: asset("/images/cat-social.jpg"),
    menuItems: ["Instagram & Facebook Handling", "Monthly Posts", "Reels Planning", "Paid Ads (Boosting)", "Promo Videos", "Google Business Profile"],
    who: ["Businesses with no time for social media", "Shops and brands that want more enquiries", "Anyone starting on Instagram or Facebook"],
    includes: ["Monthly plan shared in advance", "Designed posts and captions", "Posting on time", "Simple monthly report"],
    services: [
      { name: "Instagram & Facebook Handling", text: "We run your pages — posting, replying and monthly reports." },
      { name: "Monthly Posts", text: "A full month of posts planned and approved by you in advance." },
      { name: "Reels Planning", text: "Reel ideas with hooks, scripts and music suggestions." },
      { name: "Paid Ads (Boosting)", text: "Ads that reach the right people in your city or across India." },
      { name: "Promo Videos", text: "Short videos for reels, stories and WhatsApp status." },
      { name: "Captions & Hashtags", text: "Captions written in your style, with the right hashtags." },
      { name: "Profile Setup", text: "Cover photos, bio and highlights set up properly." },
      { name: "Google Business Profile", text: "Get your business on Google Maps and 'near me' searches with photos, hours and reviews." },
      { name: "WhatsApp Marketing", text: "Broadcast lists, catalogues and status creatives that bring repeat customers." },
      { name: "YouTube Channel Setup", text: "Channel art, intro, descriptions and a posting plan for your YouTube channel." },
    ],
  },
  {
    slug: "website",
    menu: "Website",
    title: "Website Development",
    short: "Business websites and online stores that work on mobile.",
    intro:
      "Get found on Google and take orders online. We build fast websites that look great on every phone — and keep them running.",
    image: asset("/images/cat-website.jpg"),
    menuItems: ["Business Website", "Online Store", "Landing Page", "Website Redesign", "Domain & Hosting", "Website Maintenance"],
    who: ["Businesses without a website", "Businesses with an old or slow website", "Shops that want to sell online"],
    includes: ["Mobile-friendly design", "Domain, hosting and SSL setup", "Contact form and WhatsApp button", "Basic Google setup (SEO)", "1 month free support"],
    services: [
      { name: "Business Website", text: "A professional website for your business, ready in 2–3 weeks." },
      { name: "Online Store", text: "Sell online with cart, UPI/card payments and order tracking." },
      { name: "Landing Page", text: "One page made for one offer or ad campaign." },
      { name: "WordPress Website", text: "Easy-to-edit WordPress site you can update yourself." },
      { name: "Website Redesign", text: "Make your old website modern, fast and mobile-friendly." },
      { name: "Domain & Hosting", text: "Your .com or .in domain, hosting and SSL set up in your name." },
      { name: "Payment Gateway", text: "Accept UPI, cards and net banking on your website." },
      { name: "Google Ranking (SEO)", text: "Basic SEO so customers can find you on Google." },
      { name: "Website Maintenance", text: "Updates, backups and small changes every month." },
      { name: "Speed Improvement", text: "Make your slow website load fast." },
      { name: "Portfolio & Personal Website", text: "A personal site for professionals, trainers, creators and freelancers." },
    ],
  },
  {
    slug: "ai-tools",
    menu: "AI Services",
    title: "AI Content & Automation",
    short: "AI videos, brand songs, content and chatbots that work 24×7.",
    intro:
      "Our speciality. We use AI tools to create promo videos, ad films, brand songs, posters and content for your business in days, not weeks — and set up smart replies so you never miss an enquiry.",
    image: asset("/images/cat-ai.jpg"),
    menuItems: ["AI Promo & Ad Videos", "AI Brand Song & Jingle", "Invitation & Greeting Videos", "AI-Powered Content Creation", "WhatsApp Auto-Reply", "Website Chatbot", "AI Training for Staff"],
    who: ["Shops, brands and startups that want video and content fast", "Businesses getting many repeat questions", "Owners and creators who want to save time and cost"],
    includes: ["Short call to understand your idea", "Script / concept shared for approval", "Created with the latest AI tools and finished by hand", "Changes included", "Final files sized for WhatsApp, Instagram, YouTube or your website"],
    services: [
      { name: "AI Promo & Ad Videos", text: "Product and business ad videos made with AI — for jewellery, sarees, perfumes, real estate, restaurants and more.", days: "2–4 days", who: ["Shops and brands launching a product or offer", "Real estate, jewellery, fashion and food businesses", "Anyone who wants a video without a costly shoot"], docs: ["Product photos or a short brief", "Logo and brand colours", "Offer details, phone number and address to show"] },
      { name: "AI Brand Song & Jingle", text: "A custom song or jingle about your brand — for ads, reels, events and WhatsApp status.", days: "2–3 days", who: ["Brands that want a memorable identity", "Shops, schools and events", "Creators and influencers"], docs: ["Brand name and tagline", "What you want the song to say", "Preferred language and style"] },
      { name: "Invitation & Greeting Videos", text: "Wedding invitations, birthday wishes, anniversary and festival videos — personalised with names and photos.", days: "1–3 days", who: ["Families planning a wedding or function", "Businesses sending festival greetings", "Anyone who wants a special, shareable video"], docs: ["Names, date, venue and photos", "Preferred language", "Any song or theme you like"] },
      { name: "AI-Powered Content Creation", text: "Captions, scripts, blogs, product descriptions and ad copy written and polished with AI.", days: "1–2 days" },
      { name: "AI Image & Poster Generation", text: "Unique AI-generated visuals and posters for your brand, products and campaigns.", days: "1–2 days" },
      { name: "WhatsApp Auto-Reply", text: "Instant replies to customer questions on WhatsApp Business." },
      { name: "Website Chatbot", text: "A chatbot on your website that answers questions 24×7." },
      { name: "Lead Follow-up Automation", text: "Automatic follow-up messages so no enquiry goes cold." },
      { name: "Appointment Booking Bot", text: "Customers book a time slot themselves — with reminders." },
      { name: "Google Review Replies", text: "Polite, quick replies to your Google reviews." },
      { name: "Google Sheets & CRM Automation", text: "Data that fills itself in — no more manual typing." },
      { name: "Custom ChatGPT for Business", text: "An AI assistant trained on your business information." },
      { name: "AI Training for Staff", text: "Simple hands-on training so your team can use AI daily." },
    ],
  },
  {
    slug: "microsoft-certifications",
    menu: "Microsoft Training",
    title: "Microsoft Training & Certifications",
    short: "Word, Excel, PowerPoint and digital skills training, plus Microsoft Fundamentals certifications.",
    intro:
      "Learn practical Microsoft skills from a certified trainer — from Word, Excel and PowerPoint for daily work to Microsoft Fundamentals certifications with practice tests and exam booking help.",
    image: asset("/images/cat-microsoft-v2.jpg"),
    menuItems: [
      "Microsoft Office Training (Word, Excel, PowerPoint)",
      "Digital Skills & AI Tools Training",
      "AB-900: Copilot & Agent Administration Fundamentals",
      "AI-901: Azure AI Fundamentals",
      "AZ-900: Azure Fundamentals",
      "DP-900: Azure Data Fundamentals",
      "PL-900: Power Platform Fundamentals",
      "MS-900: Microsoft 365 Fundamentals",
      "SC-900: Security, Compliance & Identity Fundamentals",
    ],
    who: ["Students, freshers and job seekers", "Working professionals, teachers and office staff", "Companies training their teams on Microsoft tools"],
    includes: ["Live online classes by a certified trainer", "Notes and Microsoft Learn study path", "Practice tests like the real exam", "Help booking your exam on Pearson VUE", "Doubt-clearing on WhatsApp"],
    docs: ["Any photo ID (Aadhaar, PAN or passport) for the exam", "Email ID to create your Microsoft Learn profile", "Laptop with internet for online classes"],
    services: [
      { name: "Microsoft Office Training (Word, Excel, PowerPoint)", text: "Hands-on training for daily office work — documents, formulas, charts, reports and presentations.", days: "2–4 weeks", who: ["Students and freshers preparing for jobs", "Office staff, teachers and business owners", "Anyone who wants to work faster on a computer"], includes: ["Live online classes by a certified trainer", "Practice files and assignments", "Real office examples (invoices, reports, decks)", "Certificate of completion", "Doubt-clearing on WhatsApp"], docs: ["Laptop or desktop with Microsoft Office", "Internet connection for online classes"] },
      { name: "Digital Skills & AI Tools Training", text: "Practical training on AI tools, Canva, email, online forms and digital basics for work and business.", days: "1–3 weeks", who: ["Beginners and homemakers starting with computers", "Small business owners and shop staff", "Students who want to use AI tools well"], includes: ["Simple, step-by-step live sessions", "Hands-on practice with real tasks", "Recordings / notes for revision", "Certificate of completion"], docs: ["Laptop or smartphone with internet"] },
      { name: "AB-900: Copilot & Agent Administration Fundamentals", text: "Learn to set up and manage Microsoft 365 Copilot and AI agents. Great for teams using Copilot at work.", who: ["IT admins working with Microsoft 365", "Teams rolling out Copilot at work"] },
      { name: "AI-901: Azure AI Fundamentals", text: "The new AI fundamentals exam (AI-900 is now AI-901). Learn AI basics and build simple AI apps and agents on Azure.", who: ["Beginners starting in AI", "Students and freshers", "Anyone who planned to take AI-900"] },
      { name: "AZ-900: Azure Fundamentals", text: "Your first step into cloud. Learn what Azure is, its main services and pricing.", who: ["Beginners new to cloud", "Sales and non-technical staff", "Anyone planning Azure admin or developer exams"] },
      { name: "DP-900: Azure Data Fundamentals", text: "Learn the basics of data, databases and data analysis on Azure." },
      { name: "PL-900: Power Platform Fundamentals", text: "Build simple apps, automations and reports with Power Apps, Power Automate and Power BI — no coding needed." },
      { name: "MS-900: Microsoft 365 Fundamentals", text: "Learn the basics of Microsoft 365 — Outlook, Teams, SharePoint, OneDrive, security and licensing." },
      { name: "SC-900: Security, Compliance & Identity Fundamentals", text: "Learn the basics of cyber security, identity and data protection with Microsoft tools." },
    ],
  },
];

export const ALL_SERVICE_NAMES = CATEGORIES.flatMap((c) => c.services.map((s) => s.name));

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const SLIDES = [
  {
    image: asset("/images/slide-online.jpg"),
    tag: "Your Needs. Our Solutions.",
    label: "AI & Digital Services",
    title: "AI-Powered Content, Design & Digital Services",
    text: "Promo videos, brand songs, logos, posters, websites and social media — created with the latest AI tools for individuals, entrepreneurs and businesses.",
    cta: "Get Free Consultation",
    link: "/services/ai-tools",
    linkText: "See AI Services",
  },
  {
    image: asset("/images/slide-branding.jpg"),
    tag: "Logo & Branding",
    label: "Logo & Branding",
    title: "Look Professional From Day One",
    text: "Logo, visiting cards, brochures, posters and invitations that make customers trust you.",
    cta: "Get Your Logo Designed",
    link: "/services/branding",
    linkText: "See Branding Services",
  },
  {
    image: asset("/images/slide-registration.jpg"),
    tag: "Registration & Legal Documentation",
    label: "Registration & Legal",
    title: "Start Your Business the Right Way",
    text: "GST, Company, MSME and Trademark registration plus agreements and legal documents — we handle the paperwork, fully online.",
    cta: "Get Free Consultation",
    link: "/services/registration",
    linkText: "See Registration Services",
  },
  {
    image: asset("/images/slide-microsoft.jpg"),
    tag: "Microsoft Training & Certifications",
    label: "Microsoft Training",
    title: "Learn Microsoft Skills That Get You Hired",
    text: "Word, Excel and PowerPoint training from a certified trainer, plus guided preparation for Microsoft Fundamentals exams.",
    cta: "",
    link: "/services/microsoft-certifications",
    linkText: "Browse Courses & Exams",
    badges: true,
  },
];

export const POPULAR = [
  { name: "Logo Design", cat: "branding", days: "3–5 days" },
  { name: "AI Promo & Ad Videos", cat: "ai-tools", days: "2–4 days" },
  { name: "Business Website", cat: "website", days: "2–3 weeks" },
  { name: "Instagram & Facebook Handling", cat: "social-media", days: "Monthly plan" },
  { name: "Flyer & Poster", cat: "design", days: "1–2 days" },
  { name: "GST Registration", cat: "registration", days: "3–7 days" },
  { name: "Microsoft Office Training (Word, Excel, PowerPoint)", cat: "microsoft-certifications", days: "2–4 weeks" },
  { name: "WhatsApp Auto-Reply", cat: "ai-tools", days: "Ready in 1 week" },
];

export const findService = (catSlug: string, serviceSlug: string) => {
  const cat = CATEGORIES.find((c) => c.slug === catSlug);
  const service = cat?.services.find((x) => slugify(x.name) === serviceSlug);
  return { cat, service };
};

export const serviceUrl = (catSlug: string, name: string) => `/services/${catSlug}/${slugify(name)}`;

export const waLink = (number: string, text = "Hi, I need help with your services") =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
