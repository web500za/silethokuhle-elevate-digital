
import { Card, CardContent } from "@/components/ui/card";

const ValuePillarsSection = () => {
  const pillars = [
    {
      title: "Strategic Foundation",
      subtitle: "PwC-Trained Analysis",
      description: "I don't just execute tasks. I analyze, strategize, and optimize before I act.",
      metric: "Fortune 500 organizational design experience"
    },
    {
      title: "Technical Edge", 
      subtitle: "AWS + Coding Mastery",
      description: "From cloud architecture to Python automation, I speak both business and technology fluently.",
      metric: "AWS certified with hands-on development skills"
    },
    {
      title: "Operational Excellence",
      subtitle: "Precision Execution",
      description: "Every project delivered with consulting-grade quality and attention to detail.",
      metric: "Zero missed deadlines, premium standards"
    }
  ];

  return (
    <section className="py-24 px-6 cool-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="statement-text text-charcoal text-center mb-16">
          Three Pillars of Unprecedented Value
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 navy-deep text-soft-white">
              <CardContent className="p-8">
                <div className="h-2 w-16 teal-accent mb-6 rounded"></div>
                <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-white/80 font-medium mb-4">{pillar.subtitle}</p>
                <p className="text-white/90 mb-6 leading-relaxed">{pillar.description}</p>
                <p className="text-sm font-medium text-white/70 border-t border-white/20 pt-4">
                  {pillar.metric}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillarsSection;
