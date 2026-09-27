import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent as RFormEvent, MouseEvent as RMouseEvent, PointerEvent as RPointerEvent } from "react";
import { createPortal } from "react-dom";
import AccentMask from "./AccentMask";

const assetPathPrefix = "/assets";
const imgHand = `${assetPathPrefix}/d1df7.svg`;
const imgText = `${assetPathPrefix}/4f1f1.svg`;
const imgFeSearch = `${assetPathPrefix}/95b43.svg`;
const imgPen = `${assetPathPrefix}/c1d8e.svg`;
const imgNoteBlank = `${assetPathPrefix}/b7eb0.svg`;
const imgGrid = `${assetPathPrefix}/c8a22.svg`;
const imgArrowPointer = `${assetPathPrefix}/2cab8.svg`;
const imgDivider = `${assetPathPrefix}/4346b.svg`;

type Tool = "doodle" | "search" | "text" | "marquee" | null;
type CursorDesign = "auto" | "pointer" | "crosshair" | "dot-ring" | "invert";

const cursorOptions: { label: string; id: CursorDesign }[] = [
  { label: "Default", id: "auto" },
  { label: "Pointer", id: "pointer" },
  { label: "Crosshair", id: "crosshair" },
  { label: "Dot & Ring", id: "dot-ring" },
  { label: "Invert", id: "invert" },
];

// JS-driven follower cursor: a dot that tracks the pointer exactly plus a ring
// that trails with easing (or a single blend circle for "invert").
function CustomCursor({ design, accent }: { design: "dot-ring" | "invert"; accent: string }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const base = { position: "fixed" as const, left: 0, top: 0, pointerEvents: "none" as const, zIndex: 100000 };
  if (design === "invert") {
    return createPortal(
      <div
        ref={ringRef}
        style={{ ...base, width: 100, height: 100, borderRadius: "50%", background: "#fff", mixBlendMode: "difference" }}
      />,
      document.body
    );
  }
  return createPortal(
    <>
      <div ref={ringRef} style={{ ...base, width: 46, height: 46, borderRadius: "50%", border: "1.5px solid #fff" }} />
      <div ref={dotRef} style={{ ...base, width: 10, height: 10, borderRadius: "50%", background: accent }} />
    </>,
    document.body
  );
}

const swatches = [
  "#ff5c3a",
  "#ff3f8e",
  "#2f6bff",
  "#17b26a",
  "#7a3fff",
  "#e5231b",
  "#14c0d4",
  "#ffc53d",
];

// The scrubber uses a colour that contrasts the accent (per spec).
const scrubberColors: Record<string, string> = {
  "#ff5c3a": "#37e04b", // orange accent -> green
  "#ff3f8e": "#ff8a00", // pink -> orange
  "#2f6bff": "#ff3f8e", // blue -> pink
  "#17b26a": "#7a3fff", // green -> purple
  "#7a3fff": "#ff8a00", // purple -> orange
};
const scrubberFor = (accent: string) => scrubberColors[accent.toLowerCase()] ?? "#37e04b";

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

type Stroke = { id: number; color: string; pts: string };
type FloatingText = { id: number; x: number; y: number; leaving: boolean };
type Note = { id: number; x: number; y: number; text: string };

