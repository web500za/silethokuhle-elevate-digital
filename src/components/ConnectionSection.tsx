
import { Button } from "@/components/ui/button";

const ConnectionSection = () => {
  return (
    <section className="py-24 px-6 navy-deep">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="statement-text text-soft-white mb-8">
          Ready for support that thinks ahead?
        </h2>
        
        <p className="body-large text-soft-white/80 mb-12 max-w-2xl mx-auto">
          Stop settling for task execution. Start experiencing strategic transformation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-charcoal hover:bg-white/90 font-medium px-8 py-4 text-lg"
          >
            Start The Conversation
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-soft-white hover:bg-teal hover:border-teal font-medium px-8 py-4 text-lg"
          >
            View My Process
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-soft-white/60 text-sm">
            Johannesburg-based • Global mindset • Youth mentor • Change catalyst
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
