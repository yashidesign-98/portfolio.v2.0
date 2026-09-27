import type { ReactNode } from "react";
import AccentMask from "../components/AccentMask";

const imgCounter = "/assets/15d72.svg";

// Case study page — "Public Cloud Platform". Shares the app chrome (header,
// sidebar, scrubber) via App; rendered inside the same scaled 1980px canvas.
// Image areas use bracketed placeholder boxes, matching the Figma export.

const tags = ["Cloud Platform", "Enterprise UX", "SaaS", "Digital Products & Technologies"];

const overviewBullets = [
  { lead: "Quick-start templates", rest: " for faster onboarding" },
  { lead: "Service catalog", rest: " for discoverability and transparency" },
  { lead: "Role-based access control (RBAC)", rest: " for secure collaboration" },
  { lead: "Dashboards and alerts", rest: " for real-time visibility" },
];

const research = [
  { t: "AWS", d: "Extremely powerful and feature-rich, but often intimidating for newcomers due to its dense UI and complex navigation paths." },
  { t: "Azure", d: "Provides strong integration capabilities and enterprise consistency, though it sometimes feels cluttered with overlapping services and repetitive workflows." },
  { t: "GCP", d: "Clean and modern interface with solid usability, but lacks clarity in service grouping and deeper contextual guidance." },
  { t: "DigitalOcean", d: "Exceptionally intuitive and beginner-friendly — but limited in advanced customization and large-scale management features." },
];

const insights = [
  { n: "01", t: "Balance simplicity and power", d: "combine the ease of DigitalOcean with the depth of AWS and Azure, making advanced tasks approachable without losing functionality." },
  { n: "02", t: "Simplify the journey", d: "establish a clear information hierarchy to reduce navigation effort and help users reach key actions quickly." },
  { n: "03", t: "Guide through context", d: "use contextual help and progressive disclosure to support users when needed, keeping the interface clean yet supportive." },
  { n: "04", t: "Design for every skill level", d: "provide quick-launch templates for newcomers and deep customization options for experienced users." },
  { n: "05", t: "Build trust through transparency", d: "turn complex cost, health, and performance data into simple, real-time visual insights through dashboards." },
];

const challenges = [
  { t: "Balancing complexity with simplicity", d: "Making technical workflows approachable while retaining depth for advanced users." },
  { t: "Managing information overload", d: "Structuring navigation to reduce decision fatigue across numerous services." },
  { t: "Ensuring consistency across modules", d: "Unifying diverse components through a cohesive visual and interaction system." },
  { t: "Improving cost clarity", d: "Simplifying billing data to build transparency and trust." },
  { t: "Scaling the design system", d: "Creating a flexible foundation that supports future growth and iteration." },
];

const goals = [
  { t: "Frictionless onboarding", d: "Simplify the first-time setup with guided workflows and intuitive defaults, helping users get started quickly and confidently." },
  { t: "Effortless service discoverability", d: "Make it easy to browse, filter, and compare cloud services through a clear, structured information architecture." },
  { t: "Consistency & clarity", d: "Establish a modular design system that ensures uniformity in visuals, interactions, and behavior across the platform." },
  { t: "Accessibility & inclusivity", d: "Design for everyone by following accessibility standards that ensure clarity, contrast, and ease of use across diverse user groups." },
  { t: "Scalable workflows", d: "Design flexible flows that adapt seamlessly — from small setups to large-scale enterprise environments." },
  { t: "Cost & usage transparency", d: "Offer real-time visibility into billing and resource utilization through clear, visual dashboards." },
  { t: "Contextual guidance", d: "Integrate smart tooltips, inline help, and progressive hints to guide users without disrupting their workflow." },
  { t: "Collaboration-ready experience", d: "Enable secure, role-based access and team-friendly workflows that foster collaboration within organizations." },
];

