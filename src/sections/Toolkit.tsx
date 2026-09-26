import AccentMask from "../components/AccentMask";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const A = "/assets";
// UI/UX & Wireframing tools
const imgFigma = `${A}/d70d4.svg`;
const imgClaude = `${A}/ee3df.svg`;
const imgCursor = `${A}/6844e.svg`;
const imgMiro = `${A}/7e8ad.svg`;
const imgFramer = `${A}/bf1ce.svg`;
const imgWebflow = `${A}/1fb5d.svg`;
const imgBalsamiq = `${A}/ef0c1.svg`;
// UX skills
const imgIdeas = `${A}/c942c.svg`;
const imgStrategy = `${A}/750e1.svg`;
const imgMobile = `${A}/f9d47.svg`;
const imgLaptop = `${A}/c22c7.svg`;
const imgFlow = `${A}/b4622.svg`;
const imgFrameSelect = `${A}/17f7a.svg`;
const imgScaleFrame = `${A}/0e876.svg`;
const imgUserTag = `${A}/86515.svg`;
const imgWrench = `${A}/85b8f.svg`;
// Additional tools
const imgMs365 = `${A}/db18b.svg`;
const imgAdobe = `${A}/b022e.svg`;
// Section chrome
const imgVector = `${A}/15d72.svg`;
const imgStar1 = `${A}/78a5b.svg`;

type Item = { label: string; src: string };

const tools: Item[] = [
  { label: "Figma", src: imgFigma },
  { label: "Claude", src: imgClaude },
  { label: "Cursor", src: imgCursor },
  { label: "Miro", src: imgMiro },
  { label: "Framer", src: imgFramer },
  { label: "Webflow", src: imgWebflow },
  { label: "Balsamiq", src: imgBalsamiq },
];
const uxSkills: Item[] = [
  { label: "Design Thinking Approach", src: imgIdeas },
  { label: "Product Design", src: imgStrategy },
  { label: "Mobile App Design", src: imgMobile },
  { label: "Web Design", src: imgLaptop },
  { label: "User Flows", src: imgFlow },
  { label: "Wireframing", src: imgFrameSelect },
  { label: "Prototyping", src: imgScaleFrame },
  { label: "UX Strategy", src: imgUserTag },
  { label: "Design Systems", src: imgWrench },
];
const additional: Item[] = [
  { label: "Microsoft 365", src: imgMs365 },
  { label: "Adobe Creative Suite", src: imgAdobe },
];

const pillText =
  "font-['Syne'] font-medium text-[#ffb096] text-[14px] text-center tracking-[-0.07px] whitespace-nowrap leading-[1.45]";
const sectionLabel =
  "font-['Syne'] font-semibold text-[14px] text-white tracking-[1.12px] w-full leading-[1.45]";

// Figma "Smart animate", Ease out, 300ms.
const smartAnimate = { duration: 0.3, ease: "easeOut" } as const;

