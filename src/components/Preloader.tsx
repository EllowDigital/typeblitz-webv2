
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark transition-opacity duration-700">
      <div className="relative w-32 h-32 mb-6">
        {/* Replace with your actual GIF */}
        <div className="w-20 h-20 bg-neon animate-spin-slow rounded-full blur-sm absolute inset-0 m-auto" />
        <div className="w-24 h-24 border-t-4 border-b-4 border-neon rounded-full animate-spin absolute inset-0 m-auto" />
        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-neon">TB</div>
      </div>
      <p className="text-white text-lg animate-pulse">Launching TypeBlitz Experience...</p>
    </div>
  );
};

export default Preloader;
