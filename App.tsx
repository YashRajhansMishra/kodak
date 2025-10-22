import Hero from './components/Hero';
import TechnologySection from './components/TechnologySection';
import TeddySection from './components/TeddySection';
import NostalgiaSection from './components/NostalgiaSection';
import TimeMachineSection from './components/TimeMachineSection';
import CarouselFinalSection from './components/CarouselFinalSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <TechnologySection />
      <TeddySection />
      <NostalgiaSection />
      <TimeMachineSection />
      <CarouselFinalSection />
      <Footer />
    </div>
  );
}
