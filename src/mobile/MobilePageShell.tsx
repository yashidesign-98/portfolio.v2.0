import { useState, type ReactNode } from "react";

// Shared scaffold for mobile case-study / AI-Jam detail pages: a fixed top bar
// with a back-to-home button + logo, over a dotted background. The bottom chrome
// (tool rail + loader) is rendered separately by App via <MobileChrome>.

export default function MobilePageShell({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div id="mobile-root" className="dot-grid min-h-screen overflow-x-hidden bg-[#0d0d0d] pb-[110px] pt-[65px] font-['Syne'] text-white">
      {/* Top bar */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[#1e1e1e] bg-[#0d0d0d]/90 px-4 py-3 backdrop-blur">
        <button
          onClick={() => {
            window.location.hash = "";
          }}
          className="flex items-center gap-2 rounded-lg border border-[#292929] px-3 py-2 text-[14px] text-white transition-colors hover:border-[#ff5c3a]"
        >
          <span className="text-[#ff5c3a]">←</span>
          <span>Home</span>
        </button>
        {eyebrow && (
          <span className="max-w-[55%] truncate text-[12px] uppercase tracking-[1.5px] text-[#abacb3]">{eyebrow}</span>
        )}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1"
          aria-label="Top"
        >
          <span className="text-[22px] font-extrabold text-[#ff5c3a]">YB</span>
          <span className="text-[#ff5c3a]">✦</span>
        </button>
      </header>

      {children}

      <footer className="border-t border-[#1e1e1e] px-5 py-8 text-center text-[14px] text-[#abacb3]">
        © Yashi Bhatnagar — UX/UI Designer, India
      </footer>
    </div>
  );
}

// Small shared building blocks for the detail pages.

export function MSectionPill({ n, label }: { n?: string; label: string }) {
  return (
    <div
      className="mb-5 inline-flex items-center gap-2 rounded-full border bg-black px-4 py-1.5 text-[12px] uppercase tracking-[2px]"
      style={{ borderColor: "rgba(var(--accent-rgb), 0.6)", color: "var(--accent)" }}
    >
      {n && <span>{n}</span>}
      {n && <span>·</span>}
      <span>{label}</span>
    </div>
  );
}

export function MHeading({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 text-[28px] font-bold leading-[1.15]">{children}</h2>;
}

export function MBody({ children }: { children: ReactNode }) {
  return <p className="text-[17px] leading-[1.6] text-[#abacb3]">{children}</p>;
}

export function MShot({ src, alt, ratio }: { src: string; alt?: string; ratio?: string }) {
  return (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      className="w-full rounded-[12px] border border-[#232323] bg-[#141414] object-cover"
      style={ratio ? { aspectRatio: ratio } : undefined}
    />
  );
}

export function MCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-[12px] border border-[#292929] bg-[#141414] p-5">
      <h3 className="text-[19px] font-bold text-[#ff5c3a]">{title}</h3>
      <p className="mt-2 text-[15px] leading-[1.55] text-[#929292]">{desc}</p>
    </div>
  );
}

// Responsive grid of app/product screenshots. Phone screens use 2 columns;
// wide/desktop screens use a single column.
export function MScreenGrid({ srcs, alt, wide }: { srcs: string[]; alt: string; wide?: boolean }) {
  return (
    <div className={wide ? "flex flex-col gap-5" : "grid grid-cols-2 gap-3 sm:grid-cols-3"}>
      {srcs.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          loading="lazy"
          className="w-full rounded-[10px] border border-[#232323] bg-[#141414] object-cover"
        />
      ))}
    </div>
  );
}

export function MTag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[#ff5c3a]/40 bg-[rgba(255,92,58,0.08)] px-3 py-1 text-[13px] text-[#ffb096]">
      {children}
    </span>
  );
}

// "Invite Yashi" contact block used on case-study pages — mailto, no backend.
export function MInviteCTA({ heading = "Invite Yashi to your project" }: { heading?: string }) {
  const [email, setEmail] = useState("");
  const send = () => {
    const subject = encodeURIComponent("Project Invite for Yashi");
    const body = encodeURIComponent(
      `Hi Yashi,\n\nI'd like to invite you to a project.\n\nYou can reach me at: ${email || "(add your email)"}\n\nThanks!`
    );
    window.location.href = `mailto:bhatnagar2898@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-14">
      <h2 className="text-[28px] font-bold leading-[1.2]">{heading}</h2>
      <p className="mt-3 text-[16px] text-[#abacb3]">
        Open to full-time roles, freelance collaboration, and design consulting.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          className="h-[52px] rounded-lg border border-[#292929] bg-black px-4 text-[16px] text-white outline-none placeholder:text-[#5a5a5a] focus:border-[#ff5c3a]"
        />
        <button onClick={send} className="h-[52px] rounded-lg bg-[#ff5c3a] font-bold text-white">
          Send Invite →
        </button>
      </div>
    </section>
  );
}
