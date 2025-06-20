
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
                src="./lovable-uploads/86977474-cd02-4826-82f6-9d6b31eafa2a.png"
                alt="Helmuth Simon Tampubolon" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl transform rotate-6 opacity-20"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Backend Engineer & System Architect
            </h3>
            
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                A Backend Engineer with 3 years of experience in application development and database management. 
                Proficient in programming languages such as JavaScript, PHP, and Java, and experienced with 
                frameworks like Express.js, Laravel, and Spring Boot.
              </p>
              
              <p>
                Enthusiastic about roles requiring analytical and problem-solving skills, with a strong commitment 
                to continuous learning in backend development. Experienced in team-based projects and effective 
                communication, having collaborated with cross-functional teams to deliver scalable and high-performance applications.
              </p>
              
              <p>
                Graduate from Institut Teknologi Del (2017-2021) with Software Engineering Technology major (GPA: 3.22). 
                Final project: "Travel Route Recommendation System Using Genetic Algorithm".
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">3</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2"><strong>Birth Date:</strong> 12th August 1999</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> Jakarta, Indonesia</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Phone:</strong> (+62) 8-126-232-2051</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Email:</strong> helmuths.tampubolon@gmail.com</p>
              <p className="text-sm text-gray-600"><strong>Languages:</strong> Indonesian (Expert), English (Intermediate)</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              {[
                'Communication',
                'Teamwork', 
                'Analysis & Problem Solving',
                'System Design',
                'Performance Optimization',
                'Microservices Architecture'
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
