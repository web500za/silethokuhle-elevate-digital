import { Award, Cloud, UserCheck, ArrowRight, Plus, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Use a slightly darker gold to match the gold accent line (HSL: 45 100% 51% or #FFC300)
const gold = '#FFC300'; // Adjust this hex if your gold accent line uses a different value

const qualifications = [
  {
    icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
    label: "PwC Alumni"
  },
  {
    icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
    label: "AWS Certified"
  },
  {
    icon: <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
    label: "Virtual Expert"
  }
];

const valuePillars = [
  {
    title: "Corporate Excellence",
    subtitle: "PwC Alumni",
    description: "Bringing Big 4 consulting standards and methodologies to every project.",
    metric: "5+ years in professional services"
  },
  {
    title: "Technical Prowess",
    subtitle: "AWS Certified",
    description: "Bridging business needs with cloud solutions and automation.",
    metric: "Multiple AWS certifications"
  },
  {
    title: "Business Impact",
    subtitle: "Process Expert",
    description: "Transforming operations through strategic digital solutions.",
    metric: "100+ processes optimized"
  }
];

const HeroSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleScroll = () => {
    const nextSection = document.getElementById('connection-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:silethokuhle@example.com?subject=Business Transformation Inquiry&body=Hi Silethokuhle,%0D%0A%0D%0AI\'d like to discuss how you can help transform my business through strategic automation and process optimization.%0D%0A%0D%0A[Tell me about your project here]%0D%0A%0D%0ABest regards,';
  };

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="min-h-screen blue-gradient flex items-center justify-center relative overflow-hidden font-sans">
      {/* Subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Selling Points */}
        <div className="max-w-xl mx-auto w-full flex justify-center gap-x-6 md:gap-x-12 lg:gap-x-16 mb-8 md:mb-12">
          {qualifications.map((q, i) => (
            <div
              key={q.label}
              className="flex flex-col items-center text-center flex-1 min-w-0"
            >
              {q.icon}
              <span className="mt-2 md:mt-3 text-xs md:text-sm font-medium uppercase tracking-widest text-gray-300">
                {q.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Name */}
        <h1
          className="text-white font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[0.08em] md:tracking-[0.12em] leading-tight md:leading-[0.9] mb-3 md:mb-6 transition-all"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          SILETHOKUHLE
          <br className="block" />
          MNCUBE
        </h1>
        
        {/* Role */}
        <h2
          className="text-white/90 font-extralight text-sm sm:text-lg md:text-xl lg:text-2xl tracking-widest uppercase mb-3 md:mb-4"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.18em' }}
        >
          Strategic Virtual Partner
        </h2>
        
        {/* Tagline */}
        <p
          className="text-gray-300 font-medium text-sm sm:text-base md:text-lg max-w-md md:max-w-xl mx-auto mb-6 md:mb-8"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          From PwC Strategy to Python Scripts: Transforming how business gets done.
        </p>

        {/* Primary CTA */}
        <div className="mb-8 md:mb-12">
          <Button
            onClick={handleContactClick}
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-deep font-semibold px-8 py-3 text-base md:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            size="lg"
          >
            Let's Transform Your Business
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        
        {/* Value Pillars - Visually Elevated & Expandable */}
        <div className="w-full max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {valuePillars.map((pillar, index) => (
              <Card 
                key={index} 
                className={`border-none shadow-2xl hover:shadow-3xl transition-all duration-300 blue-gradient transform hover:-translate-y-1 cursor-pointer ${
                  expandedCard === index ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
                }`}
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)',
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4))'
                }}
                onClick={() => toggleCard(index)}
              >
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="h-2 w-12 md:w-16 gold-accent-bg mb-4 md:mb-6 rounded"></div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-white font-sans">{pillar.title}</h3>
                  <p className="text-white font-semibold mb-3 md:mb-4 font-sans text-sm md:text-base">{pillar.subtitle}</p>
                  
                  {/* Expandable Description */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedCard === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-white mb-4 leading-relaxed font-sans text-xs md:text-sm lg:text-base">
                      {pillar.description}
                    </p>
                  </div>
                  
                  <p className="text-xs md:text-sm font-semibold text-white border-t border-white/30 pt-3 md:pt-4 font-sans">
                    {pillar.metric}
                  </p>
                  
                  {/* Expand/Collapse Indicator */}
                  <div className="flex justify-center mt-4">
                    {expandedCard === index ? (
                      <Minus className="w-5 h-5 text-yellow-400 animate-breathe transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-yellow-400 animate-breathe transition-transform duration-300" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accent line & arrow */}
        <div className="flex flex-col items-center mt-2 md:mt-4">
          <div className="w-16 md:w-20 lg:w-24 h-[2px] bg-yellow-400 mb-3 md:mb-4 lg:mb-6"></div>
          <button
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full active:scale-95 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-deep"
            onClick={handleScroll}
            aria-label="Scroll to Connection Section"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 animate-bounce opacity-60 hover:opacity-80 transition-opacity"
            >
              <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </button>
          <span className="mt-2 text-xs uppercase tracking-widest text-gray-300 opacity-70 select-none pointer-events-none">
            discover more
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
