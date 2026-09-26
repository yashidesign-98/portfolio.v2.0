import AccentMask from "../components/AccentMask";
﻿const assetPathPrefix = "/assets";
const imgGroup = `${assetPathPrefix}/93bc3.svg`;
const imgEvaLinkedinOutline = `${assetPathPrefix}/0f472.svg`;
import { motion } from "motion/react";
const imgVector = `${assetPathPrefix}/15d72.svg`;
const imgVector4 = `${assetPathPrefix}/2b352.svg`;
const imgLeftAnts = `${assetPathPrefix}/a9c12.svg`;
const imgRightAnts = `${assetPathPrefix}/2b834.svg`;
const imgBottomAnts = `${assetPathPrefix}/c5257.svg`;
const imgTopAnts = `${assetPathPrefix}/7e9ef.svg`;

function MingcuteMailLine({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="1:450">
      <div className="absolute inset-[16.67%_8.33%_0.78%_8.33%]" data-node-id="1:451">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
      </div>
    </div>
  );
}

function EvaLinkedinOutline({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="1:448">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEvaLinkedinOutline} />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="relative size-full" data-node-id="1:7682">
      <div className="-translate-x-1/2 absolute bg-[#101010] border border-[#ff5c3a] border-solid content-stretch flex items-center justify-center left-[calc(50%+0.5px)] overflow-clip px-[24px] py-[8px] shadow-[4px_4px_20px_0px_rgba(255,92,58,0.2)] top-[30px]" data-node-id="1:7683">
        <div className="[word-break:break-word] flex flex-col font-['Syne'] font-medium justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[14px] text-center tracking-[1.12px] whitespace-nowrap" data-node-id="1:7684">
          <p className="leading-[1.45]">MODAL - CONTACT</p>
        </div>
      </div>
      <div className="absolute right-[110px] size-[40px] top-[28px]" data-node-id="1:7685" data-name="Counter">
        <div className="absolute left-0 size-[40px] top-0" data-node-id="1:7686" data-name="Vector">
          <AccentMask src={imgVector} className="absolute inset-0 size-full" stretch />
        </div>
        <p className="absolute inset-0 flex items-center justify-center font-['Syne'] font-bold text-[18px] text-white tracking-[0.18px] leading-none" data-node-id="1:7687">
          6
        </p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#1a1a1a] h-[508px] left-1/2 top-[166px] w-[822px]" data-node-id="1:7688">
        <div className="absolute bg-[#ff5c3a] left-[-3px] size-[10px] top-[-5px]" data-node-id="1:7689" />
        <div className="absolute bg-[#ff5c3a] right-[-6px] size-[10px] top-[-5px]" data-node-id="1:7690" />
        <div className="absolute bg-[#ff5c3a] bottom-[-2px] right-[-6px] size-[10px]" data-node-id="1:7691" />
        <div className="absolute bg-[#ff5c3a] bottom-[-2px] left-[-3px] size-[10px]" data-node-id="1:7692" />
        <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[36px] top-[28px] w-[751px]" data-node-id="1:7693">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-node-id="1:7694">
            <div className="flex flex-col font-['Syne'] font-bold justify-center relative shrink-0 text-[30px] text-white tracking-[1.2px] w-[582px]" data-node-id="1:7695">
              <p className="leading-[1.45]">Invite Yashi to your project</p>
            </div>
            <div className="flex flex-col font-['Syne'] font-normal justify-center min-w-full relative shrink-0 text-[#7d8590] text-[20px] tracking-[0.8px]" data-node-id="1:7696">
              <p className="leading-[1.45]">Open to full-time roles, freelance collaboration, and design discussions</p>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:7697">
            <div className="bg-black border border-[#292929] border-solid h-[50px] overflow-clip relative rounded-[8px] shrink-0 w-[567px]" data-node-id="1:7698">
              <input
                type="email"
                placeholder="your@email.com"
                className="absolute inset-0 bg-transparent font-['Syne'] font-normal leading-[1.45] pl-[22px] text-[14px] text-white tracking-[0.56px] placeholder:text-[#393939] focus:outline-none"
                data-node-id="1:7699"
              />
            </div>
            <button className="bg-[#ff5c3a] content-stretch flex h-[50px] items-center justify-center p-[16px] relative rounded-[6px] shrink-0 cursor-pointer transition-transform hover:-translate-y-0.5" data-node-id="1:7700">
              <div className="[word-break:break-word] flex flex-col font-['Syne'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white tracking-[0.18px] whitespace-nowrap" data-node-id="1:7701">
                <p className="leading-[1.45] whitespace-pre">{`Send Invite  →`}</p>
              </div>
            </button>
          </div>
          <div className="h-[46px] relative shrink-0 w-[751px]" data-node-id="1:7702">
            <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+1px)] top-[23px] w-[751px]" data-node-id="1:7703">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector4} />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#1a1a1a] content-stretch flex items-center justify-center left-[calc(50%+1px)] overflow-clip px-[24px] py-[11px] rounded-[60px] top-0" data-node-id="1:7704">
              <div className="[word-break:break-word] flex flex-col font-['Syne'] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d8590] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap" data-node-id="1:7705">
                <p className="leading-[1.45]">or reach out directly</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:7706">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:7707">
              <a href="https://www.linkedin.com/in/yashi-bhatnagar/" target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[27px] items-center px-[20px] py-[14px] relative rounded-[8px] shrink-0 w-[751px] hover:bg-[rgba(255,92,58,0.04)]" data-node-id="1:7708">
                <div className="h-[20px] relative shrink-0 w-[572px]" data-node-id="1:7709">
                  <EvaLinkedinOutline className="absolute left-0 size-[20px] top-0" />
                  <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[14px] text-white top-[10px] tracking-[0.56px] whitespace-nowrap" data-node-id="1:7711">
                    <p className="leading-[1.45]">LinkedIn</p>
                  </div>
                </div>
                <div className="bg-[rgba(255,92,58,0.1)] border border-[#ff5c3a] border-solid content-stretch flex items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-node-id="1:7712">
                  <div className="[word-break:break-word] flex flex-col font-['Syne'] font-medium justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[12px] text-center tracking-[0.96px] whitespace-nowrap" data-node-id="1:7713">
                    <p className="leading-[1.45]">Can Collaborate</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:7714">
              <a href="mailto:bhatnagar2898@gmail.com" className="content-stretch flex gap-[27px] items-center px-[20px] py-[14px] relative rounded-[8px] shrink-0 w-[751px] hover:bg-[rgba(255,92,58,0.04)]" data-node-id="1:7715">
                <div className="h-[20px] relative shrink-0 w-[618px]" data-node-id="1:7716">
                  <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-normal justify-center leading-[0] left-[30px] text-[14px] text-white top-[10px] tracking-[0.56px] whitespace-nowrap" data-node-id="1:7717">
                    <p className="leading-[1.45]">bhatnagar2898@gmail.com</p>
                  </div>
                  <MingcuteMailLine className="absolute left-0 size-[20px] top-0" />
                </div>
                <div className="bg-[rgba(255,92,58,0.1)] border border-[#ffb096] border-solid content-stretch flex items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-node-id="1:7719">
                  <div className="[word-break:break-word] flex flex-col font-['Syne'] font-medium justify-center leading-[0] relative shrink-0 text-[#ffb096] text-[12px] text-center tracking-[0.96px] whitespace-nowrap" data-node-id="1:7720">
                    <p className="leading-[1.45]">Can View</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute bottom-[54.5px] flex flex-col font-['Syne'] font-normal justify-center leading-[0] right-[410.5px] text-[#7d8590] text-[16px] text-center tracking-[0.64px] translate-x-1/2 translate-y-1/2 w-[751px]" data-node-id="1:7721">
          <p className="leading-[1.45]">Response time-Usually within 12hrs</p>
        </div>
        <div className="absolute h-[508px] left-px overflow-clip top-0 w-[2px]" data-node-id="1:7722" data-name="Left edge">
          <motion.div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[1069px] items-center justify-center left-1/2 top-[calc(50%-0.5px)] w-0">
            <div className="-rotate-90 flex-none">
              <div className="h-0 relative w-[1069px]">
                <div className="absolute inset-[-2px_0_0_0]">
                  <AccentMask src={imgLeftAnts} className="block size-full ants-x-rev" stretch />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="-translate-y-1/2 absolute h-[508px] overflow-clip right-[-2px] top-1/2 w-[2px]" data-node-id="1:7724" data-name="Right edge">
          <motion.div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[1069px] items-center justify-center left-1/2 top-[calc(50%-0.5px)] w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[1069px]">
                <div className="absolute inset-[-2px_0_0_0]">
                  <AccentMask src={imgRightAnts} className="block size-full ants-x" stretch />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-0 h-[2px] left-1/2 overflow-clip w-[822px]" data-node-id="1:7726" data-name="Bottom edge">
          <motion.div className="-translate-x-1/2 absolute h-0 left-1/2 top-px w-[2228px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <AccentMask src={imgBottomAnts} className="block size-full ants-x-rev" stretch />
            </div>
          </motion.div>
        </div>
        <div className="-translate-x-1/2 absolute h-[2px] left-1/2 overflow-clip top-0 w-[822px]" data-node-id="1:7728" data-name="Top edge">
          <motion.div className="-translate-x-1/2 absolute h-0 left-1/2 top-px w-[2228px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <AccentMask src={imgTopAnts} className="block size-full ants-x" stretch />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
