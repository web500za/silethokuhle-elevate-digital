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
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <Button type="submit" className="w-full bg-blue-deep text-white hover:bg-blue-deep/90 py-3 text-base rounded-lg font-semibold">
        Send Message
      </Button>
    </form>
  );
};

const ConnectionSection = () => {
  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-8 blue-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="statement-text text-white mb-8 font-bold text-2xl md:text-4xl">
          Ready for support that thinks ahead?
        </h2>
        <p className="body-large text-white mb-12 max-w-2xl mx-auto text-base md:text-lg font-semibold">
          Stop settling for task execution. Start experiencing strategic transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center my-8 sm:my-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="w-full sm:w-auto py-4 px-8 text-base sm:text-lg rounded-lg font-semibold"
              >
                Contact Me
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] px-4 sm:px-8 py-8 overflow-y-auto max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-blue-deep mb-4">Get in Touch</DialogTitle>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
          <a
            href="/static/Silethokuhle-Mncube-CV-compressed_compressed.pdf"
            download
            className="w-full sm:w-auto py-4 px-8 text-base sm:text-lg rounded-lg font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-deep transition-all flex items-center justify-center"
            style={{ minWidth: '150px' }}
          >
            Download CV
          </a>
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
