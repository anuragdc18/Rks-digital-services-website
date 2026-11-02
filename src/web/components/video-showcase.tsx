import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Play, X, Clapperboard, Music2, PartyPopper } from "lucide-react";
import { asset } from "../lib/demo";
import { serviceUrl } from "../lib/site";

/** Home page "AI Video Studio": a fan of phone frames with RKS sample videos. */
type Clip = { file: string; title: string; tag: string };

const CLIPS: Clip[] = [
  { file: "saree-ad", title: "Saree Ad", tag: "Promo Ad" },
  { file: "wedding-invitation", title: "Wedding Invitation", tag: "Invitation" },
  { file: "jewellery-ad", title: "Jewellery Ad", tag: "Promo Ad" },
  { file: "rks-brand-song", title: "RKS Brand Song", tag: "Brand Song" },
  { file: "perfume-ad", title: "Perfume Ad", tag: "Promo Ad" },
];

// fan layout on large screens: rotation / lift / size per position (centre is the hero)
const FAN = [
  "lg:-rotate-[10deg] lg:translate-y-10 lg:scale-[0.86]",
  "lg:-rotate-[5deg] lg:translate-y-3 lg:scale-[0.93]",
  "lg:z-10 lg:scale-105",
  "lg:rotate-[5deg] lg:translate-y-3 lg:scale-[0.93]",
  "lg:rotate-[10deg] lg:translate-y-10 lg:scale-[0.86]",
];

const LINKS = [
  { icon: Clapperboard, name: "AI Promo & Ad Videos" },
  { icon: Music2, name: "AI Brand Song & Jingle" },
  { icon: PartyPopper, name: "Invitation & Greeting Videos" },
];

const src = (f: string) => asset(`/videos/work/${f}.mp4`);
const poster = (f: string) => asset(`/videos/work/${f}.jpg`);

function Phone({ clip, fan, onOpen }: { clip: Clip; fan: string; onOpen: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  // silent preview while the mouse is over the phone (desktop only)
  const preview = (on: boolean) => {
    const v = ref.current;
    if (!v || !window.matchMedia("(hover: hover)").matches) return;
    if (on) {
      if (!v.src) v.src = src(clip.file);
      v.play().catch(() => {});
    } else v.pause();
  };
  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => preview(true)}
      onMouseLeave={() => preview(false)}
      aria-label={`Play ${clip.title}`}
      className={`group relative w-[190px] shrink-0 snap-center transition duration-500 sm:w-[210px] lg:w-auto lg:hover:z-20 lg:hover:rotate-0 lg:hover:translate-y-0 lg:hover:scale-110 ${fan}`}
    >
      <div className="relative overflow-hidden rounded-[30px] border-[6px] border-[#0b1530] bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/15">
        <span className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#0b1530]" />
        <img src={poster(clip.file)} alt="" loading="lazy" className="block aspect-[9/16] w-full object-cover" />
        <video ref={ref} muted loop playsInline preload="none" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-3 pb-3 pt-12 text-left">
          <span className="rounded-full bg-brand px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-white">{clip.tag}</span>
          <p className="mt-1.5 text-[14px] font-semibold text-white">{clip.title}</p>
        </div>
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-lg transition group-hover:scale-90 group-hover:opacity-0">
          <Play className="ml-0.5 h-6 w-6 fill-current" />
        </span>
      </div>
    </button>
  );
}

export function VideoShowcase() {
  const [open, setOpen] = useState<Clip | null>(null);
  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      {/* film-strip edges + soft glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0_14px,transparent_14px_28px)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0_14px,transparent_14px_28px)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-royal/40 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> RKS AI Video Studio
          </p>
          <h2 className="text-3xl font-bold !text-white sm:text-[38px] sm:leading-tight">Videos That Stop the Scroll</h2>
          <p className="mt-3 text-[16px] text-white/75">
            Ads, brand songs and invitations we have made with AI — no costly shoot needed. Tap any video to watch.
          </p>
        </div>

        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 [scrollbar-width:none] lg:mx-auto lg:mt-14 lg:grid lg:max-w-5xl lg:grid-cols-5 lg:items-center lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-10">
          {CLIPS.map((c, i) => (
            <Phone key={c.file} clip={c} fan={FAN[i]} onOpen={() => setOpen(c)} />
          ))}
        </div>
        <p className="text-center text-[12.5px] text-white/50 lg:hidden">Swipe to see more →</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {LINKS.map((l) => (
            <Link
              key={l.name}
              to={serviceUrl("ai-tools", l.name)}
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-[14px] font-semibold text-white ring-1 ring-white/20 transition hover:bg-brand hover:ring-brand"
            >
              <l.icon className="h-4 w-4 text-brand group-hover:text-white" /> {l.name}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-sm" onClick={() => setOpen(null)} role="dialog" aria-label={open.title}>
          <div className="relative w-full max-w-[min(400px,calc((100vh-120px)*9/16))]" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setOpen(null)} aria-label="Close" className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25">
              <X className="h-5 w-5" />
            </button>
            <video src={src(open.file)} poster={poster(open.file)} controls autoPlay playsInline controlsList="nodownload" className="block aspect-[9/16] w-full rounded-2xl bg-black object-contain" />
            <p className="mt-3 text-center text-[15px] font-semibold text-white">{open.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
