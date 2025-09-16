import React, { useState, useEffect } from 'react';
import { Menu, X, Database, User, Briefcase, Code, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Database className="text-cyan-400 w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              DataArch Pro
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link">
              <User className="w-4 h-4 mr-2" />
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              <Code className="w-4 h-4 mr-2" />
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">
              <Briefcase className="w-4 h-4 mr-2" />
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              <Database className="w-4 h-4 mr-2" />
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-400 hover:text-cyan-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20">
            <div className="px-6 py-4 space-y-3">
              <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">
                <User className="w-4 h-4 mr-3" />
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">
                <Code className="w-4 h-4 mr-3" />
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">
                <Briefcase className="w-4 h-4 mr-3" />
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">
                <Database className="w-4 h-4 mr-3" />
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
                <Mail className="w-4 h-4 mr-3" />
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;