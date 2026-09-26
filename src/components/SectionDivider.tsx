import AccentMask from "./AccentMask";

const imgArrowDown = "/assets/99215.svg";

export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className="relative shrink-0 h-[46px] w-[1980px]" data-name="divider">
      <div className="absolute left-0 right-0 top-[23px] h-px bg-[#1e1e1e]" />
      <div className="-translate-x-1/2 absolute left-1/2 top-0 flex items-center gap-[8px] rounded-full border border-[#ff5c3a] border-solid bg-[#0d0d0d] px-[24px] py-[10px] shadow-[0_0_20px_0_rgba(255,92,58,0.25)]">
        <div className="relative size-[24px] shrink-0">
          <AccentMask src={imgArrowDown} className="absolute inset-0 size-full" stretch />
        </div>
        <div className="font-['Syne'] font-medium text-[#e8e8e8] text-[16px] tracking-[0.64px] whitespace-nowrap">
          <p className="leading-[1.45]">{label}</p>
        </div>
      </div>
    </div>
  );
}
