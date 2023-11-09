import LandingPage from "@/components/Home/LandingPage";
import Cursor from "@/components/cursor/Cursor";
import IntroLoader from "@/components/loader/IntroLoader";

export default function Home() {
  return (
    <div>
      <Cursor />
      <IntroLoader />
      <LandingPage />
    </div>
  )
}
