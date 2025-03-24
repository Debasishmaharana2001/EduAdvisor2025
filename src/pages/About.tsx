
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, CheckCircle2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setAnimate(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & Lead Counselor',
      bio: 'With over 20 years of experience in educational consulting, Dr. Kumar has guided thousands of students to prestigious institutions.',
      specialization: 'Medical & Engineering',
      image: 'pics/person1.png'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Medical Education Specialist',
      bio: 'A former faculty member at AIIMS, Dr. Sharma provides expert guidance for students aspiring to enter medical colleges.',
      specialization: 'NEET Preparation & Medical Admissions',
      image: 'pics/person2.png'
    },
    {
      name: 'Prof. Anil Verma',
      role: 'Engineering Counselor',
      bio: 'With a background in IIT Delhi, Prof. Verma specializes in guiding students through engineering entrance exams and admissions.',
      specialization: 'JEE Preparation & Engineering Pathways',
      image: 'pics/person3.png'
    },
    {
      name: 'Ms. Neha Patel',
      role: 'Business Education Advisor',
      bio: 'An MBA from IIM Ahmedabad, Ms. Patel guides students interested in business education and management careers.',
      specialization: 'BBA & MBA Admissions',
      image: 'pics/person4.png'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-consulting-blue text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                About EduAdvisor
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in-up">
                We're dedicated to helping students navigate their educational journey with confidence and clarity
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-consulting-blue/10 rounded-lg"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-consulting-blue/10 rounded-lg"></div>
                  <img 
                    src="pics/aboutus1.png" 
                    alt="Our Mission" 
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
              
              <div className={`space-y-6 transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="inline-block px-3 py-1 rounded-full bg-consulting-lightBlue/30 text-consulting-blue text-sm font-medium">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Guiding Students to Their Ideal Educational Path
                </h2>
                <p className="text-lg text-gray-600">
                  At EduAdvisor, we believe that every student deserves access to quality education that aligns with their interests, abilities, and career aspirations. Our mission is to provide personalized guidance that empowers students to make informed decisions about their academic future.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-consulting-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Personalized Approach</h3>
                      <p className="mt-1 text-gray-600">We recognize each student's unique strengths, challenges, and aspirations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-consulting-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Expert Guidance</h3>
                      <p className="mt-1 text-gray-600">Our team of experienced counselors brings deep knowledge of various educational pathways.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-consulting-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Holistic Support</h3>
                      <p className="mt-1 text-gray-600">We go beyond college selection to provide support throughout the educational journey.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20 bg-consulting-lightBg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-consulting-lightBlue/30 text-consulting-blue text-sm font-medium mb-3">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Drives Us
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our core values shape everything we do and how we interact with our students
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className={`bg-white p-8 rounded-lg shadow-md transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '0ms'}}>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-consulting-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Student-Centered</h3>
                <p className="text-gray-600">
                  We prioritize the best interests of our students, focusing on their individual needs, goals, and well-being in all our guidance efforts.
                </p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '100ms'}}>
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in all aspects of our service, maintaining high standards of professionalism, knowledge, and ethics.
                </p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  We are committed to staying updated with the latest developments in education to provide the most relevant guidance to our students.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-consulting-lightBlue/30 text-consulting-blue text-sm font-medium mb-3">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet Our Expert Counselors
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our team comprises experienced professionals with deep knowledge of various educational pathways
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={member.name}
                  className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 ${
                    animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-consulting-blue mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                    <div className="text-xs font-medium bg-blue-50 text-consulting-blue px-3 py-1 rounded-full inline-block">
                      {member.specialization}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Location Section */}
        <section className="py-20 bg-consulting-lightBg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 rounded-full bg-consulting-lightBlue/30 text-consulting-blue text-sm font-medium mb-3">
                  Visit Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Location
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Visit our office for in-person consultations
                </p>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-96 w-full">
                  {/* Embedded Google Map - using iframe for demonstration */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233.92362555892404!2d85.7596189909842!3d20.26803938168214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742715357288!5m2!1sen!2sin" 
                    height="100%" 
                    width="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Edu Advisor Headquarters</h3>
                  <p className="text-gray-600 mb-4">Plot No:- K7/84, Kalinga Nagar, <br />Near Aanandabana, Bhubaneswar, India</p>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Office Hours:</p>
                      <p className="text-sm text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-600">Sunday: Closed</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Contact Information:</p>
                      <p className="text-sm text-gray-600">Phone: +91 86583 09437</p>
                      <p className="text-sm text-gray-600">Phone: +91 77355 83019</p>
                      <p className="text-sm text-gray-600">Email: 786khannusrat@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-consulting-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 max-w-2xl mx-auto">
              Ready to Begin Your Educational Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our expert team guide you towards the right educational path for your future
            </p>
            <Button asChild variant="secondary" className="bg-white hover:bg-gray-100 text-consulting-blue">
              <Link to="/consultation">
                Book Your Consultation
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

export default About;
