import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VintagePhoto from './VintagePhoto';

const slides = [
  {
    quote: "It's not called the wheel",
    emphasis: "It's called the carousel",
    image: "https://images.unsplash.com/photo-1528163353686-48373b77425f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaWNuaWMlMjBvdXRkb29yc3xlbnwxfHx8fDE3NjEwNTY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Family moments"
  },
  {
    quote: "It lets us travel the way a child travels",
    emphasis: "Around and around",
    image: "https://images.unsplash.com/photo-1599307886716-025b17016db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjB2aW50YWdlfGVufDF8fHx8MTc2MTA3OTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Endless joy"
  },
  {
    quote: "And back home again",
    emphasis: "To a place where we know we are loved",
    image: "https://images.unsplash.com/photo-1605650836604-113e78a807e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5uZXIlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjEwNzkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Coming home"
  }
];

export default function CarouselFinalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950 via-amber-900 to-neutral-900 z-10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          <div>
            <p className="text-amber-400/60 tracking-widest mb-6 uppercase">Final Chapter</p>
            <h2 className="text-white text-5xl md:text-7xl mb-8 leading-tight">
              The Carousel
            </h2>
            <div className="w-32 h-0.5 bg-amber-400/40 mx-auto" />
          </div>

          {/* Carousel Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              key={`photo-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="max-w-md w-full">
                <VintagePhoto
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].caption}
                  caption={slides[currentSlide].caption}
                  rotation={0}
                  delay={0}
                />
              </div>
            </motion.div>

            {/* Text */}
            <div className="relative min-h-[300px] flex items-center">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <p className="text-white/80 text-2xl md:text-3xl leading-relaxed">
                  {slides[currentSlide].quote}
                </p>
                <p className="text-amber-300 text-4xl md:text-5xl italic">
                  {slides[currentSlide].emphasis}
                </p>
              </motion.div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 bg-amber-400' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-16"
          >
            <div className="inline-block px-8 py-4 border border-amber-400/30 rounded-lg backdrop-blur-sm">
              <p className="text-white/60 tracking-widest uppercase">Kodak Carousel</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
