
import { Calendar, MapPin, Building } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "PT. Alfa Rekacipta Kreasi (Weekend Inc)",
      period: "March 2023 - Present",
      location: "Jakarta",
      description: "Responsible for Maintaining (designing, implementing, and optimizing performance) API on the backend of ayo src and ayo qoncierge e-commerce applications using Lumen/Laravel, Lambda Func. (Javascript) and MySQL.",
      achievements: [
        "Designed and implemented backend architecture using microservices approach to increase scalability and flexibility of the application",
        "Developed an AWS Lambda function (using JavaScript) to trigger an AWS Batch job (Laravel) that inserts data into the database upon the upload of a Parquet file to a specific directory in an S3 bucket",
        "Reduced API response time and API resource usage by performing database query optimization and Server-Side Processing Optimization (asynchronous or job queues)",
        "Built and integrated the Call feature in the Ayo Qoncierge application, collaborating with Wiz to enable real-time call services",
        "Collaborated with DevOps team for CI/CD configuration using Jenkins, Docker to deploy applications in an isolated environment, source code management using Bitbucket",
        "Collaborated with DevOps team to deploy AWS services such as EC2, S3, and RDS for cloud infrastructure to improve application performance and resilience",
        "Documented each developed backend on Google Spreadsheet and Postman",
        "Tested the developed backend using Postman and JMeter"
      ],
      tech: ["Laravel", "Lumen", "MySQL", "AWS Lambda", "JavaScript", "AWS Batch", "Docker", "Jenkins", "Bitbucket", "AWS EC2", "AWS S3", "AWS RDS", "Postman", "JMeter"]
    },
    {
      title: "Technical Consultant Analyst",
      company: "PT Mitra Integrasi Informatika (IT Solution Company)",
      period: "October 2021 - October 2022", 
      location: "Jakarta",
      description: "Developed backend application for PT Indosat Tbk that based on Express JS (Nodejs Framework), Knex JS and PostgreSQL. Backend is developed using a monolithic architecture and deployed on an on premise server using PM2.",
      achievements: [
        "Developed backend applications for telecommunication company (PT Indosat Tbk) using Express.js, Knex.js and PostgreSQL",
        "Worked on application development, deployed application and supported clients during UAT process of applications on the Indonesian stock exchange (IDX)",
        "Worked on projects that using OCP RedHat, RedHat AMQ Broker, Java SpringBoot and PostgreSQL",
        "Deployed applications using PM2 on premise servers with monolithic architecture"
      ],
      tech: ["Express.js", "Node.js", "Knex.js", "PostgreSQL", "Java SpringBoot", "RedHat OpenShift", "AMQ Broker", "PM2"]
    },
    {
      title: "Backend Developer Intern",
      company: "PT Pelita Transfer Nusantara (Transfree.id)",
      period: "May 2021 - August 2021",
      location: "Jakarta",
      description: "Involved in projects that utilize Javascript (Nodejs Framework) and MongoDB.",
      achievements: [
        "Resolved bugs and added features on Transfree's backend service", 
        "Worked with Node.js and MongoDB stack for fintech solutions",
        "Gained hands-on experience in financial technology industry"
      ],
      tech: ["Node.js", "JavaScript", "MongoDB", "REST API"]
    },
    {
      title: "Teaching Assistant for Web Development Course",
      company: "Institut Teknologi Del",
      period: "May 2021 - August 2021",
      location: "Laguboti",
      description: "Guided practical session for web development using PHP, such as Laravel framework, YII2 framework.",
      achievements: [
        "Guided practical sessions for web development using PHP",
        "Taught Laravel framework and YII2 framework to students",
        "Helped lecturers check and assess student exams",
        "Mentored students in web development best practices and frameworks"
      ],
      tech: ["PHP", "Laravel", "YII2", "Web Development", "HTML", "CSS"]
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
            My professional journey as a Backend Engineer with 3 years of experience
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
