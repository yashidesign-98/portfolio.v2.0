import MobilePageShell, { MSectionPill, MHeading, MBody, MShot, MCard, MScreenGrid, MTag, MInviteCTA } from "../MobilePageShell";

const A = "/assets";
const cloudUi = Array.from({ length: 11 }, (_, i) => `${A}/cloud-ui-${String(i + 1).padStart(2, "0")}.png`);

const research = [
  { title: "AWS", desc: "Extremely powerful and feature-rich, but often intimidating for newcomers due to its dense UI and complex navigation paths." },
  { title: "Azure", desc: "Provides strong integration capabilities and enterprise consistency, though it sometimes feels cluttered with overlapping services and repetitive workflows." },
  { title: "GCP", desc: "Clean and modern interface with solid usability, but lacks clarity in service grouping and deeper contextual guidance." },
  { title: "DigitalOcean", desc: "Exceptionally intuitive and beginner-friendly — but limited in advanced customization and large-scale management features." },
];

const insights = [
  { n: "01", t: "Balance simplicity and power", d: "combine the ease of DigitalOcean with the depth of AWS and Azure, making advanced tasks approachable without losing functionality." },
  { n: "02", t: "Simplify the journey", d: "establish a clear information hierarchy to reduce navigation effort and help users reach key actions quickly." },
  { n: "03", t: "Guide through context", d: "use contextual help and progressive disclosure to support users when needed, keeping the interface clean yet supportive." },
  { n: "04", t: "Design for every skill level", d: "provide quick-launch templates for newcomers and deep customization options for experienced users." },
  { n: "05", t: "Build trust through transparency", d: "turn complex cost, health, and performance data into simple, real-time visual insights through dashboards." },
];

const challenges = [
  { title: "Balancing complexity with simplicity", desc: "Making technical workflows approachable while retaining depth for advanced users." },
  { title: "Managing information overload", desc: "Structuring navigation to reduce decision fatigue across numerous services." },
  { title: "Ensuring consistency across modules", desc: "Unifying diverse components through a cohesive visual and interaction system." },
  { title: "Improving cost clarity", desc: "Simplifying billing data to build transparency and trust." },
  { title: "Scaling the design system", desc: "Creating a flexible foundation that supports future growth and iteration." },
];

const goals = [
  { title: "Frictionless onboarding", desc: "Simplify the first-time setup with guided workflows and intuitive defaults, helping users get started quickly and confidently." },
  { title: "Effortless service discoverability", desc: "Make it easy to browse, filter, and compare cloud services through a clear, structured information architecture." },
  { title: "Consistency & clarity", desc: "Establish a modular design system that ensures uniformity in visuals, interactions, and behavior across the platform." },
  { title: "Accessibility & inclusivity", desc: "Design for everyone by following accessibility standards that ensure clarity, contrast, and ease of use across diverse user groups." },
  { title: "Scalable workflows", desc: "Design flexible flows that adapt seamlessly — from small setups to large-scale enterprise environments." },
  { title: "Cost & usage transparency", desc: "Offer real-time visibility into billing and resource utilization through clear, visual dashboards." },
  { title: "Contextual guidance", desc: "Integrate smart tooltips, inline help, and progressive hints to guide users without disrupting their workflow." },
  { title: "Collaboration-ready experience", desc: "Enable secure, role-based access and team-friendly workflows that foster collaboration within organizations." },
];

const outcomes = [
  { title: "Quick launch templates", desc: "Enabled guided, preconfigured setup flows for VMs and clusters — reducing friction and accelerating deployment." },
  { title: "Service catalog", desc: "Introduced a searchable, filterable catalog with region-based pricing and version control for effortless service discovery." },
  { title: "Networking flows", desc: "Simplified multi-step configurations for VPCs, NAT gateways, and load balancers, clarified by clear policy mapping." },
  { title: "Monitoring & alerts", desc: "Delivered customizable dashboards featuring real-time health indicators, KPIs, and alert triggers for proactive monitoring." },
  { title: "Quota & resource management", desc: "Designed visual allocation interfaces that clearly communicate usage limits and available resources." },
  { title: "RBAC management", desc: "Streamlined access control with intuitive user-role assignment and permission previews for secure collaboration." },
  { title: "Recently visited & quick links", desc: "Added smart navigation aids to surface frequently accessed pages and speed up repetitive workflows." },
  { title: "Responsive design system", desc: "Built a flexible, component-based system ensuring visual consistency, scalability, and adaptability across all devices." },
];

const impact = [
  { title: "Onboard effortlessly", desc: "new users could set up and launch their first workloads with confidence, guided flows and quick-start templates simplified the onboarding curve." },
  { title: "Manage complex configurations with confidence", desc: "advanced users gained streamlined workflows for configuring VPCs, NAT gateways, and load balancers, minimizing confusion while preserving full control." },
  { title: "Access real-time visibility and insights", desc: "unified dashboards and resource allocation views alerted users about consumption patterns without letting complex information overwhelm the interaction." },
];

