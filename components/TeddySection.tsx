import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import VintagePhoto from './VintagePhoto';

export default function TeddySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          <div>
            <p className="text-amber-800/60 tracking-widest mb-4 uppercase">Chapter Two</p>
            <h2 className="text-neutral-900 text-4xl md:text-5xl mb-8">
              My First Job
            </h2>
            <p className="text-neutral-700 text-xl max-w-2xl mx-auto">
              In a fur company, I met a Greek colleague named Teddy who taught me the most important lessons in advertising.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-12 rounded-lg shadow-xl border border-amber-200/50"
          >
            <div className="space-y-8">
              <div className="relative">
                <div className="text-6xl text-amber-400/30 absolute -top-4 -left-2">"</div>
                <blockquote className="text-neutral-800 text-2xl md:text-3xl italic leading-relaxed pl-8">
                  The most important idea in advertising is <span className="text-amber-700">new</span>
                </blockquote>
              </div>
              
              <p className="text-neutral-600 text-lg">
                Create an itch. You simply put your product in there as a kind of... calamine lotion.
              </p>

              <div className="pt-8 border-t border-amber-200">
                <p className="text-neutral-500 italic">— Teddy</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <p className="text-neutral-800 text-xl">
              But he also spoke about a deeper bond with the product...
            </p>
            <p className="text-amber-800 text-3xl mt-4">Nostalgia</p>
            <p className="text-neutral-600 mt-2 italic">It's delicate, but potent.</p>
          </motion.div>

          {/* Vintage Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <VintagePhoto
              src="https://images.unsplash.com/photo-1599307886716-025b17016db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjB2aW50YWdlfGVufDF8fHx8MTc2MTA3OTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Children playing"
              caption="Summer '68"
              rotation={-4}
              delay={0.8}
            />
            <VintagePhoto
              src="https://images.unsplash.com/photo-1554727225-ee66ff0a1bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwa2lkc3xlbnwxfHx8fDE3NjEwNzkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Birthday celebration"
              caption="My 7th Birthday"
              rotation={3}
              delay={0.9}
            />
            <VintagePhoto
              src="https://images.unsplash.com/photo-1638728392034-8d11dd1edd7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjB2aW50YWdlfGVufDF8fHx8MTc2MTA3OTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wedding day"
              caption="Their wedding day"
              rotation={-2}
              delay={1.0}
            />
            <VintagePhoto
              src="https://images.unsplash.com/photo-1528163353686-48373b77425f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaWNuaWMlMjBvdXRkb29yc3xlbnwxfHx8fDE3NjEwNTY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Family picnic"
              caption="Picnic in the park"
              rotation={2}
              delay={1.1}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
