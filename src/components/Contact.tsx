import React from 'react';
import { Mail, Linkedin, Github, Twitter, ExternalLink, MessageCircle } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kavearhasi-v/",
      icon: <Linkedin className="w-6 h-6" />,
      description: "Professional networking and career updates",
      color: "hover:text-[#0077B5]"
    },
    {
      name: "GitHub",
      url: "https://github.com/kavearhasi",
      icon: <Github className="w-6 h-6" />,
      description: "Open source projects and code repositories",
      color: "hover:text-[#F5F5F7]"
    },
    {
      name: "dev.to",
      url: "https://dev.to/kavearhasi_viswanathan",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Technical articles and blog posts",
      color: "hover:text-[#0A0A0A]"
    },
    {
      name: "Twitter",
      url: "https://x.com/kavearhasi_v",
      icon: <Twitter className="w-6 h-6" />,
      description: "Tech insights and community engagement",
      color: "hover:text-[#1DA1F2]"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-6">
            Let's Create{' '}
            <span className="bg-gradient-to-r from-[#F94800] to-[#FF8A00] bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>
          <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto leading-relaxed">
            I am passionate about leveraging technology to solve interesting problems and am always open to 
            discussing new ideas, collaborating on innovative projects, or exploring the future of mobile technology.
            <br /><br />
            If my work and philosophy resonate with you, I would be delighted to connect.
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          {/* Email Section */}
          <div className="text-center mb-12">
            <div className="bg-[#BDBDBD]/5 border border-[#BDBDBD]/20 rounded-lg p-8 hover:border-[#F94800]/50 transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-[#F94800] to-[#FF8A00] rounded-lg">
                  <Mail className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F5F5F7]">Get In Touch</h3>
              </div>
              <a
                href="mailto:kavearhasiv@gmail.com"
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F94800] to-[#FF8A00] bg-clip-text text-transparent hover:from-[#FF8A00] hover:to-[#F94800] transition-all duration-300"
              >
                kavearhasiv@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#F5F5F7] text-center mb-8">
              Professional Profiles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#BDBDBD]/5 border border-[#BDBDBD]/20 rounded-lg p-6 hover:border-[#F94800]/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-[#F94800] to-[#FF8A00] rounded-lg group-hover:from-[#FF8A00] group-hover:to-[#F94800] transition-all duration-300">
                      {React.cloneElement(link.icon, { className: "w-6 h-6 text-[#0A0A0A]" })}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-lg font-bold text-[#F5F5F7] group-hover:text-[#F94800] transition-colors">
                          {link.name}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-[#BDBDBD] group-hover:text-[#F94800] transition-colors" />
                      </div>
                      <p className="text-[#BDBDBD] text-sm mt-1">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#F94800]/10 to-[#FF8A00]/10 border border-[#F94800]/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-[#F5F5F7] mb-4">
                Ready to Start a Conversation?
              </h3>
              <p className="text-[#BDBDBD] mb-6">
                Whether you have a project in mind, want to discuss mobile development, 
                or just want to connect with a fellow developer, I'm always excited to meet new people in the tech community.
              </p>
              <a
                href="mailto:kavearhasiv@gmail.com"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F94800] to-[#FF8A00] text-[#0A0A0A] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#F94800]/25 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>Send me an email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;