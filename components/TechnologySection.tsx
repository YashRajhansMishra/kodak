import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import VintagePhoto from './VintagePhoto';

export default function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-amber-400/80 tracking-widest mb-4 uppercase">Chapter One</p>
              <h2 className="text-white text-5xl md:text-6xl mb-6 leading-tight">
                Technology is a glittering lure
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 text-xl leading-relaxed max-w-3xl mx-auto"
            >
              But there is a rare occasion when people can be engaged on a level beyond flash—if they have a sentimental bond with the product.
            </motion.p>
          </div>

          {/* Vintage Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <VintagePhoto
              src="https://images.unsplash.com/photo-1605650836604-113e78a807e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5uZXIlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjEwNzkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Family Dinner"
              caption="Family dinner, 1965"
              rotation={-3}
              delay={0.2}
            />
            <VintagePhoto
              src="https://images.unsplash.com/photo-1600779438084-a87b966aab99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZHBhcmVudHMlMjBncmFuZGNoaWxkcmVuJTIwZmFtaWx5fGVufDF8fHx8MTc2MTA3OTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Grandparents with grandchildren"
              caption="With Grandma & Grandpa"
              rotation={2}
              delay={0.4}
            />
            <VintagePhoto
              src="https://images.unsplash.com/flagged/photo-1545622783-901effb998a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjaHJpc3RtYXMlMjBob2xpZGF5fGVufDF8fHx8MTc2MTA3OTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Christmas celebration"
              caption="Christmas morning, 1972"
              rotation={-2}
              delay={0.6}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
