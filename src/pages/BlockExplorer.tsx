import type { ReactNode } from "react";

// Case study page — "Block Explorer Project" (Blockscope). Shares the app
// chrome (header, sidebar, scrubber) via App; rendered inside the same scaled
// 1980px canvas. The Blockscope product UI is recreated with a green accent so
// it reads as a distinct embedded product against the portfolio's orange chrome,
// matching the reference wireframe.

const GREEN = "#1fe08a";
const GREEN_DARK = "#0a3d2e";

const tags = ["Web3", "Fintech", "NFT", "Data Visualisation"];

const results = [
  "Redesigned the UI to break away from conventional block explorer patterns, introducing a distinctive visual language that stands out from industry norms.",
  "Improved user engagement by delivering a more intuitive, visually streamlined interface while maintaining core blockchain data accessibility.",
  "Enhanced discoverability and navigation through a clearer information hierarchy, consistent visual cues, and a simplified layout structure.",
  "Validated usability with interactive prototypes and user testing, balancing innovation with familiarity for both new and experienced users.",
];

const expectations = [
  "Break away from the conventional patterns shared by most block explorers, and create a distinctive, brand-aligned visual identity.",
  "Maintain a balance between innovation and familiarity so users can intuitively navigate and interact with blockchain data.",
  "Address usability issues found in existing explorers by streamlining complex data presentation and information hierarchy.",
  "Ensure visual consistency and accessibility across the interface.",
];

const processSteps = [
  { icon: "🔍", t: "Define", d: "Figuring out the problem" },
  { icon: "🧭", t: "Empathize", d: "Understanding the people" },
  { icon: "💡", t: "Ideate", d: "Generate ideas" },
  { icon: "▦", t: "Prototype", d: "Creative & experimentation" },
];

const research = [
  {
    t: "Section mapping",
    d: "defined key content areas for the landing page — blockchain statistics, transaction history infographics, price trends, latest blocks, and transaction rates.",
  },
  {
    t: "Content prioritization",
    d: "identified which elements hold the most user value to ensure a clear and engaging layout.",
  },
  {
    t: "Platform benchmarking",
    d: "analyzed existing blockchain explorer platforms to understand common patterns and areas for differentiation.",
  },
  {
    t: "Insight gathering",
    d: "collected visual and structural references to inform layout decisions aligned with user expectations.",
  },
];

const heading = "font-['Syne'] font-bold text-white text-[40px] tracking-[1px]";
const body = "font-['Syne'] font-normal text-[#7d8590] text-[18px] leading-[1.6] tracking-[0.18px]";

// Small numbered section label, e.g. "01 - RESULTS".
function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="inline-flex w-fit items-center rounded-[6px] border border-[#ff5c3a] border-solid bg-black px-[16px] py-[6px] font-['Syne'] text-[13px] uppercase tracking-[1.6px] text-[#ff5c3a] shadow-[0_0_24px_0_rgba(255,92,58,0.25)]">
      {`${n} - ${label}`}
    </div>
  );
}

function BulletRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-[12px]">
      <span className="mt-[3px] font-['Syne'] font-bold text-[#ff5c3a]">✦</span>
      <p className="font-['Syne'] text-[16px] leading-[1.6] text-[#929292]">{text}</p>
    </div>
  );
}

const blockscopeTabs = ["Landing Page", "NFT Page", "Transaction Details", "Listings"];

function StatChip({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-[10px] rounded-[10px] bg-[#1c1c1c] px-[14px] py-[10px]">
      <span className="size-[26px] shrink-0 rounded-[7px]" style={{ background: color }} />
      <div className="flex flex-col leading-tight">
        <span className="font-['Syne'] text-[10px] uppercase tracking-[0.5px] text-[#7d8590]">{label}</span>
        <span className="font-['Syne'] font-bold text-[13px] text-white">{value}</span>
      </div>
    </div>
  );
}

// Faceted green abstract shape used as the Blockscope hero visual.
function GreenShape({ size = 280 }: { size?: number }) {
  return (
    <div
      className="pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(from 210deg, ${GREEN}, ${GREEN_DARK} 25%, ${GREEN} 50%, ${GREEN_DARK} 72%, ${GREEN})`,
        clipPath: "polygon(50% 0%, 88% 18%, 100% 58%, 72% 100%, 28% 94%, 0% 52%, 14% 14%)",
        filter: "drop-shadow(0 0 44px rgba(31,224,138,0.35))",
      }}
    />
  );
}

