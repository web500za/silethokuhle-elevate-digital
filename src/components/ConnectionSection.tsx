import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Download, Calendar, MessageSquare, Star } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send to your backend/email service
    console.log("Form submitted:", formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-blue-deep mb-2">Message Sent!</h3>
        <p className="text-gray-600">I'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Your Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Input
            placeholder="Company (Optional)"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Textarea
            placeholder="Tell me about your project or how I can help *"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full min-h-[120px]"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-blue-deep text-white hover:bg-blue-deep/90 py-3 text-base rounded-lg font-semibold transition-all duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending...
          </div>
        ) : (
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            Send Message
          </div>
        )}
      </Button>
    </form>
  );
};

const ConnectionSection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:silethokuhle@example.com?subject=Business Transformation Inquiry&body=Hi Silethokuhle,%0D%0A%0D%0AI\'d like to discuss how you can help transform my business through strategic automation and process optimization.%0D%0A%0D%0A[Tell me about your project here]%0D%0A%0D%0ABest regards,';
  };

  return (
    <section id="connection-section" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(215 35% 15%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="statement-text text-blue-deep mb-6 font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Let's discuss how strategic automation and process optimization can elevate your operations. 
            From PwC-level consulting to hands-on implementation.
          </p>
        </div>

        {/* Social Proof */}
        <div className="mb-16 md:mb-20 p-8 md:p-10 bg-gradient-to-r from-blue-deep/5 to-blue-deep/10 rounded-2xl border border-blue-deep/10 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-deep rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">"</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed mb-3">
                "Silethokuhle transformed our manual processes into automated workflows, saving us 15+ hours per week."
              </p>
              <p className="text-blue-deep font-semibold text-sm md:text-base">
                — Previous Client
              </p>
            </div>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 md:mb-20">
          <button
            onClick={handleContactClick}
            className="w-full sm:w-auto flex-1 py-5 px-8 text-lg md:text-xl rounded-xl font-semibold bg-yellow-400 hover:bg-yellow-300 text-blue-deep transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6 mr-3" />
            Start a Conversation
          </button>
          
          <a
            href="/Silethokuhle-Mncube-CV-compressed_compressed.pdf"
            download
            className="w-full sm:w-auto flex-1 py-5 px-8 text-lg md:text-xl rounded-xl font-semibold border-2 border-blue-deep text-blue-deep bg-transparent hover:bg-blue-deep hover:text-white transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-sm hover:shadow-md"
            style={{ minWidth: '180px' }}
          >
            <Download className="w-5 h-5 md:w-6 md:h-6 mr-3" />
            Download CV
          </a>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-base md:text-lg mb-2 font-medium">
            Johannesburg-based • Global mindset • Youth mentor • Change catalyst
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Available for remote collaboration worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
