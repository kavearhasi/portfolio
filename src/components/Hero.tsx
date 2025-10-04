import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#0A0A0A] text-[#F5F5F7] flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated background grid with subtle noise */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#BDBDBD 1px, transparent 1px), linear-gradient(90deg, #BDBDBD 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
      </div>

      {/* Subtle glowing orb that follows cursor - smaller and elegant */}
      <div
        className="fixed w-64 h-64 rounded-full opacity-10 blur-3xl transition-all duration-500 ease-out pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, #F94800 0%, #FF8A00 40%, transparent 70%)",
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
        }}
      />

      {/* Subtle glitch effect accent lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF00E5]/20 to-transparent opacity-30" />
      <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FFFF]/20 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-12">
          {/* Left: Content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Crafting the{" "}
              <span className="relative inline-block group">
                <span className="bg-gradient-to-r from-[#F94800] to-[#FF8A00] bg-clip-text text-transparent">
                  Future
                </span>
                {/* Emissive glow effect */}
                <span className="absolute -inset-2 bg-gradient-to-r from-[#F94800] to-[#FF8A00] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
                {/* Micro glitch accent */}
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF00E5] rounded-full opacity-60 animate-pulse" />
              </span>{" "}
              of Mobile
            </h1>

            <p className="text-sm md:text-base text-[#BDBDBD] max-w-3xl leading-relaxed">
              I'm{" "}
              <span className="text-[#F5F5F7] font-semibold">
                Kavearhasi Viswanathan
              </span>
              , an Software Developer specializing in building clean, intuitive,
              and user-centric mobile applications. My work combines modern
              mobile technology with a robust foundation in full-stack
              engineering principles to create experiences that are both elegant
              and powerful.
            </p>

            <div className="pt-4">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative bg-gradient-to-r from-[#F94800] to-[#FF8A00] text-[#0A0A0A] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#F94800]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center">
                  Explore My Work
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/kavearhasi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-[#BDBDBD]/10 border border-[#BDBDBD]/20 rounded-lg text-[#BDBDBD] hover:text-[#F94800] hover:border-[#F94800]/50 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#F94800] to-[#FF8A00] rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/kavearhasi-v/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-[#BDBDBD]/10 border border-[#BDBDBD]/20 rounded-lg text-[#BDBDBD] hover:text-[#F94800] hover:border-[#F94800]/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#F94800] to-[#FF8A00] rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </a>
              <a
                href="mailto:kavearhasiv@gmail.com"
                className="group relative p-3 bg-[#BDBDBD]/10 border border-[#BDBDBD]/20 rounded-lg text-[#BDBDBD] hover:text-[#F94800] hover:border-[#F94800]/50 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#F94800] to-[#FF8A00] rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Right: Image with proportional circular glow background */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-sm h-[500px] flex items-center justify-center group">
              {/* Proportional circular glow - brighter and more visible */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full transition-all duration-700 group-hover:scale-105"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 138, 0, 0.95) 0%, rgba(249, 72, 0, 0.75) 35%, rgba(249, 72, 0, 0.45) 65%, transparent 85%)",
                }}
              />

              {/* Profile Image - portrait format, face highly prominent */}
              <div className="relative z-10 w-[350px] h-[350px] rounded-[2rem] overflow-hidden border-4 border-[#F94800]/70 shadow-2xl shadow-[#F94800]/30 transition-all duration-500 group-hover:border-[#F94800] group-hover:shadow-[#F94800]/50 group-hover:scale-[1.03]">
                <img
                  src="/My profile pic professional (2).png"
                  alt="Kavearhasi Viswanathan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "center 5%" }}
                />
              </div>

              {/* Floating accent particles */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-[#FF8A00] rounded-full shadow-lg shadow-[#FF8A00]/60 animate-pulse" />
              <div
                className="absolute bottom-16 -left-4 w-3 h-3 bg-[#F94800] rounded-full shadow-lg shadow-[#F94800]/60 animate-pulse"
                style={{ animationDelay: "0.6s" }}
              />
              <div
                className="absolute top-[45%] -right-4 w-3 h-3 bg-[#00FFFF] rounded-full shadow-lg shadow-[#00FFFF]/60 animate-pulse"
                style={{ animationDelay: "1.1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
