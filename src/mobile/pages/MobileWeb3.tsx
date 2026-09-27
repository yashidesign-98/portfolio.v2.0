import MobilePageShell, { MSectionPill, MHeading, MBody, MCard, MInviteCTA } from "../MobilePageShell";

const A = "/assets";

const problems = [
  "Communicating complex Web3 concepts in a simplified, user-friendly manner",
  "Building credibility for a new brand through strong visual identity and structure",
  "Creating visual hierarchy and flow to lead users through the page effortlessly",
  "Ensuring responsiveness and accessibility across devices",
];

const resultItems = [
  "Improved content flow and scannability for faster user comprehension",
  "Established a strong visual identity aligned with Web3 culture",
  "Provided a scalable layout to support future product updates and growth",
  "Enhanced brand positioning during product announcement and onboarding",
];

const keySections = [
  { title: "Hero Section", desc: "Catchy headline, short pitch, and a primary CTA." },
  { title: "Product Highlights", desc: "Clear presentation of features and use cases." },
  { title: "Community & Ecosystem", desc: "Logos, testimonials, and community engagement points." },
  { title: "Footer", desc: "Navigation, social links, and token-related info." },
];

function NumBlock({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[#1e1e1e] px-5 py-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full border border-[#ff5c3a] text-[15px] font-bold text-[#ff5c3a]">
          {n}
        </span>
        <MSectionPill label={label} />
      </div>
      {children}
    </div>
  );
}

export default function MobileWeb3() {
  return (
    <MobilePageShell eyebrow="Web3 Landing Page">
      {/* Hero */}
      <section className="px-5 pb-10 pt-8">
        <MSectionPill label="case study — web3 landing page" />
        <h1 className="text-[36px] font-extrabold leading-[1.05] sm:text-[52px]">Web3 Landing Page</h1>
        <p className="mt-5 text-[16px] leading-[1.6] text-[#abacb3]">
          Whizrolls is a Web3 platform aiming to simplify access to decentralized tools through an engaging, future-ready
          interface. The landing page communicates the brand's purpose clearly, establishes trust in a competitive space, and
          guides users through key offerings — breaking away from typical Web3 clutter with a layout that appeals to both
          crypto-savvy users and newcomers.
        </p>
      </section>

      {/* Timeline intro */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MHeading>A Web3 experience that balances innovation with clarity</MHeading>
      </section>

      {/* Block 01 */}
      <NumBlock n="1" label="Problems & Challenges">
        <ul className="flex flex-col gap-4">
          {problems.map((p) => (
            <li key={p} className="flex gap-3 text-[16px] leading-[1.55] text-[#abacb3]">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-[#ff5c3a]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </NumBlock>

      {/* Block 02 */}
      <NumBlock n="2" label="Results">
        <MBody>
          The final design helped elevate Whizrolls' digital presence with a clean, confident landing page that effectively
          communicates what they do and why it matters.
        </MBody>
        <ul className="mt-6 flex flex-col gap-3">
          {resultItems.map((r) => (
            <li key={r} className="flex gap-2 text-[16px] leading-[1.5] text-[#abacb3]">
              <span className="text-[#ff5c3a]">→</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </NumBlock>

      {/* Block 03 */}
      <NumBlock n="3" label="Design Solution">
        <MBody>
          The process began with defining content structure and user flow around the target audience's expectations —
          wireframes outlined the hero, feature highlights, community engagement, and calls-to-action. A dark UI with coral
          accents reflects the same confident, future-ready tone used across this portfolio, with bold typography, clean
          icons, and subtle motion for energy and clarity.
        </MBody>
      </NumBlock>

      {/* Key sections designed */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MHeading>
          Key sections <span className="text-[#ff5c3a]">designed</span>
        </MHeading>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {keySections.map((c) => (
            <MCard key={c.title} title={c.title} desc={c.desc} />
          ))}
        </div>
      </section>

      {/* The page */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MSectionPill n="04" label="the page" />
        <div className="mt-2 overflow-hidden rounded-[12px] border border-[#292929]">
          <img
            src={`${A}/w3-full-page.png`}
            alt="Whizrolls landing page — full scroll capture"
            loading="lazy"
            className="block w-full"
          />
        </div>
      </section>

      <MInviteCTA heading="Let's talk about your project" />
    </MobilePageShell>
  );
}
