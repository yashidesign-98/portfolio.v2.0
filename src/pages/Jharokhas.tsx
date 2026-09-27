import type { ReactNode } from "react";

// AI Jam landing page — "Jharokhas" generative poster series. Shares the app
// chrome (header, sidebar, scrubber) via App; rendered inside the scaled 1980px
// canvas. Showcases the AI-generated arch-motif poster set as a calm collage.

const posters = [
  { src: "/assets/jharokha-01.png", t: "Prem" },
  { src: "/assets/jharokha-02.png", t: "Anand" },
  { src: "/assets/jharokha-03.png", t: "Shanti" },
  { src: "/assets/jharokha-04.png", t: "Moksh" },
  { src: "/assets/jharokha-05.png", t: "Jeevan" },
  { src: "/assets/jharokha-06.png", t: "Shakti" },
];

// Gentle per-poster tilt + vertical offset for the collage rows.
const tilt = [-3, 2, -2, 3, -2, 2];
const offset = [22, 0, 26, 0, 24, 6];

const jam = [
  { n: "01", t: "Prompt", d: "Fed generative models a brief — traditional jharokha arches and Mughal floral borders, reimagined with a calm, modern palette." },
  { n: "02", t: "Curate", d: "Iterated on framing, symmetry and ornament density, keeping only the frames where heritage detail still felt effortless." },
  { n: "03", t: "Refine", d: "Set Sanskrit words at the centre — prem, anand, shanti — and unified colour and type so six pieces read as one serene series." },
];

const font = "font-['Syne']";
const body = `${font} font-normal text-[#7d8590] text-[20px] leading-[1.6] tracking-[0.18px]`;

function Pill({ children }: { children: ReactNode }) {
  return (
    <div className={`inline-flex w-fit items-center gap-[11px] rounded-full border border-dashed border-[#ff5c3a] bg-black px-[26px] py-[13px] ${font} text-[18px] uppercase tracking-[2px] text-[#ff5c3a] shadow-[0_0_24px_0_rgba(255,92,58,0.25)]`}>
      <span className="size-[10px] rounded-full bg-[#ff5c3a]" />
      {children}
    </div>
  );
}

function PosterGrid({ from, to }: { from: number; to: number }) {
  return (
    <div className="flex items-start justify-center gap-[40px]">
      {posters.slice(from, to).map((p, i) => {
        const idx = from + i;
        return (
          <div
            key={p.src}
            className="w-[400px] shrink-0 transition-transform duration-300 ease-out hover:-translate-y-2"
            style={{ marginTop: offset[idx], rotate: `${tilt[idx]}deg` }}
          >
            <img
              src={p.src}
              alt={`Jharokhas poster — ${p.t}`}
              className="block h-auto w-full rounded-[10px] shadow-[0_16px_44px_rgba(0,0,0,0.55)]"
            />
          </div>
        );
      })}
    </div>
  );
}

export default function Jharokhas() {
  return (
    <div className="relative z-0 w-[1980px] pb-[120px] pt-[180px]">
      <div className="mx-auto flex w-[1748px] flex-col gap-[110px]">
        {/* Hero */}
        <section className="flex flex-col items-center gap-[26px] text-center">
          <Pill>AI Jam — generative poster series</Pill>
          <h1 className={`${font} font-bold text-white text-[80px] leading-[1.02] tracking-[1px]`}>Jharokhas</h1>
          <p className={`${font} font-bold text-[#ff5c3a] text-[24px] tracking-[0.3px]`}>Royal arches, modern chill</p>
          <p className={`${body} max-w-[860px]`}>
            An AI Jam exploring Indian heritage ornament through a calm, contemporary lens. Traditional jharokha arches
            and Mughal floral borders, generated and refined into six serene posters — each centred on a Sanskrit word:
            prem, anand, shanti, moksh, jeevan, shakti.
          </p>
        </section>

        {/* The set — poster collage */}
        <section className="flex flex-col gap-[40px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <h2 className={`${font} font-bold text-white text-[40px] tracking-[0.5px]`}>The set</h2>
              <span className={`${font} text-[18px] text-[#7d8590]`}>six arches, one calm mood</span>
            </div>
            <Pill>6 prints</Pill>
          </div>
          <div className="flex flex-col gap-[40px]">
            <PosterGrid from={0} to={3} />
            <PosterGrid from={3} to={6} />
          </div>
        </section>

        {/* The jam — process */}
        <section className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[6px]">
            <h2 className={`${font} font-bold text-white text-[40px] tracking-[0.5px]`}>
              The <span className="text-[#ff5c3a]">jam</span>
            </h2>
            <span className={`${font} text-[18px] text-[#7d8590]`}>how the set came together</span>
          </div>
          <div className="grid grid-cols-3 gap-[24px]">
            {jam.map((j) => (
              <div key={j.n} className="rounded-[12px] border border-[#292929] border-solid bg-[#141414] p-[28px]">
                <div className={`${font} mb-[14px] font-bold text-[#ff5c3a] text-[20px]`}>{j.n}</div>
                <div className={`${font} mb-[8px] font-bold text-white text-[22px]`}>{j.t}</div>
                <p className={`${font} text-[18px] leading-[1.6] text-[#929292]`}>{j.d}</p>
              </div>
            ))}
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