// Recreation of the Blockscope landing page UI shown in the design reference.
function BlockscopeMock({ withFooter = false }: { withFooter?: boolean }) {
  return (
    <div className="w-full overflow-hidden rounded-[16px] border border-[#232323] border-solid bg-[#0a0a0a]">
      <div className="flex items-center gap-[28px] border-b border-[#1e1e1e] px-[28px] pt-[16px]">
        {blockscopeTabs.map((t, i) => (
          <div
            key={t}
            className={`pb-[14px] font-['Syne'] text-[14px] ${
              i === 0 ? "border-b-2 border-[#ff5c3a] text-white" : "text-[#6b6b6b]"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden bg-[#111214] px-[36px] py-[34px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="size-[26px] shrink-0 rounded-[6px]" style={{ background: GREEN }} />
            <span className="font-['Syne'] font-bold text-[18px] text-white">Blockscope</span>
          </div>
          <div className="flex items-center gap-[24px] font-['Syne'] text-[13px] text-[#9a9a9a]">
            <span>Blockchains</span>
            <span>Tokens</span>
            <span>Transactions</span>
            <span className="flex items-center gap-[6px] text-white">
              EN <span className="size-[8px] rounded-full" style={{ background: GREEN }} />
            </span>
          </div>
        </div>
        <div className="relative z-10 mt-[40px] max-w-[540px]">
          <h3 className="font-['Syne'] font-bold text-[36px] leading-[1.15] text-white">
            An Ecosystem for Builders and Innovators
          </h3>
          <p className="mt-[14px] font-['Syne'] text-[14px] leading-[1.6] text-[#9a9a9a]">
            The Mantle network is the first Ethereum layer 2 chain initiated by a DAO, BitDAO, seeding an ecosystem of
            projects for the Mantle network.
          </p>
          <div className="mt-[22px] flex items-center gap-[10px] rounded-[10px] border border-[#2a2a2a] border-solid bg-[#161616] px-[16px] py-[12px]">
            <span className="text-[#6b6b6b]">⌕</span>
            <span className="font-['Syne'] text-[13px] text-[#6b6b6b]">Search Address, Transaction, Blocks</span>
          </div>
          <div className="mt-[10px] font-['Syne'] text-[11px] text-[#5a5a5a]">
            Search example: ⬦ Token · ⬦ NFT · ⬦ Contract
          </div>
          <div className="mt-[20px] flex gap-[14px]">
            <StatChip color="#7c5cff" label="Blocks" value="658,421" />
            <StatChip color="#ff5c9a" label="Transactions" value="187,652" />
            <StatChip color="#4c8bff" label="Addresses" value="543,369,420" />
          </div>
        </div>
        <div className="absolute -right-[30px] top-1/2 -translate-y-1/2">
          <GreenShape size={300} />
        </div>
      </div>
      {withFooter && (
        <div className="grid grid-cols-[1fr_360px] gap-[16px] bg-[#0d0d0d] px-[24px] py-[20px]">
          <div className="rounded-[10px] border border-[#1e1e1e] border-solid bg-[#141414] p-[16px]">
            <div className="font-['Syne'] text-[12px] font-bold text-white">24h statistics</div>
            <div className="mt-[4px] font-['Syne'] text-[11px] text-[#6b6b6b]">Transactions</div>
            <div className="mt-[10px] flex items-end gap-[4px]">
              {[40, 65, 35, 80, 55, 70, 45, 90, 60, 50].map((h, i) => (
                <span key={i} className="w-[10px] rounded-t-[2px]" style={{ height: h, background: i % 2 ? GREEN : "#2a2a2a" }} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-[10px] border border-[#1e1e1e] border-solid bg-[#141414] p-[16px]">
            <div className="font-['Syne'] text-[12px] font-bold text-white">Whitepaper</div>
            <div className="mt-[4px] font-['Syne'] text-[11px] leading-[1.5] text-[#6b6b6b]">
              Read the full technical documentation for the Mantle network.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Browser/tablet frame for the hero.
function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#2a2a2a] border-solid bg-[#0a0a0a] p-[14px]">
      <div className="mb-[12px] flex items-center gap-[8px] px-[6px]">
        <span className="size-[10px] rounded-full bg-[#3a3a3a]" />
        <span className="size-[10px] rounded-full bg-[#3a3a3a]" />
        <span className="size-[10px] rounded-full bg-[#3a3a3a]" />
      </div>
      {children}
    </div>
  );
}

// Laptop (MacBook) frame for the results section.
function Laptop({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full">
      <div className="rounded-[18px] border border-[#2a2a2a] border-solid bg-[#0a0a0a] p-[16px]">{children}</div>
      <div className="mx-auto h-[16px] w-[108%] -translate-x-[4%] rounded-b-[12px] bg-gradient-to-b from-[#2c2c2c] to-[#1a1a1a]" />
      <div className="mt-[10px] text-center font-['Syne'] text-[12px] text-[#6b6b6b]">MacBook Air</div>
    </div>
  );
}

// NFT detail panel with a floating "Txn Hash" tooltip (stakeholder expectations).
function ProcessStep({ icon, t, d }: { icon: string; t: string; d: string }) {
  return (
    <div className="flex flex-col items-center gap-[14px] text-center">
      <div className="flex size-[64px] items-center justify-center rounded-[14px] border border-[#292929] border-solid bg-[#141414] text-[26px]">
        {icon}
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className="font-['Syne'] font-bold text-[16px] text-white">{t}</span>
        <span className="font-['Syne'] text-[13px] text-[#7d8590]">{d}</span>
      </div>
    </div>
  );
}

function PersonCard() {
  return (
    <div className="flex flex-col gap-[16px] rounded-[12px] border border-[#292929] border-solid bg-gradient-to-br from-[#1a1a1a] to-[#141414] p-[24px]">
      <div className="flex items-center gap-[14px]">
        <div className="size-[52px] shrink-0 rounded-full bg-[#2a2a2a]" />
        <div className="flex flex-col gap-[2px]">
          <span className="font-['Syne'] font-bold text-[18px] text-white">Daniel Kim</span>
          <span className="font-['Syne'] text-[13px] text-[#7d8590]">User Persona</span>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] pt-[6px]">
        {[90, 70, 82, 60, 78, 66].map((w, i) => (
          <span key={i} className="h-[8px] rounded-full bg-[#232323]" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

function ResearchRow({ t, d }: { t: string; d: string }) {
  return (
    <div className="border-t border-[#232323] border-solid py-[20px] first:border-t-0 first:pt-0">
      <p className="font-['Syne'] text-[16px] leading-[1.6] text-[#c1c1c1]">
        <span className="font-bold text-white">{t}: </span>
        <span className="text-[#929292]">{d}</span>
      </p>
    </div>
  );
}

export default function BlockExplorer() {
  return (
    <div className="relative z-0 w-[1980px] pb-[120px] pt-[180px]">
      <div className="mx-auto flex w-[1748px] flex-col gap-[130px]">
        {/* Hero — centered */}
        <section className="flex flex-col items-center gap-[26px] text-center">
          <div className="inline-flex w-fit items-center gap-[11px] rounded-full border border-dashed border-[#5a5a5a] bg-black px-[26px] py-[13px] font-['Syne'] text-[18px] tracking-[0.3px] text-[#ff5c3a]">
            <span className="size-[10px] rounded-full bg-[#ff5c3a]" />
            case study — web3 / blockchain
          </div>
          <h1 className="font-['Syne'] font-bold text-white text-[72px] leading-[1.05] tracking-[2px]">
            Block Explorer Project
          </h1>
          <p className={`${body} max-w-[880px]`}>
            The client is building a distinctive Block Explorer that breaks away from the conventional design patterns
            seen in existing platforms. While most explorers follow similar structures due to shared standards, this
            project introduces a fresh, unique interface — new and intuitive, yet true to the usability users already
            expect.
          </p>
          <div className="flex flex-wrap justify-center gap-[14px]">
            {tags.map((t) => (
              <div
                key={t}
                className="rounded-full border border-[#3a3a3a] border-solid px-[28px] py-[13px] font-['Syne'] text-[20px] text-[#c1c1c1]"
              >
                {t}
              </div>
            ))}
          </div>
          <div className="mt-[16px] w-full">
            <img
              src="/assets/blk-hero.png"
              alt="Blockscope landing page"
              className="block h-auto w-full rounded-[16px] border border-[#232323] border-solid shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            />
          </div>
        </section>

        {/* Results — left aligned */}
        <section className="flex flex-col gap-[30px]">
          <SectionLabel n="01" label="Results" />
          <div className="flex flex-col gap-[6px]">
            <h2 className={heading}>Results</h2>
            <span className="font-['Syne'] text-[14px] text-[#7d8590]">achieved with UX/UI improvements</span>
          </div>
          <div className="grid grid-cols-2 gap-x-[80px] gap-y-[22px]">
            {results.map((r) => (
              <BulletRow key={r} text={r} />
            ))}
          </div>
          <div className="mt-[26px] w-[70%] self-center">
            <img
              src="/assets/blk-results-laptop.png"
              alt="Blockscope landing page on MacBook"
              className="block h-auto w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </section>

        {/* Stakeholder expectations — left aligned */}
        <section className="flex flex-col gap-[30px]">
          <SectionLabel n="02" label="Expectations" />
          <div className="flex flex-col gap-[6px]">
            <h2 className={heading}>
              What the stakeholders <span className="text-[#ff5c3a]">expected</span>
            </h2>
            <span className="font-['Syne'] text-[14px] text-[#7d8590]">design challenges and objections</span>
          </div>
          <div className="grid grid-cols-[1fr_720px] items-center gap-[70px]">
            <div className="flex flex-col gap-[22px]">
              {expectations.map((e) => (
                <BulletRow key={e} text={e} />
              ))}
            </div>
            <img
              src="/assets/blk-nft-mockup.png"
              alt="Blockscope NFT detail on desktop"
              className="block h-auto w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </section>

        {/* Design Process — centered */}
        <section className="flex flex-col items-center gap-[30px] text-center">
          <h2 className={`${heading} text-center`}>
            Design <span className="text-[#ff5c3a]">Process</span>
          </h2>
          <p className={`${body} max-w-[1000px] text-center`}>
            We followed a design thinking approach, starting with stakeholder discussions and pain-point analysis to
            define the core challenges. Concepts were prototyped, tested, and refined across several cycles — keeping the
            solution user-friendly and visually distinct while staying aligned with functional goals.
          </p>
          <div className="mt-[16px] flex justify-center gap-[90px]">
            {processSteps.map((s) => (
              <ProcessStep key={s.t} {...s} />
            ))}
          </div>
        </section>

        {/* Primary Research — right aligned */}
        <section className="flex flex-col items-end gap-[30px]">
          <SectionLabel n="03" label="Research" />
          <div className="flex flex-col items-end gap-[6px] text-right">
            <h2 className={heading}>
              Primary <span className="text-[#ff5c3a]">Research</span>
            </h2>
            <span className="font-['Syne'] text-[14px] text-[#7d8590]">what's behind the design solutions?</span>
          </div>
          <div className="grid w-full grid-cols-[400px_1fr] gap-[70px]">
            <PersonCard />
            <div className="flex flex-col">
              {research.map((r) => (
                <ResearchRow key={r.t} {...r} />
              ))}
            </div>
          </div>
        </section>

        {/* User Interface — left aligned */}
        <section className="flex flex-col gap-[30px]">
          <SectionLabel n="04" label="Interface" />
          <div className="flex flex-col gap-[6px]">
            <h2 className={heading}>
              User <span className="text-[#ff5c3a]">Interface</span>
            </h2>
            <span className="font-['Syne'] text-[14px] text-[#7d8590]">design & prototype solution</span>
          </div>
          <div className="grid grid-cols-2 gap-[70px]">
            <p className={body}>
              Throughout the design phase, I worked closely with blockchain developers to craft 35 core interface pages
              for the Block Explorer — transaction overviews, detailed transaction records, block summaries, and
              block-level insights, with special attention to visualizing interactions between Layer 1 and Layer 2
              networks.
            </p>
            <p className={body}>
              I also designed the user profile section, letting people access their personal data and chain-related
              activity in one centralized, intuitive space — a more personalized experience for a traditionally
              data-heavy environment.
            </p>
          </div>
          <div className="mt-[24px] grid grid-cols-4 gap-[24px] rounded-[16px] border border-[#1e1e1e] border-solid bg-[#0a0a0a] p-[40px]">
            {Array.from({ length: 42 }, (_, i) => `/assets/blk-ui-${String(i + 1).padStart(2, "0")}.png`).map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Blockscope screen ${i + 1}`}
                className="block h-auto w-full self-start rounded-[10px] border border-[#232323] border-solid shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-[20px] rounded-[16px] border border-[#292929] border-solid bg-[#0f0f0f] px-[40px] py-[70px] text-center">
          <h2 className="font-['Syne'] font-bold text-white text-[40px] tracking-[1px]">Let's talk about your project</h2>
          <p className="font-['Syne'] text-[18px] text-[#7d8590]">Open to full-time roles, freelance collaboration, and design consulting.</p>
          <div className="mt-[8px] flex items-center gap-[16px]">
            <input
              placeholder="Enter your email address"
              className="w-[360px] rounded-full border border-[#343434] bg-[#0d0d0d] px-[22px] py-[14px] font-['Syne'] text-[16px] text-white outline-none placeholder:text-[#5a5a5a] focus:border-[#ff5c3a]"
            />
            <a
              href="mailto:bhatnagar2898@gmail.com"
              className="flex items-center gap-[8px] rounded-full bg-[#ff5c3a] px-[28px] py-[14px] font-['Syne'] font-bold text-[16px] text-white transition-transform hover:-translate-y-0.5"
            >
              Send Invite →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
