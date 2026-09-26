import AccentMask from "../components/AccentMask";
﻿import { useState } from "react";
import { motion } from "motion/react";

const assetPathPrefix = "/assets";
const imgProfileImage1 = `${assetPathPrefix}/bbb62.png`;
const imgVector = `${assetPathPrefix}/15d72.svg`;
const imgStar1 = `${assetPathPrefix}/9a615.svg`;

// The component reads as a selected Figma layer. The orange-bordered boundary box
// stays fixed; the three pieces inside/around it — the photo, the top label, and
// the bottom label — each rest "distorted" at their own angle and settle into
// stable alignment on hover with their own independent spring, so they don't move
// as one rigid block.
const photoVariants = {
  distorted: { rotate: 12.4, scale: 1.06 },
  together: { rotate: 0, scale: 1 },
};
const photoTransition = { type: "spring", bounce: 0.3, duration: 0.7 } as const;

const topLabelVariants = {
  distorted: { rotate: 15, x: 10, y: 6 },
  together: { rotate: 0, x: 0, y: 0 },
};
const topLabelTransition = { type: "spring", bounce: 0.4, duration: 0.6 } as const;

const bottomLabelVariants = {
  distorted: { rotate: -12.5, x: -8, y: 8 },
  together: { rotate: 0, x: 0, y: 0 },
};
const bottomLabelTransition = { type: "spring", bounce: 0.35, duration: 0.65 } as const;

