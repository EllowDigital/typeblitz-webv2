
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="py-16 relative border-t border-white/10 opacity-0 bg-gradient-to-t from-black via-dark to-black"
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center mr-3">
                <span className="text-black font-bold text-lg">TB</span>
              </div>
              <span className="text-xl font-medium">TypeBlitz</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Elevate your typing speed and accuracy with TypeBlitz, the revolutionary typing improvement app designed for modern professionals.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/ellowdigitals" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/ellowdigitals" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com/ellowdigitals" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/ellowdigitals" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-neon transition-colors">About</a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-neon transition-colors">Features</a>
              </li>
              <li>
                <a href="#screenshots" className="text-sm text-muted-foreground hover:text-neon transition-colors">Screenshots</a>
              </li>
              <li>
                <a href="#download" className="text-sm text-muted-foreground hover:text-neon transition-colors">Download</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-neon transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-neon transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-neon transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/eula" className="text-sm text-muted-foreground hover:text-neon transition-colors">
                  EULA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Creator</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Developed by EllowDigitals, a leading software development company specializing in productivity tools.
            </p>
            <a 
              href="https://ellowdigitals.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neon/10 hover:bg-neon/20 text-neon px-4 py-2 rounded-md text-sm border border-neon/30 transition-colors"
            >
              Visit EllowDigitals
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">TypeBlitz © 2025 Sarwan Yadav. All Rights Reserved.</p>
          <p className="text-xs text-muted-foreground">
            Made with <span className="text-neon">♥</span> by EllowDigitals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
