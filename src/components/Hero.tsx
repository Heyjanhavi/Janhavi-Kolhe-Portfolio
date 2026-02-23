
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-up leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Janhavi</span>
            <br />
            <span className="text-foreground">Kolhe</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in leading-relaxed">
            CSE student at SSGMCE Shegaon · Python developer · Digital artist · 
            Building things that blend code and creativity.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-up">
            <a
              href="#projects"
              className="h-12 px-8 rounded-lg bg-hero-gradient text-primary-foreground font-semibold flex items-center justify-center hover:opacity-90 transition-opacity gap-2"
            >
              View Projects
            </a>
            <a
              href="/Janhavi_Kolhe_Resume.pdf"
              target="_blank"
              className="h-12 px-8 rounded-lg border border-border text-foreground font-semibold flex items-center justify-center hover:bg-secondary transition-colors gap-2"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 animate-fade-in">
            <a href="https://github.com/Heyjanhavi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:kolhejnhvi@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
