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

                background: "#146ef5",
                color: "#ffffff",
                boxShadow:
                  "0px 0.5px 1px rgba(0, 0, 0, 0.25), inset 0px 29px 23px -16px rgba(255, 255, 255, 0.04), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.2)",
              }}
            >
              Get Started
            </Link>
          </div>
        </Block>
      </Block>
    </Section>
  );
}
