import MouseGlow from './components/MouseGlow';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F7] relative overflow-hidden">
      <MouseGlow />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Blog />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;