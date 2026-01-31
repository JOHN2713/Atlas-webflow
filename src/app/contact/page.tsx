'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí puedes agregar la lógica de envío del formulario
    console.log('Form submitted:', formData);
    
    // Simulamos un envío
    setTimeout(() => {
      alert('Thank you for your inquiry. We will be in touch soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-atlas-primary">
          <div className="container mx-auto max-w-5xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 text-atlas-dark">
                Contact
              </h1>
              <p className="text-lg md:text-xl text-atlas-dark/70 font-serif font-light max-w-3xl">
                Engagements begin with a conversation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form and Contact Info Grid */}
        <section className="py-14 md:py-20 bg-atlas-primary">
          <div className="container mx-auto max-w-6xl px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
              {/* Form Section - LEFT COLUMN */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="border-b md:border-b-0 md:border-r border-atlas-dark/10 md:pr-12 lg:pr-20 pb-12 md:pb-0"
              >
                <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-atlas-dark">
                  PRIVATE INQUIRY
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-serif tracking-wider uppercase text-atlas-dark/30 mb-3">
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-atlas-dark/20 focus:border-atlas-dark outline-none text-atlas-dark font-serif transition-colors duration-300"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-serif tracking-wider uppercase text-atlas-dark/30 mb-3">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-atlas-dark/20 focus:border-atlas-dark outline-none text-atlas-dark font-serif transition-colors duration-300"
                    />
                  </div>

                  {/* Brief Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-serif tracking-wider uppercase text-atlas-dark/30 mb-3">
                      BRIEF MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-0 py-3 bg-transparent border-b border-atlas-dark/20 focus:border-atlas-dark outline-none text-atlas-dark font-serif resize-none transition-colors duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 border border-atlas-dark px-10 py-4 text-xs font-serif tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-dark hover:text-atlas-primary group disabled:opacity-50 no-underline"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </form>
              </motion.div>

              {/* Contact Info Section - RIGHT COLUMN */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-atlas-dark">
                  DIRECT CONTACT
                </h2>

                <div className="space-y-10">
                  {/* Email */}
                  <div>
                    <p className="text-xs font-serif tracking-wider uppercase text-atlas-dark/30 mb-4">
                      EMAIL
                    </p>
                    <a
                      href="mailto:info.atlaswealh@gmail.com"
                      className="text-base font-serif text-atlas-dark hover:text-atlas-gold transition-colors duration-300 no-underline"
                    >
                      info.atlaswealh@gmail.com
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <p className="text-xs font-serif tracking-wider uppercase text-atlas-dark/30 mb-4">
                      LOCATION
                    </p>
                    <p className="text-base font-serif text-atlas-dark">
                      Miami
                    </p>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-8 border-t border-atlas-dark/10 space-y-6 text-lg font-serif leading-relaxed text-atlas-dark/60">
                    <p>
                      All inquiries are reviewed personally and handled with complete discretion. We respond to serious inquiries within a reasonable timeframe.
                    </p>
                    <p>
                      Please note that ATLAS works with a limited number of families. Not all inquiries will result in an engagement, but all will receive a thoughtful response.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-24 md:py-40 bg-[#0a1624]">
          <div className="container mx-auto max-w-3xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-serif font-light text-atlas-primary">
                We do not seek volume. We seek alignment.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
