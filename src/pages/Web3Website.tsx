import type { ReactNode } from "react";

// Case study page — "Web3 Landing Page" (Whizrolls). Shares the app chrome
// (header, sidebar, scrubber) via App; rendered inside the same scaled 1980px
// canvas. Layout mirrors the Figma export: intro, a zig-zag timeline, a key
// sections grid, a full-page capture placeholder, and a contact line.

const problems = [
  "Communicating complex Web3 concepts in a simplified, user-friendly manner",
  "Building credibility for a new brand through strong visual identity and structure",
  "Creating visual hierarchy and flow to lead users through the page effortlessly",
  "Ensuring responsiveness and accessibility across devices",
];

const results = [
  "Improved content flow and scannability for faster user comprehension",
  "Established a strong visual identity aligned with Web3 culture",
  "Provided a scalable layout to support future product updates and growth",
  "Enhanced brand positioning during product announcement and onboarding",
];

const keySections = [
  { t: "Hero Section", d: "Catchy headline, short pitch, and a primary CTA." },
  { t: "Product Highlights", d: "Clear presentation of features and use cases." },
  { t: "Community & Ecosystem", d: "Logos, testimonials, and community engagement points." },
  { t: "Footer", d: "Navigation, social links, and token-related info." },
];

const serif = "font-['Syne']";
const body = "font-['Syne'] font-normal text-[#7d8590] text-[18px] leading-[1.6] tracking-[0.18px]";
const label = "font-['Syne'] text-[14px] uppercase tracking-[3px] text-[#6b7280]";
const cardBase = "rounded-[12px] border border-[#292929] border-solid bg-[#141414] p-[28px]";

function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute size-[14px] rounded-full bg-[#ff5c3a] shadow-[0_0_14px_2px_rgba(255,92,58,0.55)] ${className}`}
    />
  );
}

function DashedPill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`inline-flex w-fit items-center gap-[11px] rounded-full border border-dashed border-[#5a5a5a] bg-black px-[26px] py-[13px] font-['Syne'] text-[16px] tracking-[0.3px] text-[#ff5c3a] ${className}`}
    >
      <span className="size-[10px] rounded-full bg-[#ff5c3a]" />
      {children}
    </div>
  );
}

export default function Web3Website() {
  return (
    <div className="relative z-0 w-[1980px] pb-[120px] pt-[180px]">
      <div className="mx-auto flex w-[1748px] flex-col gap-[130px]">
        {/* Intro */}
        <section className="flex flex-col gap-[28px]">
          <DashedPill>case study — web3 landing page</DashedPill>
          <h1 className={`${serif} font-bold text-white text-[80px] leading-[1.05] tracking-[1px]`}>
            Web3 Landing Page
          </h1>
          <p className={`${body} max-w-[900px]`}>
            Whizrolls is a Web3 platform aiming to simplify access to decentralized tools through an engaging,
            future-ready interface. The landing page communicates the brand's purpose clearly, establishes trust in a
            competitive space, and guides users through key offerings — breaking away from typical Web3 clutter with a
            layout that appeals to both crypto-savvy users and newcomers.
          </p>
        </section>

        {/* Timeline */}
        <section className="relative">
          <div className="pointer-events-none absolute bottom-[20px] left-[6px] top-[16px] border-l border-dashed border-[#33383f]" />
          <div className="flex flex-col gap-[120px]">
            {/* Intro heading */}
            <div className="relative pl-[80px]">
              <Dot className="left-0 top-[16px]" />
              <h2 className={`${serif} font-bold text-white text-[46px] leading-[1.2] max-w-[720px]`}>
                A Web3 experience that balances innovation with clarity
              </h2>
            </div>

            {/* 01 — Problems & Challenges (right) */}
            <div className="relative flex justify-end pr-[80px]">
              <Dot className="right-0 top-[8px]" />
              <div className="flex max-w-[760px] flex-col items-end gap-[20px] text-right">
                <span className={label}>01 — Problems &amp; Challenges</span>
                <div className="flex flex-col gap-[14px]">
                  {problems.map((p) => (
                    <p key={p} className="font-['Syne'] text-[18px] leading-[1.5] text-[#c1c1c1]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* 02 — Results (left) */}
            <div className="relative pl-[80px]">
              <Dot className="left-0 top-[8px]" />
              <div className="flex max-w-[760px] flex-col gap-[20px]">
                <span className={label}>02 — Results</span>
                <p className={body}>
                  The final design helped elevate Whizrolls' digital presence with a clean, confident landing page that
                  effectively communicates what they do and why it matters.
                </p>
                <div className="flex flex-col gap-[12px]">
                  {results.map((r) => (
                    <div key={r} className="flex items-start gap-[10px]">
                      <span className="mt-[1px] font-['Syne'] text-[#ff5c3a]">→</span>
                      <span className="font-['Syne'] text-[17px] leading-[1.5] text-[#c1c1c1]">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 03 — Design Solution (right) */}
            <div className="relative flex justify-end pr-[80px]">
              <Dot className="right-0 top-[8px]" />
              <div className="flex max-w-[760px] flex-col items-end gap-[20px] text-right">
                <span className={label}>03 — Design Solution</span>
                <p className={`${body} text-right`}>
                  The process began with defining content structure and user flow around the target audience's
                  expectations — wireframes outlined the hero, feature highlights, community engagement, and
                  calls-to-action. A dark UI with coral accents reflects the same confident, future-ready tone used
                  across this portfolio, with bold typography, clean icons, and subtle motion for energy and clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key sections designed */}
        <section className="flex flex-col gap-[40px]">
          <h2 className={`${serif} font-bold text-white text-[46px] tracking-[0.5px]`}>
            Key sections <span className="text-[#ff5c3a]">designed</span>
          </h2>
          <div className="grid grid-cols-2 gap-[24px]">
            {keySections.map((k) => (
              <div key={k.t} className={cardBase}>
                <div className="font-['Syne'] font-bold text-white text-[20px]">{k.t}</div>
                <p className="mt-[10px] font-['Syne'] text-[16px] leading-[1.6] text-[#929292]">{k.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The page */}
        <section className="flex flex-col items-center gap-[44px]">
          <DashedPill className="text-[14px] uppercase tracking-[2px]">04 — the page</DashedPill>
          <div className="w-[820px] overflow-hidden rounded-[20px] border border-[#292929] border-solid">
            <img
              src="/assets/w3-full-page.png"
              alt="Whizrolls landing page — full scroll capture"
              className="block h-auto w-full"
            />
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col items-center gap-[14px]">
          <h2 className={`${serif} font-bold text-white text-[44px] tracking-[0.5px]`}>
            Let's talk about your project
          </h2>
          <a
            href="mailto:bhatnagar2898@gmail.com"
            className="font-['Syne'] text-[20px] text-[#ff5c3a] transition-opacity hover:opacity-80"
          >
            bhatnagar2898@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
}
