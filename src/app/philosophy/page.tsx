"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Philosophy() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto max-w-5xl px-6 md:px-12">
            <div className="opacity-0 animate-fadeIn">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 md:mb-8 text-atlas-dark">
                Philosophy
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-atlas-dark/70 font-serif font-light max-w-3xl leading-relaxed">
                The principles that guide our work and the convictions that shape our counsel.
              </p>
            </div>
          </div>
        </section>

        {/* Structure Over Speculation */}
        <section className="py-16 md:py-2 bg-atlas-primary">
          <div className="container mx-auto max-w-4xl px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 md:mb-12 text-atlas-dark">
              Structure Over Speculation
            </h2>
            
            <div className="space-y-6 md:space-y-5">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                The financial industry rewards activity. It celebrates bold predictions, rapid trading, and constant repositioning. This approach may generate fees and excitement, but it rarely preserves wealth across generations.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                We believe in structure: the deliberate design of legal entities, governance frameworks, and investment policies that create clarity and protection. Structure does not guarantee returns. It guarantees process. And process, consistently applied, produces the outcomes that matter: stability, preservation, and peace of mind.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                When speculation fails, structure remains. When markets panic, structure provides anchor points. When generations change, structure transfers wisdom alongside wealth.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-atlas-dark/10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 font-serif text-xs tracking-[0.2em] uppercase transition-colors duration-300 group text-atlas-dark/50 hover:text-atlas-dark no-underline"
              >
                TALK TO AN EXPERT
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Discipline */}
        <section className="py-16 md:py-24 bg-[#ebe7e0]">
          <div className="container mx-auto max-w-4xl px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 md:mb-12 text-atlas-dark">
              Discipline
            </h2>
            
            <div className="space-y-6 md:space-y-5">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                Discipline is the commitment to consistent action aligned with long-term strategy not reaction, but intention repeated over time. It is the patience to let decades unfold rather than reacting to quarters.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                The greatest threats to wealth are rarely external. They are internal: the impulse to chase performance, the fear that drives panic selling, the boredom that leads to unnecessary complexity. Discipline protects against these threats.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                We counsel restraint. We design portfolios that can be maintained. We create processes that reduce the opportunity for impulsive decisions. We believe that the best financial decisions are often the ones not made.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-atlas-dark/10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-300 group text-atlas-dark/50 hover:text-atlas-dark no-underline"
              >
                TALK TO AN EXPERT
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="py-16 md:py-24 bg-atlas-primary">
          <div className="container mx-auto max-w-4xl px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 md:mb-12 text-atlas-dark">
              Governance
            </h2>
            
            <div className="space-y-6 md:space-y-5">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                Wealth without governance is wealth without direction. It becomes a source of conflict rather than opportunity, a burden rather than a blessing.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                Governance answers the questions that legal documents cannot: Who decides? How are disagreements resolved? What values guide choices? What responsibilities accompany privilege?
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                We help families establish governance frameworks appropriate to their circumstances. These frameworks provide clarity not control. They create space for individual expression within shared boundaries. They transform wealth from a potential source of division into a foundation for shared purpose.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-atlas-dark/10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-300 group text-atlas-dark/50 hover:text-atlas-dark no-underline"
              >
                TALK TO AN EXPERT
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Long-Term Capital Thinking */}
        <section className="py-16 md:py-24 bg-[#0c1825]">
          <div className="container mx-auto max-w-4xl px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 md:mb-12 text-atlas-primary">
              Long-Term Capital Thinking
            </h2>
            
            <div className="space-y-6 md:space-y-5">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-primary/80 font-serif">
                Most financial advice operates on quarterly or annual time horizons. We operate on generational ones. This difference in timeframe changes everything: risk assessment, portfolio construction, family preparation, and the very definition of success.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-primary/80 font-serif">
                Long-term thinking requires accepting that we cannot predict the future. It requires building portfolios that can survive multiple economic regimes. It requires preparing heirs for responsibilities they may not assume for decades.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-primary/80 font-serif">
                We measure success not in annual returns, but in the successful transition of wealth and values across generations. This is the only measure that matters for families who think in centuries rather than cycles.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-atlas-primary/20">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-300 group text-atlas-primary/60 hover:text-atlas-primary no-underline"
              >
                TALK TO AN EXPERT
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Intergenerational Responsibility */}
        <section className="py-16 md:py-24 bg-atlas-primary">
          <div className="container mx-auto max-w-4xl px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 md:mb-12 text-atlas-dark">
              Intergenerational Responsibility
            </h2>
            
            <div className="space-y-6 md:space-y-5">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                Wealth that lasts requires more than financial planning. It requires the cultivation of stewardship across generations. This is not about control from beyond the grave. It is about equipping each generation to be responsible stewards of both capital and values.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-atlas-dark/60 font-serif">
                We work with families to cultivate this stewardship orientation across generations. It requires education, communication, and the gradual transfer of both knowledge and responsibility. Done well, it creates families that grow stronger with wealth rather than being diminished by it.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-atlas-dark/10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-300 group text-atlas-dark/50 hover:text-atlas-dark no-underline"
              >
                TALK TO AN EXPERT
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-20 md:py-32 bg-[#ebe7e0]">
          <div className="container mx-auto max-w-4xl px-6 md:px-12 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-atlas-dark/80 mb-12 md:mb-16 leading-relaxed">
              These principles are not strategies. They are convictions. They guide every conversation, every recommendation, and every relationship we build.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-atlas-dark px-8 md:px-10 py-3 md:py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-dark hover:text-atlas-primary group text-atlas-dark no-underline"
            >
              TALK TO AN EXPERT
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
