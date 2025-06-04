
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="./86977474-cd02-4826-82f6-9d6b31eafa2a.png"
                alt="Helmuth Tampubolon" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl transform rotate-6 opacity-20"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Backend Developer & System Architect
            </h3>
            
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Passionate backend developer with expertise in building scalable, robust server-side applications. 
                I specialize in creating efficient APIs, managing databases, and implementing secure authentication systems.
              </p>
              
              <p>
                With experience in multiple programming languages and frameworks, I focus on writing clean, 
                maintainable code that follows industry best practices and design patterns.
              </p>
              
              <p>
                I enjoy solving complex problems and optimizing system performance to deliver exceptional 
                user experiences through reliable backend infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              {[
                'Problem Solving',
                'Team Collaboration', 
                'Code Review',
                'System Design',
                'Performance Optimization',
                'Security Best Practices'
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
