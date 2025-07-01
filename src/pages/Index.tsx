import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ValuePillarsSection from "../components/ValuePillarsSection";
import ConnectionSection from "../components/ConnectionSection";

export default function Index() {
  const [revealed, setRevealed] = useState(false);

  // Handler to be passed to HeroSection
  const handleReveal = () => setRevealed(true);

  useEffect(() => {
    if (revealed) {
      const timeout = setTimeout(() => {
        const nextSection = document.getElementById('value-pillars');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1100); // match transition duration + buffer
      return () => clearTimeout(timeout);
    }
  }, [revealed]);

  return (
    <main className="min-h-screen w-full">
      <HeroSection onReveal={handleReveal} revealed={revealed} />
      <div
        style={{
          maxHeight: revealed ? '2000px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 1s cubic-bezier(0.77,0,0.18,1)',
        }}
        aria-hidden={!revealed}
      >
        <ValuePillarsSection />
        <ConnectionSection />
      </div>
    </main>
  );
}