const outcomes = [
  { t: "Quick launch templates", d: "Enabled guided, preconfigured setup flows for VMs and clusters — reducing friction and accelerating deployment." },
  { t: "Service catalog", d: "Introduced a searchable, filterable catalog with region-based pricing and version control for effortless service discovery." },
  { t: "Networking flows", d: "Simplified multi-step configurations for VPCs, NAT gateways, and load balancers, clarified by clear policy mapping." },
  { t: "Monitoring & alerts", d: "Delivered customizable dashboards featuring real-time health indicators, KPIs, and alert triggers for proactive monitoring." },
  { t: "Quota & resource management", d: "Designed visual allocation interfaces that clearly communicate usage limits and available resources." },
  { t: "RBAC management", d: "Streamlined access control with intuitive user-role assignment and permission previews for secure collaboration." },
  { t: "Recently visited & quick links", d: "Added smart navigation aids to surface frequently accessed pages and speed up repetitive workflows." },
  { t: "Responsive design system", d: "Built a flexible, component-based system ensuring visual consistency, scalability, and adaptability across all devices." },
];

const impact = [
  { t: "Onboard effortlessly", d: "new users could set up and launch their first workloads with confidence, guided flows and quick-start templates simplified the onboarding curve." },
  { t: "Manage complex configurations with confidence", d: "advanced users gained streamlined workflows for configuring VPCs, NAT gateways, and load balancers, minimizing confusion while preserving full control over technical operations." },
  { t: "Access real-time visibility and insights", d: "unified dashboards and resource allocation views alerted users about consumption patterns without letting complex information overwhelm the interaction." },
];

