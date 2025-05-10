
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      className="py-10 relative border-t border-white/10 opacity-0"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-neon flex items-center justify-center mr-2">
                <span className="text-black font-bold text-xs">TB</span>
              </div>
              <span className="font-medium">TypeBlitz</span>
            </div>
            <p className="text-sm text-muted-foreground">TypeBlitz © 2025 Sarwan Yadav. All Rights Reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-neon transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-neon transition-colors">
              Terms of Use
            </Link>
            <Link to="/eula" className="text-sm text-muted-foreground hover:text-neon transition-colors">
              EULA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
