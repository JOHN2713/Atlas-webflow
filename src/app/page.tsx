import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import WhatIsAtlas from "@/components/WhatIsAtlas";
import WhoWeServe from "@/components/WhoWeServe";
import Insights from "@/components/Insights";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Principles />
        <WhatIsAtlas />
        <WhoWeServe />
        <Insights />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
