
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import { animateAllOnScroll } from '@/lib/animations';

const Testimonials = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setAnimate(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize scroll animations
    animateAllOnScroll('.scroll-animate', 'animate-fade-in-up');
    
    return () => {
      // Clean up any event listeners if needed
    };
  }, []);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Medical Student',
      content: 'The guidance I received was exceptional. They helped me navigate NEET preparation and secure admission to my dream medical college. The personalized study plan and mock interview sessions were particularly helpful.',
      college: 'AIIMS, New Delhi'
    },
    {
      name: 'Arjun Patel',
      role: 'Engineering Student',
      content: 'Thanks to DreamCollege Navigator, I got into one of the top IITs. Their counselors provided personalized preparation strategies that made all the difference. They helped me identify my strengths and focus on areas that needed improvement.',
      college: 'IIT Bombay'
    },
    {
      name: 'Neha Singh',
      role: 'BBA Student',
      content: 'The career counseling sessions helped me choose the right specialization in BBA. The team was supportive throughout the admission process. Their insights into the business education landscape were invaluable.',
      college: 'SRCC, Delhi University'
    },
    {
      name: 'Vikram Mehta',
      role: 'B.Tech Student',
      content: 'I was confused between different engineering branches. The counselors at DreamCollege Navigator helped me understand each branch\'s scope and career prospects. Their guidance was instrumental in my decision-making process.',
      college: 'NIT Trichy'
    },
    {
      name: 'Ananya Reddy',
      role: 'BCA Student',
      content: 'The team provided excellent guidance for my BCA application. They helped me select a program that aligned with my interest in artificial intelligence and data science. I\'m now on the right path to achieving my career goals.',
      college: 'Christ University, Bangalore'
    },
    {
      name: 'Rahul Kapoor',
      role: 'B.Pharmacy Student',
      content: 'The consultation services were comprehensive and insightful. The counselors had in-depth knowledge about pharmacy education and helped me choose a college with strong industry connections and research opportunities.',
      college: 'NIPER, Mohali'
    },
    {
      name: 'Aisha Khan',
      role: 'Agricultural Science Student',
      content: 'I was looking for a program that combined agricultural science with sustainable practices. The guidance I received helped me find exactly what I was looking for. The counselors were knowledgeable and patient throughout the process.',
      college: 'Punjab Agricultural University'
    },
    {
      name: 'Karan Malhotra',
      role: 'MBBS Student',
      content: 'The NEET preparation strategy provided by DreamCollege Navigator was practical and effective. Their counselors understood my strengths and weaknesses and tailored a study plan accordingly. I\'m grateful for their support.',
      college: 'JIPMER, Puducherry'
    },
    {
      name: 'Shreya Gupta',
      role: 'MBA Aspirant',
      content: 'Even though I was in my first year of undergraduate studies, the team helped me create a long-term plan for MBA admissions. Their early guidance on profile building and extracurricular activities has been incredibly valuable.',
      college: 'Planning for top B-Schools'
    }
  ];

  const featuredVideos = [
    {
      id: 1,
      title: 'How DreamCollege Navigator Helped Me Get Into IIT',
      thumbnail: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      student: 'Raj Verma, IIT Delhi'
    },
    {
      id: 2,
      title: 'My Journey to Medical College with Expert Guidance',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      student: 'Meera Patel, AIIMS Mumbai'
    },
    {
      id: 3,
      title: 'How I Got Into My Dream BBA Program',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      student: 'Sanjay Kumar, IIM Indore'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-consulting-blue text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Success Stories
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up">
              Hear from students who found their perfect educational path with our guidance
            </p>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 scroll-animate">
                <div className="text-4xl font-bold text-consulting-blue mb-2">
                  <AnimatedCounter end={1200} suffix="+" />
                </div>
                <p className="text-gray-600">Students Guided</p>
              </div>
              
              <div className="p-6 scroll-animate">
                <div className="text-4xl font-bold text-consulting-blue mb-2">
                  <AnimatedCounter end={94} suffix="%" />
                </div>
                <p className="text-gray-600">Success Rate</p>
              </div>
              
              <div className="p-6 scroll-animate">
                <div className="text-4xl font-bold text-consulting-blue mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-gray-600">Partner Institutions</p>
              </div>
              
              <div className="p-6 scroll-animate">
                <div className="text-4xl font-bold text-consulting-blue mb-2">
                  <AnimatedCounter end={4.9} duration={1500} />
                </div>
                <div className="flex justify-center text-yellow-400 mb-2">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-consulting-lightBg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Students Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className={`transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                  style={{transitionDelay: `${index * 50}ms`}}
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
          </div>
        </section>
        
        {/* Video Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Video Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredVideos.map((video, index) => (
                <div 
                  key={video.id}
                  className={`rounded-lg overflow-hidden shadow-md transition-all duration-700 ${
                    animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-l-consulting-blue border-t-transparent border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                    <p className="text-consulting-blue text-sm">{video.student}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-consulting-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community of successful students and find your path to academic excellence
            </p>
            <a 
              href="/consultation" 
              className="inline-block bg-white hover:bg-gray-100 text-consulting-blue font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Book Your Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;