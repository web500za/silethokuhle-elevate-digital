
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen navy-deep flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Credential Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="border-white/30 text-soft-white hover:bg-white/10 px-4 py-2 text-sm font-medium">
            PwC Alumni
          </Badge>
          <Badge variant="outline" className="border-white/30 text-soft-white hover:bg-white/10 px-4 py-2 text-sm font-medium">
            AWS Certified
          </Badge>
          <Badge variant="outline" className="border-white/30 text-soft-white hover:bg-white/10 px-4 py-2 text-sm font-medium">
            Virtual Expert
          </Badge>
        </div>

        {/* Hero Name */}
        <h1 className="hero-text text-soft-white mb-6 tracking-tight">
          SILETHOKUHLE
          <br />
          MNCUBE
        </h1>

        {/* Tagline */}
        <p className="statement-text text-soft-white/90 mb-8 max-w-4xl mx-auto">
          From PwC Strategy to Python Scripts:
          <br />
          <span className="text-white">I Transform How Business Gets Done</span>
        </p>

        {/* Subtitle */}
        <p className="body-large text-soft-white/80 max-w-2xl mx-auto">
          Management Consultant × Technical Architect × Strategic Partner
        </p>

        {/* Teal accent line */}
        <div className="w-32 h-1 teal-accent mx-auto mt-12 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
