import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import VintagePhoto from './VintagePhoto';

export default function TimeMachineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text */}
          <div className="text-center mb-20">
            <div>
              <p className="text-amber-400/60 tracking-widest mb-4 uppercase">Chapter Four</p>
              <h2 className="text-white text-5xl md:text-6xl mb-8 leading-tight">
                Not a Spaceship
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 max-w-3xl mx-auto"
            >
              <p className="text-white/80 text-2xl leading-relaxed">
                This device isn't a spaceship...
              </p>
              <p className="text-amber-300 text-4xl">
                It's a time machine
              </p>
              <p className="text-white/70 text-xl leading-relaxed">
                It goes backwards and forwards. It takes us to a place where we ache to go again.
              </p>
            </motion.div>
          </div>

          {/* Vintage Photos Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
            <VintagePhoto
              src="https://images.unsplash.com/photo-1599307886716-025b17016db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjB2aW50YWdlfGVufDF8fHx8MTc2MTA3OTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Children playing"
              caption="1968"
              rotation={-3}
              delay={0.3}
            />
            <div className="lg:translate-y-8">
              <VintagePhoto
                src="https://images.unsplash.com/photo-1554727225-ee66ff0a1bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwa2lkc3xlbnwxfHx8fDE3NjEwNzkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Birthday"
                caption="1971"
                rotation={2}
                delay={0.5}
              />
            </div>
            <VintagePhoto
              src="https://images.unsplash.com/photo-1576696058573-12b47c49559e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBiZWFjaCUyMHZhY2F0aW9ufGVufDF8fHx8MTc2MTAzNTU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Beach"
              caption="1974"
              rotation={-2}
              delay={0.7}
            />
            <div className="lg:translate-y-8">
              <VintagePhoto
                src="https://images.unsplash.com/photo-1638728392034-8d11dd1edd7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjB2aW50YWdlfGVufDF8fHx8MTc2MTA3OTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wedding"
                caption="1977"
                rotation={3}
                delay={0.9}
              />
            </div>
            <VintagePhoto
              src="https://images.unsplash.com/photo-1605650836604-113e78a807e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5uZXIlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjEwNzkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Family dinner"
              caption="1982"
              rotation={-4}
              delay={1.1}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
