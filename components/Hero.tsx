import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const memoryImages = [
    {
      url: "https://images.unsplash.com/photo-1599307886716-025b17016db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc2MTE0MTM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Children Playing"
    },
    {
      url: "https://images.unsplash.com/photo-1687254261045-51232f26f557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMG1vdGhlciUyMGNvb2tpbmclMjBraXRjaGVufGVufDF8fHx8MTc2MTE0MTM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Mom Cooking"
    },
    {
      url: "https://images.unsplash.com/photo-1761095596779-bb7844c36825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcGFydHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjExNDEzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Party Celebration"
    },
    {
      url: "https://images.unsplash.com/photo-1636886556199-6aa6988c6323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY291cGxlJTIwZmlyc3QlMjBraXNzfGVufDF8fHx8MTc2MTE0MTM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "First Kiss"
    }
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % memoryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        
        {/* Image Carousel */}
        {memoryImages.map((image, index) => (
          <motion.img
            key={index}
            src={image.url}
            alt={image.caption}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1.05 : 1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
        
        {/* Vintage film grain effect */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay pointer-events-none z-20" />
      </div>

      {/* Floating Memory Snapshots - Polaroid Style */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top Left - Rotating Polaroid */}
        <motion.div
          initial={{ opacity: 0, rotate: -15, y: -100 }}
          animate={{ opacity: 1, rotate: -8, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute left-4 lg:left-12 top-20 hidden md:block"
        >
          <div className="relative w-48 lg:w-64 bg-white p-3 shadow-2xl rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
            <img
              src={memoryImages[(currentImageIndex + 1) % memoryImages.length].url}
              alt="Memory"
              className="w-full h-48 lg:h-64 object-cover"
            />
            <div className="pt-2 pb-1">
              <p className="text-gray-800 text-xs lg:text-sm text-center font-handwriting">
                {memoryImages[(currentImageIndex + 1) % memoryImages.length].caption}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Top Right - Rotating Polaroid */}
        <motion.div
          initial={{ opacity: 0, rotate: 15, y: -100 }}
          animate={{ opacity: 1, rotate: 8, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="absolute right-4 lg:right-12 top-20 hidden md:block"
        >
          <div className="relative w-48 lg:w-64 bg-white p-3 shadow-2xl rotate-[8deg] hover:rotate-0 transition-transform duration-300">
            <img
              src={memoryImages[(currentImageIndex + 2) % memoryImages.length].url}
              alt="Memory"
              className="w-full h-48 lg:h-64 object-cover"
            />
            <div className="pt-2 pb-1">
              <p className="text-gray-800 text-xs lg:text-sm text-center font-handwriting">
                {memoryImages[(currentImageIndex + 2) % memoryImages.length].caption}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Center - Featured Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="absolute bottom-20 lg:bottom-28 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="relative w-72 bg-white p-3 shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
            <img
              src={memoryImages[(currentImageIndex + 3) % memoryImages.length].url}
              alt="Memory"
              className="w-full h-48 object-cover"
            />
            <div className="pt-2 pb-1">
              <p className="text-gray-800 text-sm text-center font-handwriting">
                {memoryImages[(currentImageIndex + 3) % memoryImages.length].caption}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-amber-300/80 tracking-[0.3em] mb-6 uppercase">Times Media 2008</p>
          <h1 className="text-white text-6xl md:text-8xl mb-6 tracking-tight drop-shadow-2xl">
            The Carousel
          </h1>
          <div className="w-24 h-0.5 bg-amber-400/60 mx-auto mb-8" />
          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto italic drop-shadow-xl">
            A Kodak Storyboard Case Study
          </p>
          
          {/* Current Memory Label */}
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="inline-block bg-amber-900/60 backdrop-blur-md px-6 py-3 rounded-full border-2 border-amber-400/40">
              <p className="text-amber-200 tracking-wide">
                Remembering: <span className="text-amber-100 italic">{memoryImages[currentImageIndex].caption}</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
        </motion.div>
      </div>

      {/* Carousel Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {memoryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-amber-400 w-8' 
                : 'bg-amber-400/40 hover:bg-amber-400/60'
            }`}
            aria-label={`View ${memoryImages[index].caption}`}
          />
        ))}
      </div>
    </section>
  );
}
