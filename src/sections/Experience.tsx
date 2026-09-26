import AccentMask from "../components/AccentMask";
﻿import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";

const assetPathPrefix = "/assets";
const imgPixelarticonsArrowDown = `${assetPathPrefix}/99215.svg`;
const imgVector = `${assetPathPrefix}/15d72.svg`;
const imgEllipse1 = `${assetPathPrefix}/ca211.svg`;
const imgVector5 = `${assetPathPrefix}/4767a.svg`;
const imgVector6 = `${assetPathPrefix}/b4211.svg`;
const imgEllipse2 = `${assetPathPrefix}/4bd15.svg`;
const imgEllipse3 = `${assetPathPrefix}/e4011.svg`;
const imgEllipse5 = `${assetPathPrefix}/e8c90.svg`;

function PixelarticonsArrowDown({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="1:46">
      <img alt="" className="absolute block inset-0 max-w-none size-full rotate-180" src={imgPixelarticonsArrowDown} />
    </div>
  );
}

// Dot positions along the timeline. Each dot's container `top` is set so the
// 16px dot is vertically centred on its card/role box, and `threshold` is that
// centre normalized to the line span (498.5..1591px = 1092.5px).
const milestones = [
  { top: 490.5, threshold: 0 }, // Coredge — Senior UX Designer box (centre 498.5)
  { top: 729.5, threshold: 0.2188 }, // Coredge — UX Designer box (centre 737.5)
  { top: 1004.5, threshold: 0.4705 }, // Airchains card (centre 1012.5)
  { top: 1306.5, threshold: 0.7469 }, // DTroffle card (centre 1314.5)
  { top: 1583, threshold: 1 }, // Freelance card (centre 1591)
];

function MilestoneDot({
  top,
  progress,
  threshold,
}: {
  top: number;
  progress: MotionValue<number>;
  threshold: number;
}) {
  const opacity = useTransform(progress, [threshold - 0.06, threshold], [0, 1]);
  const scale = useTransform(progress, [threshold - 0.06, threshold], [0.4, 1]);
  return (
    <motion.div
      className="absolute left-[241px] size-[16px] rounded-full bg-[#ff5c3a] shadow-[0_0_12px_2px_rgba(255,92,58,0.55)]"
      style={{ top, opacity, scale }}
    />
  );
}

