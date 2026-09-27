import MobilePageShell, { MSectionPill, MHeading, MBody, MShot, MScreenGrid, MTag, MInviteCTA } from "../MobilePageShell";

const A = "/assets";
const blkUi = Array.from({ length: 42 }, (_, i) => `${A}/blk-ui-${String(i + 1).padStart(2, "0")}.png`);

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
  { t: "Define", d: "Figuring out the problem" },
  { t: "Empathize", d: "Understanding the people" },
  { t: "Ideate", d: "Generate Ideas" },
  { t: "Prototype", d: "Creation & Experimentation" },
];

const research = [
  { t: "Section mapping", d: "defined key content areas for the landing page — blockchain statistics, transaction history infographics, price trends, latest blocks, and transaction rates." },
  { t: "Content prioritization", d: "identified which elements hold the most user value to ensure a clear and engaging layout." },
  { t: "Platform benchmarking", d: "analyzed existing blockchain explorer platforms to understand common patterns and areas for differentiation." },
  { t: "Insight gathering", d: "collected visual and structural references to inform layout decisions aligned with user expectations." },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-4">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-[16px] leading-[1.55] text-[#abacb3]">
          <span className="mt-2 size-2 shrink-0 rounded-full bg-[#ff5c3a]" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MobileBlock() {
  return (
    <MobilePageShell eyebrow="Block Explorer">
      {/* Hero */}
      <section className="px-5 pb-10 pt-8">
        <MSectionPill label="case study — web3 / blockchain" />
        <h1 className="text-[36px] font-extrabold leading-[1.05] sm:text-[52px]">Block Explorer Project</h1>
        <p className="mt-5 text-[16px] leading-[1.6] text-[#abacb3]">
          The client is building a distinctive Block Explorer that breaks away from the conventional design patterns seen in
          existing platforms. While most explorers follow similar structures due to shared standards, this project introduces
          a fresh, unique interface — new and intuitive, yet true to the usability users already expect.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Web3", "Fintech", "NFT", "Data Visualisation"].map((t) => (
            <MTag key={t}>{t}</MTag>
          ))}
        </div>
        <div className="mt-8">
          <MShot src={`${A}/blk-hero.png`} alt="Blockscope landing page" />
        </div>
      </section>

      {/* Results */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="01" label="Results" />
        <MHeading>Results</MHeading>
        <p className="-mt-2 text-[15px] text-[#abacb3]">achieved with UX/UI improvements</p>
        <Bullets items={results} />
        <div className="mt-8">
          <MShot src={`${A}/blk-results-laptop.png`} alt="Blockscope landing page on MacBook" />
        </div>
      </section>

      {/* Expectations */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MSectionPill n="02" label="Expectations" />
        <MHeading>
          What the stakeholders <span className="text-[#ff5c3a]">expected</span>
        </MHeading>
        <p className="-mt-2 text-[15px] text-[#abacb3]">design challenges and objections</p>
        <Bullets items={expectations} />
        <div className="mt-8">
          <MShot src={`${A}/blk-nft-mockup.png`} alt="Blockscope NFT detail on desktop" />
        </div>
      </section>

      {/* Design Process */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MHeading>
          Design <span className="text-[#ff5c3a]">Process</span>
        </MHeading>
        <MBody>
          We followed a design thinking approach, starting with stakeholder discussions and pain-point analysis to define the
          core challenges. Concepts were prototyped, tested, and refined across several cycles — keeping the solution
          user-friendly and visually distinct while staying aligned with functional goals.
        </MBody>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {processSteps.map((s, i) => (
            <div key={s.t} className="rounded-[12px] border border-[#292929] bg-[#141414] p-5">
              <span className="text-[13px] font-bold tracking-[2px] text-[#ff5c3a]">0{i + 1}</span>
              <h3 className="mt-1 text-[18px] font-bold">{s.t}</h3>
              <p className="mt-1 text-[14px] leading-[1.5] text-[#929292]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Primary Research */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MSectionPill n="03" label="Research" />
        <MHeading>
          Primary <span className="text-[#ff5c3a]">Research</span>
        </MHeading>
        <p className="-mt-2 mb-6 text-[15px] text-[#abacb3]">what's behind the design solutions?</p>
        <div className="mb-6 flex items-center gap-4 rounded-[12px] border border-[#292929] bg-[#141414] p-5">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-dashed border-[#ff5c3a] text-[20px] font-bold text-[#ff5c3a]">
            DK
          </div>
          <div>
            <div className="text-[18px] font-bold">Daniel Kim</div>
            <div className="text-[14px] text-[#abacb3]">User Persona</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {research.map((r) => (
            <p key={r.t} className="text-[16px] leading-[1.55] text-[#abacb3]">
              <span className="font-bold text-white">{r.t}:</span> {r.d}
            </p>
          ))}
        </div>
      </section>

      {/* User Interface */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="04" label="Interface" />
        <MHeading>
          User <span className="text-[#ff5c3a]">Interface</span>
        </MHeading>
        <p className="-mt-2 mb-4 text-[15px] text-[#abacb3]">design & prototype solution</p>
        <MBody>
          Throughout the design phase, I worked closely with blockchain developers to craft 35 core interface pages for the
          Block Explorer — transaction overviews, detailed records, block summaries, and block-level insights, with special
          attention to visualizing interactions between Layer 1 and Layer 2 networks.
        </MBody>
        <p className="mt-3 text-[16px] leading-[1.6] text-[#abacb3]">
          I also designed the user profile section, letting people access their personal data and chain-related activity in
          one centralized, intuitive space — a more personalized experience for a traditionally data-heavy environment.
        </p>
        <div className="mt-8">
          <MScreenGrid srcs={blkUi} alt="Blockscope screen" />
        </div>
      </section>

      <MInviteCTA />
    </MobilePageShell>
  );
}
