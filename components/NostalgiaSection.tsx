import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import VintagePhoto from './VintagePhoto';

export default function NostalgiaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Dark Background with Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-neutral-900 z-10" />
        <img
          src="https://images.unsplash.com/photo-1632679760635-55966a6e3d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3N0YWxnaWMlMjBmYW1pbHklMjBwaG90b3N8ZW58MXx8fHwxNzYxMDc3NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Nostalgic Photos"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          <div>
            <p className="text-amber-400/60 tracking-widest mb-6 uppercase">Chapter Three</p>
            <h2 className="text-white text-4xl md:text-6xl mb-8 leading-tight">
              The Greek Meaning
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-12 py-16"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-amber-500/10 blur-2xl" />
              <p className="relative text-amber-300 text-7xl md:text-8xl tracking-tight">
                νοσταλγία
              </p>
            </div>

            <div className="space-y-8 max-w-3xl mx-auto">
              <p className="text-white/90 text-2xl md:text-3xl leading-relaxed">
                In Greek, <span className="text-amber-400">nostalgia</span> literally means
              </p>
              <p className="text-amber-300 text-4xl md:text-5xl italic">
                "the pain from an old wound"
              </p>
              <div className="pt-8">
                <p className="text-white/70 text-xl md:text-2xl leading-relaxed">
                  It's a twinge in your heart, far more powerful than memory alone.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Scattered Vintage Photos */}
          <div className="relative mt-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="md:translate-y-12">
                <VintagePhoto
                  src="https://images.unsplash.com/photo-1576696058573-12b47c49559e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBiZWFjaCUyMHZhY2F0aW9ufGVufDF8fHx8MTc2MTAzNTU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Beach vacation"
                  caption="Beach day, 1974"
                  rotation={-5}
                  delay={0.6}
                />
              </div>
              <VintagePhoto
                src="https://images.unsplash.com/photo-1632679760635-55966a6e3d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3N0YWxnaWMlMjBmYW1pbHklMjBwaG90b3N8ZW58MXx8fHwxNzYxMDc3NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Family memories"
                caption="Looking back..."
                rotation={3}
                delay={0.8}
              />
              <div className="md:translate-y-12">
                <VintagePhoto
                  src="https://images.unsplash.com/photo-1600779438084-a87b966aab99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZHBhcmVudHMlMjBncmFuZGNoaWxkcmVuJTIwZmFtaWx5fGVufDF8fHx8MTc2MTA3OTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Grandparents"
                  caption="Together again"
                  rotation={-3}
                  delay={1.0}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