export default function Experience() {
  const rootRef = useRef<HTMLDivElement>(null);
  // Scrubs 0 -> 1 as the section travels from near the bottom of the viewport
  // up through it, driving the timeline fill and the dot activations.
  //
  // Measured manually from the live bounding rect on every scroll rather than
  // via useScroll({ target }): the page renders inside a transform: scale() +
  // overflow-hidden canvas whose height is set asynchronously, so useScroll's
  // one-time offset capture reads a stale layout in the production build (where
  // there's no StrictMode remount to re-measure) and the progress sticks at 0.
  // getBoundingClientRect returns transformed, viewport-relative coordinates,
  // so this stays correct regardless of the scaled ancestor.
  const scrollYProgress = useMotionValue(0);
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // p = 0 when the section top is at 70% of the viewport height;
      // p = 1 when its bottom reaches 40% of the viewport height.
      const denom = 0.3 * vh + rect.height;
      const p = denom > 0 ? (0.7 * vh - rect.top) / denom : 0;
      scrollYProgress.set(Math.max(0, Math.min(1, p)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [scrollYProgress]);
  // Spring-smoothed progress so the fill and dots ease rather than track the
  // raw scroll position 1:1.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.0005,
  });
  return (
    <div ref={rootRef} className="bg-[#101010] relative size-full" data-node-id="1:7517">
      <div className="-translate-x-1/2 absolute bg-[#101010] border border-[#ff5c3a] border-solid content-stretch flex items-center justify-center left-[calc(50%-763px)] overflow-clip px-[24px] py-[8px] shadow-[4px_4px_20px_0px_rgba(255,92,58,0.2)] top-[73px]" data-node-id="1:7518">
        <div className="[word-break:break-word] flex flex-col font-['Syne'] font-medium justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[1.12px] whitespace-nowrap" data-node-id="1:7519">
          <p className="leading-[1.45]">FLOW - EXPERIENCE</p>
        </div>
      </div>
      <div className="absolute right-[110px] size-[40px] top-[71px]" data-node-id="1:7520" data-name="Counter">
        <div className="absolute left-0 size-[40px] top-0" data-node-id="1:7521" data-name="Vector">
          <AccentMask src={imgVector} className="absolute inset-0 size-full" stretch />
        </div>
        <p className="absolute inset-0 flex items-center justify-center font-['Syne'] font-bold text-[18px] text-white tracking-[0.18px] leading-none" data-node-id="1:7522">
          3
        </p>
      </div>
      <div className="[word-break:break-word] absolute h-[118px] leading-[0] left-[116px] top-[157px] w-[1123px] whitespace-nowrap" data-node-id="1:7523">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne'] font-bold justify-center left-0 text-[60px] text-white top-[43.5px] tracking-[2.4px]" data-node-id="1:7524">
          <p>
            <span className="leading-[1.45]">{`A flow of 5+ years, `}</span>
            <span className="leading-[1.45] text-[#6a6a6a]">node by node</span>
          </p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne'] font-normal justify-center left-0 text-[#7d8590] text-[20px] top-[103.5px] tracking-[0.8px]" data-node-id="1:7525">
          <p className="leading-[1.45]">A career built on making complex systems feel effortless</p>
        </div>
      </div>
      <div className="absolute bg-[#1a1a1a] border border-[#343434] border-solid h-[493px] left-[323px] overflow-clip rounded-[10px] top-[351px] w-[1334px]" data-node-id="1:7526">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[29px] text-[#ff5c3a] text-[16px] top-[40.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7527">
          <p className="leading-[1.45]">Coredge.io</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] right-[85px] text-[#7d8590] text-[14px] top-[42px] tracking-[0.56px] translate-x-full whitespace-nowrap" data-node-id="1:7528">
          <p className="leading-[1.45]">NOIDA</p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[30px] items-end left-[32px] top-[72px] w-[1271px]" data-node-id="1:7529">
          <div className="bg-[rgba(255,92,58,0.1)] h-[151px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="1:7530">
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[30px] text-[#ff5c3a] text-[16px] top-[38.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7531">
              <p className="leading-[1.45]">Senior UX Designer</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[#929292] text-[16px] top-[71.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7532">
              <p className="leading-[1.45]">→ Leading UX for Cloud Platform, a multi-tenant infrastructure portal along side product teams.</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[#929292] text-[16px] top-[111.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7533">
              <p className="leading-[1.45]">→ Built and maintained the design system with more than 200+ Components</p>
            </div>
            <div className="absolute content-stretch flex gap-[20px] items-center right-[20px] top-[24px]" data-node-id="1:7534">
              <div className="bg-[rgba(255,92,58,0.1)] border border-[#ff5c3a] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[40px] shrink-0" data-node-id="1:7535">
                <div className="relative shrink-0 size-[8px]" data-node-id="1:7536">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Syne'] font-normal justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[1.12px] whitespace-nowrap" data-node-id="1:7537">
                  <p className="leading-[1.45]">Current</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Syne'] font-normal justify-center leading-[0] relative shrink-0 text-[#7d8590] text-[14px] tracking-[0.56px] whitespace-nowrap" data-node-id="1:7538">
                <p className="leading-[1.45]">Apr 2026-Present</p>
              </div>
            </div>
          </div>
          <div className="h-[28px] relative shrink-0 w-full" data-node-id="1:7539">
            <div className="absolute h-0 left-0 top-[14px] w-[539px]" data-node-id="1:7540">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector5} />
              </div>
            </div>
            <div className="absolute h-0 right-0 top-[14px] w-[539px]" data-node-id="1:7541">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector6} />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[rgba(255,92,58,0.1)] border border-[#ff5c3a] border-solid content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] overflow-clip px-[16px] py-[4px] rounded-[40px] top-0 w-[122px]" data-node-id="1:7542">
              <PixelarticonsArrowDown className="flex items-center justify-center relative shrink-0 size-[10px]" />
              <div className="[word-break:break-word] flex flex-col font-['Syne'] font-normal justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[1.12px] whitespace-nowrap" data-node-id="1:7544">
                <p className="leading-[1.45]">Promoted</p>
              </div>
            </div>
          </div>
          <div className="bg-[#242424] h-[151px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="1:7545">
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[30px] text-[#ff5c3a] text-[16px] top-[38.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7546">
              <p className="leading-[1.45]">UX Designer</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[#929292] text-[16px] top-[71.5px] tracking-[0.64px] w-[1376px]" data-node-id="1:7547">
              <p className="leading-[1.45]">→ Leading Custom UX for Cloud Platform - included all client based requirements from leading industries in telecom, healthcare, Indian Government.</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[#929292] text-[16px] top-[111.5px] tracking-[0.64px] w-[773px]" data-node-id="1:7548">
              <p className="leading-[1.45]">→ Defined major product features with refined UX to strategise seamless operations</p>
            </div>
            <div className="absolute content-stretch flex gap-[20px] h-[28px] items-center right-[20px] top-[24px]" data-node-id="1:7549">
              <div className="[word-break:break-word] flex flex-col font-['Syne'] font-normal justify-center leading-[0] relative shrink-0 text-[#7d8590] text-[14px] text-right tracking-[0.56px] whitespace-nowrap" data-node-id="1:7553">
                <p className="leading-[1.45]">Sept-2023-Mar 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#1a1a1a] border border-[#343434] border-solid h-[267px] left-[323px] overflow-clip rounded-[10px] top-[879px] w-[1334px]" data-node-id="1:7554">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[29px] text-[#ff5c3a] text-[16px] top-[40.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7555">
          <p className="leading-[1.45]">Airchains Network</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] right-[29px] text-[#7d8590] text-[14px] text-right top-[42px] tracking-[0.56px] whitespace-nowrap" data-node-id="1:7556">
          <p className="leading-[1.45]">GURUGRAM</p>
        </div>
        <div className="absolute bg-[#242424] h-[151px] left-[33px] overflow-clip rounded-[8px] top-[72px] w-[1270px]" data-node-id="1:7557">
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[30px] text-[#ff5c3a] text-[16px] top-[38.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7558">
            <p className="leading-[1.45]">UX Designer</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[#929292] text-[16px] top-[71.5px] tracking-[0.64px] w-[782px]" data-node-id="1:7559">
            <p className="leading-[1.45]">→ Designed Web3 products for blockchain infrastructure including block explorer UI.</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[#929292] text-[16px] top-[111.5px] tracking-[0.64px] w-[665px]" data-node-id="1:7560">
            <p className="leading-[1.45]">→ Led end-to-end UX for Airchains’ clients including State Govt. entities</p>
          </div>
          <div className="absolute content-stretch flex gap-[20px] h-[28px] items-center right-[20px] top-[24px]" data-node-id="1:7561">
            <div className="[word-break:break-word] flex flex-col font-['Syne'] font-normal justify-center leading-[0] relative shrink-0 text-[#7d8590] text-[14px] text-right tracking-[0.56px] whitespace-nowrap" data-node-id="1:7565">
              <p className="leading-[1.45]">Feb-2023-Sept 2026</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#1a1a1a] border border-[#343434] border-solid h-[267px] left-[323px] overflow-clip rounded-[10px] top-[1181px] w-[1334px]" data-node-id="1:7566">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[29px] text-[#ff5c3a] text-[16px] top-[40.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7567">
          <p className="leading-[1.45]">DTroffle Digital Marketing</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] right-[29px] text-[#7d8590] text-[14px] text-right top-[42px] tracking-[0.56px] whitespace-nowrap" data-node-id="1:7568">
          <p className="leading-[1.45]">REMOTE</p>
        </div>
        <div className="absolute bg-[#242424] h-[151px] left-[33px] overflow-clip rounded-[8px] top-[72px] w-[1270px]" data-node-id="1:7569">
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[30px] text-[#ff5c3a] text-[16px] top-[38.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7570">
            <p className="leading-[1.45]">UX Design Intern</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[#929292] text-[16px] top-[71.5px] tracking-[0.64px] w-[547px]" data-node-id="1:7571">
            <p className="leading-[1.45] whitespace-pre-wrap">{`→ Designed and delivered Client websites  and mobile apps `}</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[#929292] text-[16px] top-[111.5px] tracking-[0.64px] w-[665px]" data-node-id="1:7572">
            <p className="leading-[1.45]">→ Led end-to-end UX for Airchains’ clients including State Govt. entities</p>
          </div>
          <div className="absolute content-stretch flex gap-[20px] h-[28px] items-center right-[20px] top-[24px]" data-node-id="1:7573">
            <div className="[word-break:break-word] flex flex-col font-['Syne'] font-normal justify-center leading-[0] relative shrink-0 text-[#7d8590] text-[14px] text-right tracking-[0.56px] whitespace-nowrap" data-node-id="1:7577">
              <p className="leading-[1.45]">Aug-2022-Oct 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] absolute bg-[#211c28] border border-[#695486] border-dashed h-[216px] leading-[0] left-[323px] overflow-clip rounded-[10px] top-[1483px] w-[1334px]" data-node-id="1:7578">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne'] font-bold justify-center left-[29px] text-[#ff5c3a] text-[16px] top-[44.5px] tracking-[0.64px] whitespace-nowrap" data-node-id="1:7579">
          <p className="leading-[1.45]">Freelance UX Designer</p>
        </div>
        <div className="absolute content-stretch flex gap-[20px] h-[28px] items-center right-[31px] text-[#7d8590] text-[14px] text-right top-[31px] tracking-[0.56px] whitespace-nowrap" data-node-id="1:7580">
          <div className="flex flex-col font-['Syne'] font-normal justify-center relative shrink-0" data-node-id="1:7584">
            <p className="leading-[1.45]">Dec-2020-Jan 2023</p>
          </div>
          <div className="flex flex-col font-['Syne'] font-bold justify-center relative shrink-0" data-node-id="1:7585">
            <p className="leading-[1.45]">REMOTE</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne'] font-normal justify-center left-[29px] text-[#929292] text-[16px] top-[81.5px] tracking-[0.64px] w-[1272px]" data-node-id="1:7586">
          <p className="leading-[1.45]">→ Delivered end-to-end product design for multiple web and mobile products, managing projects from research through production-ready handoff</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne'] font-normal justify-center left-[29px] text-[#929292] text-[16px] top-[133.5px] tracking-[0.64px] w-[1272px]" data-node-id="1:7587">
          <p className="leading-[1.45]">→ Developed scalable design systems and reusable component libraries for client projects</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne'] font-normal justify-center left-[29px] text-[#929292] text-[16px] top-[173.5px] tracking-[0.64px] w-[1272px]" data-node-id="1:7588">
          <p className="leading-[1.45]">→ Conducted user research and usability testing, translating findings into improved workflows and interfaces</p>
        </div>
      </div>
      {/* Single continuous grey base rail spanning the first dot to the last. */}
      <div className="absolute left-[248px] top-[498.5px] h-[1092.5px] w-[2px] bg-[#333333]" />
      <div className="absolute left-[241px] size-[16px] top-[490.5px]" data-node-id="1:7593">
        <div className="absolute inset-[-125%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
        </div>
      </div>
      <div className="absolute left-[241px] size-[16px] top-[729.5px]" data-node-id="1:7594">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
      </div>
      <div className="absolute left-[241px] size-[16px] top-[1004.5px]" data-node-id="1:7595">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
      </div>
      <div className="absolute left-[241px] size-[16px] top-[1306.5px]" data-node-id="1:7596">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
      </div>
      <div className="absolute left-[241px] size-[16px] top-[1583px]" data-node-id="1:7597">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
      </div>

      {/* Scroll-driven progress: orange line fills over the grey timeline, and
          each dot lights up as the fill reaches it. */}
      <motion.div
        className="absolute left-[248px] top-[498.5px] w-[2px] bg-[#ff5c3a] origin-top shadow-[0_0_8px_0_rgba(255,92,58,0.5)]"
        style={{ height: 1092.5, scaleY: progress }}
      />
      {milestones.map((m) => (
        <MilestoneDot
          key={m.top}
          top={m.top}
          progress={progress}
          threshold={m.threshold}
        />
      ))}
    </div>
  );
}
