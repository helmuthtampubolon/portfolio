
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Helmuth Simon
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Backend Engineer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            2.5 years of experience in application development and database management. 
            Proficient in JavaScript, PHP, Java with frameworks like Express.js, Laravel, and Spring Boot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('#projects')}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/helmuthtampubolon" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/helmuth-simon-tampubolon-18935717a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:helmuths.tampubolon@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('#about')}
            className="animate-bounce text-white hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
