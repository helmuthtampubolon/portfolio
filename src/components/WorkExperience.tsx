
import { Calendar, MapPin, Building } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "PT. Alfa Rekacipta Kreasi (Weekend Inc)",
      period: "March 2023 - Present",
      location: "Jakarta",
      description: "Responsible for maintaining API backend for ayo src and ayo qoncierge e-commerce applications using Lumen/Laravel and MySQL with microservices architecture.",
      achievements: [
        "Designed and implemented microservices architecture for scalability",
        "Developed AWS Lambda functions for automated data processing",
        "Optimized database queries reducing API response time",
        "Collaborated with DevOps for CI/CD using Jenkins and Docker"
      ],
      tech: ["Laravel", "MySQL", "AWS Lambda", "Docker", "Jenkins", "Microservices"]
    },
    {
      title: "Technical Consultant Analyst",
      company: "PT Mitra Integrasi Informatika",
      period: "October 2021 - October 2022", 
      location: "Jakarta",
      description: "Developed backend applications for PT Indosat Tbk using Express.js, Knex.js and PostgreSQL with monolithic architecture.",
      achievements: [
        "Developed backend applications for telecommunication company",
        "Worked on Indonesian Stock Exchange (IDX) projects",
        "Supported clients during UAT process",
        "Deployed applications using PM2 on premise servers"
      ],
      tech: ["Express.js", "PostgreSQL", "Java Spring Boot", "Red Hat OpenShift", "AMQ Broker"]
    },
    {
      title: "Backend Developer Intern",
      company: "PT Pelita Transfer Nusantara (Transfree.id)",
      period: "May 2021 - August 2021",
      location: "Jakarta",
      description: "Involved in projects utilizing JavaScript (Node.js Framework) and MongoDB for financial transfer services.",
      achievements: [
        "Resolved bugs in existing backend services",
        "Added new features to Transfree's backend system",
        "Worked with Node.js and MongoDB stack",
        "Gained experience in fintech industry"
      ],
      tech: ["Node.js", "JavaScript", "MongoDB", "REST API"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey as a Backend Engineer with 2.5+ years of experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-16 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <Building size={16} className="mr-2" />
                      {experience.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar size={14} className="mr-2" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{experience.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
                      {tech}
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

export default WorkExperience;
