import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Plans } from "@/components/Plans";
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
        <Pillars />
        <Plans />
        <Traffic />
        <Examples />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