function ProfileImage({ className }: { className?: string }) {
  // Each piece starts distorted (tilted like a selected Figma layer) and animates
  // to its stable, axis-aligned position while the mouse is over the component.
  const [hovered, setHovered] = useState(false);
  const state = hovered ? "together" : "distorted";
  return (
    <div
      className={className || "h-[680px] relative w-[540px]"}
      data-node-id="1:49"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute bg-[#1a1a1a] border border-[#ff5c3a] border-solid content-stretch flex items-center left-0 p-[60px] top-0"
        data-node-id="1:50"
      >
        <motion.div
          className="h-[560px] relative shrink-0 w-[420px] origin-center"
          data-node-id="1:51"
          data-name="Profile Image 1"
          variants={photoVariants}
          initial="distorted"
          animate={state}
          transition={photoTransition}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileImage1} />
        </motion.div>
      </div>
      <motion.div
        className="absolute bg-[#0d0d0d] border border-[#343434] border-solid content-stretch flex items-center justify-center left-[-27px] overflow-clip px-[16px] py-[8px] rounded-[4px] top-[-18px] origin-center"
        data-node-id="1:52"
        variants={topLabelVariants}
        initial="distorted"
        animate={state}
        transition={topLabelTransition}
      >
        <div className="[word-break:break-word] flex flex-col font-['Syne'] font-normal justify-center leading-[0] relative shrink-0 text-[#7d8590] text-[14px] tracking-[1.12px] whitespace-nowrap" data-node-id="1:53">
          <p className="leading-[1.45]">layer : yashi_profile ~ selected</p>
        </div>
      </motion.div>
      <motion.div
        className="absolute bg-[#0d0d0d] border border-[#343434] border-solid bottom-[-18px] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] right-[-30px] rounded-[4px] origin-center"
        data-node-id="1:54"
        variants={bottomLabelVariants}
        initial="distorted"
        animate={state}
        transition={bottomLabelTransition}
      >
        <div className="[word-break:break-word] flex flex-col font-['Syne'] font-normal justify-center leading-[0] relative shrink-0 text-[#7d8590] text-[14px] tracking-[1.12px] whitespace-nowrap" data-node-id="1:55">
          <p className="leading-[1.45]">w:540 ~ H: 680 ~ opacity: 100% ~ blend: normal</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#101010] relative size-full" data-node-id="1:7464">
      <div className="-translate-x-1/2 absolute bg-[#101010] border border-[#ff5c3a] border-solid content-stretch flex items-center justify-center left-[calc(50%-763px)] overflow-clip px-[24px] py-[8px] shadow-[4px_4px_20px_0px_rgba(255,92,58,0.2)] top-[73px]" data-node-id="1:7465">
        <div className="[word-break:break-word] flex flex-col font-['Syne'] font-medium justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[1.12px] whitespace-nowrap" data-node-id="1:7466">
          <p className="leading-[1.45]">COMPONENT - ABOUT</p>
        </div>
      </div>
      <ProfileImage className="absolute h-[680px] left-[144px] top-[204px] w-[540px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[797px] text-[#ff5c3a] text-[28px] top-[211.5px] tracking-[2.24px] whitespace-nowrap" data-node-id="1:7468">
        <p className="leading-[1.45]">{`// about`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[797px] text-[24px] text-white top-[331px] tracking-[1.92px] w-[973px]" data-node-id="1:7469">
        <p className="leading-[1.45]">{`I taught myself design through late nights, real projects, and no textbooks — then spent 5 years turning messy ideas into products people actually enjoy using. I believe good design disappears; it just makes sense, solves real problems, and feels human. Let's build something your users will thank you for.`}</p>
      </div>
      <div className="absolute right-[110px] size-[40px] top-[71px]" data-node-id="1:7470" data-name="Counter">
        <div className="absolute left-0 size-[40px] top-0" data-node-id="1:7471" data-name="Vector">
          <AccentMask src={imgVector} className="absolute inset-0 size-full" stretch />
        </div>
        <p className="absolute inset-0 flex items-center justify-center font-['Syne'] font-bold text-[18px] text-white tracking-[0.18px] leading-none" data-node-id="1:7472">
          1
        </p>
      </div>
      <div className="[word-break:break-word] absolute bg-[#101010] border border-[#343434] border-solid content-stretch flex flex-col font-['Syne'] font-medium items-start leading-[0] left-[797px] overflow-clip rounded-[10px] text-[18px] top-[444px] tracking-[0.18px] w-[973px] whitespace-nowrap" data-node-id="1:7473" data-name="About table">
        <div className="border-[#343434] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[30px] py-[20px] relative shrink-0 w-full" data-node-id="1:7474">
          <div className="flex flex-col justify-center relative shrink-0 text-[#7d8590]" data-node-id="1:7475">
            <p className="leading-[1.45]">Current Role</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-right text-white" data-node-id="1:7476">
            <p className="leading-[1.45]">Senior UX Designer</p>
          </div>
        </div>
        <div className="border-[#343434] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[30px] py-[20px] relative shrink-0 w-full" data-node-id="1:7477">
          <div className="flex flex-col justify-center relative shrink-0 text-[#7d8590]" data-node-id="1:7478">
            <p className="leading-[1.45]">Company</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-right text-white" data-node-id="1:7479">
            <p className="leading-[1.45]">Coredge.io, Noida</p>
          </div>
        </div>
        <div className="border-[#343434] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[30px] py-[20px] relative shrink-0 w-full" data-node-id="1:7480">
          <div className="flex flex-col justify-center relative shrink-0 text-[#7d8590]" data-node-id="1:7481">
            <p className="leading-[1.45]">Focus</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-right text-white" data-node-id="1:7482">
            <p className="leading-[1.45]">{`Product UX, User Experience `}</p>
          </div>
        </div>
        <div className="border-[#343434] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[30px] py-[20px] relative shrink-0 w-full" data-node-id="1:7483">
          <div className="flex flex-col justify-center relative shrink-0 text-[#7d8590]" data-node-id="1:7484">
            <p className="leading-[1.45]">Experience</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-right text-white" data-node-id="1:7485">
            <p className="leading-[1.45]">5+ years</p>
          </div>
        </div>
        <div className="border-[#343434] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[30px] py-[20px] relative shrink-0 w-full" data-node-id="1:7486">
          <div className="flex flex-col justify-center relative shrink-0 text-[#7d8590]" data-node-id="1:7487">
            <p className="leading-[1.45]">Background</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-right text-white" data-node-id="1:7488">
            <p className="leading-[1.45]">{`Cloud & SaaS Products, EdTech, Web3, Healthcare, Blockchain`}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[70.87px] flex h-[82.009px] items-center justify-center right-[800.48px] w-[370.303px]" data-node-id="1:7489">
        <div className="-rotate-[4deg] flex-none wiggle">
          <div className="bg-[#1a1a1a] border border-[#ff5c3a] border-solid content-stretch flex gap-[10px] h-[56.528px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[4px] w-[367.255px]">
            <div className="relative shrink-0 size-[20px]" data-node-id="1:7490">
              <AccentMask src={imgStar1} className="absolute inset-0 size-full" stretch />
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Syne'] font-normal justify-center leading-[0] relative shrink-0 text-[#7d8590] text-[16px] tracking-[1.28px] w-[299px]" data-node-id="1:7491">
              <p className="leading-[1.45]">I annotate my grocery lists in Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
