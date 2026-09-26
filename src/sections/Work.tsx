import AccentMask from "../components/AccentMask";
﻿const assetPathPrefix = "/assets";
const imgW3Showcase = `${assetPathPrefix}/w3-showcase.png`;
const imgBlkShowcase = `${assetPathPrefix}/blk-showcase.png`;
const imgFitShowcase = `${assetPathPrefix}/fit-showcase.png`;
const imgMedShowcase = `${assetPathPrefix}/med-showcase.png`;
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

function Work5({ className }: { className?: string }) {
  return (
    <a href="#web3-landing-page" className={`${className || cardBase} block cursor-pointer`} data-node-id="1:204">
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
        <img
          alt="Whizrolls — landing page screens"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src={imgW3Showcase}
        />
      </div>
    </a>
  );
}

function Work4({ className }: { className?: string }) {
  return (
    <a href="#block-explorer" className={`${className || cardBase} block cursor-pointer`} data-node-id="1:167">
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
        <img
          alt="Blockscope — explorer screens"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src={imgBlkShowcase}
        />
      </div>
    </a>
  );
}

function Work3({ className }: { className?: string }) {
  return (
    <a href="#fitness-app-experience" className={`${className || cardBase} block cursor-pointer`} data-node-id="1:134">
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
        <img
          alt="ZenFit — app screens"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src={imgFitShowcase}
        />
      </div>
    </a>
  );
}

function Work2({ className }: { className?: string }) {
  return (
    <a href="#medical-app-experience" className={`${className || cardBase} block cursor-pointer`} data-node-id="1:103">
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
        <img
          alt="Cure First — app screens"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src={imgMedShowcase}
        />
      </div>
    </a>
  );
}

function Work1({ className }: { className?: string }) {
  return (
    <a href="#public-cloud-experience" className={`${className || "bg-[#1a1a1a] border-2 border-transparent border-solid h-[772px] overflow-clip relative rounded-[10px] w-[1154px] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)]"} block cursor-pointer`} data-node-id="1:64">
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
