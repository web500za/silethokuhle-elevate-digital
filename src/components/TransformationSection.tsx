
import { Card, CardContent } from "@/components/ui/card";

const TransformationSection = () => {
  const transformations = [
    {
      title: "Strategic Operations Redesign",
      challenge: "CEO drowning in operational chaos",
      solution: "Architected new workflow systems + automated reporting",
      impact: "40% time savings, 100% visibility increase"
    },
    {
      title: "Technical Infrastructure Migration",
      challenge: "Startup scaling without proper systems",
      solution: "Designed AWS infrastructure + implemented monitoring",
      impact: "Zero downtime, 60% cost reduction"
    },
    {
      title: "Executive Decision Support",
      challenge: "Board lacking strategic data insights",
      solution: "Built automated dashboards + strategic analysis framework",
      impact: "Real-time metrics, data-driven decisions"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="statement-text text-charcoal text-center mb-4">
          Signature Transformations
        </h2>
        <p className="text-xl text-charcoal/70 text-center mb-16 max-w-3xl mx-auto">
          Not just support. Strategic elevation that changes how businesses operate.
        </p>
        
        <div className="space-y-8">
          {transformations.map((transformation, index) => (
            <Card key={index} className="border-l-4 border-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">{transformation.title}</h3>
                    <p className="text-charcoal/60 text-sm font-medium">THE CHALLENGE</p>
                    <p className="text-charcoal/80">{transformation.challenge}</p>
                  </div>
                  <div>
                    <p className="text-primary text-sm font-medium mb-2">MY APPROACH</p>
                    <p className="text-charcoal/80">{transformation.solution}</p>
                  </div>
                  <div>
                    <p className="text-primary text-sm font-medium mb-2">BUSINESS IMPACT</p>
                    <p className="text-charcoal font-medium">{transformation.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
