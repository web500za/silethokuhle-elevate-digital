import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const ValuePillarsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const pillars = [
    {
      title: "Corporate Excellence",
      subtitle: "PwC Alumni",
      description: "Bringing Big 4 consulting standards and methodologies to every project.",
      metric: "5+ years in professional services"
    },
    {
      title: "Technical Mastery",
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

  return (
    <section id="value-pillars" className="py-24 px-6 bg-gray-100 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="statement-text text-blue-deep text-center mb-4 font-bold text-2xl md:text-4xl font-sans">
          Why Choose Me
        </h2>
        <button
          className="flex items-center justify-center mx-auto mb-8 transition-transform duration-300"
          aria-label={expanded ? 'Collapse cards' : 'Expand cards'}
          onClick={() => setExpanded((v) => !v)}
        >
          <ChevronDown
            className={`w-8 h-8 text-blue-deep transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`w-full transition-all duration-700 ease-in-out overflow-hidden ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 blue-gradient">
                <CardContent className="p-8">
                  <div className="h-2 w-16 gold-accent-bg mb-6 rounded"></div>
                  <h3 className="text-2xl font-bold mb-2 text-white font-sans">{pillar.title}</h3>
                  <p className="text-white font-semibold mb-4 font-sans">{pillar.subtitle}</p>
                  <p className="text-white mb-6 leading-relaxed font-sans">{pillar.description}</p>
                  <p className="text-sm font-semibold text-white border-t border-white/30 pt-4 font-sans">
                    {pillar.metric}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePillarsSection;
