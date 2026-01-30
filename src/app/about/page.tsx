'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="opacity-0 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 md:mb-8 text-atlas-dark">
              About
            </h1>
            <p className="text-lg md:text-xl text-atlas-dark/70 font-serif max-w-3xl leading-relaxed">
              A platform built on conviction, designed for permanence.
            </p>
          </div>
        </div>
      </section>

      {/* The Platform Section */}
      <section className="py-16 md:py-2">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 md:mb-10 text-atlas-dark">
            THE PLATFORM
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
              ATLAS is not a wealth management firm in the conventional sense. It is a platform: a structure designed to support the long-term stewardship of significant capital.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
              We do not sell financial products. We do not manage assets in the traditional sense. We do not seek to maximize assets under management or client count. Our model is fundamentally different because our objectives are fundamentally different.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
              ATLAS exists to provide structure, governance, and clarity to individuals and families who have already achieved significant wealth. Our role is to help them preserve and transfer that wealth across generations—not through aggressive strategies or speculative investments, but through careful architecture and disciplined stewardship.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
              The platform brings together expertise in capital structure, family governance, intergenerational planning, and strategic advisory. Each engagement is tailored to the specific circumstances, objectives, and values of the families we serve.
            </p>
          </div>

          <div className="mt-10 md:mt-12 pt-10 border-t border-atlas-dark/10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-atlas-dark/50 hover:text-atlas-dark transition-colors duration-300 group no-underline"
            >
              TALK TO AN EXPERT
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-[#ebe7e0]">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-serif font-light mb-10 md:mb-12 text-atlas-dark">
            OUR APPROACH
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Selective Engagement */}
            <div>
              <h3 className="text-2xl font-serif font-normal mb-4 text-atlas-dark">
                Selective Engagement
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-atlas-dark/60 font-serif">
                We work with a limited number of families. This is by design. The depth of relationship required for effective long-term work cannot be maintained at scale.
              </p>
            </div>

            {/* Long-Term Alignment */}
            <div>
              <h3 className="text-2xl font-serif font-normal mb-4 text-atlas-dark">
                Long-Term Alignment
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-atlas-dark/60 font-serif">
                Our interests are aligned with multi-generational outcomes, not short-term metrics. We measure success in decades, not quarters.
              </p>
            </div>

            {/* Independence */}
            <div>
              <h3 className="text-2xl font-serif font-normal mb-4 text-atlas-dark">
                Independence
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-atlas-dark/60 font-serif">
                We maintain complete independence from financial product providers. Our recommendations are unencumbered by conflicts of interest.
              </p>
            </div>

            {/* Discretion */}
            <div>
              <h3 className="text-2xl font-serif font-normal mb-4 text-atlas-dark">
                Discretion
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-atlas-dark/60 font-serif">
                Privacy is foundational to our practice. We do not publicize client relationships or seek visibility for the work we do.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-atlas-dark/10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-atlas-dark/50 hover:text-atlas-dark transition-colors duration-300 group no-underline"
            >
              TALK TO AN EXPERT
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-serif font-light mb-10 md:mb-12 text-atlas-dark">
            LEADERSHIP
          </h2>

          <div className="flex items-start gap-6 md:gap-8 mb-8">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-atlas-dark flex items-center justify-center text-atlas-primary font-serif text-lg">
              GM
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-serif font-light mb-2 text-atlas-dark">
                Gonzalo Martinez
              </h3>
              <p className="text-xs tracking-wider uppercase text-atlas-dark/50 mb-6">
                Managing Partner
              </p>

              <div className="space-y-4 text-base md:text-lg leading-relaxed text-atlas-dark/60">
                <p className="font-serif">
                  Gonzalo Martinez founded ATLAS to address a gap he observed in how significant wealth is managed and transferred across generations. After two decades working with ultra-high-net-worth families across the Americas and Europe, he recognized that the industry's incentives were misaligned with the long-term interests of the families it served.
                </p>
                <p className="font-serif">
                  ATLAS represents his vision for a different approach: one focused on structure over speculation, governance over transactions, and multi-generational thinking over quarterly performance.
                </p>
                <p className="font-serif">
                  Based in Miami, Gonzalo works directly with a small number of families worldwide. His approach is characterized by depth over breadth, patience over activity, and discretion over visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-16 md:py-26 border-t border-atlas-primary/10 bg-[#0c1825]">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <div className="text-center">
            <h3 className="text-base md:text-xl font-serif tracking-[0.3em] uppercase text-atlas-primary/50 mb-4">
              HEADQUARTERS
            </h3>
            <p className="text-2xl md:text-3xl font-serif font-light text-atlas-primary mb-3">
              Miami
            </p>
            <p className="text-base md:text-lg font-serif text-atlas-primary/70 mb-12">
              Serving families globally
            </p>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-3 font-serif border border-atlas-primary text-atlas-primary px-8 md:px-10 py-3 md:py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-primary hover:text-atlas-dark group no-underline"
            >
              TALK TO AN EXPERT
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
