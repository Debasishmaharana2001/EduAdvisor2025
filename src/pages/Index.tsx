import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, School, Award, BookOpen, Stethoscope, FlaskConical, BriefcaseBusiness, MonitorSmartphone, PillIcon, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import ProgramCard from '@/components/ProgramCard';
import TestimonialCard from '@/components/TestimonialCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setAnimate(true);
  }, []);
  
  const programs = [
    {
      title: 'Medical',
      description: 'Prepare for a career in medicine with guidance on NEET preparation, top medical colleges, and specialization options.',
      icon: <Stethoscope className="w-12 h-12 text-red-500" />,
      bgColor: 'bg-red-50',
      link: '/programs'
    },
    {
      title: 'Engineering',
      description: 'Navigate the path to top engineering institutes with expert advice on JEE preparation and branch selection.',
      icon: <FlaskConical className="w-12 h-12 text-blue-500" />,
      bgColor: 'bg-blue-50',
      link: '/programs'
    },
    {
      title: 'Business Administration',
      description: 'Launch your business career with guidance on BBA programs, entrance exams, and career opportunities.',
      icon: <BriefcaseBusiness className="w-12 h-12 text-amber-500" />,
      bgColor: 'bg-amber-50',
      link: '/programs'
    },
    {
      title: 'Computer Applications',
      description: 'Enter the world of technology with insights on BCA programs, coding skills, and IT career pathways.',
      icon: <MonitorSmartphone className="w-12 h-12 text-purple-500" />,
      bgColor: 'bg-purple-50',
      link: '/programs'
    },
    {
      title: 'Pharmacy',
      description: 'Build a career in pharmaceutical sciences with guidance on B.Pharm programs and specializations.',
      icon: <PillIcon className="w-12 h-12 text-green-500" />,
      bgColor: 'bg-green-50',
      link: '/programs'
    },
    {
      title: 'Agricultural Sciences',
      description: 'Cultivate expertise in agricultural sciences with insights on programs, research, and sustainable practices.',
      icon: <Leaf className="w-12 h-12 text-emerald-500" />,
      bgColor: 'bg-emerald-50',
      link: '/programs'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Medical Student',
      content: 'The guidance I received was exceptional. They helped me navigate NEET preparation and secure admission to my dream medical college.',
      college: 'AIIMS, New Delhi'
    },
    {
      name: 'Arjun Patel',
      role: 'Engineering Student',
      content: 'Thanks to DreamCollege Navigator, I got into one of the top IITs. Their counselors provided personalized preparation strategies that made all the difference.',
      college: 'IIT Bombay'
    },
    {
      name: 'Neha Singh',
      role: 'BBA Student',
      content: 'The career counseling sessions helped me choose the right specialization in BBA. The team was supportive throughout the admission process.',
      college: 'SRCC, Delhi University'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Us
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                We're dedicated to helping you navigate your educational journey with confidence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`flex flex-col items-center text-center p-6 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '0ms'}}>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                  <Users className="h-8 w-8 text-consulting-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Counselors</h3>
                <p className="text-gray-600">Our team consists of experienced educators and admission specialists</p>
              </div>
              
              <div className={`flex flex-col items-center text-center p-6 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '100ms'}}>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50 mb-4">
                  <School className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">College Network</h3>
                <p className="text-gray-600">Direct partnerships with top institutions across the country</p>
              </div>
              
              <div className={`flex flex-col items-center text-center p-6 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-50 mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
                <p className="text-gray-600">94% of our students get into their preferred colleges</p>
              </div>
              
              <div className={`flex flex-col items-center text-center p-6 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-50 mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Guidance</h3>
                <p className="text-gray-600">From exam preparation to career planning, we cover all aspects</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs Section */}
        <section className="py-20 bg-consulting-lightBg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-consulting-lightBlue/30 text-consulting-blue text-sm font-medium mb-3">
                Explore Options
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Programs
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the perfect educational pathway with our specialized program guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div 
                  key={program.title}
                  className={`transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <ProgramCard 
                    title={program.title} 
                    description={program.description} 
                    icon={program.icon} 
                    bgColor={program.bgColor} 
                    link={program.link} 
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-consulting-blue hover:bg-consulting-darkBlue">
                <Link to="/programs">
                  View All Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-consulting-blue/10 rounded-lg"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-consulting-blue/10 rounded-lg"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Consultation Process" 
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
              
              <div className={`space-y-6 transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="inline-block px-3 py-1 rounded-full bg-consulting-lightBlue/30 text-consulting-blue text-sm font-medium">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  How We Help You Find Your Dream College
                </h2>
                <p className="text-lg text-gray-600">
                  Our structured approach ensures that you receive personalized guidance at every step of your educational journey.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-consulting-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Initial Consultation</h3>
                      <p className="mt-1 text-gray-600">We understand your academic background, interests, and career aspirations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-consulting-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Program Selection</h3>
                      <p className="mt-1 text-gray-600">Based on your profile, we recommend suitable programs and institutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-consulting-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Entrance Exam Preparation</h3>
                      <p className="mt-1 text-gray-600">We provide guidance on exam strategies and connect you with the best preparation resources.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-consulting-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Application Assistance</h3>
                      <p className="mt-1 text-gray-600">Our team helps you with the application process, ensuring all requirements are met.</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="bg-consulting-blue hover:bg-consulting-darkBlue">
                  <Link to="/consultation">
                    Book Your Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-consulting-lightBg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-consulting-lightBlue/30 text-consulting-blue text-sm font-medium mb-3">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Students Say
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from students who found their perfect educational path with our guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className={`transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <TestimonialCard 
                    name={testimonial.name} 
                    role={testimonial.role} 
                    content={testimonial.content} 
                    college={testimonial.college} 
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-consulting-blue text-consulting-blue hover:bg-consulting-blue/5">
                <Link to="/testimonials">
                  View More Testimonials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-consulting-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 max-w-2xl mx-auto">
              Ready to Start Your Journey to the Perfect College?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert counselors are here to guide you every step of the way. Book your consultation today.
            </p>
            <Button asChild variant="secondary" className="bg-white text-consulting-blue hover:bg-gray-100">
              <Link to="/consultation">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;