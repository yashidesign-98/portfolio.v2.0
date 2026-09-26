import AccentMask from "../components/AccentMask";
﻿const assetPathPrefix = "/assets";
const imgKitsch = `${assetPathPrefix}/ebb88.png`;
const imgJharokhas = `${assetPathPrefix}/05370.png`;
const imgSummer = `${assetPathPrefix}/d07da.png`;
const imgVector = `${assetPathPrefix}/15d72.svg`;

const viewSetBtn =
  "bg-[rgba(255,255,255,0.01)] border border-[#ff5c3a] border-solid content-stretch flex items-center justify-center p-[16px] relative rounded-[6px] shrink-0 cursor-pointer";
const viewSetText =
  "[word-break:break-word] flex flex-col font-['Syne'] font-bold justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[0.14px] whitespace-nowrap";

function CardCaption({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[60px] items-center justify-center left-1/2 top-[597px] w-[494px]">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-white w-[332px]">
        <div className="flex flex-col font-['Syne'] font-bold justify-center relative shrink-0 text-[30px] tracking-[1.2px] w-full">
          <p className="leading-[1.45]">{title}</p>
        </div>
        <div className="flex flex-col font-['Syne'] font-normal h-[38px] justify-center relative shrink-0 text-[18px] tracking-[0.18px] w-full">
          <p className="leading-[1.45]">{sub}</p>
        </div>
      </div>
      <div className={viewSetBtn}>
        <div className={viewSetText}><p className="leading-[1.45]">{`View Set `}</p></div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="relative size-full" data-node-id="1:7640">
      <div className="-translate-x-1/2 absolute bg-[#101010] border border-[#ff5c3a] border-solid content-stretch flex items-center justify-center left-[calc(50%-679px)] overflow-clip px-[24px] py-[8px] shadow-[4px_4px_20px_0px_rgba(255,92,58,0.2)] top-[73px]" data-node-id="1:7641">
        <div className="[word-break:break-word] flex flex-col font-['Syne'] font-medium justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[1.12px] whitespace-nowrap" data-node-id="1:7642">
          <p className="leading-[1.45]">AI PLAYGORUND - WEEKEND SANDBOX</p>
        </div>
      </div>
      <div className="absolute right-[110px] size-[40px] top-[71px]" data-node-id="1:7643" data-name="Counter">
        <div className="absolute left-0 size-[40px] top-0" data-node-id="1:7644" data-name="Vector">
          <AccentMask src={imgVector} className="absolute inset-0 size-full" stretch />
        </div>
        <p className="absolute inset-0 flex items-center justify-center font-['Syne'] font-bold text-[18px] text-white tracking-[0.18px] leading-none" data-node-id="1:7645">
          5
        </p>
      </div>
      <div className="-translate-x-1/2 absolute h-[861px] left-1/2 top-[157px] w-[1730px]" data-node-id="1:7646">
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[10px] items-start leading-[0] left-0 top-0 whitespace-nowrap" data-node-id="1:7647">
          <div className="flex flex-col font-['Syne'] font-bold justify-center relative shrink-0 text-[40px] text-white tracking-[1.6px]" data-node-id="1:7648">
            <p className="leading-[1.45]">Late Night Prompts</p>
          </div>
          <div className="flex flex-col font-['Syne'] font-normal justify-center relative shrink-0 text-[#7d8590] text-[20px] tracking-[0.8px]" data-node-id="1:7649">
            <p className="leading-[1.45]">Teaching generative models some taste, one poster set and twenty iterations at a time.</p>
          </div>
        </div>
        <div className="absolute bg-black border-2 border-transparent border-solid transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)] h-[710px] left-0 overflow-clip rounded-[10px] top-[151px] w-[554px]" data-node-id="1:7650" data-name="work 7">
          <div className="-translate-x-1/2 absolute h-[746px] left-1/2 top-[-1px] w-[554px]" data-node-id="1:7651">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[132.02%] left-0 max-w-none top-[-32.02%] w-full" src={imgKitsch} />
            </div>
          </div>
          <div className="absolute bg-gradient-to-b bottom-[-1px] from-[rgba(0,0,0,0)] h-[710px] left-[-1px] overflow-clip to-black w-[554px]" data-node-id="1:7652">
            <CardCaption title="Kitsch Odyssey" sub="Contemporary Indian kitsch series" />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bg-black border-2 border-transparent border-solid transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)] h-[710px] left-1/2 overflow-clip rounded-[10px] top-[151px] w-[554px]" data-node-id="1:7659" data-name="work 10">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[741px] left-1/2 top-[calc(50%+0.5px)] w-[554px]" data-node-id="1:7660">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgJharokhas} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[710px] left-1/2 overflow-clip to-black top-1/2 w-[554px]" data-node-id="1:7661">
            <CardCaption title="Jharokhas" sub="Royal arches, modern chill" />
          </div>
        </div>
        <div className="absolute bg-black border-2 border-transparent border-solid transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff5c3a] hover:shadow-[0_12px_40px_0_rgba(255,92,58,0.25)] h-[710px] overflow-clip right-0 rounded-[10px] top-[151px] w-[554px]" data-node-id="1:7668" data-name="work 11">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[710px] left-1/2 top-1/2 w-[554px]" data-node-id="1:7669">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[129.06%] left-[-33.21%] max-w-none top-[-14.53%] w-[166.43%]" src={imgSummer} />
            </div>
          </div>
          <div className="absolute bg-gradient-to-b bottom-[-1px] from-[rgba(0,0,0,0)] h-[710px] left-[-1px] overflow-clip to-black w-[554px]" data-node-id="1:7670">
            <CardCaption title="Summer Remix" sub="Gen-Z summer collage prints" />
          </div>
        </div>
      </div>
    </div>
  );
}
