
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "PDF-to-SQL Pipeline",
    description:
      "Built a Python-based parser to extract tables from unstructured PDFs using pdfplumber and PyMuPDF. Stored structured data in SQL Server, executed queries via SSMS, and displayed results on the terminal for quick validation.",
    tech: ["Python", "Pdfplumber", "PyMuPDF", "Pandas", "SQL Server", "SSMS"],
    color: "primary" as const,
  },
  {
    title: "DRAV-AI",
    description:
      "Developed an AI-based medicinal plant assistance system that identifies plants from images and suggests traditional remedies. Uses ResNet50 for image classification and integrates a chatbot for remedy suggestions.",
    tech: ["Python", "Deep Learning", "ResNet50", "Image Classification", "Chatbot"],
    color: "accent" as const,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world problems, real solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-card-hover"
            >
              {/* Gradient bar */}
              <div
                className={`h-1 w-full ${
                  project.color === "primary" ? "bg-hero-gradient" : "bg-accent"
                }`}
              />

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
