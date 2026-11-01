import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  Globe2,
  Headphones,
  IndianRupee,
  MapPin,
  MessageCircle,
  PenTool,
  ShieldCheck,
  Smartphone,
  Star,
  Upload,
  Users,
  Sparkles,
  Instagram,
  Clapperboard,
  ImageIcon,
  GraduationCap,
  Bot,
  Quote,
  Rocket,
  Briefcase,
  PartyPopper,
  Store,
  Video,
} from "lucide-react";
import { AUDIENCES } from "../lib/audiences";
import { CATEGORIES, POPULAR, SLIDES, findService, serviceUrl, slugify, waLink } from "../lib/site";
import { asset } from "../lib/demo";
import { FOUNDER, ABOUT } from "../lib/about";
import { useSite } from "../queries/site";
import { LeadForm } from "../components/lead-form";
import { WaIcon } from "../components/header";
import { useContent } from "../queries/content";
import { PostCard } from "../components/content-ui";
import { CertBadges } from "../components/cert-badges";

function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SLIDES.length;
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % n), 5000);
    return () => clearTimeout(t);
  }, [i, paused, n]);

  return (
    <section
      className="relative isolate overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="relative h-[740px] sm:h-[660px] lg:h-[630px]">
        {SLIDES.map((s, idx) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
            aria-hidden={idx !== i}
          >
            <img
              src={s.image}
              alt=""
              className={`absolute inset-y-0 right-0 h-full w-full object-cover object-[65%_center] lg:w-[64%] lg:object-center ${idx === i ? "kenburns" : ""}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1f4b_0%,#0b1f4b_34%,rgba(18,48,110,0.75)_50%,rgba(30,79,216,0.05)_75%)] max-lg:bg-[linear-gradient(90deg,#0b1f4b_10%,rgba(11,31,75,0.6)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent lg:hidden" />
            {idx === i && "badges" in s && s.badges && <CertBadges />}
            {idx === i && (
              <div className="container-x relative flex h-full flex-col justify-center pb-36 max-lg:items-center max-lg:text-center sm:pb-28 lg:pb-24">
                <span className="rise inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white ring-1 ring-white/20">
                  <span className="h-2 w-2 rounded-full bg-brand" /> {s.tag}
                </span>
                <h1
                  className="rise mt-5 max-w-xl text-[38px] max-lg:mx-auto font-extrabold leading-[1.1] !text-white sm:text-5xl lg:text-[56px]"
                  style={{ animationDelay: "80ms" }}
                >
                  {s.title}
                </h1>
                <p className="rise mt-5 max-w-lg text-[17px] max-lg:mx-auto leading-relaxed text-white/85" style={{ animationDelay: "160ms" }}>
                  {s.text}
                </p>
                <div className="rise mt-8 flex flex-wrap gap-3 max-lg:justify-center" style={{ animationDelay: "240ms" }}>
                  {s.cta ? (
                    <>
                      <a href="#enquiry" className="btn-brand">
                        {s.cta} <ArrowRight className="h-4 w-4" />
                      </a>
                      <Link to={s.link} className="btn-ghost">
                        {s.linkText}
                      </Link>
                    </>
                  ) : (
                    <Link to={s.link} className="btn-brand">
                      {s.linkText} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                {/* slide switcher: one pill per banner, under the buttons and lined up with the text (scrolls sideways on small phones) */}
                <div className="no-scrollbar -mx-4 mt-7 flex gap-2 overflow-x-auto px-4 max-lg:self-stretch lg:mx-0 lg:max-w-full lg:px-0" role="tablist" aria-label="Banners">
                  {SLIDES.map((sl, k) => (
                    <button
                      key={sl.title}
                      role="tab"
                      aria-selected={k === i}
                      onClick={() => setI(k)}
                      aria-label={`Go to slide ${k + 1}: ${sl.label}`}
                      className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition sm:text-[13px] ${
                        k === i ? "bg-white text-navy shadow-[0_6px_18px_-6px_rgba(0,0,0,0.6)]" : "bg-black/35 text-white ring-1 ring-white/20 backdrop-blur hover:bg-black/55"
                      }`}
                    >
                      {sl.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={() => setI((i - 1 + n) % n)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20 md:grid"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => setI((i + 1) % n)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20 md:grid"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

// Sample figures from the template — update in src/web/pages/index.tsx when the client shares real numbers.
const TRUST = [
  { icon: Star, big: "4.8", small: "Google Rating" },
  { icon: Users, big: "1,000+", small: "Happy Clients" },
  { icon: MapPin, big: "Rajahmundry", small: "& Pan-India Online" },
  { icon: ShieldCheck, big: "100%", small: "Online Process" },
];

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function EnquiryBar() {
  return (
    <section id="enquiry" className="relative z-10 flow-root scroll-mt-28 bg-surface">
      <div className="container-x relative z-10 -mt-16">
        <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_30px_60px_-30px_rgba(11,31,75,0.45)] sm:p-6">
          <p className="mb-4 text-center text-[15px] font-semibold text-navy sm:text-left">
            Get a free call from our expert <span className="font-normal text-body">— tell us what you need</span>
          </p>
          <LeadForm />
        </div>
      </div>
      <div className="pb-10 pt-8">
      <div className="container-x grid grid-cols-2 gap-y-6 md:grid-cols-4">
        {TRUST.map((t, idx) => (
          <div key={t.small} className={`flex items-center justify-center gap-3 ${idx > 0 ? "md:border-l md:border-line" : ""}`}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-royal shadow-sm">
              {idx === 0 ? <GoogleG /> : <t.icon className="h-5 w-5" />}
            </span>
            <div>
              <p className="text-lg font-bold leading-tight text-navy">{t.big}</p>
              <p className="text-[13px]">{t.small}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">{eyebrow}</p>}
      <h2 className="text-3xl font-bold sm:text-[38px] sm:leading-tight">{title}</h2>
      {text && <p className="mt-3 text-[16px]">{text}</p>}
    </div>
  );
}

function CategoryBanners() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <SectionHead eyebrow="Our Services" title="What Do You Need Help With?" text="Pick a category. Each one has a clear list of services." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              to={`/services/${c.slug}`}
              className={`${i === 6 ? "sm:col-span-2 lg:col-span-3 lg:min-h-[300px]" : ""} group relative isolate flex min-h-[250px] flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <img src={c.image} alt="" loading="lazy" className={`absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${i === 6 ? "object-[50%_22%]" : ""}`} />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/80 to-navy/10" />
              <span className="mb-auto w-fit rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium text-white ring-1 ring-white/25 backdrop-blur">
                {c.slug === "microsoft-certifications" ? `${c.services.filter((x) => /^[A-Z]{2}-\d{3}:/.test(x.name)).length} Courses & Exams` : `${c.services.length} services`}
              </span>
              <h3 className="mt-6 max-w-[60%] text-[24px] font-bold leading-tight !text-white">{c.title}</h3>
              <p className="mt-2 max-w-[62%] text-[14px] leading-snug text-white/85">{c.short}</p>
              <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-white transition group-hover:gap-2.5">
                View Services <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const POP_ICONS = [GraduationCap, Clapperboard, Globe2, Instagram, FileText, ShieldCheck, BadgeCheck, MessageCircle];

const AUDIENCE_ICONS = [Store, Rocket, Briefcase, Video, GraduationCap, PartyPopper];

function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-surface py-16 sm:py-20">
      <div className="container-x">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">Who We Help</p>
            <h2 className="text-3xl font-bold sm:text-[38px] sm:leading-tight">
              Built for <span className="mark-brand">People Like You</span>
            </h2>
            <p className="mt-3 text-[16px]">Pick what describes you best — here's where most people like you start.</p>
          </div>
          <p className="font-hand text-[26px] leading-tight text-navy sm:text-[30px] lg:max-w-[260px] lg:text-right">
            Not listed? We still help — <Link to="/contact" className="text-brand underline decoration-2 underline-offset-4">just ask!</Link> 🙂
          </p>
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {AUDIENCES.map((a, idx) => {
            const Icon = AUDIENCE_ICONS[idx] ?? Users;
            // skip chips whose service was renamed / hidden in Admin → Services
            const starts = a.starts.filter(([cat, name]) => (name ? findService(cat, slugify(name)).service : CATEGORIES.some((c) => c.slug === cat)));
            return (
              <article
                key={a.label}
                className="group flex w-[84%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(13,35,79,0.5)] sm:w-auto"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1.5 text-[14px] font-semibold text-white shadow-md">
                    <Icon className="h-4 w-4" /> {a.label}
                  </span>
                  <p className="absolute inset-x-4 bottom-4 text-[14px] font-medium leading-snug text-white">{a.short}</p>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">Most start with</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {starts.map(([cat, name]) => (
                      <Link
                        key={name || cat}
                        to={name ? serviceUrl(cat, name) : `/services/${cat}`}
                        className="rounded-full bg-surface px-3 py-1.5 text-[13px] font-medium text-navy ring-1 ring-line transition hover:bg-royal hover:text-white hover:ring-royal"
                      >
                        {name ? name.replace(/ \(.*\)$/, "") : CATEGORIES.find((c) => c.slug === cat)?.title}
                      </Link>
                    ))}
                  </div>
                  <Link to={`/contact?service=${encodeURIComponent(starts.find((x) => x[1])?.[1] ?? "")}`} className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-brand group-hover:gap-2.5">
                    Talk to us about this <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Popular() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <SectionHead eyebrow="Most Asked" title="Most Popular Services" text="These are what most of our customers start with." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR.map((p, idx) => {
            const Icon = POP_ICONS[idx];
            return (
              <Link
                key={p.name}
                to={"category" in p && p.category ? `/services/${p.cat}` : serviceUrl(p.cat, p.name)}
                className="group flex flex-col rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:border-royal/30 hover:shadow-[0_20px_40px_-24px_rgba(30,79,216,0.45)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal/10 text-royal transition group-hover:bg-royal group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold leading-snug">{p.name}</h3>
                <p className="mt-1 text-[14px] text-slate-500">{p.days}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-brand group-hover:gap-2">
                  Know More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { icon: ClipboardList, title: "Tell Us What You Need", text: "Fill the form, call or WhatsApp us. We understand your requirement and plan the solution." },
  { icon: Upload, title: "Share Your Details & Files", text: "Send logos, photos, documents or ideas on WhatsApp or email. No office visit needed." },
  { icon: BadgeCheck, title: "We Create, Review & Deliver", text: "You review the output, we make changes, and deliver the final work as agreed." },
];

function AboutFounder() {
  const site = useSite();
  return (
    <section id="about" className="overflow-x-clip bg-surface py-16 sm:py-20">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">About Us</p>
            <h2 className="text-3xl font-bold sm:text-[38px] sm:leading-tight">{ABOUT.title}</h2>
            {ABOUT.paragraphs.map((t) => (
              <p key={t} className="mt-4 text-[16px] leading-relaxed">{t}</p>
            ))}
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {ABOUT.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-[15px] text-navy">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {pt}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-brand">Get Free Consultation</Link>
              <Link to="/services/ai-tools" className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-6 py-3 font-semibold text-navy hover:border-royal/40 hover:text-royal">
                See AI Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-3xl bg-brand/15" aria-hidden />
            <div className="absolute -bottom-5 -right-5 h-36 w-36 rounded-full bg-royal/10" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-30px_rgba(13,35,79,0.5)] ring-1 ring-line">
              <img
                src={asset(FOUNDER.photo)}
                alt={`${FOUNDER.name}, ${FOUNDER.role} of ${site.siteName}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <figcaption className="p-6">
                <div className="flex items-start gap-3">
                  <Quote className="mt-1 h-6 w-6 shrink-0 text-brand" />
                  <p className="text-[15px] italic leading-relaxed text-navy">{FOUNDER.vision}</p>
                </div>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-lg font-bold text-navy">{FOUNDER.name}</p>
                  <p className="text-[14px] text-brand">{FOUNDER.role}, {site.siteName}</p>
                  <p className="mt-2 text-[14px] leading-relaxed">{FOUNDER.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {FOUNDER.tags.map((t) => (
                      <span key={t} className="rounded-full bg-surface px-2.5 py-1 text-[12px] font-medium text-navy ring-1 ring-line">{t}</span>
                    ))}
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">How It Works</p>
          <h2 className="text-3xl font-bold !text-white sm:text-[38px]">Simple 3-Step Process</h2>
        </div>
        <div className="relative grid gap-6 md:grid-cols-3">
          {STEPS.map((s, idx) => (
            <div key={s.title} className="relative rounded-2xl bg-white/[0.06] p-7 text-center ring-1 ring-white/10">
              <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand text-white shadow-[0_0_0_8px_var(--color-navy)]">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-white text-[12px] font-bold text-navy">
                  {idx + 1}
                </span>
              </span>
              <h3 className="mt-5 text-xl font-semibold !text-white">{s.title}</h3>
              <p className="mt-2 text-[15px] text-white/75">{s.text}</p>
              {idx < STEPS.length - 1 && (
                <span className="absolute -bottom-[22px] left-1/2 z-10 grid h-10 w-10 -translate-x-1/2 rotate-90 place-items-center rounded-full bg-navy text-brand ring-1 ring-white/15 md:-right-[22px] md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:rotate-0">
                  <ArrowRight className="h-5 w-5" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: Bot, title: "AI-powered creative solutions", text: "Videos, songs, posters and content made with the latest AI tools — faster and more affordable." },
  { icon: Sparkles, title: "One place for everything", text: "Branding, design, websites, social media, legal documentation and Microsoft training — no running around." },
  { icon: IndianRupee, title: "Customised for you", text: "Solutions planned around your requirement and budget, with a clear price before we start." },
  { icon: Smartphone, title: "Fully online", text: "Do everything from your phone — from Rajahmundry or anywhere in India." },
  { icon: Headphones, title: "Dedicated client support", text: "One point of contact on WhatsApp from the first call to final delivery." },
];


function WhyAndReviews() {
  const site = useSite();
  const content = useContent();
  const REVIEWS = content.reviewsSection.show ? content.reviews.slice(0, 3) : [];
  const rs = content.reviewsSection;
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:items-start">
        <div>
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">Why {site.siteName}</p>
          <h2 className="text-3xl font-bold sm:text-[38px] sm:leading-tight">Why Businesses Trust Us</h2>
          <div className="mt-8 space-y-5">
            {WHY.map((w) => (
              <div key={w.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <w.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{w.title}</h3>
                  <p className="text-[15px]">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {REVIEWS.length > 0 && <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">What Our Clients Say</h3>
            {rs.rating && (
              <a href={rs.googleUrl || undefined} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[14px]">
                <span className="flex text-brand">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-4 w-4 fill-current" />)}</span>
                {rs.rating} on Google{rs.ratingCount ? ` (${rs.ratingCount})` : ""}
              </a>
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {REVIEWS.map((r, idx) => (
              <figure key={r.id} className={`rounded-2xl border border-line bg-white p-6 ${idx === 2 ? "sm:col-span-2" : ""}`}>
                <div className="flex text-brand">{Array.from({ length: r.rating }, (_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-navy">"{r.text}"</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-royal text-[14px] font-bold text-white">
                    {r.name[0]}
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{r.name}</span>
                    <span className="text-[13px]">{r.place}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>}
      </div>
    </section>
  );
}


function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const FAQS = useContent().faqs;
  if (!FAQS.length) return null;
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="container-x max-w-3xl">
        <SectionHead eyebrow="FAQ" title="Common Questions" />
        <div className="space-y-3">
          {FAQS.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.id} className="rounded-2xl border border-line bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-navy"
                  aria-expanded={isOpen}
                >
                  {f.q}
                  <ChevronDown className={`h-5 w-5 shrink-0 text-brand transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px]">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LatestPosts() {
  const content = useContent();
  if (!content.blog.show || !content.posts.length) return null;
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">{content.blog.title || "Blog"}</p>
            <h2 className="text-3xl font-bold sm:text-[38px] sm:leading-tight">Tips & Guides</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-1.5 font-semibold text-royal hover:gap-2.5">
            See all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.posts.slice(0, 3).map((p) => (
            <PostCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  const site = useSite();
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-royal to-navy px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative text-3xl font-bold !text-white sm:text-4xl">Ready to Grow Your Business?</h2>
          <p className="relative mx-auto mt-3 max-w-lg text-[17px] text-white/85">
            Talk to our expert today. The first consultation is free.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-brand">Get Free Consultation</Link>
            <a href={waLink(site.whatsapp)} target="_blank" rel="noreferrer" className="btn-ghost">
              <WaIcon /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <>
      <HeroSlider />
      <EnquiryBar />
      <CategoryBanners />
      <WhoWeHelp />
      <Popular />
      <AboutFounder />
      <Process />
      <WhyAndReviews />
      <LatestPosts />
      <Faq />
      <CtaBand />
    </>
  );
}
