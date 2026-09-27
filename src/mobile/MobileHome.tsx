import { useState } from "react";
import { motion } from "motion/react";

// Dedicated mobile/tablet home layout (shown below the lg breakpoint). Reuses the
// same content and images as the desktop canvas, but with a fluid, stacked,
// semantic layout instead of the fixed 1980px scaled design.

const A = "/assets";

const nav = [
  { label: "About", href: "#m-about" },
  { label: "Work", href: "#m-work" },
  { label: "Experience", href: "#m-experience" },
  { label: "Skills", href: "#m-skills" },
  { label: "AI Jam", href: "#m-aijam" },
  { label: "Contact", href: "#m-contact" },
];

const aboutTable = [
  { k: "Current Role", v: "Senior UX Designer" },
  { k: "Company", v: "Coredge.io, Noida" },
  { k: "Focus", v: "Product UX, User Experience" },
  { k: "Experience", v: "5+ years" },
  { k: "Background", v: "Cloud & SaaS, EdTech, Web3, Healthcare, Blockchain" },
];

const workCards = [
  {
    img: `${A}/nubo-cloud-console.png`,
    title: "Public Cloud Experience",
    tags: ["Cloud Platform", "Enterprise UX", "SaaS"],
    desc: "Designed a cloud platform interface that simplifies complex workflows for modern infrastructure.",
    href: "#public-cloud-experience",
  },
  {
    img: `${A}/med-showcase.png`,
    title: "Medical App",
    tags: ["Healthcare", "Mobile App"],
    desc: "Crafted a mobile app experience that takes the hassle out of healthcare.",
    href: "#medical-app-experience",
  },
  {
    img: `${A}/fit-showcase.png`,
    title: "Fitness App",
    tags: ["Fitness", "Health & Wellness", "Mobile App"],
    desc: "An at-home fitness experience built for busy, modern lifestyles.",
    href: "#fitness-app-experience",
  },
  {
    img: `${A}/blk-showcase.png`,
    title: "Block Explorer",
    tags: ["Web3", "Fintech", "Data Viz"],
    desc: "Balanced innovation and familiarity in a redesigned blockchain explorer interface.",
    href: "#block-explorer",
  },
  {
    img: `${A}/w3-showcase.png`,
    title: "Web3 Website",
    tags: ["Web3", "Landing Page", "Website Design"],
    desc: "Crafted a Web3 website that stood out in the industry, playful and modern.",
    href: "#web3-landing-page",
  },
];

const aijam = [
  { img: `${A}/ebb88.png`, title: "Kitsch Odyssey", sub: "Contemporary Indian kitsch series", href: "#kitsch-odyssey" },
  { img: `${A}/05370.png`, title: "Jharokhas", sub: "Royal arches, modern chill", href: "#jharokhas" },
  { img: `${A}/d07da.png`, title: "Summer Remix", sub: "Gen-Z summer collage prints", href: "#summer-remix" },
];

const experience = [
  {
    company: "Coredge.io · Noida",
    role: "Senior UX Designer",
    period: "Apr 2026 – Present",
    current: true,
    points: [
      "Leading UX for a multi-tenant cloud infrastructure portal alongside product teams.",
      "Built and maintained a design system with 200+ components.",
    ],
  },
  {
    company: "Coredge.io · Noida",
    role: "UX Designer",
    period: "Sept 2023 – Mar 2026",
    points: [
      "Led custom UX for the cloud platform across telecom, healthcare and government clients.",
      "Defined major product features with refined UX for seamless operations.",
    ],
  },
  {
    company: "Airchains Network · Gurugram",
    role: "UX Designer",
    period: "Feb 2023 – Sept 2023",
    points: [
      "Designed Web3 products for blockchain infrastructure, including block explorer UI.",
      "Led end-to-end UX for Airchains' clients including State Govt. entities.",
    ],
  },
  {
    company: "DTroffle Digital Marketing · Remote",
    role: "UX Design Intern",
    period: "Aug 2022 – Oct 2022",
    points: ["Designed and delivered client websites and mobile apps end to end."],
  },
  {
    company: "Freelance · Remote",
    role: "UX Designer",
    period: "Dec 2020 – Jan 2023",
    points: [
      "Delivered end-to-end product design for web and mobile, research to handoff.",
      "Built scalable design systems and ran user research and usability testing.",
    ],
  },
];

