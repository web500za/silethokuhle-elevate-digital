import HeroSection from "../components/HeroSection";
import ValuePillarsSection from "../components/ValuePillarsSection";
import ConnectionSection from "../components/ConnectionSection";

export default function Index() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <ValuePillarsSection />
      <ConnectionSection />
    </main>
  );
}
