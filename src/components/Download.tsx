import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const latestVersion = "v1.4-stable";
const latestVersionDisplay = "v1.4";

const olderVersions = [
  { version: "v1.2-beta", label: "Version 1.2 (Beta)" },
  // Add more older versions here as needed
];

const Download = () => {
  const [showOlderVersions, setShowOlderVersions] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
    const isLatest = version === latestVersion;
    const path = isLatest
      ? `./production/latest/TypeBlitz-${version}.zip`
      : `./production/files/TypeBlitz-${version}.zip`;

    toast({
      title: "Download started",
      description: `TypeBlitz ${version} is being downloaded. Thank you for choosing TypeBlitz!`,
      duration: 5000,
    });

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = path;
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

            <h3 className="text-2xl font-bold text-center mb-2">
              TypeBlitz {latestVersionDisplay}
            </h3>
            <p className="text-center text-muted-foreground mb-1">Latest Release • May 11, 2025</p>
            <p className="text-center text-sm text-neon">100% Free | No Ads | No Subscription</p>
          </div>

          <div className="space-y-4">
            <Button
              className="w-full bg-neon text-dark hover:bg-neon/90 py-6 text-lg flex items-center justify-center gap-2"
              onClick={() => handleDownload(latestVersion)}
            >
              <DownloadIcon className="w-5 h-5" />
              Download Latest
            </Button>

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
                  {olderVersions.map(({ version, label }) => (
                    <div key={version} className="glass-card rounded-lg p-3 flex justify-between">
                      <span>{label}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-neon hover:text-neon/70"
                        onClick={() => handleDownload(version)}
                      >
                        Download
                      </Button>
                    </div>
                  ))}
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
