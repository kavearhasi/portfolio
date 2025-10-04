import React from 'react';
import { GraduationCap, Briefcase, Code, Smartphone } from 'lucide-react';

const About = () => {
  const timelineEvents = [
    {
      year: "2024",
      title: "Android Developer Trainee",
      company: "Aximsoft",
      description: "Specializing in modern Android development with Kotlin and Jetpack Compose",
      icon: <Smartphone className="w-5 h-5" />,
      type: "work"
    },
    {
      year: "2023",
      title: "PHP Trainee",
      company: "Mallow Technologies",
      description: "Gained expertise in server-side development and database design",
      icon: <Code className="w-5 h-5" />,
      type: "work"
    },
    {
      year: "2022",
      title: "Bachelor of Technology",
      company: "Karpagam Institute of Technology",
      description: "Information Technology - Building strong foundations in computer science",
      icon: <GraduationCap className="w-5 h-5" />,
      type: "education"
    },
    {
      year: "2021",
      title: "Started Development Journey",
      company: "Self-Learning",
      description: "Began exploring web technologies and programming fundamentals",
      icon: <Code className="w-5 h-5" />,
      type: "milestone"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-6">
            My Journey: From{' '}
            <span className="bg-gradient-to-r from-[#F94800] to-[#FF8A00] bg-clip-text text-transparent">
              Web Foundations
            </span>{' '}
            to Mobile Specialization
          </h2>
        </div>

        {/* Introduction Paragraph */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-[#BDBDBD] leading-relaxed text-center">
            Hello! I'm <span className="text-[#F94800] font-semibold">Kavearhasi Viswanathan</span>, a developer with a deep passion for technology. 
            My journey began in the world of full-stack web development, where I built applications using PHP and Java. 
            As a PHP Trainee at <span className="text-[#FF8A00] font-semibold">Mallow Technologies</span>, I learned the art of server-side logic and database design, 
            skills that gave me a comprehensive understanding of how software systems work from end to end.
            <br /><br />
            While I enjoyed building for the web, I was drawn to the unique challenges and user-centric nature of mobile development. 
            This led me to specialize in Android, and I am currently honing my craft as an Android Developer Trainee at{' '}
            <span className="text-[#F94800] font-semibold">Aximsoft</span>. Today, I apply the rigor of backend development to the art of creating 
            beautiful mobile applications, and I enjoy sharing what I learn along the way with the community on my blog. 
            I hold a Bachelor of Technology in Information Technology from{' '}
            <span className="text-[#FF8A00] font-semibold">Karpagam Institute of Technology</span>.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F94800] via-[#FF8A00] to-[#F94800]"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#F94800] to-[#FF8A00] rounded-full border-4 border-[#0A0A0A] z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="group bg-[#BDBDBD]/5 border border-[#BDBDBD]/20 rounded-lg p-6 hover:border-[#F94800]/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Year Badge */}
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F94800] to-[#FF8A00] text-[#0A0A0A] px-3 py-1 rounded-full text-sm font-bold mb-3">
                      {event.icon}
                      <span>{event.year}</span>
                    </div>

                    {/* Event Details */}
                    <h3 className="text-xl font-bold text-[#F5F5F7] mb-2 group-hover:text-[#F94800] transition-colors">
                      {event.title}
                    </h3>
                    <h4 className="text-[#FF8A00] font-semibold mb-3">
                      {event.company}
                    </h4>
                    <p className="text-[#BDBDBD] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;