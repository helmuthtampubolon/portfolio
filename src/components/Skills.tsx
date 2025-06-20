
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "PHP", "JavaScript"]
    },
    {
      title: "Database Management System SQL", 
      skills: ["MySQL", "SQL Server", "PostgreSQL"]
    },
    {
      title: "Application Framework",
      skills: ["Node/Express JS", "Java SpringBoot", "Laravel"]
    },
    {
      title: "Database Management System NoSQL",
      skills: ["MongoDB"]
    },
    {
      title: "Development Tools & Technologies",
      skills: ["AMQ Stream", "REST API", "Git", "GitLab", "GitHub", "Jira", "Bitbucket", "Jenkins", "Docker"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS"]
    },
    {
      title: "Software & Operating Systems",
      skills: ["Microsoft Excel", "Microsoft Word", "Windows", "Ubuntu"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Analysis and Problem Solving"]
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
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-700 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
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
