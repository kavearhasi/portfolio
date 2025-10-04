import React from 'react';
import { Smartphone, Globe, Database, Code, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Material Design", "MVVM Architecture"],
      color: "from-[#F94800] to-[#FF8A00]"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
      color: "from-[#FF8A00] to-[#F94800]"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "Room Database", "SQLite", "RESTful APIs", "JSON", "Firebase"],
      color: "from-[#F94800] to-[#FF8A00]"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Kotlin", "Java", "PHP", "JavaScript", "SQL", "XML"],
      color: "from-[#FF8A00] to-[#F94800]"
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Android Studio", "Git", "Gradle", "Retrofit", "Coroutines", "Dagger Hilt"],
      color: "from-[#F94800] to-[#FF8A00]"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Problem Solving", "Team Collaboration", "Technical Writing", "Code Review", "Mentoring", "Agile Development"],
      color: "from-[#FF8A00] to-[#F94800]"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-6">
            My Blueprint:{' '}
            <span className="bg-gradient-to-r from-[#F94800] to-[#FF8A00] bg-clip-text text-transparent">
              Tools & Philosophy
            </span>
          </h2>
          <p className="text-xl text-[#BDBDBD] max-w-4xl mx-auto leading-relaxed">
            I believe that the best products are born from a commitment to both the user and the craft. 
            My development philosophy is centered on three core principles: writing{' '}
            <span className="text-[#F94800] font-semibold">clean, maintainable code</span>, prioritizing an{' '}
            <span className="text-[#FF8A00] font-semibold">intuitive user experience</span>, and embracing{' '}
            <span className="text-[#F94800] font-semibold">continuous learning</span>.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-[#BDBDBD]/5 border border-[#BDBDBD]/20 rounded-lg p-6 hover:border-[#F94800]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                  {React.cloneElement(category.icon, { className: "w-6 h-6 text-[#0A0A0A]" })}
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F7] group-hover:text-[#F94800] transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 bg-[#BDBDBD]/5 rounded-lg border border-[#BDBDBD]/10 hover:border-[#F94800]/30 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#F94800] to-[#FF8A00] rounded-full"></div>
                    <span className="text-[#BDBDBD] group-hover:text-[#F5F5F7] transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <div className="bg-[#BDBDBD]/5 border border-[#BDBDBD]/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#F5F5F7] mb-6">
              My Development Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F94800] to-[#FF8A00] rounded-lg flex items-center justify-center mx-auto">
                  <Code className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <h4 className="text-lg font-semibold text-[#F94800]">Clean Code</h4>
                <p className="text-[#BDBDBD] text-sm leading-relaxed">
                  Writing maintainable, readable code that stands the test of time and scales with growing requirements.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF8A00] to-[#F94800] rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <h4 className="text-lg font-semibold text-[#FF8A00]">User-Centric</h4>
                <p className="text-[#BDBDBD] text-sm leading-relaxed">
                  Prioritizing intuitive user experiences that solve real problems and delight users at every interaction.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F94800] to-[#FF8A00] rounded-lg flex items-center justify-center mx-auto">
                  <Wrench className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <h4 className="text-lg font-semibold text-[#F94800]">Continuous Learning</h4>
                <p className="text-[#BDBDBD] text-sm leading-relaxed">
                  Staying current with emerging technologies and best practices to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;