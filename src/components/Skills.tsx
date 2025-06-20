
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "PHP", "Java", "C", "C++", "SQL"]
    },
    {
      title: "Backend Frameworks", 
      skills: ["Express.js", "Laravel", "Lumen", "Spring Boot", "Node.js"]
    },
    {
      title: "Database Management",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS Lambda", "AWS EC2", "AWS S3", "AWS RDS", "Docker", "Jenkins"]
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Postman", "JMeter"]
    },
    {
      title: "Other Technologies",
      skills: ["REST API", "AMQ Stream", "Red Hat OpenShift", "AMQ Broker", "HTML", "CSS", "jQuery"]
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
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-700 text-sm">
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
