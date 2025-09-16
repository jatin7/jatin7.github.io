import React from 'react';
import { ArrowDown, Download, Linkedin, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Data Architect"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Jatin Shah
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Senior Data Architect
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transforming complex data challenges into scalable, intelligent solutions. 
              Specializing in cloud-native architectures, big data platforms, and AI-driven analytics 
              that drive business innovation and growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
            <button className="btn-secondary">
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="social-icon">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Floating Data Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element top-20 left-20 text-cyan-400 opacity-20">
          {'{ "data": "insights" }'}
        </div>
        <div className="floating-element top-32 right-32 text-purple-400 opacity-20">
          SELECT * FROM future
        </div>
        <div className="floating-element bottom-40 left-32 text-pink-400 opacity-20">
          &lt;analytics/&gt;
        </div>
        <div className="floating-element bottom-60 right-20 text-cyan-400 opacity-20">
          ML.predict()
        </div>
      </div>
    </section>
  );
};

export default Hero;