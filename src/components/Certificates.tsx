
import { Award, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Belajar Prinsip Pemrograman SOLID",
      issuer: "Dicoding",
      year: "2021",
      type: "Course Completion"
    },
    {
      title: "jQuery for Beginners",
      issuer: "Udemy and YouAccel Training",
      year: "2021",
      type: "Course Completion"
    },
    {
      title: "Project Development Using JAVA for Beginners",
      issuer: "Udemy and Mammoth Interactive",
      year: "2021",
      type: "Course Completion"
    },
    {
      title: "PKM 5 Bidang - Aplikasi Transaksi Jual Beli Sampah Berbasis Android di Kabupaten Toba Samosir",
      issuer: "Government Funding Program",
      year: "2020",
      type: "Achievement"
    },
    {
      title: "Himasti Coding Challenge - Finalist",
      issuer: "Del Institute of Technology, Laguboti",
      year: "2020",
      type: "Competition"
    },
    {
      title: "ICPC Binus 2019 - Regional Contestant",
      issuer: "ICPC Programming Contest",
      year: "2019",
      type: "Competition"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Course Completion':
        return 'bg-blue-100 text-blue-700';
      case 'Achievement':
        return 'bg-green-100 text-green-700';
      case 'Competition':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and academic achievements throughout my journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                    <Award size={24} className="text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(cert.type)}`}>
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {cert.title}
                </h3>

                <div className="space-y-2 text-sm text-gray-600">
                  <p className="font-medium">{cert.issuer}</p>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    {cert.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
