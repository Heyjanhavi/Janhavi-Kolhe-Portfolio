
const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "Java", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Schema Design", "Querying", "Data Optimization"],
  },
  {
    title: "Technical Areas",
    skills: ["Database Management", "Cloud Fundamentals (AWS)"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Jupyter Notebook", "VS Code", "Git"],
  },
  {
    title: "Creative Work",
    skills: ["Digital Art", "Art Commissions", "Canva", "Adobe Fresco"],
  },
  {
    title: "Soft Skills",
    skills: ["Teamwork", "Event Management", "Communication", "Problem Solving"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground text-lg">
            A mix of technical depth and creative flair.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-card-hover"
            >
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border group-hover:border-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
