import type { ReactNode } from "react";

// Case study page — "ZenFit — Fitness App Experience". Shares the app chrome
// (header, sidebar, scrubber) via App; rendered inside the same scaled 1980px
// canvas. Layout mirrors the Figma export: centered hero with paired phone
// mockups, a connected roadblocks row, a results block, a staggered UI grid,
// and a contact line.

const roadblocks = [
  { lead: "Remote work fueling inactivity:", rest: " extended hours at desks lead to a decline in physical movement throughout the day." },
  { lead: "Lack of time & motivation for gym visits:", rest: " busy schedules and convenience make gym visits feel like an added burden." },
  { lead: "Limited access to fitness facilities:", rest: " not everyone has easy access to gyms, especially in smaller towns." },
  { lead: "Need for convenient, home-based options:", rest: " people want flexible, guided solutions without compromising quality." },
];

const stats = [
  { n: "15%", d: "increase in daily activity of the users" },
  { n: "22%", d: "improvement in workout consistency" },
];

// Logical flow: splash -> onboarding -> auth (top row), then the in-app
// experience pages (bottom row). Numbers map to the fit-ui-NN asset files.
const uiOrder = [9, 6, 7, 8, 3, 5, 1, 10, 11, 2, 4];
const uiScreens = uiOrder.map((n) => `/assets/fit-ui-${String(n).padStart(2, "0")}.png`);
const topOffsets = [40, 0, 50, 15, 45, 20];
const bottomOffsets = [0, 55, 25, 65, 5];

const font = "font-['Syne']";
const body = `${font} font-normal text-[#7d8590] text-[20px] leading-[1.6] tracking-[0.18px]`;
const label = `${font} text-[18px] uppercase tracking-[3px] text-[#6b7280]`;
const heading = `${font} font-bold text-white text-[36px] tracking-[0.5px]`;

function HeroPill({ children }: { children: ReactNode }) {
  return (
    <div className={`inline-flex w-fit items-center gap-[11px] rounded-full border border-dashed border-[#5a5a5a] bg-black px-[24px] py-[11px] ${font} text-[18px] tracking-[0.3px] text-[#ff5c3a]`}>
      <span className="size-[9px] rounded-full bg-[#ff5c3a]" />
      {children}
    </div>
  );
}

function SectionPill({ children }: { children: ReactNode }) {
  return (
    <div className={`inline-flex w-fit items-center rounded-full border border-dashed border-[#ff5c3a] bg-black px-[20px] py-[9px] ${font} text-[18px] uppercase tracking-[2px] text-[#ff5c3a] shadow-[0_0_24px_0_rgba(255,92,58,0.25)]`}>
      {children}
    </div>
  );
}

