
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Consultation', path: '/consultation' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/image/logo.png" 
              alt="Logo" 
              className="h-24 w-25 mr-2"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`menu-item ${isActive(item.path) ? 'text-[#33C3F0] after:w-full' : 'text-foreground'}`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-[#33C3F0] hover:bg-[#1EAEDB]">
              <Link to="/consultation">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-md animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 px-4 transition-colors rounded-md text-base font-medium ${
                    isActive(item.path) ? 'bg-[#D6BCFA] text-[#33C3F0]' : 'hover:bg-consulting-lightBg'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 pb-4">
                <Button asChild className="w-full bg-[#33C3F0] hover:bg-[#1EAEDB] py-3">
                  <Link to="/consultation">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
