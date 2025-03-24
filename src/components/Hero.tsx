import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Asset/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12 md:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-full bg-eduadvisor-lightPurple/30 text-eduadvisor-purple text-sm font-medium">
                Your Path to Academic Excellence
              </div>
              <h1 className="text-white font-bold tracking-tighter">
                Navigate Your Way to the <span className="text-eduadvisor-cyan">Perfect College</span>
              </h1>
            </div>
            <p className="text-lg text-white md:text-xl max-w-[600px] leading-relaxed">
              Expert guidance for aspiring students in Medical, Engineering, BBA, BCA, Pharmacy, 
              and Agricultural programs. Let us help you make the right choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-eduadvisor-cyan hover:bg-eduadvisor-darkCyan text-white rounded-md h-12 px-6">
                <Link to="/consultation">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-eduadvisor-cyan text-eduadvisor-cyan hover:bg-eduadvisor-cyan/5 rounded-md h-12 px-6">
                <Link to="/programs">
                  Explore Programs
                </Link>
              </Button>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-eduadvisor-cyan/20 to-transparent mix-blend-overlay" />
              <img 
                src="pics/Home1.png" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">Join thousands of students who found their dream college</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-pulse-subtle">
              <p className="text-sm font-semibold text-slate-900">94% Success Rate</p>
              <p className="text-xs text-slate-600">Our students get admitted to their top 3 college choices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
