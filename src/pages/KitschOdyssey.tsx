import type { ReactNode } from "react";

// AI Jam landing page — "Kitsch Odyssey" generative poster series. Shares the
// app chrome (header, sidebar, scrubber) via App; rendered inside the scaled
// 1980px canvas. Showcases the AI-generated poster set as a playful collage.

const posters = [
  { src: "/assets/kitsch-01.png", t: "Kadak Hai Boss" },
  { src: "/assets/kitsch-02.png", t: "Rewind Yaar" },
  { src: "/assets/kitsch-03.png", t: "Horn Ok Please" },
  { src: "/assets/kitsch-04.png", t: "Thoda Extra Masala" },
  { src: "/assets/kitsch-05.png", t: "Pehle Chai, Phir Baat" },
  { src: "/assets/kitsch-06.png", t: "Chalo Kahin Chalein" },
  { src: "/assets/kitsch-07.png", t: "Ullu Mat Bano" },
  { src: "/assets/kitsch-08.png", t: "Bura Mat Dekho" },
  { src: "/assets/kitsch-09.png", t: "Move Aside" },
  { src: "/assets/kitsch-10.png", t: "Full Tashan" },
];

// Playful per-poster tilt + vertical offset for the collage rows.
const tilt = [-4, 3, -2, 4, -3, 3, -3, 4, -2, 3];
const offset = [24, 0, 32, 8, 28, 0, 30, 6, 26, 4];

const jam = [
  { n: "01", t: "Prompt", d: "Fed generative models a point of view — Indian kitsch, scalloped borders, retro halftones and cheeky desi one-liners." },
  { n: "02", t: "Curate", d: "Ran twenty-plus iterations per idea and pulled only the frames with the right taste, colour and character." },
  { n: "03", t: "Refine", d: "Cleaned type, fixed palettes and unified the set so ten posters read as one confident, cohesive series." },
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
    <div className="flex items-start justify-center gap-[28px]">
      {posters.slice(from, to).map((p, i) => {
        const idx = from + i;
        return (
          <div
            key={p.src}
            className="w-[300px] shrink-0 transition-transform duration-300 ease-out hover:-translate-y-2"
            style={{ marginTop: offset[idx], rotate: `${tilt[idx]}deg` }}
          >
            <img
              src={p.src}
              alt={`Kitsch Odyssey poster — ${p.t}`}
              className="block h-auto w-full rounded-[10px] shadow-[0_16px_44px_rgba(0,0,0,0.55)]"
            />
          </div>
        );
      })}
    </div>
  );
}

export default function KitschOdyssey() {
  return (
    <div className="relative z-0 w-[1980px] pb-[120px] pt-[180px]">
      <div className="mx-auto flex w-[1748px] flex-col gap-[110px]">
        {/* Hero */}
        <section className="flex flex-col items-center gap-[26px] text-center">
          <Pill>AI Jam — generative poster series</Pill>
          <h1 className={`${font} font-bold text-white text-[80px] leading-[1.02] tracking-[1px]`}>Kitsch Odyssey</h1>
          <p className={`${font} font-bold text-[#ff5c3a] text-[24px] tracking-[0.3px]`}>
            Contemporary Indian kitsch series
          </p>
          <p className={`${body} max-w-[860px]`}>
            A weekend experiment in teaching generative models some desi taste. Bold scalloped borders, retro halftones,
            saturated colour and cheeky one-liners — ten posters prompted, curated and refined into one cohesive kitsch
            series. Part of an ongoing AI Jam exploring where generative tools meet real graphic-design craft.
          </p>
        </section>

        {/* The set — poster collage */}
        <section className="flex flex-col gap-[40px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <h2 className={`${font} font-bold text-white text-[40px] tracking-[0.5px]`}>The set</h2>
              <span className={`${font} text-[18px] text-[#7d8590]`}>ten posters, one point of view</span>
            </div>
            <Pill>10 prints</Pill>
          </div>
          <div className="flex flex-col gap-[40px]">
            <PosterGrid from={0} to={5} />
            <PosterGrid from={5} to={10} />
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
