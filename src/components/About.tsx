
import { Code, Coffee, Database, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable backend solutions"
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-600" />,
      title: "Database Expert",
      description: "Experienced with SQL and NoSQL database management"
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: "Performance",
      description: "Optimizing API response time and resource usage"
    },
    {
      icon: <Coffee className="w-8 h-8 text-orange-600" />,
      title: "Problem Solver",
      description: "Analytical mindset with strong troubleshooting skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Backend Engineer with Passion for Innovation
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a Backend Engineer with 2.5 years of experience in application development 
              and database management. Proficient in programming languages such as JavaScript, 
              PHP, and Java, with expertise in frameworks like Express.js, Laravel, and Spring Boot.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Currently working at PT. Alfa Rekacipta Kreasi (Weekend Inc) as a Backend Developer, 
              where I maintain and optimize APIs for e-commerce applications using microservices 
              architecture and cloud technologies like AWS.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm enthusiastic about roles requiring analytical and problem-solving skills, 
              while continuously learning new technologies and best practices in backend development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