// One element per tool that morphs between its Tag (pill + label) and its Icon
// (40px circle) form. A shared `layout`/`layoutId` makes framer tween the box's
// position, size and radius — the code equivalent of Figma's Smart animate.
function ToolItem({
  item,
  mode,
  tagsWithIcon,
}: {
  item: Item;
  mode: "tags" | "icons";
  tagsWithIcon: boolean;
}) {
  const isIcons = mode === "icons";
  const showIcon = isIcons || tagsWithIcon;
  return (
    <motion.div
      layout
      layoutId={`tool-${item.label}`}
      transition={smartAnimate}
      style={{ borderRadius: 60 }}
      className={`bg-[#2b1919] border border-[rgba(255,92,58,0.3)] border-solid flex items-center justify-center shrink-0 overflow-hidden ${
        isIcons ? "size-[40px]" : "gap-[8px] px-[20px] py-[8px]"
      }`}
    >
      {showIcon && (
        <motion.div
          layout
          transition={smartAnimate}
          className={`relative shrink-0 ${isIcons ? "size-[18px]" : "size-[12px]"}`}
        >
          <img alt={item.label} className="absolute block inset-0 max-w-none size-full" src={item.src} />
        </motion.div>
      )}
      <AnimatePresence initial={false}>
        {!isIcons && (
          <motion.div
            layout
            key="label"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={smartAnimate}
            className={`${pillText} overflow-hidden`}
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Row({
  items,
  mode,
  tagsWithIcon,
}: {
  items: Item[];
  mode: "tags" | "icons";
  tagsWithIcon: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center content-center relative shrink-0 w-full ${
        mode === "icons" ? "gap-[12px]" : "gap-[20px]"
      }`}
    >
      {items.map((item) => (
        <ToolItem key={item.label} item={item} mode={mode} tagsWithIcon={tagsWithIcon} />
      ))}
    </div>
  );
}

function ToolkitComponent({ className }: { className?: string }) {
  const [mode, setMode] = useState<"tags" | "icons">("tags");
  const toggleBtn = (m: "tags" | "icons") =>
    `flex items-center justify-center px-[6px] py-[4px] rounded-[4px] shrink-0 cursor-pointer font-['Syne'] font-normal text-[14px] text-center tracking-[1.12px] leading-[1.45] ${
      mode === m ? "bg-[#343434] text-white" : "text-[#6a6a6a]"
    }`;

  return (
    <div className={className || "h-[690px] relative w-[939px]"} data-node-id="1:303">
      <div className="absolute h-[132px] left-0 top-0 w-[939px]">
        <div className="absolute bg-[#171616] border border-[#343434] border-solid flex gap-[16px] items-center justify-center px-[8px] py-[6px] right-0 rounded-[7px] top-[92px]">
          <button className={toggleBtn("tags")} onClick={() => setMode("tags")}>
            Tags
          </button>
          <button className={toggleBtn("icons")} onClick={() => setMode("icons")}>
            Icons
          </button>
        </div>
        <div className="absolute flex gap-[10px] items-start left-0 top-0">
          <div className="font-['Syne'] font-bold text-[40px] text-white tracking-[1.6px] whitespace-nowrap leading-[1.45]">
            <p className="mb-[16px]">
              <span>{`Toolkit components, `}</span>
              <span className="text-[#6a6a6a]">mapped to</span>
            </p>
            <p>Skill-set variants</p>
          </div>
        </div>
      </div>
      {/* Sections stack in normal flow so the card hugs its content (Icons mode
          is much shorter than Tags); `layout` animates the height change. */}
      <div className="absolute flex flex-col left-0 overflow-clip rounded-[10px] top-[182px] w-[939px]">
        <motion.div
          layout
          transition={smartAnimate}
          className="bg-[#101010] border-[#292929] border-l border-r border-t border-solid flex flex-col gap-[31px] items-start p-[30px] rounded-tl-[10px] rounded-tr-[10px] w-full"
        >
          <div className={sectionLabel}>{`UI/UX & Wireframing Tools`}</div>
          <Row items={tools} mode={mode} tagsWithIcon={true} />
        </motion.div>
        <motion.div
          layout
          transition={smartAnimate}
          className="bg-[#101010] border-[#292929] border-l border-r border-solid flex flex-col gap-[31px] items-start p-[30px] w-full"
        >
          <div className={sectionLabel}>UX Skills</div>
          <Row items={uxSkills} mode={mode} tagsWithIcon={false} />
        </motion.div>
        <motion.div
          layout
          transition={smartAnimate}
          className="bg-[#101010] border-[#292929] border-b border-l border-r border-solid flex flex-col gap-[31px] items-start p-[30px] rounded-bl-[10px] rounded-br-[10px] w-full"
        >
          <div className={sectionLabel}>Additional Tools</div>
          <Row items={additional} mode={mode} tagsWithIcon={true} />
        </motion.div>
      </div>
    </div>
  );
}

const certCard =
  "absolute bg-[#1a1a1a] border border-[#494949] border-solid flex gap-[60px] h-[127px] items-center overflow-clip px-[24px] py-[8px] right-0 rounded-[4px] w-[711px]";
const certSub =
  "flex flex-col font-['Syne'] font-normal justify-center relative shrink-0 text-[#7d8590] text-[16px] tracking-[1.28px] w-[573px] leading-[1.45]";

function VerifiedBadge() {
  return (
    <div className="bg-[#211c28] border border-[#695486] border-solid flex gap-[10px] items-center overflow-clip pl-[12px] pr-[10px] py-[5px] relative rounded-[30px] shrink-0">
      <div className="font-['Syne'] font-bold text-[10px] text-white tracking-[0.8px] whitespace-nowrap leading-[1.45]">
        Verified
      </div>
      <div className="relative shrink-0 size-[20px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

export default function Toolkit() {
  return (
    <div className="relative size-full" data-node-id="1:7603">
      <div className="-translate-x-1/2 absolute bg-[#101010] border border-[#ff5c3a] border-solid flex items-center justify-center left-[calc(50%-679px)] overflow-clip px-[24px] py-[8px] shadow-[4px_4px_20px_0px_rgba(255,92,58,0.2)] top-[73px]">
        <div className="font-['Syne'] font-medium text-[#ff5c3a] text-[14px] text-center tracking-[1.12px] whitespace-nowrap leading-[1.45]">
          {`PROPERTIES - TOOLKIT & CERTIFICATIONS`}
        </div>
      </div>
      <div className="absolute right-[110px] size-[40px] top-[71px]" data-name="Counter">
        <div className="absolute left-0 size-[40px] top-0">
          <AccentMask src={imgVector} className="absolute inset-0 size-full" stretch />
        </div>
        <p className="absolute inset-0 flex items-center justify-center font-['Syne'] font-bold text-[18px] text-white tracking-[0.18px] leading-none">
          4
        </p>
      </div>
      <ToolkitComponent className="absolute h-[690px] left-[116px] top-[157px] w-[939px]" />
      <div className="absolute h-[663px] left-[1159px] top-[157px] w-[711px]">
        <div className="absolute flex flex-col gap-[10px] items-start left-0 top-0 whitespace-nowrap">
          <div className="font-['Syne'] font-bold text-[40px] text-white tracking-[1.6px] leading-[1.45]">
            Certifications
          </div>
          <div className="font-['Syne'] font-normal text-[#7d8590] text-[20px] tracking-[0.8px] leading-[1.45]">
            Credentials that helped me grow
          </div>
        </div>
        <div className={`${certCard} bottom-[354px]`}>
          <div className="flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[486px]">
            <div className="font-['Syne'] font-bold text-[#ff5c3a] text-[20px] tracking-[1.6px] w-[573px] leading-[1.45]">
              Google UX Design Professional Certificate
            </div>
            <div className={certSub}>May 2022</div>
          </div>
          <VerifiedBadge />
        </div>
        <div className={`${certCard} bottom-[177px]`}>
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-[486px]">
            <div className="font-['Syne'] font-bold text-[#ff5c3a] text-[20px] tracking-[1.6px] w-[486px] leading-[1.45]">
              Affordances: Designing Intuitive User Interfaces
            </div>
            <div className={certSub}>IxDF Course, March 2025</div>
          </div>
          <VerifiedBadge />
        </div>
        <div className={`${certCard} bottom-0`}>
          <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-[486px]">
            <div className="font-['Syne'] font-bold text-[#ff5c3a] text-[20px] tracking-[1.6px] w-[486px] leading-[1.45]">
              Accessibility: How to Design for All
            </div>
            <div className={certSub}>IxDF Course, March 2025</div>
          </div>
          <VerifiedBadge />
        </div>
      </div>
    </div>
  );
}
