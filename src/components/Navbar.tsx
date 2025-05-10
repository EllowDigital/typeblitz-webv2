
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('about')} className="text-sm text-muted-foreground hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('features')} className="text-sm text-muted-foreground hover:text-white transition-colors">Features</button>
          <button onClick={() => scrollToSection('screenshots')} className="text-sm text-muted-foreground hover:text-white transition-colors">Screenshots</button>
          <button onClick={() => scrollToSection('download')} className="text-sm text-muted-foreground hover:text-white transition-colors">Download</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</button>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="items-center gap-2 border-neon text-neon hover:bg-neon hover:text-black"
            onClick={() => scrollToSection('download')}
          >
            <Download className="w-4 h-4" />
            <span>Download v2.6</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-white hover:text-neon"
            onClick={() => window.open("https://ellowdigitals.com", "_blank")}
          >
            EllowDigitals
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="text-neon border-neon">
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60 bg-black/90 backdrop-blur-lg border border-neon/30">
              <DropdownMenuItem onClick={() => scrollToSection('about')}>
                About
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('features')}>
                Features
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('screenshots')}>
                Screenshots
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('download')}>
                Download
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('contact')}>
                Contact
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => window.open("https://ellowdigitals.com", "_blank")}>
                Visit EllowDigitals
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
