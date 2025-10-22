import { motion } from 'motion/react';

interface VintagePhotoProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  delay?: number;
}

export default function VintagePhoto({ src, alt, caption, rotation = 0, delay = 0 }: VintagePhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
    >
      {/* Polaroid-style photo frame */}
      <div className="bg-white p-3 pb-12 shadow-2xl">
        {/* Photo */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
          {/* Vintage film overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 via-transparent to-amber-900/10 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay pointer-events-none" />
        </div>
        
        {/* Caption area */}
        {caption && (
          <p className="text-center mt-3 text-neutral-600 italic">
            {caption}
          </p>
        )}
      </div>

      {/* Shadow effect */}
      <div className="absolute inset-0 bg-black/20 -z-10 blur-md translate-y-2" />
    </motion.div>
  );
}
