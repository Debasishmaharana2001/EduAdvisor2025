
import { useEffect } from 'react';
import { Calendar, CheckCircle2, Mail, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationForm from '@/components/ConsultationForm';

const Consultation = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Calendar className="h-6 w-6 text-consulting-blue" />,
      title: 'Personalized Guidance',
      description: 'Get tailored advice based on your academic profile and career aspirations.'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-green-600" />,
      title: 'Expert Insights',
      description: 'Learn from experienced counselors with knowledge of various educational pathways.'
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: 'Continuous Support',
      description: 'Receive ongoing assistance throughout your application and admission process.'
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-600" />,
      title: 'Direct Communication',
      description: 'Connect directly with our team for quick resolution of your queries.'
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
              Book Your Consultation
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up">
              Take the first step towards finding your dream college. Our expert counselors are ready to guide you.
            </p>
          </div>
        </section>
        
        {/* Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                      Why Book a Consultation?
                    </h2>
                    <p className="text-lg text-gray-600">
                      Our consultation sessions are designed to provide you with personalized guidance for your educational journey.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mt-1">
                          {benefit.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                          <p className="mt-1 text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What to Expect</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-consulting-blue mr-2">•</span>
                        <span>A 30-45 minute session with an expert educational counselor</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-consulting-blue mr-2">•</span>
                        <span>Assessment of your academic profile and career goals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-consulting-blue mr-2">•</span>
                        <span>Customized recommendations for programs and institutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-consulting-blue mr-2">•</span>
                        <span>Information about entrance exams and preparation strategies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-consulting-blue mr-2">•</span>
                        <span>Discussion of financial aspects and scholarship opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 animate-scale-in">
                  <h2 className="text-2xl font-bold text-center mb-6">Request Your Consultation</h2>
                  <ConsultationForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">What Students Say About Our Consultations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-consulting-blue">
                    RS
                  </div>
                </div>
                <p className="italic text-gray-600 mb-4">
                  "The consultation helped me gain clarity about my career options. The counselor provided valuable insights that I hadn't considered before."
                </p>
                <p className="font-semibold">Rahul Singh</p>
                <p className="text-sm text-gray-500">Engineering Student, Delhi</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-green-600">
                    AK
                  </div>
                </div>
                <p className="italic text-gray-600 mb-4">
                  "I was confused between Medical and Pharmacy. The consultation session helped me understand both paths and make an informed decision."
                </p>
                <p className="font-semibold">Ananya Kumar</p>
                <p className="text-sm text-gray-500">Medical Student, Mumbai</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-purple-600">
                    VP
                  </div>
                </div>
                <p className="italic text-gray-600 mb-4">
                  "The counselor not only guided me on program selection but also provided practical advice on entrance exam preparation."
                </p>
                <p className="font-semibold">Vikram Patel</p>
                <p className="text-sm text-gray-500">BBA Student, Bangalore</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">How long is a consultation session?</h3>
                  <p className="text-gray-600">
                    Our standard consultation sessions last between 30-45 minutes, depending on your requirements and the complexity of your queries.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Is there a fee for the initial consultation?</h3>
                  <p className="text-gray-600">
                    We offer a free initial consultation to understand your needs and explain how we can help. Subsequent specialized counseling sessions may have applicable fees.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">How soon can I book a consultation?</h3>
                  <p className="text-gray-600">
                    After submitting your request, our team will reach out to you within 24-48 hours to schedule your consultation at a mutually convenient time.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Can I have a consultation if I'm not sure which program I want to pursue?</h3>
                  <p className="text-gray-600">
                    Absolutely! Our counselors are skilled at helping students explore different options based on their interests, strengths, and career aspirations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Do you provide consultations for international education?</h3>
                  <p className="text-gray-600">
                    Yes, we offer guidance for both domestic and international education options, depending on your preferences and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Consultation;
