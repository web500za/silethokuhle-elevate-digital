import { Card, CardContent } from "@/components/ui/card";

const ValuePillarsSection = () => {
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
    <section id="value-pillars" className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="statement-text text-blue-deep text-center mb-16">
          Why Choose Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 blue-gradient">
              <CardContent className="p-8">
                <div className="h-2 w-16 gold-accent-bg mb-6 rounded"></div>
                <h3 className="text-2xl font-light mb-2 text-white">{pillar.title}</h3>
                <p className="text-white font-light mb-4">{pillar.subtitle}</p>
                <p className="text-white mb-6 leading-relaxed">{pillar.description}</p>
                <p className="text-sm font-light text-white border-t border-white/30 pt-4">
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
