// Premiere-style scroll scrubber: the playhead + timecode track scroll progress
// across a "2-minute reel" at 24fps. Its colour comes from --scrubber (set from
// the accent in the Sidebar), independent of the accent itself.

const pad = (n: number) => String(n).padStart(2, "0");

export default function Scrubber({ progress }: { progress: number }) {
  const p = Math.max(0, Math.min(100, progress));
  const totalFrames = Math.round((p / 100) * 120 * 24); // 120s reel @ 24fps
  const f = totalFrames % 24;
  const s = Math.floor(totalFrames / 24) % 60;
  const m = Math.floor(totalFrames / 1440);
  const tc = `00:${pad(m)}:${pad(s)}:${pad(f)}`;

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[55] flex h-[40px] w-full select-none items-center gap-[18px] border-b border-[#1e1e1e] bg-[#0d0d0d]/60 px-[24px] backdrop-blur-md">
      <span className="font-mono text-[13px] tabular-nums" style={{ color: "var(--scrubber)" }}>
        {tc}
      </span>
      <div className="relative h-[18px] flex-1">
        {/* ruler ticks */}
        <div
          className="absolute inset-x-0 top-1/2 h-[10px] -translate-y-1/2 opacity-70"
          style={{ background: "repeating-linear-gradient(90deg, #3a3a3a 0 1px, transparent 1px 22px)" }}
        />
        {/* progress line */}
        <div
          className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2"
          style={{ width: `${p}%`, backgroundColor: "var(--scrubber)" }}
        />
        {/* playhead */}
        <div className="absolute top-0 h-full w-[2px]" style={{ left: `${p}%`, backgroundColor: "var(--scrubber)" }}>
          <div
            className="absolute -left-[4px] -top-px h-0 w-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent"
            style={{ borderTopColor: "var(--scrubber)" }}
          />
        </div>
      </div>
      <span className="font-mono text-[13px] tabular-nums text-[#abacb3]">{Math.round(p)}%</span>
    </div>
  );
}
