import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-orange-900 to-orange-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-orange-400 fill-orange-400" />
              <div>
                <h3 className="text-2xl font-serif">Marry Ann Puppies</h3>
                <p className="text-sm text-orange-300">Premium Maltese Breeder</p>
              </div>
            </div>
            <p className="text-orange-200 mb-4 leading-relaxed max-w-md">
              Dedicated to breeding healthy, happy Maltese puppies for loving families. With over 15 years of experience, we provide exceptional care and support throughout your adoption journey.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:marryanns226@gmail.com"
                className="w-10 h-10 bg-orange-800 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+15551234567"
                className="w-10 h-10 bg-orange-800 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-orange-200 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-orange-200 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('puppies')} className="text-orange-200 hover:text-white transition-colors">
                  Available Puppies
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="text-orange-200 hover:text-white transition-colors">
                  Adoption Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-orange-200 hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:marryanns226@gmail.com" className="text-orange-200 hover:text-white transition-colors text-sm">
                  marryanns226@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-orange-200 hover:text-white transition-colors text-sm">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-orange-200 text-sm">
                  Serving families nationwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-orange-300 text-sm text-center md:text-left">
              © {currentYear} Marry Ann Puppies. All rights reserved.
            </p>
            <p className="text-orange-400 text-sm text-center md:text-right">
              Made with <Heart className="w-4 h-4 inline fill-orange-400" /> for Maltese lovers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
