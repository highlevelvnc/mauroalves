import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Pillars } from "@/components/Pillars";
import { Stats } from "@/components/Stats";
import { Plans } from "@/components/Plans";
import { Addons } from "@/components/Addons";
import { Traffic } from "@/components/Traffic";
import { Examples } from "@/components/Examples";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <Stats />
        <Plans />
        <Addons />
        <Traffic />
        <Examples />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