const delivers = [
  ["Quick-start templates", " for faster onboarding"],
  ["Service catalog", " for discoverability and transparency"],
  ["Role-based access control (RBAC)", " for secure collaboration"],
  ["Dashboards and alerts", " for real-time visibility"],
];

export default function MobileCloud() {
  return (
    <MobilePageShell eyebrow="Public Cloud">
      {/* Hero */}
      <section className="px-5 pb-10 pt-8">
        <MSectionPill label="case study — public cloud" />
        <h1 className="text-[38px] font-extrabold leading-[1.05] sm:text-[52px]">Public Cloud Platform</h1>
        <p className="mt-4 text-[19px] font-bold text-[#ff5c3a]">
          Simplifying the cloud: powerful infrastructure, human-centred design.
        </p>
        <p className="mt-5 text-[16px] leading-[1.6] text-[#abacb3]">
          Public clouds are powerful but often overwhelming. This project reimagines a Public Cloud Platform with a
          user-first approach — making complex tasks like compute, storage, networking, and monitoring simple and
          approachable. Designed for both beginners and advanced users, the platform balances ease of use with
          flexibility, supported by a modular design system and insights from leading providers like AWS, GCP, Azure, and
          DigitalOcean.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Cloud Platform", "Enterprise UX", "SaaS", "Digital Products & Technologies"].map((t) => (
            <MTag key={t}>{t}</MTag>
          ))}
        </div>
        <div className="mt-8">
          <MShot src={`${A}/cloud-hero.png`} alt="Nubo Cloud console — dashboard" />
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="01" label="Overview" />
        <MHeading>What is public cloud</MHeading>
        <MBody>
          The Public Cloud Platform enables users to provision, manage, and monitor cloud resources at scale. The key
          challenge was to transform inherently complex workflows — such as virtual machine deployment, network setup, and
          quota management — into an intuitive and streamlined experience.
        </MBody>
        <p className="mb-3 mt-6 text-[14px] font-semibold uppercase tracking-[1px] text-white">The design delivers</p>
        <ul className="flex flex-col gap-3">
          {delivers.map(([lead, rest]) => (
            <li key={lead} className="flex gap-2 text-[16px] leading-[1.5] text-[#abacb3]">
              <span className="text-[#ff5c3a]">✦</span>
              <span>
                <span className="font-bold text-white">{lead}</span>
                {rest}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <MShot src={`${A}/cloud-overview-monitor.png`} alt="Nubo Cloud — resource metrics on desktop" />
        </div>
      </section>

      {/* Research */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MSectionPill n="02" label="Research" />
        <MHeading>Primary & competitive research</MHeading>
        <MBody>
          The research focused on understanding how leading cloud platforms balance usability, structure, and
          functionality. A comparative study across AWS, GCP, Azure, and DigitalOcean analysed onboarding flows, dashboard
          hierarchy, service discoverability, and cost visibility — helping define a direction that merges clarity with
          capability.
        </MBody>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {research.map((c) => (
            <MCard key={c.title} title={c.title} desc={c.desc} />
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="03" label="Insights" />
        <MHeading>Design insights</MHeading>
        <MBody>
          The direction emerged from the intersection of research findings and user pain points — a cloud management
          experience that feels as intuitive as it is powerful.
        </MBody>
        <div className="mt-6 flex flex-col gap-5">
          {insights.map((r) => (
            <div key={r.n} className="flex gap-4">
              <span className="text-[18px] font-bold text-[#ff5c3a]">{r.n}</span>
              <p className="text-[16px] leading-[1.55] text-[#abacb3]">
                <span className="font-bold text-white">{r.t}</span> — {r.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MSectionPill n="04" label="Challenges" />
        <MHeading>Challenges that defined the experience</MHeading>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {challenges.map((c) => (
            <MCard key={c.title} title={c.title} desc={c.desc} />
          ))}
        </div>
      </section>

      {/* Goals */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="05" label="Goals" />
        <MHeading>Design goals — translating vision into experience</MHeading>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {goals.map((c) => (
            <MCard key={c.title} title={c.title} desc={c.desc} />
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MSectionPill n="06" label="Outcomes" />
        <MHeading>Outcomes that redefined the experience</MHeading>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {outcomes.map((c) => (
            <MCard key={c.title} title={c.title} desc={c.desc} />
          ))}
        </div>
      </section>

      {/* A closer look */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="07" label="Screens" />
        <MHeading>A closer look</MHeading>
        <div className="mt-6">
          <MScreenGrid srcs={cloudUi} alt="Nubo Cloud screen" wide />
        </div>
      </section>

      {/* Impact */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MSectionPill n="08" label="Impact" />
        <MHeading>The impact that counted</MHeading>
        <MBody>
          The redesigned platform closed the gap between intricate infrastructure management and intuitive user
          experience — empowering users to:
        </MBody>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {impact.map((c) => (
            <MCard key={c.title} title={c.title} desc={c.desc} />
          ))}
        </div>
      </section>

      <MInviteCTA />
    </MobilePageShell>
  );
}