function Pill({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex w-fit items-center rounded-[6px] border border-[#ff5c3a] border-solid bg-black px-[16px] py-[6px] font-['Syne'] text-[18px] uppercase tracking-[1.6px] text-[#ff5c3a] shadow-[0_0_24px_0_rgba(255,92,58,0.25)]">
      {children}
    </div>
  );
}

// Numbered teardrop counter (right side of each section), accent-tinted.
function Counter({ n }: { n: number }) {
  return (
    <div className="relative size-[40px] shrink-0">
      <AccentMask src={imgCounter} className="absolute inset-0 size-full" stretch />
      <span className="absolute inset-0 flex items-center justify-center font-['Syne'] font-bold text-[20px] leading-none text-white">
        {n}
      </span>
    </div>
  );
}

// Section header row: pill on the left, numbered counter bubble on the right.
function SectionHead({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex items-center justify-between">
      <Pill>{label}</Pill>
      <Counter n={n} />
    </div>
  );
}

const heading = "font-['Syne'] font-bold text-white text-[40px] tracking-[1px]";
const body = "font-['Syne'] font-normal text-[#abacb3] text-[20px] leading-[1.6] tracking-[0.18px]";
const cardBase = "rounded-[12px] border border-[#292929] border-solid bg-[#141414] p-[28px]";
const cardTitle = "font-['Syne'] font-bold text-white text-[20px]";
const cardDesc = "font-['Syne'] text-[18px] leading-[1.6] text-[#929292]";

export default function CaseStudy() {
  return (
    <div className="relative z-0 w-[1980px] pb-[120px] pt-[180px]">
      <div className="mx-auto flex w-[1748px] flex-col gap-[120px]">
        {/* Hero */}
        <section className="flex flex-col gap-[28px]">
          <div className="inline-flex w-fit items-center gap-[11px] rounded-full border border-dashed border-[#5a5a5a] bg-black px-[26px] py-[13px] font-['Syne'] text-[20px] tracking-[0.3px] text-[#ff5c3a]">
            <span className="size-[10px] rounded-full bg-[#ff5c3a]" />
            case study - public cloud
          </div>
          <h1 className="font-['Syne'] font-bold text-white text-[72px] leading-[1.05] tracking-[2px]">Public Cloud Platform</h1>
          <p className="font-['Syne'] font-medium text-[#e8e8e8] text-[24px] tracking-[0.24px]">
            Simplifying the cloud: powerful infrastructure, human-centred design.
          </p>
          <p className={`${body} max-w-[920px]`}>
            Public clouds are powerful but often overwhelming. This project reimagines a Public Cloud Platform with a user-first
            approach — making complex tasks like compute, storage, networking, and monitoring simple and approachable. Designed for
            both beginners and advanced users, the platform balances ease of use with flexibility, supported by a modular design
            system and insights from leading providers like AWS, GCP, Azure, and DigitalOcean.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            {tags.map((t) => (
              <div key={t} className="rounded-full border border-[#3a3a3a] border-solid px-[18px] py-[8px] font-['Syne'] text-[18px] text-[#c1c1c1]">
                {t}
              </div>
            ))}
          </div>
          <img
            src="/assets/cloud-hero.png"
            alt="Nubo Cloud console — dashboard"
            className="mt-[12px] block h-auto w-full rounded-[16px] border border-[#292929] border-solid shadow-[0_16px_50px_rgba(0,0,0,0.5)]"
          />
        </section>

        {/* Overview */}
        <section className="flex flex-col gap-[36px]">
          <SectionHead n={1} label="Overview - What is public cloud" />
          <div className="flex gap-[60px]">
            <div className="flex flex-1 flex-col gap-[24px]">
              <h2 className="font-['Syne'] font-bold text-white text-[36px] tracking-[1px]">{`// overview`}</h2>
              <p className={body}>
                The Public Cloud Platform enables users to provision, manage, and monitor cloud resources at scale. The key
                challenge was to transform inherently complex workflows — such as virtual machine deployment, network setup, and
                quota management — into an intuitive and streamlined experience.
              </p>
              <div className="flex flex-col gap-[16px] pt-[8px]">
                <span className="font-['Syne'] text-[18px] uppercase tracking-[1.6px] text-[#abacb3]">The design delivers</span>
                {overviewBullets.map((b) => (
                  <div key={b.lead} className="flex items-start gap-[12px]">
                    <span className="mt-[3px] font-['Syne'] font-bold text-[#ff5c3a]">✦</span>
                    <span className="font-['Syne'] text-[20px] text-[#c1c1c1]">
                      <span className="font-bold text-white">{b.lead}</span>
                      {b.rest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/assets/cloud-overview-monitor.png"
              alt="Nubo Cloud — resource metrics on desktop"
              className="block h-auto w-[640px] shrink-0 self-start drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
            />
          </div>
        </section>

        {/* Primary & competitive research */}
        <section className="flex flex-col gap-[36px]">
          <SectionHead n={2} label="Research - Primitive understanding" />
          <h2 className={heading}>Primary &amp; competitive research</h2>
          <p className={`${body} max-w-[1300px]`}>
            The research focused on understanding how leading cloud platforms balance usability, structure, and functionality. The
            objective was to identify patterns, gaps, and opportunities to design a more intuitive and effective cloud management
            experience. A comparative study was conducted across AWS, GCP, Azure, and DigitalOcean, analysing aspects such as
            onboarding flows, dashboard hierarchy, service discoverability, and cost visibility. The insights drawn from this
            evaluation helped define a direction that merges clarity with capability.
          </p>
          <div className="grid grid-cols-2 gap-[24px]">
            {research.map((r) => (
              <div key={r.t} className={cardBase}>
                <div className="mb-[12px] flex items-center gap-[10px]">
                  <span className="size-[8px] rounded-full bg-[#ff5c3a]" />
                  <span className={cardTitle}>{r.t}</span>
                </div>
                <p className={cardDesc}>{r.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design insights */}
        <section className="flex flex-col gap-[36px]">
          <SectionHead n={3} label="Insights - Session that directed to goals" />
          <h2 className={heading}>Design insights</h2>
          <p className={`${body} max-w-[1300px]`}>
            The direction emerged from the intersection of research findings and user pain points. The goal was clear — create a
            cloud management experience that feels as intuitive as it is powerful. Each insight reflected a step toward simplifying
            complexity, improving clarity, and empowering users to take control with confidence.
          </p>
          <div className="grid grid-cols-2 gap-x-[80px]">
            <div className="flex flex-col divide-y divide-[#232323]">
              {insights.slice(0, 3).map((i) => (
                <InsightRow key={i.n} {...i} />
              ))}
            </div>
            <div className="flex flex-col divide-y divide-[#232323]">
              {insights.slice(3).map((i) => (
                <InsightRow key={i.n} {...i} />
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="flex flex-col gap-[36px]">
          <SectionHead n={4} label="Challenges - Hurdle nights" />
          <h2 className={heading}>Challenges that defined the experience</h2>
          <p className={`${body} max-w-[1300px]`}>
            Designing for the cloud meant finding harmony between technical depth and intuitive usability. These challenges shaped
            how structure, scalability, and transparency came together to create a cohesive experience.
          </p>
          <div className="grid grid-cols-3 gap-[24px]">
            {challenges.map((c) => (
              <div key={c.t} className={cardBase}>
                <div className={`${cardTitle} mb-[10px]`}>{c.t}</div>
                <p className={cardDesc}>{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design goals */}
        <section className="flex flex-col gap-[36px]">
          <SectionHead n={5} label="Goals - Time to define the endpoint" />
          <h2 className={heading}>Design goals — translating vision into experience</h2>
          <div className="grid grid-cols-2 gap-x-[80px] gap-y-[40px]">
            {goals.map((g) => (
              <div key={g.t} className="flex gap-[18px]">
                <span className="mt-[2px] flex size-[36px] shrink-0 items-center justify-center rounded-[8px] border border-[#ff5c3a] border-solid bg-[rgba(255,92,58,0.1)] font-['Syne'] font-bold text-[#ff5c3a]">
                  ✦
                </span>
                <div className="flex flex-col gap-[6px]">
                  <div className={cardTitle}>{g.t}</div>
                  <p className={cardDesc}>{g.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="flex flex-col gap-[36px]">
          <SectionHead n={6} label="Outcomes - Silver lining" />
          <h2 className={heading}>Outcomes that redefined the experience</h2>
          <p className={`${body} max-w-[1300px]`}>
            The final design transformed complex cloud operations into a unified, intuitive experience. Each outcome focused on
            simplifying workflows, improving transparency, and ensuring scalability across the platform.
          </p>
          <div className="grid grid-cols-2 gap-[24px]">
            {outcomes.map((o) => (
              <div key={o.t} className={cardBase}>
                <div className={`${cardTitle} mb-[10px]`}>{o.t}</div>
                <p className={cardDesc}>{o.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* A closer look */}
        <section className="flex flex-col gap-[36px]">
          <SectionHead n={7} label="Design - Screens" />
          <h2 className={heading}>A closer look</h2>
          <div className="grid grid-cols-3 gap-[24px]">
            {Array.from({ length: 11 }, (_, i) => `/assets/cloud-ui-${String(i + 1).padStart(2, "0")}.png`).map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Nubo Cloud screen ${i + 1}`}
                className="h-auto w-full self-start rounded-[12px] border border-[#292929] border-solid shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
              />
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="flex flex-col gap-[36px]">
          <SectionHead n={8} label="Impact - Answer to our prayers" />
          <h2 className={heading}>The impact that counted</h2>
          <p className={`${body} max-w-[1300px]`}>
            The redesigned Public Cloud Platform successfully closed the gap between intricate infrastructure management and
            intuitive user experience. By leveraging progressive disclosure, clear visual hierarchy, and contextual guidance, the
            platform empowered users to:
          </p>
          <div className="grid grid-cols-3 gap-[24px]">
            {impact.map((i) => (
              <div key={i.t} className={cardBase}>
                <div className={`${cardTitle} mb-[12px]`}>{i.t}</div>
                <div className="flex gap-[10px]">
                  <span className="mt-[2px] font-['Syne'] font-bold text-[#ff5c3a]">→</span>
                  <p className={cardDesc}>{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-[20px] rounded-[16px] border border-[#292929] border-solid bg-[#0f0f0f] px-[40px] py-[70px] text-center">
          <h2 className="font-['Syne'] font-bold text-white text-[40px] tracking-[1px]">Invite Yashi to your project</h2>
          <p className="font-['Syne'] text-[20px] text-[#abacb3]">Open to full-time roles, freelance collaboration, and design consulting.</p>
          <div className="mt-[8px] flex items-center gap-[16px]">
            <input
              placeholder="Enter your email address"
              className="w-[360px] rounded-full border border-[#343434] bg-[#0d0d0d] px-[22px] py-[14px] font-['Syne'] text-[20px] text-white outline-none placeholder:text-[#5a5a5a] focus:border-[#ff5c3a]"
            />
            <a
              href="mailto:bhatnagar2898@gmail.com"
              className="flex items-center gap-[8px] rounded-full bg-[#ff5c3a] px-[28px] py-[14px] font-['Syne'] font-bold text-[20px] text-white transition-transform hover:-translate-y-0.5"
            >
              Send Invite →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function InsightRow({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="flex gap-[20px] py-[28px]">
      <span className="font-['Syne'] font-bold text-[#ff5c3a] text-[20px]">{n}</span>
      <p className="font-['Syne'] text-[17px] leading-[1.55] text-[#c1c1c1]">
        <span className="font-bold text-white">{t}</span>
        <span className="text-[#929292]">{` — ${d}`}</span>
      </p>
    </div>
  );
}
