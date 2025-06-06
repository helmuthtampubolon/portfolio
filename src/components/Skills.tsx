
import { Code2, Database, Server, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C/C++", "SQL"]
    },
    {
      title: "Databases", 
      skills: ["SQLite", "PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Other",
      skills: ["HTML", "CSS", "SASS", "SCSS", "Less", "Stylus", "EJS", "Jinja2", "Pug"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Next", "Gulp", "Express", "Flask", "Quart", "Laravel", "Spring Boot", "Node.js"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            #skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
