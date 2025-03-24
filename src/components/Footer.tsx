import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center">
              <img 
                src="/image/logo.png" 
                alt="Logo" 
                className="h-28 w-29 mr-2"
              />
            </Link>
            <p className="text-muted-foreground max-w-xs">
              We guide students to their ideal educational path with personalized consultations and expert advice.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Medical</Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Engineering</Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Business Administration</Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Computer Applications</Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Pharmacy</Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Agricultural Sciences</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/consultation" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Book Consultation</Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-[#33C3F0] flex-shrink-0" />
                <span className="text-muted-foreground">Plot No:- K7/84, Kalinga Nagar,<br />Near Aanandabana,Bhubaneswar IN</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-[#33C3F0] flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">+91 8658309437
            <br/>
                +91 7735583019</a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-[#33C3F0] flex-shrink-0" />
                <a href="mailto:786khannusrat@gmail.com" className="text-muted-foreground hover:text-[#33C3F0] transition-colors">786khannusrat@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EduAdvisor Consultancy. All rights reserved .</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