const tools = [
  { label: "Figma", src: `${A}/d70d4.svg` },
  { label: "Claude", src: `${A}/ee3df.svg` },
  { label: "Cursor", src: `${A}/6844e.svg` },
  { label: "Miro", src: `${A}/7e8ad.svg` },
  { label: "Framer", src: `${A}/bf1ce.svg` },
  { label: "Webflow", src: `${A}/1fb5d.svg` },
  { label: "Balsamiq", src: `${A}/ef0c1.svg` },
];
const uxSkills = [
  { label: "Design Thinking", src: `${A}/c942c.svg` },
  { label: "Product Design", src: `${A}/750e1.svg` },
  { label: "Mobile App Design", src: `${A}/f9d47.svg` },
  { label: "Web Design", src: `${A}/c22c7.svg` },
  { label: "User Flows", src: `${A}/b4622.svg` },
  { label: "Wireframing", src: `${A}/17f7a.svg` },
  { label: "Prototyping", src: `${A}/0e876.svg` },
  { label: "UX Strategy", src: `${A}/86515.svg` },
  { label: "Design Systems", src: `${A}/85b8f.svg` },
];
const additional = [
  { label: "Microsoft 365", src: `${A}/db18b.svg` },
  { label: "Adobe Creative Suite", src: `${A}/b022e.svg` },
];
const certs = [
  { t: "Google UX Design Professional Certificate", d: "May 2022" },
  { t: "Affordances: Designing Intuitive User Interfaces", d: "IxDF Course · March 2025" },
  { t: "Accessibility: How to Design for All", d: "IxDF Course · March 2025" },
];

const LINKEDIN = "https://www.linkedin.com/in/yashi-bhatnagar/";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff5c3a]/60 bg-black px-4 py-1.5 text-[12px] uppercase tracking-[2px] text-[#ff5c3a]">
      <span>{n}</span>
      <span>·</span>
      <span>{children}</span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#ff5c3a]/40 bg-[rgba(255,92,58,0.08)] px-3 py-1 text-[13px] text-[#ff5c3a]">
      {children}
    </span>
  );
}

function IconPill({ label, src }: { label: string; src: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#ff5c3a]/40 bg-[rgba(255,92,58,0.08)] px-3 py-1 text-[13px] text-[#ffb096]">
      <img src={src} alt="" className="size-[14px] shrink-0" />
      {label}
    </span>
  );
}

