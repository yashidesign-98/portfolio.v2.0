import AccentMask from "../components/AccentMask";
﻿const assetPathPrefix = "/assets";
const imgW3Hero = `${assetPathPrefix}/w3-hero.png`;
const imgW3Features = `${assetPathPrefix}/w3-features.png`;
const imgW3Networks = `${assetPathPrefix}/w3-networks.png`;
const imgBlkDetail = `${assetPathPrefix}/blk-detail.png`;
const imgBlkTxns = `${assetPathPrefix}/blk-txns.png`;
const imgBlkL2L1 = `${assetPathPrefix}/blk-l2l1.png`;
const imgFitHome = `${assetPathPrefix}/fit-home.png`;
const imgFitInsights = `${assetPathPrefix}/fit-insights.png`;
const imgFitWorkout = `${assetPathPrefix}/fit-workout.png`;
const imgMedHome = `${assetPathPrefix}/med-home.png`;
const imgMedDoctors = `${assetPathPrefix}/med-doctors.png`;
const imgMedNotifications = `${assetPathPrefix}/med-notifications.png`;
const imgNuboConsole = `${assetPathPrefix}/nubo-cloud-console.png`;
const imgVector = `${assetPathPrefix}/15d72.svg`;

const cardBase =
  "bg-black border-2 border-transparent border-solid h-[774.5px] overflow-clip relative rounded-[10px] w-[554px] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)]";
const tag =
  "bg-[rgba(255,92,58,0.1)] border border-[#ff5c3a] border-solid content-stretch flex items-center justify-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shrink-0";
const tagText =
  "[word-break:break-word] flex flex-col font-['Syne'] font-medium justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[1.12px] whitespace-nowrap";
const cardTitle =
  "-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[39px] text-[40px] text-white top-[58.5px] tracking-[1.6px] whitespace-nowrap";
const caseBtn =
  "absolute bottom-[30.5px] content-stretch flex items-center justify-center p-[16px] right-[12px] rounded-[6px] cursor-pointer";
const caseBtnText =
  "[word-break:break-word] flex flex-col font-['Syne'] font-bold justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[0.14px] whitespace-nowrap";

