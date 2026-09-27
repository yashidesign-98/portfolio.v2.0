import MobilePageShell, { MSectionPill, MHeading, MBody, MScreenGrid, MInviteCTA } from "../MobilePageShell";

const A = "/assets";
const uiOrder = [9, 6, 7, 8, 3, 5, 1, 10, 11, 2, 4];
const fitUi = uiOrder.map((n) => `${A}/fit-ui-${String(n).padStart(2, "0")}.png`);

const roadblocks: [string, string][] = [
  ["Remote work fueling inactivity:", " extended hours at desks lead to a decline in physical movement throughout the day."],
  ["Lack of time & motivation for gym visits:", " busy schedules and convenience make gym visits feel like an added burden."],
  ["Limited access to fitness facilities:", " not everyone has easy access to gyms, especially in smaller towns."],
  ["Need for convenient, home-based options:", " people want flexible, guided solutions without compromising quality."],
];

export default function MobileFitness() {
  return (
    <MobilePageShell eyebrow="Fitness App">
      {/* Hero */}
      <section className="px-5 pb-10 pt-8">
        <MSectionPill label="case study — fitness & wellness" />
        <h1 className="text-[34px] font-extrabold leading-[1.05] sm:text-[50px]">ZenFit — Fitness App Experience</h1>
        <p className="mt-4 text-[19px] font-bold text-[#ff5c3a]">
          Redefining at-home fitness for the modern lifestyle
        </p>
        <p className="mt-5 text-[16px] leading-[1.6] text-[#abacb3]">
          ZenFit is a fitness app designed to support individuals with sedentary lifestyles who prefer working out at home.
          Unlike traditional platforms focused on gym routines, ZenFit offers a flexible, accessible approach to staying
          active — no gym required.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <img src={`${A}/fit-onboard-strength.png`} alt="ZenFit onboarding — Get Stronger" loading="lazy" className="w-full rounded-[12px] border border-[#232323] bg-[#141414]" />
          <img src={`${A}/fit-onboard-mindset.png`} alt="ZenFit onboarding — Build Your Mind and Body" loading="lazy" className="mt-8 w-full rounded-[12px] border border-[#232323] bg-[#141414]" />
        </div>
        <h2 className="mt-10 text-[24px] font-bold leading-[1.25]">
          A fitness solution that increased consistency, engagement, and user retention.
        </h2>
      </section>

      {/* Roadblocks */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="01" label="Roadblocks" />
        <MHeading>Challenges & problems</MHeading>
        <ul className="mt-6 flex flex-col gap-4">
          {roadblocks.map(([lead, rest]) => (
            <li key={lead} className="flex gap-3 text-[16px] leading-[1.55] text-[#8b929c]">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-[#ff5c3a]" />
              <span>
                <span className="font-bold text-white">{lead}</span>
                {rest}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Results */}
      <section className="border-t border-[#1e1e1e] px-5 py-12">
        <MSectionPill n="02" label="Results" />
        <MHeading>Impact of the design</MHeading>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-[12px] border border-[#292929] bg-[#141414] p-5 text-center">
            <div className="text-[40px] font-extrabold text-[#ff5c3a]">15%</div>
            <p className="mt-2 text-[14px] leading-[1.45] text-[#929292]">increase in daily activity of the users</p>
          </div>
          <div className="rounded-[12px] border border-[#292929] bg-[#141414] p-5 text-center">
            <div className="text-[40px] font-extrabold text-[#ff5c3a]">22%</div>
            <p className="mt-2 text-[14px] leading-[1.45] text-[#929292]">improvement in workout consistency</p>
          </div>
        </div>
        <p className="mb-2 mt-8 text-[14px] font-semibold uppercase tracking-[1px] text-white">What made it work</p>
        <MBody>
          ZenFit was effective because it focused on real user needs — offering simple, equipment-free workouts tailored to
          busy, home-based lifestyles. The intuitive design, combined with gentle progress tracking, helped users build
          consistency without pressure.
        </MBody>
      </section>

      {/* Interface */}
      <section className="border-t border-[#1e1e1e] bg-[#101010] px-5 py-12">
        <MSectionPill n="03" label="Interface" />
        <MHeading>User Interface</MHeading>
        <p className="-mt-2 mb-6 text-[15px] text-[#abacb3]">design solution</p>
        <MScreenGrid srcs={fitUi} alt="ZenFit screen" />
      </section>

      <MInviteCTA heading="Let's talk about your project" />
    </MobilePageShell>
  );
}
