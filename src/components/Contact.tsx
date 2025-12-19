import { Mail, MapPin, Send } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>e.anwari885@gmail.com</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Munich, Germany</span>
            </div>
          </div>

          <a href="mailto:e.anwari885@gamil.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105 animate-glow">
            <Send className="w-5 h-5" />
            Send me an Email
          </a>
        </div>
      </div>
    </section>;
};
export default Contact;