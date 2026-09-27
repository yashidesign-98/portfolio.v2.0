import MobileAiJam, { kitschData, jharokhasData, summerData } from "./MobileAiJam";
import MobileCloud from "./MobileCloud";
import MobileMedical from "./MobileMedical";
import MobileBlock from "./MobileBlock";
import MobileWeb3 from "./MobileWeb3";
import MobileFitness from "./MobileFitness";

// Maps a detail route to its dedicated mobile layout. Returns null for the home
// route (handled by MobileHome) and unknown routes.
export default function MobileDetail({ route }: { route: string }) {
  switch (route) {
    case "public-cloud-experience":
      return <MobileCloud />;
    case "medical-app-experience":
      return <MobileMedical />;
    case "block-explorer":
      return <MobileBlock />;
    case "web3-landing-page":
      return <MobileWeb3 />;
    case "fitness-app-experience":
      return <MobileFitness />;
    case "kitsch-odyssey":
      return <MobileAiJam data={kitschData} />;
    case "jharokhas":
      return <MobileAiJam data={jharokhasData} />;
    case "summer-remix":
      return <MobileAiJam data={summerData} />;
    default:
      return null;
  }
}
