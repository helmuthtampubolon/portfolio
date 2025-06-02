
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Menulis kode yang bersih, mudah dibaca, dan maintainable"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Fast Performance",
      description: "Mengoptimalkan performa untuk pengalaman pengguna terbaik"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "User Experience",
      description: "Fokus pada desain yang user-friendly dan intuitive"
    },
    {
      icon: <Coffee className="w-8 h-8 text-brown-600" />,
      title: "Continuous Learning",
      description: "Selalu mengikuti perkembangan teknologi terbaru"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Frontend Developer dengan Passion untuk Inovasi
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Saya adalah seorang Frontend Developer dengan pengalaman dalam menciptakan 
              aplikasi web yang modern dan responsif. Dengan keahlian dalam React, TypeScript, 
              dan teknologi web terkini, saya selalu berusaha memberikan solusi terbaik untuk 
              setiap project.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Saya percaya bahwa teknologi harus mudah digunakan dan memberikan value nyata 
              bagi pengguna. Oleh karena itu, saya selalu fokus pada user experience dan 
              performa aplikasi.
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
