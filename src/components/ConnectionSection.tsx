import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full"
            required
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full"
            required
          />
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full min-h-[150px]"
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full bg-blue-deep text-white hover:bg-blue-deep/90">
        Send Message
      </Button>
    </form>
  );
};

const ConnectionSection = () => {
  return (
    <section className="py-24 px-6 blue-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="statement-text text-white mb-8">
          Ready for support that thinks ahead?
        </h2>
        
        <p className="body-large text-white mb-12 max-w-2xl mx-auto">
          Stop settling for task execution. Start experiencing strategic transformation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-white text-blue-deep hover:bg-white/90 font-light px-8 py-4 text-lg"
              >
                Contact Me
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-light text-blue-deep mb-4">Get in Touch</DialogTitle>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
          <Button 
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-deep font-light px-8 py-4 text-lg transition-all"
          >
            Download CV
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/30">
          <p className="text-white/90 text-sm">
            Johannesburg-based • Global mindset • Youth mentor • Change catalyst
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