export default function Sidebar() {
  const [tool, setTool] = useState<Tool>(null);
  const [accent, setAccent] = useState("#ff5c3a");
  const [cursorStyle, setCursorStyle] = useState<CursorDesign>("dot-ring");
  const [menu, setMenu] = useState<null | "cursor" | "color">(null);
  const [anchor, setAnchor] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

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

  // Apply the accent globally (recolours every "orange" element via the CSS
  // variable overrides in index.css) and derive the scrubber's contrasting colour.
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
    document.documentElement.style.setProperty("--accent-rgb", hexToRgb(accent));
    document.documentElement.style.setProperty("--scrubber", scrubberFor(accent));
  }, [accent]);

  // Apply the chosen cursor to the whole page. Follower designs hide the native
  // cursor; keyword designs set it directly.
  const follower = cursorStyle === "dot-ring" || cursorStyle === "invert";
  useEffect(() => {
    document.documentElement.style.cursor = cursorStyle === "auto" ? "" : follower ? "none" : cursorStyle;
  }, [cursorStyle, follower]);

  // Escape cancels whatever is active.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setTool(null);
        setMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMenu = (which: "cursor" | "color", e: RMouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setAnchor({ top: r.top, left: r.right + 14 });
    setTool(null);
    setMenu((m) => (m === which ? null : which));
  };

  const pickTool = (t: Exclude<Tool, null>) => {
    setMenu(null);
    setTool((cur) => (cur === t ? null : t));
  };

  // Clicking a non-tool icon leaves any active drawing/text/search mode.
  const exitTools = () => {
    setTool(null);
    setMenu(null);
  };

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

  // ---- Marquee (drag-to-select a region; holds, then fades) ----
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

  // ---- Sticky notes (session only; add many, drag anywhere) ----
  const addNote = () => {
    setMenu(null);
    setNotes((list) => {
      const i = list.length;
      return [
        ...list,
        { id: Date.now() + Math.random(), x: Math.min(window.innerWidth - 280, 150 + (i % 6) * 28), y: 130 + (i % 6) * 28, text: "" },
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

  // ---- Search ----
  const runSearch = (e: RFormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    const root = document.getElementById("top");
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
      const headerH = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const y = hit.getBoundingClientRect().top + window.scrollY - headerH - 40;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      hit.classList.add("search-hit");
      const el = hit;
      window.setTimeout(() => el.classList.remove("search-hit"), 2000);
    }
    setTool(null);
    setQuery("");
  };

  // ---- Icon rail ----
  // The selected feature is highlighted with the scrubber colour (same hue as the
  // top loading bar). The cursor is the default selection when no tool is active.
  const iconBtn = (active: boolean) =>
    `flex items-center justify-center rounded-[10px] size-[40px] shrink-0 cursor-pointer transition-colors ${
      active ? "" : "hover:bg-[rgba(255,255,255,0.06)]"
    }`;
  const btnStyle = (active: boolean) =>
    active ? { backgroundColor: "color-mix(in srgb, var(--scrubber) 22%, transparent)" } : undefined;
  // Masked icon: scrubber-coloured when its feature is selected, neutral grey otherwise.
  const Icon = ({ src, active, pad }: { src: string; active: boolean; pad?: boolean }) => (
    <div className="relative size-[24px]">
      <AccentMask
        src={src}
        stretch
        color={active ? "var(--scrubber)" : "#9aa0a8"}
        className={pad ? "absolute inset-[12.5%]" : "absolute inset-0 size-full"}
      />
    </div>
  );

  return (
    <div className="relative bg-[#1e1e1e] flex h-[1023px] items-start py-[40px] w-[72px] rounded-br-[16px]">
      <div className="flex flex-col gap-[40px] items-center justify-center px-[11px] py-[20px] relative w-[72px]">
        <div className="flex flex-col gap-[18px] items-center">
          <button
            className={iconBtn(tool === null)}
            style={btnStyle(tool === null)}
            onClick={(e) => openMenu("cursor", e)}
            title="Cursor design"
          >
            <Icon src={imgArrowPointer} active={tool === null} />
          </button>
          <button
            className={iconBtn(tool === "marquee")}
            style={btnStyle(tool === "marquee")}
            onClick={() => pickTool("marquee")}
            title="Marquee"
          >
            <Icon src={imgGrid} active={tool === "marquee"} />
          </button>
          <button className={iconBtn(false)} onClick={addNote} title="Add note">
            <Icon src={imgNoteBlank} active={false} />
          </button>
        </div>

        <div className="h-0 relative w-[18px]">
          <div className="absolute inset-[-1px_-5.56%]">
            <img alt="" className="block max-w-none size-full" src={imgDivider} />
          </div>
        </div>

        <div className="flex flex-col gap-[18px] items-center">
          <button className={iconBtn(tool === "doodle")} style={btnStyle(tool === "doodle")} onClick={() => pickTool("doodle")} title="Doodle">
            <Icon src={imgPen} active={tool === "doodle"} />
          </button>
          <button className={iconBtn(tool === "search")} style={btnStyle(tool === "search")} onClick={() => pickTool("search")} title="Search">
            <Icon src={imgFeSearch} active={tool === "search"} />
          </button>
          <button className={iconBtn(tool === "text")} style={btnStyle(tool === "text")} onClick={() => pickTool("text")} title="Text box">
            <Icon src={imgText} active={tool === "text"} pad />
          </button>
          <button className={iconBtn(false)} onClick={exitTools} title="Hand">
            <Icon src={imgHand} active={false} pad />
          </button>
        </div>

        <div className="h-0 relative w-[18px]">
          <div className="absolute inset-[-1px_-5.56%]">
            <img alt="" className="block max-w-none size-full" src={imgDivider} />
          </div>
        </div>

        <button className={iconBtn(menu === "color")} style={btnStyle(menu === "color")} onClick={(e) => openMenu("color", e)} title="Accent colour">
          <span className="block size-[38px] rounded-[5px]" style={{ backgroundColor: accent }} />
        </button>
      </div>

      {/* Follower cursor design (dot & ring / invert). */}
      {follower && <CustomCursor design={cursorStyle as "dot-ring" | "invert"} accent={accent} />}

      {/* ---- Portaled overlays (escape the scaled sidebar wrapper) ---- */}
      {createPortal(
        <>
          {/* Doodle surface (always mounted so strokes finish fading; only
              captures pointers while the tool is active). */}
          <svg
            className="fixed inset-0 z-[9990]"
            width="100%"
            height="100%"
            style={{ pointerEvents: tool === "doodle" ? "auto" : "none", cursor: tool === "doodle" ? "crosshair" : "default" }}
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

          {/* Sticky notes — draggable, session-only, accent-themed. */}
          {notes.map((note) => (
            <div
              key={note.id}
              className="fixed z-[9992] w-[240px] overflow-hidden rounded-[10px] bg-[#171616] shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
              style={{ left: note.x, top: note.y, border: `1px solid ${accent}` }}
            >
              <div
                className="flex cursor-grab items-center justify-between px-[10px] py-[6px] active:cursor-grabbing"
                style={{ backgroundColor: "rgba(var(--accent-rgb), 0.15)" }}
                onPointerDown={(e) => onNoteDown(e, note)}
                onPointerMove={onNoteMove}
                onPointerUp={onNoteUp}
              >
                <span className="font-['Syne'] text-[11px] tracking-[1.4px]" style={{ color: accent }}>
                  NOTE
                </span>
                <button
                  className="flex size-[26px] items-center justify-center rounded-[6px] font-['Syne'] text-[22px] leading-none text-[#9a9a9a] transition-colors hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => setNotes((ns) => ns.filter((n) => n.id !== note.id))}
                  title="Delete note"
                >
                  ×
                </button>
              </div>
              <textarea
                autoFocus
                value={note.text}
                onChange={(e) =>
                  setNotes((ns) => ns.map((n) => (n.id === note.id ? { ...n, text: e.target.value } : n)))
                }
                placeholder="Write a note…"
                className="h-[130px] w-full resize-none bg-transparent p-[12px] font-['Syne'] text-[14px] leading-[1.5] text-white outline-none placeholder:text-[#5a5a5a]"
              />
            </div>
          ))}

          {/* Marquee surface: drag to select a region. */}
          <div
            className="fixed inset-0 z-[9990]"
            style={{ pointerEvents: tool === "marquee" ? "auto" : "none", cursor: tool === "marquee" ? "crosshair" : "default" }}
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

          {/* Floating-text surface. */}
          <div
            className="fixed inset-0 z-[9991]"
            style={{ pointerEvents: tool === "text" ? "auto" : "none", cursor: tool === "text" ? "text" : "default" }}
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

          {/* Search box. */}
          {tool === "search" && (
            <>
              <div className="fixed inset-0 z-[9994]" onClick={() => setTool(null)} />
              <form
                onSubmit={runSearch}
                className="fixed left-1/2 top-[24px] z-[9995] -translate-x-1/2 flex items-center gap-[10px] rounded-[12px] border border-[#343434] bg-[#171616] px-[16px] py-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                <img alt="" className="size-[18px] opacity-70" src={imgFeSearch} />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the page…"
                  className="w-[280px] bg-transparent font-['Syne'] text-[16px] text-white outline-none placeholder:text-[#6a6a6a]"
                />
                <span className="font-['Syne'] text-[12px] text-[#6a6a6a]">Enter ↵</span>
              </form>
            </>
          )}

          {/* Cursor-design menu. */}
          {menu === "cursor" && (
            <>
              <div className="fixed inset-0 z-[9994]" onClick={() => setMenu(null)} />
              <div
                className="fixed z-[9995] w-[190px] rounded-[14px] border border-[#2b2b2b] bg-[#171616] p-[10px] shadow-[0_16px_50px_rgba(0,0,0,0.6)]"
                style={{ top: anchor.top, left: anchor.left }}
              >
                <div className="px-[8px] pb-[8px] font-['Syne'] text-[11px] tracking-[1.2px] text-[#6a6a6a]">CURSOR</div>
                {cursorOptions.map((c) => (
                  <button
                    key={c.label}
                    onClick={() => {
                      setCursorStyle(c.id);
                      setMenu(null);
                    }}
                    className={`flex w-full items-center justify-between rounded-[8px] px-[10px] py-[8px] text-left font-['Syne'] text-[14px] transition-colors hover:bg-[rgba(255,255,255,0.06)] ${
                      cursorStyle === c.id ? "text-white" : "text-[#9a9a9a]"
                    }`}
                  >
                    {c.label}
                    {cursorStyle === c.id && <span className="text-[#ff5c3a]">●</span>}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Accent-colour menu. */}
          {menu === "color" && (
            <>
              <div className="fixed inset-0 z-[9994]" onClick={() => setMenu(null)} />
              <div
                className="fixed z-[9995] w-[280px] rounded-[16px] border border-[#2b2b2b] bg-[#171616] p-[18px] shadow-[0_16px_50px_rgba(0,0,0,0.6)]"
                style={{ top: anchor.top, left: anchor.left }}
              >
                <div className="mb-[14px] flex items-center justify-between">
                  <span className="font-['Syne'] text-[13px] tracking-[1.6px] text-[#9a9a9a]">ACCENT</span>
                  <span className="font-['Syne'] text-[14px] font-semibold" style={{ color: accent }}>
                    {accent.toUpperCase()}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-[12px]">
                  {swatches.map((s) => (
                    <button
                      key={s}
                      onClick={() => setAccent(s)}
                      className={`h-[46px] rounded-[12px] transition-transform hover:scale-105 ${
                        accent.toLowerCase() === s ? "ring-2 ring-white ring-offset-2 ring-offset-[#171616]" : ""
                      }`}
                      style={{ backgroundColor: s }}
                    />
                  ))}
                </div>
                <div className="mt-[16px] flex items-center justify-between border-t border-[#2b2b2b] pt-[14px]">
                  <span className="font-['Syne'] text-[15px] text-white">Custom</span>
                  <label className="relative h-[28px] w-[56px] cursor-pointer overflow-hidden rounded-[6px]" style={{ backgroundColor: accent }}>
                    <input
                      type="color"
                      value={accent}
                      onChange={(e) => setAccent(e.target.value)}
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />
                  </label>
                </div>
              </div>
            </>
          )}
        </>,
        document.body
      )}
    </div>
  );
}
