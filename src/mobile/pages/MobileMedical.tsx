import MobilePageShell, { MSectionPill, MHeading, MBody, MShot, MScreenGrid, MInviteCTA } from "../MobilePageShell";

const A = "/assets";
const uiOrder = [6, 7, 8, 9, 10, 11, 19, 1, 16, 12, 18, 2, 20, 13, 22, 25, 26, 27, 28, 21, 17, 23, 24, 3, 14, 15, 5, 4];
const medUi = uiOrder.map((n) => `${A}/med-ux-${String(n).padStart(2, "0")}.png`);

const meta = [
  { k: "Role", v: "End-to-end UX/UI" },
  { k: "Focus", v: "Doctor discovery & booking" },
  { k: "Scope", v: "25+ core screens" },
  { k: "Platform", v: "Mobile app" },
];

const stats = [
  { p: "70%", d: "users prefer online consultations over in-person visits due to flexibility and comfort." },
  { p: "60%", d: "working professionals find it difficult to schedule traditional clinic appointments during weekdays." },
  { p: "80%", d: "users value being able to choose a doctor based on personal preferences like language, specialty." },
  { p: "65%", d: "users seek medical advice online before deciding to visit a clinic, highlighting demand for accessible virtual healthcare." },
];

const results = [
  { n: "01", d: "A user-first experience that streamlines online appointment scheduling and doctor discovery, offering a seamless and reassuring flow for users seeking virtual medical consultations." },
  { n: "02", d: "Enhanced user engagement by delivering a clear, accessible consultation flow with thoughtful navigation, keeping booking and discovery seamless, trustworthy, and easy for first-time users." },
  { n: "03", d: "Improved discoverability and user flow by establishing a clear information hierarchy, consistent interaction patterns, and a structured layout guiding users from doctor selection to confirmation." },
  { n: "04", d: "Ensured usability through iterative prototyping and real-user feedback, balancing ease of navigation with the trust users expect from healthcare platforms." },
];

const steps = [
  "User Journey Flows",
  "Define Key Scenarios",
  "High-Fidelity Screens",
  "Prototyping",
  "Testing",
];

export default function MobileMedical() {
  return (
    <MobilePageShell eyebrow="Medical App">
      {/* Hero */}
      <section className="px-5 pb-10 pt-8">
        <MSectionPill label="case study — healthcare" />
        <h1 className="text-[38px] font-extrabold leading-[1.05] sm:text-[52px]">Medical App Experience</h1>
        <p className="mt-5 text-[16px] leading-[1.6] text-[#abacb3]">
          The platform transforms digital healthcare by letting users schedule virtual consultations with doctors who best
          match their personal health needs and preferences.
        </p>
        <p className="mt-3 text-[16px] leading-[1.6] text-[#abacb3]">
          While many medical apps offer appointment booking, this solution stands out by prioritizing comfort and trust —
          matching people with relevant practitioners through an intuitive, empathetic interface.
        </p>
        <div className="mt-8">
          <MShot src={`${A}/med-hero-preview.png`} alt="Cure First splash screens" />
        </div>
        {/* Meta row */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {meta.map((m) => (
            <div key={m.k} className="rounded-[10px] border border-[#232323] bg-[#141414] p-4">
              <div className="text-[12px] uppercase tracking-[1px] text-[#abacb3]">{m.k}</div>
              <div className="mt-1 text-[15px] font-bold text-white">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Objectives */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="01" label="Challenges & Objectives" />
        <MHeading>A digital healthcare journey focused on comfort, choice, and accessibility</MHeading>
        <MBody>
          A mobile experience crafted to simplify digital healthcare access. The goal was to build a platform where users
          could easily schedule appointments based on online consultations with doctors they felt aligned with — making it
          easy to discover, connect with, and consult healthcare professionals from the comfort of their homes.
        </MBody>
      </section>

      {/* Serving the needs of */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MHeading>Serving the needs of</MHeading>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.p} className="rounded-[12px] border border-[#292929] bg-[#141414] p-5 text-center">
              <div className="text-[34px] font-extrabold text-[#ff5c3a]">{s.p}</div>
              <p className="mt-2 text-[13px] leading-[1.45] text-[#929292]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="02" label="Results" />
        <MHeading>Results</MHeading>
        <p className="-mt-2 mb-6 text-[15px] text-[#abacb3]">achieved with UX/UI</p>
        <div className="grid grid-cols-1 gap-4">
          {results.map((r) => (
            <div key={r.n} className="rounded-[12px] border border-[#292929] bg-[#141414] p-5">
              <span className="text-[18px] font-bold text-[#ff5c3a]">{r.n}</span>
              <p className="mt-2 text-[15px] leading-[1.55] text-[#929292]">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MSectionPill n="03" label="Process" />
        <MHeading>Design Process</MHeading>
        <MBody>
          The approach began with identifying core pain points faced by users when booking online medical consultations.
          User flows were mapped, wireframes created, and prototypes tested with real users — an iterative process that met
          both user expectations and healthcare usability standards.
        </MBody>
        <div className="mt-6 flex flex-col gap-3">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-4 rounded-[12px] border border-[#3a3a3a] bg-[#1a1a1a] p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#ff5c3a] text-[14px] font-bold text-[#ff5c3a]">
                {i + 1}
              </span>
              <span className="text-[17px] font-bold">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interfaces */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="04" label="Interfaces" />
        <MHeading>User interface</MHeading>
        <MBody>
          During the design phase, I worked closely with healthcare professionals and developers to create a seamless
          experience across 25+ core screens — appointment scheduling flows, doctor search, and booking confirmation —
          simplifying complex workflows so users could find a relevant doctor with minimal steps.
        </MBody>
        <p className="mt-3 text-[16px] leading-[1.6] text-[#abacb3]">
          The interface prioritizes user trust and ease of use, with clear, accessible information on doctor profiles,
          specialties, and availability — intuitive and reassuring for both new and returning users.
        </p>
        <div className="mt-8">
          <MScreenGrid srcs={medUi} alt="Cure First screen" />
        </div>
      </section>

      <MInviteCTA />
    </MobilePageShell>
  );
}
