
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "SSGMCE, Shegaon",
    degree: "B.E. in Computer Science & Engineering",
    year: "2022 – 2026",
    score: "CGPA: 7.00",
  },
  {
    school: "Dr. Ambedkar Junior College, Nagpur",
    degree: "HSC, Maharashtra",
    year: "2021 – 2022",
    score: "12th: 78.85%",
  },
  {
    school: "Lions Dnyanpeeth, Khamgaon",
    degree: "SSC, Maharashtra",
    year: "2019 – 2020",
    score: "10th: 96.40%",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-6">
            Education & Background
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            I'm a Computer Science student passionate about building practical software solutions — 
            from data pipelines and AI systems to digital art. I love turning complex problems 
            into clean, working code.
          </p>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-bold text-foreground">{edu.school}</h3>
                      <span className="text-sm text-accent font-semibold">{edu.score}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{edu.degree}</p>
                    <p className="text-muted-foreground/60 text-xs mt-1">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
