
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setAnimate(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const programCategories = [
    { id: 'all', label: 'All Programs' },
    { id: 'medical', label: 'Medical' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'business', label: 'Business' },
    { id: 'computer', label: 'Computer' },
    { id: 'pharmacy', label: 'Pharmacy' },
    { id: 'agriculture', label: 'Agriculture' }
  ];

  const programs = [
    {
      id: 1,
      title: 'MBBS Guidance Program',
      category: 'medical',
      description: 'Comprehensive guidance for NEET preparation and MBBS admissions in top medical colleges.',
      image: 'pics/program1.png',
      features: [
        'Personalized NEET preparation strategy',
        'Medical college selection assistance',
        'Interview preparation',
        'Career path guidance',
      ],
      duration: '4 Year'
    },
    {
      id: 2,
      title: 'BDS Counseling',
      category: 'medical',
      description: 'Expert guidance for students aspiring to pursue dental sciences through NEET.',
      image: 'pics/program2.png',
      features: [
        'Dental college selection',
        'NEET preparation advice',
        'Specialization options',
        'Career opportunities in dentistry',
      ],
      duration: '12 months'
    },
    {
      id: 3,
      title: 'IIT/JEE Mentorship',
      category: 'engineering',
      description: 'Strategic guidance for JEE preparation and admission to premier engineering institutes.',
      image: 'pics/program3.png',
      features: [
        'Personalized JEE preparation plan',
        'IIT branch selection guidance',
        'Mock interviews',
        'Study material recommendations',
      ],
      duration: '18 months'
    },
    {
      id: 4,
      title: 'NIT Admission Guidance',
      category: 'engineering',
      description: 'Comprehensive support for securing admission in National Institutes of Technology.',
      image: 'pics/program4.png',
      features: [
        'JEE Main preparation strategy',
        'NIT and branch selection',
        'Fee structure guidance',
        'Scholarship information',
      ],
      duration: '12 months'
    },
    {
      id: 5,
      title: 'BBA Admission Consulting',
      category: 'business',
      description: 'Expert advice on BBA admissions, entrance exams, and career opportunities.',
      image: 'pics/program5.png',
      features: [
        'Top BBA college selection',
        'Entrance exam preparation',
        'Interview coaching',
        'Specialization guidance',
      ],
      duration: '3 months'
    },
    {
      id: 6,
      title: 'MBA Preparation Program',
      category: 'business',
      description: 'Long-term guidance for undergraduate students aspiring for MBA in the future.',
      image: 'pics/program6.png',
      features: [
        'Profile building strategy',
        'CAT/GMAT preparation plan',
        'B-school selection guidance',
        'Career path planning',
      ],
      duration: '24 months'
    },
    {
      id: 7,
      title: 'BCA Program Guidance',
      category: 'computer',
      description: 'Comprehensive guidance for BCA admissions and IT career planning.',
      image: 'pics/program7.png',
      features: [
        'College selection assistance',
        'Programming language guidance',
        'Project planning support',
        'IT career path mapping',
      ],
      duration: '3 months'
    },
    {
      id: 8,
      title: 'B.Tech CSE Counseling',
      category: 'computer',
      description: 'Specialized guidance for computer science engineering aspirants.',
      image: 'pics/program8.png',
      features: [
        'Engineering entrance exam preparation',
        'CSE specialization guidance',
        'Internship planning',
        'Industry-relevant skills development',
      ],
      duration: '12 months'
    },
    {
      id: 9,
      title: 'B.Pharmacy Admission Guidance',
      category: 'pharmacy',
      description: 'Expert advice on pharmacy education and career opportunities.',
      image: 'pics/program9.png',
      features: [
        'Pharmacy college selection',
        'Entrance exam guidance',
        'Specialization options',
        'Industry exposure',
      ],
      duration: '6 months'
    },
    {
      id: 10,
      title: 'Pharm.D Program Consulting',
      category: 'pharmacy',
      description: 'Specialized guidance for Doctor of Pharmacy aspirants.',
      image: 'pics/program10.png',
      features: [
        'Pharm.D college selection',
        'Clinical pharmacy focus',
        'Research orientation',
        'Global opportunities',
      ],
      duration: '3 months'
    },
    {
      id: 11,
      title: 'B.Sc Agriculture Guidance',
      category: 'agriculture',
      description: 'Comprehensive support for agricultural science education and careers.',
      image: 'pics/program11.png',
      features: [
        'Agricultural university selection',
        'Specialization guidance',
        'Research opportunities',
        'Sustainable farming focus',
      ],
      duration: '6 months'
    },
    {
      id: 12,
      title: 'Agricultural Engineering Program',
      category: 'agriculture',
      description: 'Specialized guidance for students interested in the technical aspects of agriculture.',
      image: 'pics/program12.png',
      features: [
        'Engineering college selection',
        'Agricultural technology focus',
        'Project guidance',
        'Industry connections',
      ],
      duration: '12 months'
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-consulting-blue to-blue-600 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Academic Programs Guidance
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Expert consultation for a wide range of academic programs to help you choose the right educational path
              </p>
              <Button asChild variant="secondary" className="bg-white hover:bg-gray-100 text-consulting-blue">
                <Link to="/consultation">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Programs List Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-gray-100 p-1">
                  {programCategories.map(category => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="data-[state=active]:bg-white data-[state=active]:text-consulting-blue"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPrograms.map((program, index) => (
                    <div 
                      key={program.id}
                      className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl ${
                        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={program.image} 
                          alt={program.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 bg-consulting-blue text-white px-3 py-1 text-sm font-medium">
                          {program.category.charAt(0).toUpperCase() + program.category.slice(1)}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Duration: {program.duration}</span>
                        </div>
                        
                        <div className="space-y-2 mb-6">
                          {program.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-consulting-blue mt-1 flex-shrink-0" />
                              <span className="text-sm ml-1">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button asChild className="w-full bg-consulting-blue hover:bg-consulting-darkBlue">
                          <Link to="/consultation">
                            Book Consultation
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Our Program Guidance Stands Out
              </h2>
              <p className="text-lg text-gray-600">
                We provide comprehensive support throughout your educational journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-consulting-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-consulting-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Our counselors have in-depth knowledge about admission processes, curricula, and career prospects for each program.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
                <p className="text-gray-600">
                  We tailor our guidance to your specific academic background, interests, and career goals.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Support</h3>
                <p className="text-gray-600">
                  From program selection to application assistance and interview preparation, we support you at every step.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-consulting-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find Your Perfect Program?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a consultation with our experts and take the first step towards your ideal academic journey
            </p>
            <Button asChild variant="secondary" className="bg-white hover:bg-gray-100 text-consulting-blue">
              <Link to="/consultation">
                Schedule Your Consultation
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
