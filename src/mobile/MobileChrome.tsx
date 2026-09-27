import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent as RFormEvent, MouseEvent as RMouseEvent, PointerEvent as RPointerEvent } from "react";
import { createPortal } from "react-dom";
import AccentMask from "../components/AccentMask";

// Mobile-only chrome: the tool rail rendered as a bottom bar, with the scroll
// "loader" line as a second bar directly below it. The FigJam tools (doodle,
// marquee, note, text, search) are fully wired for touch — mirroring the desktop
// Sidebar — using pointer events with touch-action disabled while drawing. No
// custom follower cursor on touch.

const A = "/assets";
type Tool = "doodle" | "search" | "text" | "marquee" | null;

const icons: { id: string; src: string; tool: Tool | "note" | "cursor" | "hand" }[] = [
  { id: "cursor", src: `${A}/2cab8.svg`, tool: "cursor" },
  { id: "marquee", src: `${A}/c8a22.svg`, tool: "marquee" },
  { id: "note", src: `${A}/b7eb0.svg`, tool: "note" },
  { id: "doodle", src: `${A}/c1d8e.svg`, tool: "doodle" },
  { id: "search", src: `${A}/95b43.svg`, tool: "search" },
  { id: "text", src: `${A}/4f1f1.svg`, tool: "text" },
  { id: "hand", src: `${A}/d1df7.svg`, tool: "hand" },
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

type Stroke = { id: number; color: string; pts: string };
type FloatingText = { id: number; x: number; y: number; leaving: boolean };
type Note = { id: number; x: number; y: number; text: string };

export default function MobileChrome({ progress }: { progress: number }) {
  const [tool, setTool] = useState<Tool>(null);
  const [accent, setAccent] = useState("#ff5c3a");
  const [pickerOpen, setPickerOpen] = useState(false);

  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [texts, setTexts] = useState<FloatingText[]>([]);
  const [query, setQuery] = useState("");

  const drawingId = useRef<number | null>(null);
  const textTimers = useRef<Map<number, number>>(new Map());

  const [marquee, setMarquee] = useState<{ x0: number; y0: number; x1: number; y1: number } | null>(null);
  const [marqueeFading, setMarqueeFading] = useState(false);
  const marqueeActive = useRef(false);

  const [notes, setNotes] = useState<Note[]>([]);
  const noteDrag = useRef<{ id: number; dx: number; dy: number } | null>(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
    document.documentElement.style.setProperty("--accent-rgb", hexToRgb(accent));
    document.documentElement.style.setProperty("--scrubber", scrubberFor(accent));
  }, [accent]);

  const p = Math.max(0, Math.min(100, progress));
  const totalFrames = Math.round((p / 100) * 120 * 24);
  const tc = `00:${pad(Math.floor(totalFrames / 1440))}:${pad(Math.floor(totalFrames / 24) % 60)}:${pad(totalFrames % 24)}`;

  // ---- Doodle ----
  const onDoodleDown = (e: RPointerEvent) => {
    if (tool !== "doodle") return;
    const id = Date.now() + Math.random();
    drawingId.current = id;
    setStrokes((s) => [...s, { id, color: accent, pts: `${e.clientX},${e.clientY}` }]);
    window.setTimeout(() => setStrokes((s) => s.filter((k) => k.id !== id)), 2000);
  };
  const onDoodleMove = (e: RPointerEvent) => {
    const id = drawingId.current;
    if (id == null) return;
    setStrokes((s) => s.map((k) => (k.id === id ? { ...k, pts: `${k.pts} ${e.clientX},${e.clientY}` } : k)));
  };
  const endDoodle = () => {
    drawingId.current = null;
  };

  // ---- Marquee ----
  const onMarqueeDown = (e: RPointerEvent) => {
    if (tool !== "marquee") return;
    marqueeActive.current = true;
    setMarqueeFading(false);
    setMarquee({ x0: e.clientX, y0: e.clientY, x1: e.clientX, y1: e.clientY });
  };
  const onMarqueeMove = (e: RPointerEvent) => {
    if (!marqueeActive.current) return;
    setMarquee((m) => (m ? { ...m, x1: e.clientX, y1: e.clientY } : m));
  };
  const onMarqueeUp = () => {
    if (!marqueeActive.current) return;
    marqueeActive.current = false;
    window.setTimeout(() => setMarqueeFading(true), 1000);
    window.setTimeout(() => {
      setMarquee(null);
      setMarqueeFading(false);
    }, 1400);
  };

  // ---- Sticky notes ----
  const addNote = () => {
    setTool(null);
    setNotes((list) => {
      const i = list.length;
      return [
        ...list,
        { id: Date.now() + Math.random(), x: Math.min(window.innerWidth - 250, 20 + (i % 5) * 22), y: 120 + (i % 5) * 26, text: "" },
      ];
    });
  };
  const onNoteDown = (e: RPointerEvent, note: Note) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    noteDrag.current = { id: note.id, dx: e.clientX - note.x, dy: e.clientY - note.y };
  };
  const onNoteMove = (e: RPointerEvent) => {
    const d = noteDrag.current;
    if (!d) return;
    setNotes((ns) => ns.map((n) => (n.id === d.id ? { ...n, x: e.clientX - d.dx, y: e.clientY - d.dy } : n)));
  };
  const onNoteUp = () => {
    noteDrag.current = null;
  };

  // ---- Floating text ----
  const scheduleVanish = useCallback((id: number) => {
    const timers = textTimers.current;
    if (timers.has(id)) window.clearTimeout(timers.get(id)!);
    const handle = window.setTimeout(() => {
      setTexts((list) => list.map((x) => (x.id === id ? { ...x, leaving: true } : x)));
      window.setTimeout(() => setTexts((list) => list.filter((x) => x.id !== id)), 400);
    }, 2000);
    timers.set(id, handle);
  }, []);
  const onTextSurfaceClick = (e: RMouseEvent) => {
    if (tool !== "text" || e.target !== e.currentTarget) return;
    const id = Date.now() + Math.random();
    setTexts((t) => [...t, { id, x: e.clientX, y: e.clientY, leaving: false }]);
    scheduleVanish(id);
  };

  // ---- Search (scoped to the visible mobile DOM) ----
  const runSearch = (e: RFormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    const root = document.getElementById("mobile-root");
    if (!q || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    let hit: HTMLElement | null = null;
    while ((node = walker.nextNode())) {
      if (node.textContent && node.textContent.toLowerCase().includes(q)) {
        hit = node.parentElement;
        break;
      }
    }
    if (hit) {
      const y = hit.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      hit.classList.add("search-hit");
      const el = hit;
      window.setTimeout(() => el.classList.remove("search-hit"), 2000);
    }
    setTool(null);
    setQuery("");
  };

  // ---- Tool bar taps ----
  const onIconTap = (t: Tool | "note" | "cursor" | "hand") => {
    setPickerOpen(false);
    if (t === "note") {
      addNote();
      return;
    }
    if (t === "cursor" || t === "hand") {
      setTool(null);
      return;
    }
    setTool((cur) => (cur === t ? null : t));
  };
  const activeId = (id: string, t: Tool | "note" | "cursor" | "hand") => {
    if (t === "cursor") return tool === null;
    return tool === t;
  };

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
          const active = activeId(it.id, it.tool);
          return (
            <button
              key={it.id}
              onClick={() => onIconTap(it.tool)}
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

      {/* ---- Tool overlays (portaled to body, escape all stacking contexts) ---- */}
      {createPortal(
        <>
          {/* Active-tool hint + cancel */}
          {tool && (
            <button
              onClick={() => setTool(null)}
              className="fixed left-1/2 top-[80px] z-[9996] -translate-x-1/2 rounded-full border border-[#343434] bg-[#171616] px-4 py-2 font-['Syne'] text-[13px] text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            >
              {tool === "doodle" && "Draw with your finger"}
              {tool === "marquee" && "Drag to select"}
              {tool === "text" && "Tap to place text"}
              {tool === "search" && "Search the page"}
              <span className="ml-2 text-[#9a9a9a]">✕ Done</span>
            </button>
          )}

          {/* Doodle surface */}
          <svg
            className="fixed inset-0 z-[9990]"
            width="100%"
            height="100%"
            style={{
              pointerEvents: tool === "doodle" ? "auto" : "none",
              touchAction: tool === "doodle" ? "none" : "auto",
            }}
            onPointerDown={onDoodleDown}
            onPointerMove={onDoodleMove}
            onPointerUp={endDoodle}
            onPointerLeave={endDoodle}
          >
            {strokes.map((s) => (
              <polyline
                key={s.id}
                className="doodle-stroke"
                points={s.pts}
                fill="none"
                stroke={s.color}
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>

          {/* Sticky notes */}
          {notes.map((note) => (
            <div
              key={note.id}
              className="fixed z-[9992] w-[230px] overflow-hidden rounded-[10px] bg-[#171616] shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
              style={{ left: note.x, top: note.y, border: `1px solid ${accent}` }}
            >
              <div
                className="flex items-center justify-between px-[10px] py-[6px]"
                style={{ backgroundColor: "rgba(var(--accent-rgb), 0.15)", touchAction: "none" }}
                onPointerDown={(e) => onNoteDown(e, note)}
                onPointerMove={onNoteMove}
                onPointerUp={onNoteUp}
              >
                <span className="font-['Syne'] text-[11px] tracking-[1.4px]" style={{ color: accent }}>
                  NOTE
                </span>
                <button
                  className="flex size-[26px] items-center justify-center rounded-[6px] font-['Syne'] text-[22px] leading-none text-[#9a9a9a]"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => setNotes((ns) => ns.filter((n) => n.id !== note.id))}
                  aria-label="Delete note"
                >
                  ×
                </button>
              </div>
              <textarea
                value={note.text}
                onChange={(e) => setNotes((ns) => ns.map((n) => (n.id === note.id ? { ...n, text: e.target.value } : n)))}
                placeholder="Write a note…"
                className="h-[120px] w-full resize-none bg-transparent p-[12px] font-['Syne'] text-[14px] leading-[1.5] text-white outline-none placeholder:text-[#5a5a5a]"
              />
            </div>
          ))}

          {/* Marquee surface */}
          <div
            className="fixed inset-0 z-[9990]"
            style={{
              pointerEvents: tool === "marquee" ? "auto" : "none",
              touchAction: tool === "marquee" ? "none" : "auto",
            }}
            onPointerDown={onMarqueeDown}
            onPointerMove={onMarqueeMove}
            onPointerUp={onMarqueeUp}
            onPointerLeave={onMarqueeUp}
          >
            {marquee &&
              (() => {
                const left = Math.min(marquee.x0, marquee.x1);
                const top = Math.min(marquee.y0, marquee.y1);
                const w = Math.abs(marquee.x1 - marquee.x0);
                const h = Math.abs(marquee.y1 - marquee.y0);
                return (
                  <div
                    className={`absolute border border-dashed transition-opacity duration-300 ${marqueeFading ? "opacity-0" : "opacity-100"}`}
                    style={{ left, top, width: w, height: h, borderColor: accent, background: "rgba(var(--accent-rgb), 0.08)" }}
                  >
                    <span
                      className="absolute -top-[24px] left-0 whitespace-nowrap rounded-[4px] bg-[#0d0d0d] px-[6px] py-[2px] font-['Syne'] text-[11px] text-white"
                      style={{ border: `1px solid ${accent}` }}
                    >
                      {Math.round(w)} × {Math.round(h)}
                    </span>
                  </div>
                );
              })()}
          </div>

          {/* Floating-text surface */}
          <div
            className="fixed inset-0 z-[9991]"
            style={{ pointerEvents: tool === "text" ? "auto" : "none" }}
            onClick={onTextSurfaceClick}
          >
            {texts.map((t) => (
              <input
                key={t.id}
                autoFocus
                placeholder="type…"
                className={`tool-textbox ${t.leaving ? "leaving" : ""}`}
                style={{ position: "fixed", left: t.x, top: t.y, transform: "translateY(-50%)", pointerEvents: "auto", minWidth: 40 }}
                onClick={(e) => e.stopPropagation()}
                onChange={() => scheduleVanish(t.id)}
              />
            ))}
          </div>

          {/* Search box */}
          {tool === "search" && (
            <>
              <div className="fixed inset-0 z-[9994]" onClick={() => setTool(null)} />
              <form
                onSubmit={runSearch}
                className="fixed left-1/2 top-[130px] z-[9995] flex w-[90%] max-w-[360px] -translate-x-1/2 items-center gap-[10px] rounded-[12px] border border-[#343434] bg-[#171616] px-[16px] py-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                <img alt="" className="size-[18px] opacity-70" src={`${A}/95b43.svg`} />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the page…"
                  className="min-w-0 flex-1 bg-transparent font-['Syne'] text-[16px] text-white outline-none placeholder:text-[#6a6a6a]"
                />
                <span className="shrink-0 font-['Syne'] text-[12px] text-[#6a6a6a]">↵</span>
              </form>
            </>
          )}
        </>,
        document.body
      )}
    </>
  );
}
