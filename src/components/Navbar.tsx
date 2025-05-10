
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-neon flex items-center justify-center">
            <span className="text-black font-bold text-lg">TB</span>
          </div>
          <span className="text-xl font-bold">TypeBlitz</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-white transition-colors">About</a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-white transition-colors">Features</a>
          <a href="#screenshots" className="text-sm text-muted-foreground hover:text-white transition-colors">Screenshots</a>
          <a href="#download" className="text-sm text-muted-foreground hover:text-white transition-colors">Download</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</a>
        </nav>
        
        <Button variant="outline" className="hidden md:flex items-center gap-2 border-neon text-neon hover:bg-neon hover:text-black">
          <Download className="w-4 h-4" />
          <span>Download v2.6</span>
        </Button>
        
        <Button variant="outline" size="icon" className="md:hidden text-neon border-neon">
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