function BrowserWindow({ src, shotH, className }: { src: string; shotH: number; className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden rounded-[12px] border border-white/10 bg-[#0e0e0e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${className || ""}`}
    >
      <div className="flex h-[26px] items-center gap-[7px] bg-[#1b1b1b] px-[12px]">
        <span className="size-[9px] rounded-full bg-[#ff5f57]" />
        <span className="size-[9px] rounded-full bg-[#febc2e]" />
        <span className="size-[9px] rounded-full bg-[#28c840]" />
      </div>
      <div className="overflow-hidden" style={{ height: shotH }}>
        <img alt="Blockscope explorer screen" src={src} className="block w-full object-cover object-top" />
      </div>
    </div>
  );
}

function Work5({ className }: { className?: string }) {
  return (
    <a href="#case-web3" className={`${className || cardBase} block cursor-pointer`} data-node-id="1:204">
      <div className="absolute bg-[#1a1a1a] bottom-[-2px] h-[299px] left-[-1px] overflow-clip w-[554px]" data-node-id="1:205">
        <div className={cardTitle} data-node-id="1:206">
          <p className="leading-[1.45]">Web3 Website</p>
        </div>
        <div className="absolute content-stretch flex gap-[16px] items-center left-[39px] top-[101.5px]" data-node-id="1:207">
          <div className={tag} data-node-id="1:208"><div className={tagText}><p className="leading-[1.45]">Web3</p></div></div>
          <div className={tag} data-node-id="1:210"><div className={tagText}><p className="leading-[1.45]">Landing Page</p></div></div>
          <div className={tag} data-node-id="1:212"><div className={tagText}><p className="leading-[1.45]">Website Design</p></div></div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal h-[63px] justify-center leading-[0] left-[39px] text-[#7d8590] text-[18px] top-[201px] tracking-[0.18px] w-[472px]" data-node-id="1:214">
          <p className="leading-[1.45]">{`Crafted a web3 website designs that stood out in the industry, maintaining the playful & modern nature.`}</p>
        </div>
        <div className={caseBtn} data-node-id="1:215"><div className={caseBtnText}><p className="leading-[1.45]">View Case Study →</p></div></div>
      </div>
      <div className="-translate-x-1/2 absolute h-[476px] left-1/2 overflow-clip top-[-0.5px] w-[554px]" data-node-id="1:217">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,#191428_0%,#100e18_45%,#0a0a0c_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_48%,rgba(139,92,246,0.20),transparent_65%)]" />
        <BrowserWindow src={imgW3Features} shotH={150} className="left-[-6px] top-[40px] z-[1] w-[372px] -rotate-[6deg] brightness-[.72]" />
        <BrowserWindow src={imgW3Networks} shotH={150} className="right-[-6px] top-[40px] z-[2] w-[372px] rotate-[6deg] brightness-[.8]" />
        <BrowserWindow src={imgW3Hero} shotH={250} className="left-1/2 top-[168px] z-[3] w-[452px] -translate-x-1/2" />
      </div>
    </a>
  );
}

function Work4({ className }: { className?: string }) {
  return (
    <a href="#case-block" className={`${className || cardBase} block cursor-pointer`} data-node-id="1:167">
      <div className="absolute bg-[#1a1a1a] bottom-[-2px] h-[299px] left-[-1px] overflow-clip w-[554px]" data-node-id="1:168">
        <div className={cardTitle} data-node-id="1:169">
          <p className="leading-[1.45]">Block Explorer</p>
        </div>
        <div className="absolute content-stretch flex gap-[16px] items-center left-[39px] top-[101.5px]" data-node-id="1:170">
          <div className={tag} data-node-id="1:171"><div className={tagText}><p className="leading-[1.45]">Web3</p></div></div>
          <div className={tag} data-node-id="1:173"><div className={tagText}><p className="leading-[1.45]">Fintech</p></div></div>
          <div className={tag} data-node-id="1:175"><div className={tagText}><p className="leading-[1.45]">NFT</p></div></div>
          <div className={tag} data-node-id="1:177"><div className={tagText}><p className="leading-[1.45]">{`Data Visualisation `}</p></div></div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal h-[63px] justify-center leading-[0] left-[39px] text-[#7d8590] text-[18px] top-[201px] tracking-[0.18px] w-[472px]" data-node-id="1:179">
          <p className="leading-[1.45]">Balanced innovation and familiarity in a redesigned blockchain explorer iinterface</p>
        </div>
        <div className={caseBtn} data-node-id="1:180"><div className={caseBtnText}><p className="leading-[1.45]">View Case Study →</p></div></div>
      </div>
      <div className="-translate-x-1/2 absolute h-[476px] left-1/2 overflow-clip top-[-0.5px] w-[554px]" data-node-id="1:182">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,#12181a_0%,#0d1012_45%,#0a0a0c_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_48%,rgba(45,212,140,0.16),transparent_65%)]" />
        <BrowserWindow src={imgBlkTxns} shotH={150} className="left-[-6px] top-[40px] z-[1] w-[372px] -rotate-[6deg] brightness-[.72]" />
        <BrowserWindow src={imgBlkL2L1} shotH={150} className="right-[-6px] top-[40px] z-[2] w-[372px] rotate-[6deg] brightness-[.8]" />
        <BrowserWindow src={imgBlkDetail} shotH={250} className="left-1/2 top-[168px] z-[3] w-[452px] -translate-x-1/2" />
      </div>
    </a>
  );
}

function Work3({ className }: { className?: string }) {
  return (
    <a href="#case-fitness" className={`${className || cardBase} block cursor-pointer`} data-node-id="1:134">
      <div className="absolute bg-[#1a1a1a] bottom-[-2px] h-[299px] left-[-1px] overflow-clip w-[554px]" data-node-id="1:135">
        <div className={cardTitle} data-node-id="1:136">
          <p className="leading-[1.45]">Fitness App</p>
        </div>
        <div className="absolute content-stretch flex gap-[16px] items-center left-[39px] top-[101.5px]" data-node-id="1:137">
          <div className={tag} data-node-id="1:138"><div className={tagText}><p className="leading-[1.45]">Fitness</p></div></div>
          <div className={tag} data-node-id="1:140"><div className={tagText}><p className="leading-[1.45]">{`Health & Wellness`}</p></div></div>
          <div className={tag} data-node-id="1:142"><div className={tagText}><p className="leading-[1.45]">Mobile App</p></div></div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal h-[63px] justify-center leading-[0] left-[39px] text-[#7d8590] text-[18px] top-[201px] tracking-[0.18px] w-[472px]" data-node-id="1:144">
          <p className="leading-[1.45]">Crafted a mobile app experience that takes the hassle out of healthcare.</p>
        </div>
        <div className={caseBtn} data-node-id="1:145"><div className={caseBtnText}><p className="leading-[1.45]">View Case Study →</p></div></div>
      </div>
      <div className="-translate-x-1/2 absolute h-[476px] left-1/2 overflow-clip top-[-0.5px] w-[554px]" data-node-id="1:147">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,#161b24_0%,#0e1015_45%,#0a0a0c_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_45%,rgba(255,92,58,0.16),transparent_65%)]" />
        <img
          alt="ZenFit — workout categories screen"
          className="pointer-events-none absolute left-[-30px] top-[78px] h-[368px] w-auto -rotate-[9deg] rounded-[22px] border border-white/10 drop-shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
          src={imgFitWorkout}
        />
        <img
          alt="ZenFit — insights screen"
          className="pointer-events-none absolute right-[-30px] top-[78px] h-[368px] w-auto rotate-[9deg] rounded-[22px] border border-white/10 drop-shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
          src={imgFitInsights}
        />
        <img
          alt="ZenFit — home screen"
          className="pointer-events-none absolute left-1/2 top-[28px] h-[446px] w-auto -translate-x-1/2 rounded-[26px] border border-white/10 drop-shadow-[0_22px_55px_rgba(0,0,0,0.7)]"
          src={imgFitHome}
        />
      </div>
    </a>
  );
}

function Work2({ className }: { className?: string }) {
  return (
    <a href="#case-medical" className={`${className || cardBase} block cursor-pointer`} data-node-id="1:103">
      <div className="absolute bg-[#1a1a1a] bottom-[-1px] h-[299px] left-[-1px] overflow-clip w-[554px]" data-node-id="1:104">
        <div className={cardTitle} data-node-id="1:105">
          <p className="leading-[1.45]">Medical App</p>
        </div>
        <div className="absolute content-stretch flex gap-[16px] items-center left-[39px] top-[102px]" data-node-id="1:106">
          <div className={tag} data-node-id="1:107"><div className={tagText}><p className="leading-[1.45]">Healthcare</p></div></div>
          <div className={tag} data-node-id="1:109"><div className={tagText}><p className="leading-[1.45]">Mobile App</p></div></div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal h-[63px] justify-center leading-[0] left-[39px] text-[#7d8590] text-[18px] top-[201.5px] tracking-[0.18px] w-[472px]" data-node-id="1:111">
          <p className="leading-[1.45]">Crafted a mobile app experience that takes the hassle out of healthcare.</p>
        </div>
        <div className={caseBtn} data-node-id="1:112"><div className={caseBtnText}><p className="leading-[1.45]">View Case Study →</p></div></div>
      </div>
      <div className="absolute h-[473px] left-[-1px] overflow-clip top-[-1px] w-[554px]" data-node-id="1:114">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,#1a1f2a_0%,#101216_45%,#0b0b0d_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_45%,rgba(255,92,58,0.20),transparent_65%)]" />
        <img
          alt="Cure First — notifications screen"
          className="pointer-events-none absolute left-[-34px] top-[74px] h-[372px] w-auto -rotate-[9deg] drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          src={imgMedNotifications}
        />
        <img
          alt="Cure First — doctors screen"
          className="pointer-events-none absolute right-[-34px] top-[74px] h-[372px] w-auto rotate-[9deg] drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          src={imgMedDoctors}
        />
        <img
          alt="Cure First — home screen"
          className="pointer-events-none absolute left-1/2 top-[26px] h-[452px] w-auto -translate-x-1/2 drop-shadow-[0_22px_55px_rgba(0,0,0,0.6)]"
          src={imgMedHome}
        />
      </div>
    </a>
  );
}

function Work1({ className }: { className?: string }) {
  return (
    <a href="#case-study" className={`${className || "bg-[#1a1a1a] border-2 border-transparent border-solid h-[772px] overflow-clip relative rounded-[10px] w-[1154px] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)]"} block cursor-pointer`} data-node-id="1:64">
      <div className="absolute h-[473px] left-[-2px] overflow-clip top-[-2px] w-[1153px]" data-node-id="1:65">
        <img
          alt="Nubo Cloud console"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src={imgNuboConsole}
        />
      </div>
      <div className="absolute bg-[#1a1a1a] bottom-[-2px] h-[299px] left-[-2px] overflow-clip w-[1153px]" data-node-id="1:69">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-bold justify-center leading-[0] left-[39px] text-[40px] text-white top-[59px] tracking-[1.6px] whitespace-nowrap" data-node-id="1:70">
          <p className="leading-[1.45]">{`Public Cloud Experience `}</p>
        </div>
        <div className="absolute content-stretch flex gap-[16px] items-center left-[39px] top-[112px]" data-node-id="1:71">
          <div className={tag} data-node-id="1:72"><div className={tagText}><p className="leading-[1.45]">Cloud Platform</p></div></div>
          <div className={tag} data-node-id="1:74"><div className={tagText}><p className="leading-[1.45]">Enterprise UX</p></div></div>
          <div className={tag} data-node-id="1:76"><div className={tagText}><p className="leading-[1.45]">SaaS</p></div></div>
          <div className={tag} data-node-id="1:78"><div className={tagText}><p className="leading-[1.45]">{`Digital Products & Technologies`}</p></div></div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[39px] text-[#7d8590] text-[18px] top-[206px] tracking-[0.18px] w-[707px]" data-node-id="1:80">
          <p className="leading-[1.45]">Designed cloud platform interface that simplifies complex workflows for modern infrastructire</p>
        </div>
        <div className="absolute bottom-[30px] content-stretch flex items-center justify-center p-[16px] right-[40px] rounded-[6px]" data-node-id="1:81"><div className={caseBtnText}><p className="leading-[1.45]">View Case Study →</p></div></div>
      </div>
    </a>
  );
}

export default function Work() {
  return (
    <div className="relative size-full" data-node-id="1:7497">
      <div className="-translate-x-1/2 absolute bg-[#101010] border border-[#ff5c3a] border-solid content-stretch flex items-center justify-center left-[calc(50%-785.5px)] overflow-clip px-[24px] py-[8px] shadow-[4px_4px_20px_0px_rgba(255,92,58,0.2)] top-[73px]" data-node-id="1:7498">
        <div className="[word-break:break-word] flex flex-col font-['Syne'] font-medium justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[1.12px] whitespace-nowrap" data-node-id="1:7499">
          <p className="leading-[1.45]">CANVAS - WORK</p>
        </div>
      </div>
      <div className="[word-break:break-word] absolute h-[118px] leading-[0] left-[116px] top-[157px] w-[515px] whitespace-nowrap" data-node-id="1:7500">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne'] font-bold justify-center left-0 text-[60px] text-white top-[43.5px] tracking-[2.4px]" data-node-id="1:7501">
          <p className="leading-[1.45]">Selected Work</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne'] font-normal justify-center left-0 text-[#7d8590] text-[20px] top-[103.5px] tracking-[0.8px]" data-node-id="1:7502">
          <p className="leading-[1.45]">Projects that shaped how I think about Design</p>
        </div>
      </div>
      <div className="absolute right-[110px] size-[40px] top-[71px]" data-node-id="1:7503" data-name="Counter">
        <div className="absolute left-0 size-[40px] top-0" data-node-id="1:7504" data-name="Vector">
          <AccentMask src={imgVector} className="absolute inset-0 size-full" stretch />
        </div>
        <p className="absolute inset-0 flex items-center justify-center font-['Syne'] font-bold text-[18px] text-white tracking-[0.18px] leading-none" data-node-id="1:7505">
          2
        </p>
      </div>
      <div className="absolute gap-x-[46px] gap-y-[46px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[1603px] left-[116px] overflow-visible py-[4px] top-[323px] w-[1754px]" data-node-id="1:7506">
        <Work1 className="bg-[#1a1a1a] border-2 border-transparent border-solid col-[1/span_2] justify-self-stretch overflow-clip relative rounded-[10px] row-start-1 self-stretch shrink-0 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)]" />
        <Work2 className="bg-black border-2 border-transparent border-solid col-start-3 justify-self-stretch overflow-clip relative rounded-[10px] row-start-1 self-stretch shrink-0 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)]" />
        <Work3 className="bg-black border-2 border-transparent border-solid col-start-1 justify-self-stretch overflow-clip relative rounded-[10px] row-start-2 self-stretch shrink-0 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)]" />
        <Work4 className="bg-black border-2 border-transparent border-solid col-start-2 justify-self-stretch overflow-clip relative rounded-[10px] row-start-2 self-stretch shrink-0 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)]" />
        <Work5 className="bg-black border-2 border-transparent border-solid col-start-3 justify-self-stretch overflow-clip relative rounded-[10px] row-start-2 self-stretch shrink-0 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)]" />
      </div>
    </div>
  );
}
