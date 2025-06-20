
import { Calendar, MapPin, Users } from 'lucide-react';

const OrganizationExperience = () => {
  const organizations = [
    {
      title: "Member of Institutional Division",
      organization: "Majelis Permusyawaratan Mahasiswa (MPM) IT Del",
      period: "2018 - 2019",
      location: "Laguboti",
      description: "Active member of the institutional division responsible for overseeing and coordinating democratic processes within the student body.",
      achievements: [
        "Formed and supervised KPU (Komisi Pemilihan Umum) IT Del for electing new BEM (Badan Eksekutif Mahasiswa) leaders",
        "Inaugurated the core board of BEM and MPM 2019/2020 and dissolved 2018/2019",
        "Participated in institutional governance and student representation activities",
        "Collaborated with various student organizations to ensure effective campus democracy"
      ]
    }
  ];

  return (
    <section id="organization" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Organization Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leadership and organizational involvement during my academic journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {organizations.map((org, index) => (
            <div key={index} className="relative mb-12 last:mb-0">              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-16 bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{org.title}</h3>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <Users size={16} className="mr-2" />
                      {org.organization}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar size={14} className="mr-2" />
                      {org.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {org.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{org.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Contributions:</h4>
                  <ul className="space-y-1">
                    {org.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationExperience;
