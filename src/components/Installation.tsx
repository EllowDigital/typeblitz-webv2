
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileUp, FilePlus, File, ShieldCheck, Check } from 'lucide-react';

const Installation = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="installation" 
      ref={sectionRef}
      className="section-padding relative opacity-0"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">How to Install TypeBlitz</h2>
          <p className="section-subtitle">
            Follow these simple steps to get started with TypeBlitz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="neumorph rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center mx-auto mb-4 border border-neon/20">
              <Download className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-medium mb-2">Step 1</h3>
            <p className="text-sm text-muted-foreground">Download the ZIP file from above</p>
          </div>
          
          {/* Step 2 */}
          <div className="neumorph rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center mx-auto mb-4 border border-neon/20">
              <FileUp className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-medium mb-2">Step 2</h3>
            <p className="text-sm text-muted-foreground">Unzip the folder to your system</p>
          </div>
          
          {/* Step 3 */}
          <div className="neumorph rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center mx-auto mb-4 border border-neon/20">
              <FilePlus className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-medium mb-2">Step 3</h3>
            <p className="text-sm text-muted-foreground">Open TypeBlitz.exe</p>
          </div>
          
          {/* Step 4 */}
          <div className="neumorph rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center mx-auto mb-4 border border-neon/20">
              <ShieldCheck className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-medium mb-2">Step 4</h3>
            <p className="text-sm text-muted-foreground">
              Allow through antivirus — click "More Info" → "Run Anyway"
              <div className="relative inline-block ml-1">
                <button 
                  className="text-neon hover:text-neon/80"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  ?
                </button>
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 glass p-3 rounded-lg w-60 text-xs z-10">
                    TypeBlitz might be flagged because it's not digitally signed, but it's completely safe and contains no malware.
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-black/20 backdrop-blur-lg"></div>
                  </div>
                )}
              </div>
            </p>
          </div>
          
          {/* Step 5 */}
          <div className="neumorph rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center mx-auto mb-4 border border-neon/20">
              <Check className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-medium mb-2">Step 5</h3>
            <p className="text-sm text-muted-foreground">Enjoy full offline usage (no internet required)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
