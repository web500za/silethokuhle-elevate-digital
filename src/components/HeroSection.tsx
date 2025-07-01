import { Award, Cloud, UserCheck } from "lucide-react";

const qualifications = [
  {
    icon: <Award className="w-7 h-7 text-white/80" />, label: "PwC Alumni"
  },
  {
    icon: <Cloud className="w-7 h-7 text-white/80" />, label: "AWS Certified"
  },
  {
    icon: <UserCheck className="w-7 h-7 text-white/80" />, label: "Virtual Expert"
  }
];

interface HeroSectionProps {
  onReveal?: () => void;
  revealed?: boolean;
}

const HeroSection = ({ onReveal, revealed }: HeroSectionProps) => {
  const handleReveal = () => {
    if (onReveal) onReveal();
    setTimeout(() => {
      const nextSection = document.getElementById('value-pillars');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1100); // Wait for expand animation (1s + buffer)
  };

  return (
    <section className="min-h-screen blue-gradient flex items-center justify-center relative overflow-hidden font-sans">
      {/* Subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center justify-center w-full">
        {/* Qualifications Highlight Bar */}
        <div className="flex justify-center gap-8 mb-20 animate-fade-in">
          {qualifications.map((q, i) => (
            <div
              key={q.label}
              className="group flex flex-col items-center cursor-pointer px-2"
            >
              <div className="flex items-center gap-2">
                {q.icon}
                <span className="text-white/90 font-medium text-lg tracking-wide group-hover:text-gold-accent transition-colors duration-200 font-sans">
                  {q.label}
                </span>
              </div>
              <div className="h-1 w-0 group-hover:w-8 bg-gold-accent rounded-full mt-1 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        <div className="space-y-12">
          {/* Hero Name */}
          <h1 className="hero-text text-white tracking-[0.18em] font-sans">
            SILETHOKUHLE
            <br />
            MNCUBE
          </h1>
          {/* Tagline */}
          <h2 className="statement-text text-white/90 font-sans">
            Virtual Assistant
          </h2>
          {/* Subtitle */}
          <p className="body-large text-white/80 max-w-2xl mx-auto font-sans">
            PwC to Python, I transform how business gets done.
          </p>
        </div>
        <div className="flex flex-col items-center mt-24">
          {/* Gold accent line */}
          <div className="w-24 h-[2px] gold-accent-bg mb-12"></div>
          {/* Scroll Indicator */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 gold-accent animate-bounce opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={handleReveal}
          >
            <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
