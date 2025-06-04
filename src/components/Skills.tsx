
import { Code2, Database, Server, Globe, GitBranch, Container, Cloud, Cog, Terminal, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      skills: [
        { name: "JavaScript", icon: Code2, color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
        { name: "PHP", icon: Globe, color: "bg-purple-100 text-purple-800 border-purple-200" },
        { name: "Java", icon: Code2, color: "bg-orange-100 text-orange-800 border-orange-200" },
        { name: "C/C++", icon: Terminal, color: "bg-blue-100 text-blue-800 border-blue-200" },
        { name: "SQL", icon: Database, color: "bg-green-100 text-green-800 border-green-200" }
      ]
    },
    {
      title: "Backend Frameworks",
      icon: Server,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      skills: [
        { name: "Express.js", icon: Server, color: "bg-gray-100 text-gray-800 border-gray-200" },
        { name: "Laravel", icon: Globe, color: "bg-red-100 text-red-800 border-red-200" },
        { name: "Spring Boot", icon: Server, color: "bg-green-100 text-green-800 border-green-200" },
        { name: "Lumen", icon: Globe, color: "bg-orange-100 text-orange-800 border-orange-200" },
        { name: "Node.js", icon: Settings, color: "bg-lime-100 text-lime-800 border-lime-200" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      skills: [
        { name: "MySQL", icon: Database, color: "bg-blue-100 text-blue-800 border-blue-200" },
        { name: "PostgreSQL", icon: Database, color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
        { name: "MongoDB", icon: Database, color: "bg-green-100 text-green-800 border-green-200" },
        { name: "AWS", icon: Cloud, color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
        { name: "Docker", icon: Container, color: "bg-cyan-100 text-cyan-800 border-cyan-200" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Cog,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      skills: [
        { name: "Git/GitHub", icon: GitBranch, color: "bg-gray-100 text-gray-800 border-gray-200" },
        { name: "Jenkins", icon: Settings, color: "bg-blue-100 text-blue-800 border-blue-200" },
        { name: "REST API", icon: Globe, color: "bg-green-100 text-green-800 border-green-200" },
        { name: "Microservices", icon: Server, color: "bg-purple-100 text-purple-800 border-purple-200" },
        { name: "Linux/Ubuntu", icon: Terminal, color: "bg-orange-100 text-orange-800 border-orange-200" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header */}
                <div className="relative z-10 flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div 
                        key={skillIndex}
                        className={`flex items-center p-4 rounded-xl border-2 ${skill.color} hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                      >
                        <SkillIcon className="w-6 h-6 mr-3 flex-shrink-0" />
                        <span className="font-semibold text-sm">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Always learning and exploring new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
