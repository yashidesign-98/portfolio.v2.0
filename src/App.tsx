import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TopPill from "./components/TopPill";
import SectionDivider from "./components/SectionDivider";
import Scrubber from "./components/Scrubber";
import CaseStudy from "./pages/CaseStudy";
import MedicalApp from "./pages/MedicalApp";
import BlockExplorer from "./pages/BlockExplorer";
import Web3Website from "./pages/Web3Website";
import FitnessApp from "./pages/FitnessApp";
import KitschOdyssey from "./pages/KitschOdyssey";
import Jharokhas from "./pages/Jharokhas";
import SummerRemix from "./pages/SummerRemix";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Toolkit from "./sections/Toolkit";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

const PAGE_WIDTH = 1980;
const gridUrl = "/assets/figjam-grid.svg";

function Block({
  width,
  height,
  id,
  children,
}: {
  width: number;
  height: number;
  id?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      id={id}
      className="relative shrink-0 scroll-mt-[120px]"
      style={{ width, height }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [wrapHeight, setWrapHeight] = useState(0);
  const [progress, setProgress] = useState(0);
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#\/?/, ""));

  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash.replace(/^#\/?/, ""));
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useLayoutEffect(() => {
    function update() {
      const wrap = wrapRef.current;
      const page = pageRef.current;
      if (!wrap || !page) return;
      const nextScale = wrap.clientWidth / PAGE_WIDTH;
      setScale(nextScale);
      setWrapHeight(page.offsetHeight * nextScale);
    }
    update();
    window.addEventListener("resize", update);
    const id = window.setTimeout(update, 300); // re-measure after webfont load
    return () => {
      window.removeEventListener("resize", update);
      window.clearTimeout(id);
    };
  }, [route]);

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [wrapHeight]);

  return (
    <>
      {/* Fixed Figma-chrome: header pinned to top, tool sidebar pinned to left.
          Both are scaled by the same factor as the canvas so they line up. */}
      <div
        className="fixed left-0 top-[40px] z-50"
        style={{ width: PAGE_WIDTH, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        <Header />
      </div>
      <div
        className="fixed left-0 top-[40px] z-[9993]"
        style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        <div style={{ marginTop: 96 }}>
          <Sidebar />
        </div>
      </div>

      <Scrubber progress={progress} />

      <div ref={wrapRef} id="top" className="w-full overflow-hidden" style={{ height: wrapHeight, marginTop: 40 }}>
        <div
          ref={pageRef}
          className="relative bg-[#0d0d0d]"
          style={{
            width: PAGE_WIDTH,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <img
            alt=""
            src={gridUrl}
            className="pointer-events-none absolute left-0 top-0 w-[1980px] select-none"
          />

          {route === "public-cloud-experience" ? (
            <CaseStudy />
          ) : route === "medical-app-experience" ? (
            <MedicalApp />
          ) : route === "block-explorer" ? (
            <BlockExplorer />
          ) : route === "web3-landing-page" ? (
            <Web3Website />
          ) : route === "fitness-app-experience" ? (
            <FitnessApp />
          ) : route === "kitsch-odyssey" ? (
            <KitschOdyssey />
          ) : route === "jharokhas" ? (
            <Jharokhas />
          ) : route === "summer-remix" ? (
            <SummerRemix />
          ) : (
            <div className="relative z-0 flex w-[1980px] flex-col items-center gap-[60px] pt-[124px] pb-[88px]">
            <TopPill />
            <Block width={1748} height={851}>
              <Hero />
            </Block>
            <SectionDivider label="01 - about" />
            <Block width={1980} height={971} id="section-about">
              <About />
            </Block>
            <SectionDivider label="02 - work" />
            <Block width={1980} height={1922} id="section-work">
              <Work />
            </Block>
            <SectionDivider label="03 - experience" />
            <Block width={1980} height={1770} id="section-experience">
              <Experience />
            </Block>
            <SectionDivider label="04 - Toolkit & Certifications" />
            <Block width={1980} height={895} id="section-toolkit">
              <Toolkit />
            </Block>
            <SectionDivider label="05 - AI JAM" />
            <Block width={1980} height={1054} id="section-gallery">
              <Gallery />
            </Block>
            <SectionDivider label="06 - Contact" />
            <Block width={1980} height={848} id="section-contact">
              <Contact />
            </Block>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
