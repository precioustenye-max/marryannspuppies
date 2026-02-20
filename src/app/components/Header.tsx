import { Heart, Mail, Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-orange-500 fill-orange-500" />
            <div>
              <h1 className="text-2xl font-serif text-orange-900">Marry Ann Puppies</h1>
              <p className="text-xs text-orange-700">Premium Maltese Adoption</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('puppies')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Available Puppies
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Adoption Process
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-orange-600 transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-orange-600 transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection('puppies')} className="text-left text-gray-700 hover:text-orange-600 transition-colors py-2">
              Available Puppies
            </button>
            <button onClick={() => scrollToSection('process')} className="text-left text-gray-700 hover:text-orange-600 transition-colors py-2">
              Adoption Process
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-orange-600 transition-colors py-2">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600 w-full">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
