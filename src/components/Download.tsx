import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Download = () => {
  const [showOlderVersions, setShowOlderVersions] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
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

  const handleDownload = (version: string) => {
    // This would normally link to your actual downloadable file
    // For demo purposes, we'll show a toast notification
    toast({
      title: "Download started",
      description: `TypeBlitz ${version} is being downloaded. Thank you for choosing TypeBlitz!`,
      duration: 5000,
    });

    // Simulate download start with a dummy file
    // In a real app, you would link to actual files
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = `#download-${version.replace(/\s/g, "-").toLowerCase()}`;
      link.download = `TypeBlitz-${version}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <section
      id="download"
      ref={sectionRef}
      className="section-padding bg-gradient-radial from-black via-dark to-black relative opacity-0"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Download TypeBlitz</h2>
          <p className="section-subtitle">
            Get started with TypeBlitz and transform your typing experience today
          </p>
        </div>

        <div className="max-w-lg mx-auto glass rounded-2xl p-8 border border-neon/20 hover-lift">
          <div className="mb-10">
            <div className="flex items-center justify-center mb-5">
              <div className="w-20 h-20 rounded-2xl bg-neon flex items-center justify-center">
                <span className="text-black font-bold text-3xl">TB</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-2">TypeBlitz v1.4</h3>
            <p className="text-center text-muted-foreground mb-1">Latest Release • May 11, 2025</p>
            <p className="text-center text-sm text-neon">100% Free | No Ads | No Subscription</p>
          </div>

          <div className="space-y-4">
            <Button
              className="w-full bg-neon text-dark hover:bg-neon/90 py-6 text-lg flex items-center justify-center gap-2"
              onClick={() => handleDownload("v2.6")}
            >
              <DownloadIcon className="w-5 h-5" />
              Download v1.4
            </Button>

            {/* <Button 
              variant="outline" 
              className="w-full border-white/20 hover:bg-white/5 py-6 text-lg"
              onClick={() => handleDownload("v2.4 (Stable)")}
            >
              Download v1.6 (Stable)
            </Button> */}

            <div className="pt-2">
              <Button
                variant="ghost"
                className="w-full text-muted-foreground hover:text-white hover:bg-white/5 flex items-center justify-center gap-2"
                onClick={() => setShowOlderVersions(!showOlderVersions)}
              >
                Older Versions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showOlderVersions ? "rotate-180" : ""}`}
                />
              </Button>

              {showOlderVersions && (
                <div className="mt-4 space-y-3 animate-fade-in">
                  {/* <div className="glass-card rounded-lg p-3 flex justify-between">
                    <span>Version 1.4</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-neon hover:text-neon/70"
                      onClick={() => handleDownload("v2.2")}
                    >
                      Download
                    </Button>
                  </div> */}
                  <div className="glass-card rounded-lg p-3 flex justify-between">
                    <span>Version 1.2 (Legacy)</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-neon hover:text-neon/70"
                      onClick={() => handleDownload("v2.0")}
                    >
                      Download
                    </Button>
                  </div>
                  {/* <div className="glass-card rounded-lg p-3 flex justify-between">
                    <span>Version 1.2 (Legacy)</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-neon hover:text-neon/70"
                      onClick={() => handleDownload("v1.8 (Legacy)")}
                    >
                      Download
                    </Button>
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
