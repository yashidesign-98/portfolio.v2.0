import type { ReactNode } from "react";
import AccentMask from "../components/AccentMask";

const imgCounter = "/assets/15d72.svg";
const imgMedHeroPreview = "/assets/med-hero-preview.png";

// Medical App case study ("Cure First"). Shares the app chrome via App and
// renders inside the scaled 1980px canvas. App screenshots are represented as
// phone-frame placeholders since the Figma export is a flat PNG.

const meta = [
  { label: "Role", value: "End-to-end UX/UI" },
  { label: "Focus", value: "Doctor discovery & booking" },
  { label: "Scope", value: "25+ core screens" },
  { label: "Platform", value: "Mobile app" },
];

const stats = [
  { pct: "70%", d: "users prefer online consultations over in-person visits due to flexibility and comfort." },
  { pct: "60%", d: "working professionals find it difficult to schedule traditional clinic appointments during weekdays." },
  { pct: "80%", d: "users value being able to choose a doctor based on personal preferences like language, specialty." },
  { pct: "65%", d: "users seek medical advice online before deciding to visit a clinic, highlighting the growing demand for accessible virtual healthcare options." },
];

const results = [
  { n: "01", d: "A user-first experience that streamlines online appointment scheduling and doctor discovery, offering a seamless and reassuring flow tailored to users seeking virtual medical consultations." },
  { n: "02", d: "Enhanced user engagement by delivering a clear, accessible consultation flow with thoughtful navigation, keeping booking and discovery seamless, trustworthy, and easy for first-time users." },
  { n: "03", d: "Improved discoverability and user flow by establishing a clear information hierarchy, consistent interaction patterns, and a structured layout guiding users from doctor selection to confirmation." },
  { n: "04", d: "Ensured usability through iterative prototyping and real-user feedback, striking the right balance between ease of navigation and the trust users expect from healthcare platforms." },
];

// Damped zig-zag heights (px from container top) matching the Figma process board.
const steps = [
  { label: "User Journey Flows", top: 38 },
  { label: "Define Key Scenarios", top: 206 },
  { label: "High-Fidelity Screens", top: 74 },
  { label: "Prototyping", top: 174 },
  { label: "Testing", top: 120 },
];

