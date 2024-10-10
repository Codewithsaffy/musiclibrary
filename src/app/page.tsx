import FeaturedCards from "@/components/FeaturedCards";
import MovingCards from "@/components/MovingCards";
import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";
import FeaturedWebinar from "@/components/FeaturedWebinar";
import Instructor from "@/components/Instructor";

export default function Home() {
  return (
    <main className="relative text-white overflow-hidden dark:bg-black  dark:bg-grid-white/[0.05]">

      <HeroSection />
      <FeaturedCards />
      <MovingCards />
      <FeaturedWebinar />
      <Instructor/>
    </main>
  );
}
