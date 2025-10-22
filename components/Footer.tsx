import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section - Top Part of Footer */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950">
        {/* Vintage Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,.03) 10px,
                rgba(255,255,255,.03) 20px
              )`
            }}
          />
        </div>

        {/* Film grain effect */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Top accent line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-12"
          />

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-200/80 tracking-[0.4em] mb-4 uppercase text-sm">
              Advertise With Us
            </p>
            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight max-w-4xl mx-auto">
              Want Your Product or Brand to{' '}
              <span className="text-amber-300 italic">Reach Millions?</span>
            </h2>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-amber-100/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          >
            Join the legacy of iconic brands that have captured hearts through the power of nostalgic storytelling
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <a 
              href="mailto:chandrapal@timesmedia.co.in"
              className="group relative px-10 py-5 bg-amber-400 hover:bg-amber-300 text-amber-950 transition-all duration-300 shadow-2xl hover:shadow-amber-400/50 hover:scale-105 overflow-hidden inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative flex items-center gap-3 tracking-wider uppercase">
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Secondary Contact Options */}
            <div className="flex gap-4">
              <a 
                href="mailto:chandrapal@timesmedia.co.in"
                className="group px-6 py-5 bg-amber-900/40 hover:bg-amber-800/60 text-amber-100 border-2 border-amber-400/40 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm inline-block"
                title="Email: chandrapal@timesmedia.co.in"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="tel:+919867777284"
                className="group px-6 py-5 bg-amber-900/40 hover:bg-amber-800/60 text-amber-100 border-2 border-amber-400/40 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm inline-block"
                title="Phone: +91 98677 77284"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Contact Information Display */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 space-y-3"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a 
                href="mailto:chandrapal@timesmedia.co.in"
                className="flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">chandrapal@timesmedia.co.in</span>
              </a>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-amber-400/40" />
              <a 
                href="tel:+919867777284"
                className="flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">+91 98677 77284</span>
              </a>
            </div>
          </motion.div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-amber-400/40" />
              <div className="w-2 h-2 rounded-full bg-amber-400/60" />
              <p className="text-amber-300/60 tracking-[0.3em] uppercase text-xs">
                Since 1960
              </p>
              <div className="w-2 h-2 rounded-full bg-amber-400/60" />
              <div className="h-px w-16 bg-amber-400/40" />
            </div>
          </motion.div>
        </div>

        {/* Corner decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-amber-400/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-amber-400/20" />
      </section>

      {/* Footer Information - Bottom Part */}
      <div className="bg-neutral-950 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-white/90 text-xl">Times Media</p>
              <p className="text-white/50">Case Study — 2008</p>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/40 italic">
                "Nostalgia — it's delicate, but potent."
              </p>
            </div>

            <div className="pt-8">
              <p className="text-white/30">
                © 2008 Times Media. A creative exploration of advertising's power to connect through emotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
