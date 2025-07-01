import { Award, Cloud, UserCheck } from "lucide-react";

// Use a slightly darker gold to match the gold accent line (HSL: 45 100% 51% or #FFC300)
const gold = '#FFC300'; // Adjust this hex if your gold accent line uses a different value

const qualifications = [
  {
    icon: <Award className="w-8 h-8 md:w-7 md:h-7" style={{ color: gold }} />, label: "PwC Alumni"
  },
  {
    icon: <Cloud className="w-8 h-8 md:w-7 md:h-7" style={{ color: gold }} />, label: "AWS Certified"
  },
  {
    icon: <UserCheck className="w-8 h-8 md:w-7 md:h-7" style={{ color: gold }} />, label: "Virtual Expert"
  }
];

const HeroSection = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('value-pillars');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen blue-gradient flex items-center justify-center relative overflow-hidden font-bold font-sans">
      {/* Subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center justify-center w-full px-2 sm:px-0">
        {/* Qualifications Highlight Bar */}
        <div className="flex justify-center gap-8 md:gap-12 mb-10 md:mb-20 animate-fade-in px-2 md:px-0">
          {qualifications.map((q, i) => (
            <button
              key={q.label}
              className="group flex flex-col items-center cursor-pointer px-2 md:px-4 focus:outline-none active:scale-95 transition-transform duration-150"
              tabIndex={0}
              aria-label={q.label}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="flex items-center gap-2 md:gap-3">
                {q.icon}
                <span className="text-white/90 font-bold text-base md:text-lg tracking-wide group-hover:text-yellow-400 transition-colors duration-200 font-sans">
                  {q.label}
                </span>
              </div>
              <div className="h-1 w-0 group-hover:w-8 bg-yellow-400 rounded-full mt-1 transition-all duration-300"></div>
            </button>
          ))}
        </div>
        <div className="space-y-8 md:space-y-12">
          {/* Hero Name */}
          <h1 className="hero-text text-white tracking-[0.12em] md:tracking-[0.18em] font-bold font-sans text-4xl sm:text-5xl md:text-7xl leading-tight md:leading-[0.9]">
            SILETHOKUHLE
            <br />
            MNCUBE
          </h1>
          {/* Tagline */}
          <h2 className="statement-text text-white/90 font-bold font-sans text-xl md:text-3xl">
            Virtual Assistant
          </h2>
          {/* Subtitle */}
          <p className="body-large text-white/80 max-w-2xl mx-auto font-sans text-base md:text-lg font-semibold">
            PwC to Python, I transform how business gets done.
          </p>
        </div>
        <div className="flex flex-col items-center mt-16 md:mt-24">
          {/* Gold accent line */}
          <div className="w-20 md:w-24 h-[2px] bg-yellow-400 mb-8 md:mb-12"></div>
          {/* Scroll Indicator */}
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full active:scale-95 transition-transform duration-150 focus:outline-none"
            onClick={handleScroll}
            aria-label="Scroll to Why Choose Me"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-yellow-400 animate-bounce opacity-60 hover:opacity-80 transition-opacity"
            >
              <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
