
import { Code2, Database, Server, Globe, GitBranch, Container, Cloud, Cog } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", icon: Code2, description: "ES6+, Modern frameworks" },
        { name: "PHP", icon: Server, description: "Laravel, Object-oriented" },
        { name: "Java", icon: Code2, description: "Spring Boot, Enterprise" },
        { name: "C/C++", icon: Code2, description: "System programming" },
        { name: "SQL", icon: Database, description: "Complex queries, optimization" }
      ]
    },
    {
      title: "Backend Frameworks",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Express.js", icon: Server, description: "RESTful APIs, middleware" },
        { name: "Laravel", icon: Globe, description: "MVC, Eloquent ORM" },
        { name: "Spring Boot", icon: Server, description: "Microservices, Security" },
        { name: "Lumen", icon: Globe, description: "Lightweight, fast APIs" },
        { name: "Node.js", icon: Server, description: "Runtime environment" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", icon: Database, description: "Relational database design" },
        { name: "PostgreSQL", icon: Database, description: "Advanced SQL features" },
        { name: "MongoDB", icon: Database, description: "NoSQL, document-based" },
        { name: "AWS", icon: Cloud, description: "EC2, S3, Lambda services" },
        { name: "Docker", icon: Container, description: "Containerization, deployment" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Cog,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", icon: GitBranch, description: "Version control, collaboration" },
        { name: "Jenkins", icon: Cog, description: "CI/CD pipelines" },
        { name: "REST API", icon: Globe, description: "API design, documentation" },
        { name: "Microservices", icon: Server, description: "Distributed architecture" },
        { name: "Linux/Ubuntu", icon: Cog, description: "Server administration" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to build robust backend solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
                
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div 
                        key={skillIndex}
                        className="group/skill flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer hover:shadow-md border border-transparent hover:border-gray-200"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 group-hover/skill:scale-110 transition-transform duration-300`}>
                          <SkillIcon className="w-5 h-5 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover/skill:text-blue-600 transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-600 group-hover/skill:text-gray-700 transition-colors duration-300">
                            {skill.description}
                          </p>
                        </div>
                        
                        <div className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional: Add floating elements for more interactivity */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[Code2, Database, Server, Cloud].map((Icon, index) => (
                <div 
                  key={index}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center border-2 border-white"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
            <span className="text-gray-600 font-medium">Always learning and growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
