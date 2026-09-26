const assetPathPrefix = "/assets";
import { motion } from "motion/react";
import AccentMask from "../components/AccentMask";
const imgEllipse1 = `${assetPathPrefix}/121a1.svg`;
const imgTopAnts = `${assetPathPrefix}/887ba.svg`;
const imgBottomAnts = `${assetPathPrefix}/2b78d.svg`;
const imgRightAnts = `${assetPathPrefix}/b9718.svg`;
const imgLeftAnts = `${assetPathPrefix}/77b36.svg`;
const imgGroup = `${assetPathPrefix}/0db41.svg`;
const imgVector3 = `${assetPathPrefix}/9a87a.svg`;
const imgGroup1 = `${assetPathPrefix}/fc0f3.svg`;

export default function Hero() {
  return (
    <div className="relative size-full" data-node-id="1:7411">
      <div className="absolute bg-[#ff5c3a] left-[-3px] size-[10px] top-[-5px]" data-node-id="1:7412" />
      <div className="absolute bg-[#ff5c3a] right-[-6px] size-[10px] top-[-5px]" data-node-id="1:7413" />
      <div className="absolute bg-[#ff5c3a] bottom-[-2px] right-[-6px] size-[10px]" data-node-id="1:7414" />
      <div className="absolute bg-[#ff5c3a] bottom-[-2px] left-[-3px] size-[10px]" data-node-id="1:7415" />
      <div className="[word-break:break-word] absolute contents font-['Syne'] font-extrabold leading-[0] left-[19px] text-[180px] top-[54px] tracking-[10.8px] whitespace-nowrap" data-node-id="1:7416">
        <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[19px] text-[transparent] [-webkit-text-stroke:2px_rgba(var(--accent-rgb),0.4)] top-[184.5px]" data-node-id="1:7417">
          <p className="leading-[1.45]">Yashi</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[98px] text-[transparent] [-webkit-text-stroke:2px_rgba(var(--accent-rgb),0.4)] top-[420.5px]" data-node-id="1:7418">
          <p className="leading-[1.45]">Bhatnagar</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[29px] text-white top-[214.5px]" data-node-id="1:7419">
          <p className="leading-[1.45]">Yashi</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[123px] text-white top-[449.5px]" data-node-id="1:7420">
          <p className="leading-[1.45]">Bhatnagar</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute border border-[#ff5c3a] border-solid content-stretch flex gap-[20px] items-center left-[calc(50%-649.5px)] overflow-clip px-[24px] py-[9px] rounded-[60px] top-[632px]" data-node-id="1:7421">
        <div className="relative shrink-0 size-[10px]" data-node-id="1:7422">
          <AccentMask src={imgEllipse1} className="absolute inset-0 size-full" stretch />
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Syne'] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white tracking-[-0.1px] whitespace-nowrap" data-node-id="1:7423">
          <p className="leading-[1.45]">Senior UX Designer</p>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[30px] items-center left-[82px] top-[719px]" data-node-id="1:7424">
        <div className="bg-[#ff5c3a] content-stretch flex items-center justify-center p-[16px] relative rounded-[6px] shrink-0 cursor-pointer transition-transform hover:-translate-y-0.5" data-node-id="1:7425" data-name="Primary button">
          <div className="[word-break:break-word] flex flex-col font-['Syne'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white tracking-[0.18px] whitespace-nowrap" data-node-id="1:7426">
            <p className="leading-[1.45] whitespace-pre">{`View Work  →`}</p>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/yashi-bhatnagar/" target="_blank" rel="noopener noreferrer" className="border border-[#ff5c3a] border-solid content-stretch flex items-center justify-center p-[16px] relative rounded-[6px] shrink-0 cursor-pointer transition-transform hover:-translate-y-0.5" data-node-id="1:7427" data-name="Primary button">
          <div className="[word-break:break-word] flex flex-col font-['Syne'] font-bold justify-center leading-[0] relative shrink-0 text-[#ff5c3a] text-[18px] text-center tracking-[0.18px] whitespace-nowrap" data-node-id="1:7428">
            <p className="leading-[1.45]">Let’s Talk</p>
          </div>
        </a>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne'] font-medium justify-center leading-[0] left-[1310px] text-[#7d8590] text-[24px] text-right top-[736px] tracking-[-0.12px] w-[560px]" data-node-id="1:7429">
        <p className="leading-[1.45]">I design fresh experiences from scratch - and sprinkling some magic on existing ones.</p>
      </div>
      <div className="absolute h-[851px] left-0 top-0 w-[1748px]" data-node-id="1:7430" data-name="Marching ants">
        <div className="absolute h-[2px] left-0 overflow-clip top-0 w-[1748px]" data-node-id="1:7431" data-name="Top edge">
          <motion.div className="absolute h-0 left-[-240px] top-px w-[2228px]" data-node-id="1:7432" data-name="Top ants">
            <div className="absolute inset-[-2px_0_0_0]">
              <AccentMask src={imgTopAnts} className="block size-full ants-x" stretch />
            </div>
          </motion.div>
        </div>
        <div className="absolute h-[2px] left-0 overflow-clip top-[849px] w-[1748px]" data-node-id="1:7433" data-name="Bottom edge">
          <motion.div className="absolute h-0 left-[-240px] top-px w-[2228px]" data-node-id="1:7434" data-name="Bottom ants">
            <div className="absolute inset-[-2px_0_0_0]">
              <AccentMask src={imgBottomAnts} className="block size-full ants-x-rev" stretch />
            </div>
          </motion.div>
        </div>
        <div className="absolute h-[851px] left-[1746px] overflow-clip top-0 w-[2px]" data-node-id="1:7435" data-name="Right edge">
          <motion.div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[1331px] items-center justify-center left-1/2 top-1/2 w-0" data-node-id="1:7436">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[1331px]" data-name="Right ants">
                <div className="absolute inset-[-2px_0_0_0]">
                  <AccentMask src={imgRightAnts} className="block size-full ants-x" stretch />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute h-[851px] left-0 overflow-clip top-0 w-[2px]" data-node-id="1:7437" data-name="Left edge">
          <motion.div className="-translate-y-1/2 absolute flex h-[1331px] items-center justify-center left-px top-1/2 w-0" data-node-id="1:7438">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[1331px]" data-name="Left ants">
                <div className="absolute inset-[-2px_0_0_0]">
                  <AccentMask src={imgLeftAnts} className="block size-full ants-x-rev" stretch />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute h-[45px] left-[1015px] top-[73px] w-[233px] float-badge" data-node-id="1:7439">
        <motion.div className="absolute contents left-[-11px] top-0" data-node-id="1:7440">
          <div className="-translate-x-1/2 absolute bg-[#1e1e1e] border border-[#7d8590] border-solid content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+28px)] overflow-clip px-[33px] py-[11px] rounded-[10px] top-0" data-node-id="1:7441">
            <div className="[word-break:break-word] flex flex-col font-['Syne'] font-medium justify-center leading-[0] relative shrink-0 text-[#c1c1c1] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap" data-node-id="1:7443">
              <p className="leading-[1.45]">5+ years of exp</p>
            </div>
            <div className="relative shrink-0 size-[20px]" data-node-id="1:7444" data-name="solar:user-broken">
              <div className="absolute inset-[8.33%_16.67%]" data-node-id="I1:7444;8:21884" data-name="Group">
                <div className="absolute inset-[-4.5%_-5.62%_-4.5%_-5.63%]">
                  <AccentMask src={imgGroup} className="block size-full" stretch />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[26px] left-[-11px] top-[10px] w-[70px]" data-node-id="1:7445">
            <div className="absolute inset-[0_-0.54%_-1.44%_-0.54%]">
              <img alt="" className="block max-w-none size-full" src={imgVector3} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="-translate-x-1/2 absolute h-[45px] left-[calc(50%+517px)] top-[208px] w-[244px] float-badge" style={{ animationDelay: "-1.3s" }} data-node-id="1:7446">
        <motion.div className="absolute contents left-[-20px] top-0" data-node-id="1:7447">
          <div className="-translate-x-1/2 absolute bg-[#1e1e1e] border border-[#7d8590] border-solid content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+22.5px)] overflow-clip px-[33px] py-[11px] rounded-[10px] top-0" data-node-id="1:7448">
            <div className="[word-break:break-word] flex flex-col font-['Syne'] font-semibold justify-center leading-[0] relative shrink-0 text-[#c1c1c1] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap" data-node-id="1:7450">
              <p className="leading-[1.45]">Google Certified</p>
            </div>
            <div className="relative shrink-0 size-[20px]" data-node-id="1:7451" data-name="iconamoon:certificate-badge">
              <div className="absolute inset-[4.53%_17.02%_4.17%_17.02%]" data-node-id="I1:7451;8:21894" data-name="Group">
                <AccentMask src={imgGroup1} className="absolute inset-0 size-full" stretch />
              </div>
            </div>
          </div>
          <div className="absolute h-[26px] left-[-20px] top-[10px] w-[70px]" data-node-id="1:7452">
            <div className="absolute inset-[0_-0.54%_-1.44%_-0.54%]">
              <img alt="" className="block max-w-none size-full" src={imgVector3} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="-translate-x-1/2 absolute h-[45px] left-[calc(50%+800.5px)] top-[611px] w-[233px] float-badge" style={{ animationDelay: "-2.6s" }} data-node-id="1:7453">
        <motion.div className="absolute contents left-[6px] top-0" data-node-id="1:7454">
          <div className="-translate-x-1/2 absolute bg-[#1e1e1e] border border-[#7d8590] border-solid content-stretch flex gap-[20px] items-center justify-center left-[calc(50%+28px)] overflow-clip px-[33px] py-[11px] rounded-[10px] top-0" data-node-id="1:7455">
            <div className="[word-break:break-word] flex flex-col font-['Syne'] font-semibold justify-center leading-[0] relative shrink-0 text-[#c1c1c1] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap" data-node-id="1:7457">
              <p className="leading-[1.45]">Frame 1097773</p>
            </div>
          </div>
          <div className="absolute h-[26px] left-[6px] top-[10px] w-[70px]" data-node-id="1:7458">
            <div className="absolute inset-[0_-0.54%_-1.44%_-0.54%]">
              <img alt="" className="block max-w-none size-full" src={imgVector3} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
