import { useEffect, useState } from "react";
import AccentMask from "../components/AccentMask";

// Mobile-only chrome: the tool rail rendered as a bottom bar, with the scroll
// "loader" line as a second bar directly below it. No custom cursor on touch.

const A = "/assets";
const icons: { id: string; src: string }[] = [
  { id: "cursor", src: `${A}/2cab8.svg` },
  { id: "marquee", src: `${A}/c8a22.svg` },
  { id: "note", src: `${A}/b7eb0.svg` },
  { id: "doodle", src: `${A}/c1d8e.svg` },
  { id: "search", src: `${A}/95b43.svg` },
  { id: "text", src: `${A}/4f1f1.svg` },
  { id: "hand", src: `${A}/d1df7.svg` },
];

const swatches = ["#ff5c3a", "#ff3f8e", "#2f6bff", "#17b26a", "#7a3fff", "#e5231b", "#14c0d4", "#ffc53d"];
const scrubberColors: Record<string, string> = {
  "#ff5c3a": "#37e04b",
  "#ff3f8e": "#ff8a00",
  "#2f6bff": "#ff3f8e",
  "#17b26a": "#7a3fff",
  "#7a3fff": "#ff8a00",
};
const scrubberFor = (accent: string) => scrubberColors[accent.toLowerCase()] ?? "#37e04b";
function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function MobileChrome({ progress }: { progress: number }) {
  const [selected, setSelected] = useState("cursor");
  const [accent, setAccent] = useState("#ff5c3a");
  const [pickerOpen, setPickerOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
    document.documentElement.style.setProperty("--accent-rgb", hexToRgb(accent));
    document.documentElement.style.setProperty("--scrubber", scrubberFor(accent));
  }, [accent]);

  const p = Math.max(0, Math.min(100, progress));
  const totalFrames = Math.round((p / 100) * 120 * 24);
  const tc = `00:${pad(Math.floor(totalFrames / 1440))}:${pad(Math.floor(totalFrames / 24) % 60)}:${pad(totalFrames % 24)}`;

  return (
    <>
      {/* Accent picker popover */}
      {pickerOpen && (
        <>
          <div className="fixed inset-0 z-[9994]" onClick={() => setPickerOpen(false)} />
          <div className="fixed bottom-[92px] left-1/2 z-[9995] w-[280px] -translate-x-1/2 rounded-[16px] border border-[#2b2b2b] bg-[#171616] p-[16px] shadow-[0_16px_50px_rgba(0,0,0,0.6)]">
            <div className="mb-3 font-['Syne'] text-[13px] tracking-[1.6px] text-[#9a9a9a]">ACCENT</div>
            <div className="grid grid-cols-4 gap-3">
              {swatches.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setAccent(s);
                    setPickerOpen(false);
                  }}
                  className={`h-[44px] rounded-[12px] ${accent.toLowerCase() === s ? "ring-2 ring-white ring-offset-2 ring-offset-[#171616]" : ""}`}
                  style={{ backgroundColor: s }}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Bottom bar 1 — tool rail */}
      <div className="fixed bottom-[28px] left-0 z-[9993] flex h-[58px] w-full items-center justify-around border-t border-[#2a2a2a] bg-[#1e1e1e] px-2">
        {icons.map((it) => {
          const active = selected === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setSelected(it.id)}
              className="flex size-[40px] items-center justify-center rounded-[10px]"
              style={active ? { backgroundColor: "color-mix(in srgb, var(--scrubber) 22%, transparent)" } : undefined}
              aria-label={it.id}
            >
              <div className="relative size-[22px]">
                <AccentMask src={it.src} stretch color={active ? "var(--scrubber)" : "#9aa0a8"} className="absolute inset-0 size-full" />
              </div>
            </button>
          );
        })}
        <button
          onClick={() => setPickerOpen((o) => !o)}
          className="flex size-[40px] items-center justify-center rounded-[10px]"
          aria-label="Accent colour"
        >
          <span className="block size-[26px] rounded-[6px]" style={{ backgroundColor: accent }} />
        </button>
      </div>

      {/* Bottom bar 2 — scroll loader line (below the tool rail) */}
      <div className="fixed bottom-0 left-0 z-[9993] flex h-[28px] w-full items-center gap-3 border-t border-[#1e1e1e] bg-[#0d0d0d] px-4">
        <span className="font-mono text-[11px] tabular-nums" style={{ color: "var(--scrubber)" }}>
          {tc}
        </span>
        <div className="relative h-[2px] flex-1 bg-[#2a2a2a]">
          <div className="absolute left-0 top-0 h-full" style={{ width: `${p}%`, backgroundColor: "var(--scrubber)" }} />
        </div>
        <span className="font-mono text-[11px] tabular-nums text-[#abacb3]">{Math.round(p)}%</span>
      </div>
    </>
  );
}