export default function FitnessApp() {
  return (
    <div className="relative z-0 w-[1980px] pb-[120px] pt-[180px]">
      {/* Hero */}
      <div className="mx-auto flex w-[1748px] flex-col items-center gap-[26px] text-center">
        <HeroPill>case study — fitness &amp; wellness</HeroPill>
        <h1 className={`${font} font-bold text-white text-[64px] leading-[1.05] tracking-[1px]`}>
          ZenFit — Fitness App Experience
        </h1>
        <p className={`${font} font-bold text-[#ff5c3a] text-[24px] tracking-[0.3px]`}>
          Redefining at-home fitness for the modern lifestyle
        </p>
        <p className={`${body} max-w-[820px]`}>
          ZenFit is a fitness app designed to support individuals with sedentary lifestyles who prefer working out at
          home. Unlike traditional platforms focused on gym routines, ZenFit offers a flexible, accessible approach to
          staying active — no gym required.
        </p>

        <div className="mt-[30px] flex items-start justify-center gap-[36px]">
          <img
            src="/assets/fit-onboard-strength.png"
            alt="ZenFit onboarding — Get Stronger for Preparation"
            className="h-auto w-[290px] drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          />
          <img
            src="/assets/fit-onboard-mindset.png"
            alt="ZenFit onboarding — Build Your Mind and Body"
            className="mt-[60px] h-auto w-[290px] drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          />
        </div>

        <h2 className={`${font} mt-[40px] max-w-[820px] font-bold text-white text-[38px] leading-[1.25] tracking-[0.5px]`}>
          A fitness solution that increased consistency, engagement, and user retention.
        </h2>
      </div>

      {/* 01 — Roadblocks (full-width band) */}
      <div className="mt-[110px] w-[1980px] bg-[#101012] py-[100px]">
        <div className="mx-auto flex w-[1748px] flex-col gap-[36px]">
          <SectionPill>01 — Roadblocks</SectionPill>
          <h2 className={heading}>Challenges &amp; problems</h2>
          <div className="relative mt-[16px]">
            <div className="pointer-events-none absolute left-[7px] right-[7px] top-[7px] border-t border-dashed border-[#33383f]" />
            <div className="grid grid-cols-4 gap-[40px]">
              {roadblocks.map((r) => (
                <div key={r.lead} className="relative flex flex-col gap-[22px]">
                  <span className="size-[14px] rounded-full bg-[#ff5c3a] shadow-[0_0_14px_2px_rgba(255,92,58,0.55)]" />
                  <p className={`${font} text-[20px] leading-[1.55] text-[#8b929c]`}>
                    <span className="font-bold text-white">{r.lead}</span>
                    {r.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[110px] flex w-[1748px] flex-col gap-[120px]">
        {/* 02 — Results */}
        <section className="flex flex-col gap-[36px]">
          <SectionPill>02 — Results</SectionPill>
          <h2 className={heading}>Impact of the design</h2>
          <div className="flex items-stretch gap-[24px]">
            {stats.map((s) => (
              <div
                key={s.n}
                className="flex w-[300px] shrink-0 flex-col items-center justify-center gap-[10px] rounded-[12px] border border-[#292929] border-solid bg-[#141414] px-[24px] py-[40px] text-center"
              >
                <span className={`${font} font-bold text-[#ff5c3a] text-[52px] tracking-[0.5px]`}>{s.n}</span>
                <span className={`${font} text-[18px] leading-[1.4] text-[#929292]`}>{s.d}</span>
              </div>
            ))}
            <div className="flex flex-1 flex-col justify-center gap-[16px] pl-[16px]">
              <span className={label}>What made it work</span>
              <p className={`${font} text-[17px] leading-[1.65] text-[#8b929c]`}>
                ZenFit was effective because it focused on real user needs — offering simple, equipment-free workouts
                tailored to busy, home-based lifestyles. The intuitive design, combined with gentle progress tracking,
                helped users build consistency without pressure.
              </p>
            </div>
          </div>
        </section>

        {/* 03 — Interface */}
        <section className="flex flex-col gap-[28px]">
          <SectionPill>03 — Interface</SectionPill>
          <div className="flex flex-col gap-[6px]">
            <h2 className={heading}>User Interface</h2>
            <span className={`${font} text-[20px] text-[#7d8590]`}>design solution</span>
          </div>

          <div className="mt-[16px] flex flex-col gap-[28px]">
            <div className="flex items-start justify-center gap-[24px]">
              {uiScreens.slice(0, 6).map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`ZenFit screen ${i + 1}`}
                  className="h-auto w-[268px] shrink-0 drop-shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
                  style={{ marginTop: topOffsets[i] }}
                />
              ))}
            </div>
            <div className="flex items-start justify-center gap-[24px]">
              {uiScreens.slice(6).map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`ZenFit screen ${i + 7}`}
                  className="h-auto w-[268px] shrink-0 drop-shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
                  style={{ marginTop: bottomOffsets[i] }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col items-center gap-[14px]">
          <h2 className={`${font} font-bold text-white text-[44px] tracking-[0.5px]`}>Let's talk about your project</h2>
          <a
            href="mailto:bhatnagar2898@gmail.com"
            className={`${font} text-[20px] text-[#ff5c3a] transition-opacity hover:opacity-80`}
          >
            bhatnagar2898@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
}