function Pill({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex w-fit items-center rounded-[6px] border border-[#ff5c3a] border-solid bg-black px-[16px] py-[6px] font-['Syne'] text-[13px] uppercase tracking-[1.6px] text-[#ff5c3a] shadow-[0_0_24px_0_rgba(255,92,58,0.25)]">
      {children}
    </div>
  );
}

function Counter({ n }: { n: number }) {
  return (
    <div className="relative size-[40px] shrink-0">
      <AccentMask src={imgCounter} className="absolute inset-0 size-full" stretch />
      <span className="absolute inset-0 flex items-center justify-center font-['Syne'] font-bold text-[18px] leading-none text-white">
        {n}
      </span>
    </div>
  );
}

// Counter + pill; centered or left-aligned per section.
function SectionHead({ n, label, center = false }: { n: number; label: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-[14px] ${center ? "justify-center" : ""}`}>
      <Counter n={n} />
      <Pill>{label}</Pill>
    </div>
  );
}

const heading = "font-['Syne'] font-bold text-white text-[40px] tracking-[1px]";
const body = "font-['Syne'] font-normal text-[#7d8590] text-[18px] leading-[1.6] tracking-[0.18px]";

// Ordered to match the Figma "User interface" board: splash → onboarding →
// home/profile → info pages → appointment & chat flows → doctor lists.
const uiOrder = [
  6, 7, 8, 9, 10, 11, 19, 1, 16, 12,
  18, 2, 20, 13, 22, 25, 26, 27, 28, 21,
  17, 23, 24, 3, 14, 15, 5, 4,
];
const uiScreens = uiOrder.map((n) => `/assets/med-ux-${String(n).padStart(2, "0")}.png`);

export default function MedicalApp() {
  return (
    <div className="relative z-0 w-[1980px] pb-[120px] pt-[180px]">
      <div className="mx-auto flex w-[1748px] flex-col gap-[120px]">
        {/* Hero */}
        <section className="flex items-start justify-between gap-[60px]">
          <div className="flex max-w-[820px] flex-col gap-[26px] pt-[40px]">
            <div className="inline-flex w-fit items-center gap-[11px] rounded-full border border-dashed border-[#5a5a5a] bg-black px-[26px] py-[13px] font-['Syne'] text-[18px] tracking-[0.3px] text-[#ff5c3a]">
              <span className="size-[10px] rounded-full bg-[#ff5c3a]" />
              case study - healthcare
            </div>
            <h1 className="font-['Syne'] font-bold text-white text-[64px] leading-[1.05] tracking-[1.5px]">Medical App Experience</h1>
            <p className={body}>
              The platform transforms digital healthcare by letting users schedule virtual consultations with doctors who best
              match their personal health needs and preferences.
            </p>
            <p className={body}>
              While many medical apps offer appointment booking, this solution stands out by prioritizing comfort and trust —
              matching people with relevant practitioners through an intuitive, empathetic interface.
            </p>
          </div>
          {/* App preview */}
          <div className="w-[720px] shrink-0 overflow-hidden rounded-[16px] border border-[#232323]">
            <img src={imgMedHeroPreview} alt="Cure First splash screens" className="block h-auto w-full" />
          </div>
        </section>

        {/* Meta row */}
        <section>
          <div className="grid grid-cols-4 border-y border-[#232323]">
            {meta.map((m, i) => (
              <div key={m.label} className={`px-[24px] py-[22px] ${i > 0 ? "border-l border-[#232323]" : ""}`}>
                <div className="mb-[8px] font-['Syne'] text-[12px] uppercase tracking-[1.4px] text-[#7d8590]">{m.label}</div>
                <div className="font-['Syne'] text-[16px] text-white">{m.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & objectives (centered) */}
        <section className="flex flex-col items-center gap-[30px] text-center">
          <SectionHead n={1} label="Challenges & Objectives" center />
          <h2 className="max-w-[1100px] font-['Syne'] font-bold text-white text-[36px] leading-[1.25] tracking-[1px]">
            A digital healthcare journey focused on comfort, choice, and accessibility
          </h2>
          <p className={`${body} max-w-[1000px]`}>
            A mobile experience crafted to simplify digital healthcare access. The goal was to build a platform where users could
            easily schedule appointments based on online consultations with doctors they felt aligned with. The challenge was to
            ensure the interface felt approachable, trustworthy, and intuitive — making it easy for users to discover, connect
            with, and consult healthcare professionals from the comfort of their homes.
          </p>
        </section>

        {/* Serving the needs of */}
        <section className="flex flex-col items-center gap-[50px]">
          <h2 className={heading}>Serving the needs of</h2>
          <div className="flex justify-center gap-[40px]">
            {stats.map((s) => (
              <div key={s.pct} className="flex w-[230px] flex-col items-center gap-[18px]">
                <div className="relative flex size-[110px] items-center justify-center rounded-full border-[3px] border-[#ff5c3a] shadow-[0_0_22px_rgba(255,92,58,0.4)]">
                  <div className="absolute inset-[-7px] rounded-full border border-dashed border-[rgba(255,92,58,0.4)]" />
                  <span className="font-['Syne'] font-bold text-[#ff5c3a] text-[26px]">{s.pct}</span>
                </div>
                <p className="text-center font-['Syne'] text-[14px] leading-[1.55] text-[#929292]">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="flex flex-col gap-[30px]">
          <SectionHead n={2} label="Results" />
          <div className="flex flex-col gap-[6px]">
            <h2 className={heading}>Results</h2>
            <span className="font-['Syne'] text-[14px] text-[#7d8590]">achieved with UX/UI</span>
          </div>
          <div className="grid grid-cols-4 gap-[24px]">
            {results.map((r) => (
              <div key={r.n} className="rounded-[12px] border border-[#232323] border-solid bg-[#141414] p-[26px]">
                <div className="mb-[14px] font-['Syne'] font-bold text-[#ff5c3a] text-[18px]">{r.n}</div>
                <p className="font-['Syne'] text-[15px] leading-[1.6] text-[#929292]">{r.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process (centered) */}
        <section className="flex flex-col items-center gap-[30px]">
          <SectionHead n={3} label="Process" center />
          <h2 className={`${heading} text-center`}>Design Process</h2>
          <p className={`${body} max-w-[1200px] text-center`}>
            The approach began with identifying core pain points faced by users when booking online medical consultations. Early
            discovery sessions helped surface issues like trust in doctors, scheduling clarity, and ease of use. Based on these
            insights, user flows were mapped, wireframes created, and prototypes tested with real users — an iterative process that
            met both user expectations and healthcare usability standards.
          </p>
          <div className="relative mt-[10px] h-[300px] w-[1160px] rounded-[12px] border border-[#232323] border-solid bg-[#0f0f0f]">
            {steps.map((s, i) => {
              const left = `${((i + 0.5) / steps.length) * 100}%`;
              return (
                <div key={s.label}>
                  <div
                    className="absolute bottom-[52px] top-[26px] w-0 border-l border-dashed"
                    style={{ left, borderColor: "rgba(255,92,58,0.55)" }}
                  />
                  <div
                    className="absolute -translate-x-1/2 whitespace-nowrap rounded-[8px] border border-[#3a3a3a] border-solid bg-[#1a1a1a] px-[16px] py-[9px] font-['Syne'] text-[14px] text-white"
                    style={{ left, top: s.top }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="absolute bottom-[20px] -translate-x-1/2 font-['Syne'] text-[13px] uppercase tracking-[1px] text-[#ff5c3a]"
                    style={{ left }}
                  >
                    Step {i + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interfaces */}
        <section className="flex flex-col gap-[36px]">
          <SectionHead n={4} label="Interfaces" />
          <h2 className={heading}>User interface</h2>
          <div className="grid grid-cols-2 gap-[60px]">
            <p className={body}>
              During the design phase, I worked closely with healthcare professionals and developers to create a seamless
              experience across 25+ core screens. These included appointment scheduling flows, doctor search functionality, and
              booking confirmation screens. Special attention was paid to simplifying complex workflows, ensuring users could
              easily find a relevant doctor and schedule a consultation with minimal steps.
            </p>
            <p className={body}>
              The interface was designed to prioritize user trust and ease of use, with clear, accessible information on doctor
              profiles, specialties, and availability, making the process intuitive and reassuring for both new and returning
              users.
            </p>
          </div>
          <div className="mt-[10px] grid grid-cols-10 gap-[14px]">
            {uiScreens.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Cure First screen ${i + 1}`}
                className={`block h-auto w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] ${i === 20 ? "col-start-2" : ""}`}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-[20px] rounded-[16px] border border-[#292929] border-solid bg-[#0f0f0f] px-[40px] py-[70px] text-center">
          <h2 className="font-['Syne'] font-bold text-white text-[40px] tracking-[1px]">Invite Yashi to your project</h2>
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