export default function MobileHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const go = (href: string) => {
    setMenuOpen(false);
    scrollToId(href.replace("#", ""));
  };

  const sendInvite = () => {
    const subject = encodeURIComponent("Project Invite for Yashi");
    const body = encodeURIComponent(
      `Hi Yashi,\n\nI'd like to invite you to a project.\n\nYou can reach me at: ${email || "(add your email)"}\n\nThanks!`
    );
    window.location.href = `mailto:bhatnagar2898@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="mobile-root" className="dot-grid min-h-screen overflow-x-hidden bg-[#0d0d0d] pb-[100px] pt-[65px] font-['Syne'] text-white">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[#1e1e1e] bg-[#0d0d0d]/90 px-5 py-4 backdrop-blur">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-1">
          <span className="text-[26px] font-extrabold text-[#ff5c3a]">YB</span>
          <span className="text-[#ff5c3a]">✦</span>
        </button>
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex size-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-[#292929]"
        >
          <span className="h-[2px] w-5 bg-white" />
          <span className="h-[2px] w-5 bg-white" />
          <span className="h-[2px] w-5 bg-white" />
        </button>
      </header>

      {menuOpen && (
        <nav className="fixed left-0 right-0 top-[65px] z-40 flex flex-col border-b border-[#1e1e1e] bg-[#0d0d0d]/95 px-5 py-2 backdrop-blur">
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="py-3 text-left text-[18px] text-[#abacb3] transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="my-2 rounded-lg bg-[#ff5c3a] px-4 py-3 text-center font-bold text-white"
          >
            Let's Talk
          </a>
        </nav>
      )}

      {/* Hero */}
      <section id="m-hero" className="px-4 pt-8 pb-12">
        <div className="relative px-5 pb-11 pt-12">
          {/* Marching-ants animated border */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
            <rect
              className="ants-rect"
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              fill="none"
              stroke="#ff5c3a"
              strokeWidth="0.75"
              strokeDasharray="12 8"
            />
          </svg>
          {/* Corner squares */}
          <span className="absolute -left-1 -top-1 size-[10px] bg-[#ff5c3a]" />
          <span className="absolute -right-1 -top-1 size-[10px] bg-[#ff5c3a]" />
          <span className="absolute -bottom-1 -left-1 size-[10px] bg-[#ff5c3a]" />
          <span className="absolute -bottom-1 -right-1 size-[10px] bg-[#ff5c3a]" />

          {/* Layered name (outline behind, solid in front) */}
          <div className="relative">
            <h1 className="text-[36px] font-extrabold leading-[0.98] tracking-[0px] text-transparent [-webkit-text-stroke:1.5px_rgba(255,92,58,0.45)] sm:text-[60px]">
              Yashi
              <br />
              Bhatnagar
            </h1>
            <h1 className="absolute left-[4px] top-[4px] text-[36px] font-extrabold leading-[0.98] tracking-[0px] text-white sm:text-[60px]">
              Yashi
              <br />
              Bhatnagar
            </h1>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#ff5c3a] px-5 py-2">
            <span className="size-2 rounded-full bg-[#ff5c3a]" />
            <span className="font-bold">Senior UX Designer</span>
          </div>
          <p className="mt-5 text-[18px] leading-[1.5] text-[#abacb3]">
            I design fresh experiences from scratch — and sprinkle some magic on existing ones.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => go("#m-work")} className="rounded-md bg-[#ff5c3a] px-6 py-3.5 font-bold text-white">
              View Work →
            </button>
            <button
              onClick={() => go("#m-contact")}
              className="rounded-md border border-[#ff5c3a] px-6 py-3.5 font-bold text-[#ff5c3a]"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="m-about" className="scroll-mt-20 border-t border-[#1e1e1e] bg-[#101010] px-5 py-14">
        <SectionLabel n="01">About</SectionLabel>

        {/* Profile — Figma "selected layer" treatment, matching desktop. Each piece
            starts tilted/distorted and springs into alignment when scrolled into view. */}
        <div className="relative mx-auto mb-10 mt-2 w-full max-w-[420px] px-2">
          <motion.div
            className="relative border border-[#ff5c3a] bg-[#1a1a1a] p-3 shadow-[4px_4px_20px_0px_rgba(255,92,58,0.2)]"
            initial={{ rotate: 6, scale: 1.05 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
          >
            <img
              src={`${A}/bbb62.png`}
              alt="Yashi Bhatnagar"
              className="block h-[440px] w-full object-cover object-top sm:h-[520px]"
            />
          </motion.div>

          {/* Top-left annotation label */}
          <motion.div
            className="absolute -left-1 -top-3 rounded-[4px] border border-[#343434] bg-[#0d0d0d] px-3 py-1.5"
            initial={{ rotate: 10, x: 8, y: 5, opacity: 0 }}
            whileInView={{ rotate: 0, x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
          >
            <span className="whitespace-nowrap font-['Syne'] text-[11px] tracking-[1px] text-[#abacb3]">
              layer : yashi_profile · selected
            </span>
          </motion.div>

          {/* Bottom-right metadata label */}
          <motion.div
            className="absolute -bottom-3 -right-1 rounded-[4px] border border-[#343434] bg-[#0d0d0d] px-3 py-1.5"
            initial={{ rotate: -9, x: -6, y: 6, opacity: 0 }}
            whileInView={{ rotate: 0, x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ type: "spring", bounce: 0.35, duration: 0.75 }}
          >
            <span className="whitespace-nowrap font-['Syne'] text-[10px] tracking-[0.6px] text-[#abacb3]">
              w:540 · H: 680 · opacity: 100% · blend: normal
            </span>
          </motion.div>
        </div>
        <p className="text-[19px] leading-[1.55] text-white/90 md:text-[22px]">
          I taught myself design through late nights, real projects, and no textbooks — then spent 5 years turning messy
          ideas into products people actually enjoy using. Good design disappears; it just makes sense, solves real
          problems, and feels human.
        </p>
        <div className="mt-7 overflow-hidden rounded-[12px] border border-[#343434]">
          {aboutTable.map((r) => (
            <div key={r.k} className="flex items-start justify-between gap-4 border-b border-[#343434] px-5 py-4 last:border-b-0">
              <span className="shrink-0 text-[15px] text-[#abacb3]">{r.k}</span>
              <span className="min-w-0 break-words text-right text-[15px] text-white">{r.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="m-work" className="scroll-mt-20 border-t border-[#1e1e1e] px-5 py-14">
        <SectionLabel n="02">Selected Work</SectionLabel>
        <h2 className="mb-7 text-[34px] font-bold leading-[1.15]">Projects that shaped how I think about design</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {workCards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="block overflow-hidden rounded-[12px] border border-[#232323] bg-[#141414] transition-colors hover:border-[#ff5c3a]"
            >
              <img src={c.img} alt={c.title} className="aspect-[16/10] w-full object-cover" />
              <div className="p-5">
                <h3 className="text-[24px] font-bold">{c.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
                <p className="mt-3 text-[16px] leading-[1.55] text-[#abacb3]">{c.desc}</p>
                <span className="mt-4 inline-block font-bold text-[#ff5c3a]">View Case Study →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="m-experience" className="scroll-mt-20 border-t border-[#1e1e1e] bg-[#101010] px-5 py-14">
        <SectionLabel n="03">Experience</SectionLabel>
        <h2 className="mb-7 text-[34px] font-bold leading-[1.15]">A flow of 5+ years, node by node</h2>
        <div className="flex flex-col gap-5">
          {experience.map((e) => (
            <div key={e.company + e.role} className="rounded-[12px] border border-[#343434] bg-[#1a1a1a] p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="min-w-0 break-words text-[15px] font-bold text-[#ff5c3a]">{e.company}</span>
                {e.current && (
                  <span className="shrink-0 rounded-full border border-[#ff5c3a] bg-[rgba(255,92,58,0.1)] px-3 py-1 text-[12px] text-[#ff5c3a]">
                    Current
                  </span>
                )}
              </div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="min-w-0 break-words text-[20px] font-bold">{e.role}</span>
                <span className="shrink-0 text-[13px] text-[#abacb3]">{e.period}</span>
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2 text-[16px] leading-[1.5] text-[#abacb3]">
                    <span className="text-[#ff5c3a]">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="m-skills" className="scroll-mt-20 border-t border-[#1e1e1e] px-5 py-14">
        <SectionLabel n="04">Toolkit & Certifications</SectionLabel>
        <div className="flex flex-col gap-7">
          <div>
            <h3 className="mb-4 text-[15px] font-semibold tracking-[1px]">UI/UX & Wireframing Tools</h3>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((t) => (
                <IconPill key={t.label} label={t.label} src={t.src} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-[15px] font-semibold tracking-[1px]">UX Skills</h3>
            <div className="flex flex-wrap gap-2.5">
              {uxSkills.map((t) => (
                <IconPill key={t.label} label={t.label} src={t.src} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-[15px] font-semibold tracking-[1px]">Additional Tools</h3>
            <div className="flex flex-wrap gap-2.5">
              {additional.map((t) => (
                <IconPill key={t.label} label={t.label} src={t.src} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-[15px] font-semibold tracking-[1px]">Certifications</h3>
            <div className="flex flex-col gap-3">
              {certs.map((c) => (
                <div key={c.t} className="rounded-[10px] border border-[#494949] bg-[#1a1a1a] p-4">
                  <div className="text-[17px] font-bold text-[#ff5c3a]">{c.t}</div>
                  <div className="mt-1 text-[14px] text-[#abacb3]">{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Jam */}
      <section id="m-aijam" className="scroll-mt-20 border-t border-[#1e1e1e] bg-[#101010] px-5 py-14">
        <SectionLabel n="05">AI Jam</SectionLabel>
        <h2 className="mb-2 text-[34px] font-bold leading-[1.15]">Late Night Prompts</h2>
        <p className="mb-7 text-[16px] text-[#abacb3]">
          Teaching generative models some taste, one poster set and twenty iterations at a time.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {aijam.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="block overflow-hidden rounded-[12px] border border-[#232323] bg-black transition-colors hover:border-[#ff5c3a]"
            >
              <img src={c.img} alt={c.title} className="aspect-[4/5] w-full object-cover" />
              <div className="p-5">
                <h3 className="text-[22px] font-bold">{c.title}</h3>
                <p className="mt-1 text-[15px] text-[#abacb3]">{c.sub}</p>
                <span className="mt-3 inline-block font-bold text-[#ff5c3a]">View Set →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="m-contact" className="scroll-mt-20 border-t border-[#1e1e1e] px-5 py-14">
        <SectionLabel n="06">Contact</SectionLabel>
        <h2 className="text-[32px] font-bold leading-[1.15]">Invite Yashi to your project</h2>
        <p className="mt-3 text-[17px] text-[#abacb3]">
          Open to full-time roles, freelance collaboration, and design discussions.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendInvite()}
            className="h-[52px] rounded-lg border border-[#292929] bg-black px-4 text-[16px] text-white outline-none placeholder:text-[#5a5a5a] focus:border-[#ff5c3a]"
          />
          <button onClick={sendInvite} className="h-[52px] rounded-lg bg-[#ff5c3a] font-bold text-white">
            Send Invite →
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-lg border border-[#292929] px-4 py-4"
          >
            <span className="min-w-0 text-[16px]">LinkedIn</span>
            <span className="shrink-0 rounded border border-[#ff5c3a] px-2.5 py-1 text-[12px] text-[#ff5c3a]">Can Collaborate</span>
          </a>
          <a
            href="mailto:bhatnagar2898@gmail.com"
            className="flex items-center justify-between gap-3 rounded-lg border border-[#292929] px-4 py-4"
          >
            <span className="min-w-0 break-all text-[16px]">bhatnagar2898@gmail.com</span>
            <span className="shrink-0 rounded border border-[#ffb096] px-2.5 py-1 text-[12px] text-[#ffb096]">Can View</span>
          </a>
        </div>
        <p className="mt-6 text-center text-[15px] text-[#abacb3]">Response time — usually within 12hrs</p>
      </section>

      <footer className="border-t border-[#1e1e1e] px-5 py-8 text-center text-[14px] text-[#abacb3]">
        © Yashi Bhatnagar — UX/UI Designer, India
      </footer>
    </div>
  );
}
