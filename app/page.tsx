import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Marquee } from "@/components/home/Marquee";
import { Reviews } from "@/components/home/Reviews";
import { Showcase } from "@/components/home/Showcase";
import { Story } from "@/components/home/Story";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Story />
      <HowItWorks />
      <Showcase />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}
