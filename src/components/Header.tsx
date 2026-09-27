import { useEffect, useState } from "react";
import AccentMask from "./AccentMask";

const assetPathPrefix = "/assets";
const imgStar1 = `${assetPathPrefix}/40895.svg`;

const navItems: { label: string; target: string }[] = [
  { label: "Home", target: "top" },
  { label: "About", target: "section-about" },
  { label: "Work", target: "section-work" },
  { label: "Experience", target: "section-experience" },
  { label: "Skills", target: "section-toolkit" },
  { label: "Contact", target: "section-contact" },
];

function scrollToTarget(target: string) {
  if (target === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(target);
  if (!el) return;
  // Scroll the window explicitly (not scrollIntoView) — the page sits inside a
  // scaled, overflow-hidden canvas whose layout box is taller than the viewport,
  // so scrollIntoView would scroll that inner container and get stuck. getBounding
  // ClientRect gives the element's on-screen position, which we map to a document
  // offset and adjust for the fixed header so it isn't hidden underneath.
  const headerH = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const y = el.getBoundingClientRect().top + window.scrollY - headerH - 12;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

// Nav works from any page: if we're on another route (e.g. the case study),
// return to the home page first, then scroll once it has rendered.
function scrollTo(target: string) {
  if (window.location.hash) {
    window.location.hash = "";
    if (target === "top") return;
    window.setTimeout(() => scrollToTarget(target), 160);
    return;
  }
  scrollToTarget(target);
}

export default function Header() {
  // Scroll-spy: highlight the nav item for the section currently in view. The
  // page renders inside a scaled canvas, so we read live bounding rects.
  const [active, setActive] = useState("top");
  useEffect(() => {
    function onScroll() {
      if (window.location.hash) {
        setActive("");
        return;
      }
      const headerH = document.querySelector("header")?.getBoundingClientRect().height ?? 96;
      const threshold = headerH + 160;
      let current = "top";
      for (const item of navItems) {
        if (item.target === "top") continue;
        const el = document.getElementById(item.target);
        if (el && el.getBoundingClientRect().top <= threshold) current = item.target;
      }
      if (window.scrollY < 200) current = "top";
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, []);

  return (
    <header className="bg-[#0d0d0d]/60 backdrop-blur-md border-b border-[#1e1e1e] border-solid flex items-center justify-between px-[64px] h-[96px] w-[1980px]" data-node-id="1:7730">
      <button onClick={() => scrollTo("top")} className="flex gap-[4px] items-center shrink-0 cursor-pointer" data-node-id="1:7731">
        <p className="font-['Syne'] font-extrabold leading-[normal] text-[#ff5c3a] text-[40px] whitespace-nowrap">YB</p>
        <div className="relative shrink-0 size-[33px]">
          <AccentMask src={imgStar1} className="absolute inset-0 size-full" stretch />
        </div>
      </button>
      <nav className="flex gap-[32px] items-center shrink-0" data-node-id="1:7734">
        {navItems.map((item) => {
          const isActive = active === item.target;
          return (
            <button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              className={`group relative font-['Syne'] font-medium text-[20px] text-center tracking-[-0.1px] whitespace-nowrap cursor-pointer pb-[4px] transition-colors ${
                isActive ? "text-white" : "text-[#abacb3] hover:text-white"
              }`}
            >
              {item.label}
              {/* Orange underline — shown for the active section, and on hover. */}
              <span
                className={`pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#ff5c3a] transition-transform duration-300 ease-out ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          );
        })}
      </nav>
      <div className="flex flex-wrap gap-[24px] items-center shrink-0" data-node-id="1:7742">
        <a
          href="https://www.linkedin.com/in/yashi-bhatnagar/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff5c3a] flex items-center justify-center px-[16px] py-[12px] rounded-[12px] shrink-0 cursor-pointer transition-transform hover:-translate-y-0.5"
        >
          <div className="font-['Syne'] font-medium text-[16px] text-center text-white tracking-[-0.08px] whitespace-nowrap">
            Let’s Talk
          </div>
        </a>
      </div>
    </header>
  );
}
