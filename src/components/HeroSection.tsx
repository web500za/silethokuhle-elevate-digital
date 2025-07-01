import { Award, Cloud, UserCheck } from "lucide-react";

// Use a slightly darker gold to match the gold accent line (HSL: 45 100% 51% or #FFC300)
const gold = '#FFC300'; // Adjust this hex if your gold accent line uses a different value

const qualifications = [
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    label: "PwC Alumni"
  },
  {
    icon: <Cloud className="w-8 h-8 text-yellow-400" />,
    label: "AWS Certified"
  },
  {
    icon: <UserCheck className="w-8 h-8 text-yellow-400" />,
    label: "Virtual Expert"
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
    <section className="min-h-screen blue-gradient flex items-center justify-center relative overflow-hidden font-sans">
      {/* Subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center justify-center w-full px-2 sm:px-0">
        {/* Selling Points */}
        <div className="max-w-xl mx-auto w-full flex justify-center gap-x-8 md:gap-x-16 mb-12">
          {qualifications.map((q, i) => (
            <div
              key={q.label}
              className="flex flex-col items-center text-center flex-1 min-w-0"
            >
              {q.icon}
              <span className="mt-3 text-sm font-medium uppercase tracking-widest text-gray-300">
                {q.label}
              </span>
            </div>
          ))}
        </div>
        {/* Name */}
        <h1
          className="text-white font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-[0.08em] md:tracking-[0.12em] leading-tight md:leading-[0.9] mb-10 md:mb-14 transition-all"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          SILETHOKUHLE
          <br className="block" />
          MNCUBE
        </h1>
        {/* Role */}
        <h2
          className="text-white/90 font-extralight text-base sm:text-xl md:text-2xl tracking-widest uppercase mb-8 md:mb-10"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.18em' }}
        >
          Virtual Assistant
        </h2>
        {/* Tagline */}
        <p
          className="text-gray-400 font-medium text-base sm:text-lg max-w-md md:max-w-xl mx-auto mb-6 md:mb-8"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          PwC to Python, I transform how business gets done.
        </p>
        {/* Accent line & arrow */}
        <div className="flex flex-col items-center mt-2 md:mt-4">
          <div className="w-20 md:w-24 h-[2px] bg-yellow-400 mb-4 md:mb-6"></div>
          <button
            className="w-12 h-12 flex items-center justify-center rounded-full active:scale-95 transition-transform duration-150 focus:outline-none"
            onClick={handleScroll}
            aria-label="Scroll to Why Choose Me"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-yellow-400 animate-bounce opacity-60 hover:opacity-80 transition-opacity"
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
