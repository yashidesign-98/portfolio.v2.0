import MobilePageShell, { MSectionPill } from "../MobilePageShell";

// Data-driven mobile layout shared by all three AI-Jam poster pages
// (Kitsch Odyssey, Jharokhas, Summer Remix) — they share one structure.

export type JamStep = { n: string; t: string; d: string };
export type JamPoster = { src: string; alt: string };

export type JamData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  setHeading: string;
  setSubLabel: string;
  posters: JamPoster[];
  jamSubLabel: string;
  steps: JamStep[];
};

const tilts = ["-rotate-[2deg]", "rotate-[2deg]", "-rotate-[1.5deg]", "rotate-[1.5deg]", "-rotate-[2deg]", "rotate-[1deg]"];

export default function MobileAiJam({ data }: { data: JamData }) {
  return (
    <MobilePageShell eyebrow="AI Jam">
      {/* Hero */}
      <section className="px-5 pb-12 pt-10">
        <MSectionPill label={data.eyebrow} />
        <h1 className="text-[44px] font-extrabold leading-[1.02] sm:text-[60px]">{data.title}</h1>
        <p className="mt-3 text-[20px] font-bold text-[#ff5c3a]">{data.subtitle}</p>
        <p className="mt-5 text-[17px] leading-[1.6] text-[#abacb3]">{data.description}</p>
      </section>

      {/* The set */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-14">
        <div className="mb-2 flex items-center gap-3">
          <h2 className="text-[30px] font-bold leading-[1.15]">{data.setHeading}</h2>
          <span className="rounded-full border border-[#ff5c3a]/60 bg-black px-3 py-1 text-[11px] uppercase tracking-[1.5px] text-[#ff5c3a]">
            {data.posters.length} prints
          </span>
        </div>
        <p className="mb-8 text-[15px] text-[#abacb3]">{data.setSubLabel}</p>
        <div className="flex flex-col gap-7">
          {data.posters.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className={`w-full rounded-[10px] border border-[#292929] object-cover shadow-[0_16px_40px_rgba(0,0,0,0.55)] ${tilts[i % tilts.length]}`}
            />
          ))}
        </div>
      </section>

      {/* The jam */}
      <section className="border-t border-[#1e1e1e] px-5 py-14">
        <h2 className="text-[30px] font-bold leading-[1.15]">
          The <span className="text-[#ff5c3a]">jam</span>
        </h2>
        <p className="mb-8 mt-1 text-[15px] text-[#abacb3]">{data.jamSubLabel}</p>
        <div className="flex flex-col gap-5">
          {data.steps.map((s) => (
            <div key={s.n} className="rounded-[12px] border border-[#292929] bg-[#141414] p-6">
              <span className="text-[14px] font-bold tracking-[2px] text-[#ff5c3a]">{s.n}</span>
              <h3 className="mt-2 text-[22px] font-bold">{s.t}</h3>
              <p className="mt-2 text-[16px] leading-[1.55] text-[#929292]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-14 text-center">
        <h2 className="text-[28px] font-bold leading-[1.2]">Let's talk about your project</h2>
        <a
          href="mailto:bhatnagar2898@gmail.com"
          className="mt-6 inline-block rounded-lg bg-[#ff5c3a] px-6 py-3.5 font-bold text-white"
        >
          bhatnagar2898@gmail.com
        </a>
      </section>
    </MobilePageShell>
  );
}

export const kitschData: JamData = {
  eyebrow: "AI Jam — generative poster series",
  title: "Kitsch Odyssey",
  subtitle: "Contemporary Indian kitsch series",
  description:
    "A weekend experiment in teaching generative models some desi taste. Bold scalloped borders, retro halftones, saturated colour and cheeky one-liners — ten posters prompted, curated and refined into one cohesive kitsch series. Part of an ongoing AI Jam exploring where generative tools meet real graphic-design craft.",
  setHeading: "The set",
  setSubLabel: "ten posters, one point of view",
  posters: [
    { src: "/assets/kitsch-01.png", alt: "Kitsch Odyssey poster — Kadak Hai Boss" },
    { src: "/assets/kitsch-02.png", alt: "Kitsch Odyssey poster — Rewind Yaar" },
    { src: "/assets/kitsch-03.png", alt: "Kitsch Odyssey poster — Horn Ok Please" },
    { src: "/assets/kitsch-04.png", alt: "Kitsch Odyssey poster — Thoda Extra Masala" },
    { src: "/assets/kitsch-05.png", alt: "Kitsch Odyssey poster — Pehle Chai, Phir Baat" },
    { src: "/assets/kitsch-06.png", alt: "Kitsch Odyssey poster — Chalo Kahin Chalein" },
    { src: "/assets/kitsch-07.png", alt: "Kitsch Odyssey poster — Ullu Mat Bano" },
    { src: "/assets/kitsch-08.png", alt: "Kitsch Odyssey poster — Bura Mat Dekho" },
    { src: "/assets/kitsch-09.png", alt: "Kitsch Odyssey poster — Move Aside" },
    { src: "/assets/kitsch-10.png", alt: "Kitsch Odyssey poster — Full Tashan" },
  ],
  jamSubLabel: "how the set came together",
  steps: [
    {
      n: "01",
      t: "Prompt",
      d: "Fed generative models a point of view — Indian kitsch, scalloped borders, retro halftones and cheeky desi one-liners.",
    },
    {
      n: "02",
      t: "Curate",
      d: "Ran twenty-plus iterations per idea and pulled only the frames with the right taste, colour and character.",
    },
    {
      n: "03",
      t: "Refine",
      d: "Cleaned type, fixed palettes and unified the set so ten posters read as one confident, cohesive series.",
    },
  ],
};

export const jharokhasData: JamData = {
  eyebrow: "AI Jam — generative poster series",
  title: "Jharokhas",
  subtitle: "Royal arches, modern chill",
  description:
    "An AI Jam exploring Indian heritage ornament through a calm, contemporary lens. Traditional jharokha arches and Mughal floral borders, generated and refined into six serene posters — each centred on a Sanskrit word: prem, anand, shanti, moksh, jeevan, shakti.",
  setHeading: "The set",
  setSubLabel: "six arches, one calm mood",
  posters: [
    { src: "/assets/jharokha-01.png", alt: "Jharokhas poster — Prem" },
    { src: "/assets/jharokha-02.png", alt: "Jharokhas poster — Anand" },
    { src: "/assets/jharokha-03.png", alt: "Jharokhas poster — Shanti" },
    { src: "/assets/jharokha-04.png", alt: "Jharokhas poster — Moksh" },
    { src: "/assets/jharokha-05.png", alt: "Jharokhas poster — Jeevan" },
    { src: "/assets/jharokha-06.png", alt: "Jharokhas poster — Shakti" },
  ],
  jamSubLabel: "how the set came together",
  steps: [
    {
      n: "01",
      t: "Prompt",
      d: "Fed generative models a brief — traditional jharokha arches and Mughal floral borders, reimagined with a calm, modern palette.",
    },
    {
      n: "02",
      t: "Curate",
      d: "Iterated on framing, symmetry and ornament density, keeping only the frames where heritage detail still felt effortless.",
    },
    {
      n: "03",
      t: "Refine",
      d: "Set Sanskrit words at the centre — prem, anand, shanti — and unified colour and type so six pieces read as one serene series.",
    },
  ],
};

export const summerData: JamData = {
  eyebrow: "AI Jam — generative poster series",
  title: "Summer Remix",
  subtitle: "Gen-Z summer collage prints",
  description:
    "An AI Jam channelling peak Gen-Z summer energy. Instant-photo collages, marker scribbles, tape, stickers and loud colour — generated and refined into six high-energy posters, each built around a single word: WILD, BOLD, GLOW, CHILL, SUNNY, VIBE.",
  setHeading: "The set",
  setSubLabel: "six posters, full summer energy",
  posters: [
    { src: "/assets/summer-01.png", alt: "Summer Remix poster — Wild" },
    { src: "/assets/summer-02.png", alt: "Summer Remix poster — Bold" },
    { src: "/assets/summer-03.png", alt: "Summer Remix poster — Glow" },
    { src: "/assets/summer-04.png", alt: "Summer Remix poster — Chill" },
    { src: "/assets/summer-05.png", alt: "Summer Remix poster — Sunny" },
    { src: "/assets/summer-06.png", alt: "Summer Remix poster — Vibe" },
  ],
  jamSubLabel: "how the set came together",
  steps: [
    {
      n: "01",
      t: "Prompt",
      d: "Briefed generative models on a Gen-Z summer mood — instant-photo collages, marker scribbles, tape and sticker energy.",
    },
    {
      n: "02",
      t: "Curate",
      d: "Iterated on layout, colour pop and hand-drawn accents, keeping only the frames that felt genuinely loud and fun.",
    },
    {
      n: "03",
      t: "Refine",
      d: "Locked one-word hits — WILD, BOLD, GLOW — and tuned type and palette so six posters read as one high-energy series.",
    },
  ],
};
