import React from 'react';
import { HelmetProvider} from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  pageType?: 'website' | 'article';
  imageUrl?: string;
  keywords?: string;
}

const SEO = ({ 
  title = "EduAdvisor Consultancy - Expert Educational Guidance",
  description = "Get expert guidance for Medical, Engineering, BBA, BCA programs and more. Find your dream college with personalized counseling services.",
  canonical = "https://eduadvisorconsultancy.in/", 
  pageType = "website",
  imageUrl = "https://www.eduadvisorconsultancy.in/image/logo.png",
  keywords = "college counseling, education consultant, medical college, engineering college, BBA admission, BCA program, career guidance, college admissions, NEET preparation, JEE guidance, EduAdvisor Consultancy"
}: SEOProps) => {
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EduAdvisor Consultancy",
    "url": "https://eduadvisorconsultancy.in/",
    "logo": "https://eduadvisorconsultancy.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 8658309437",
      "telephone1": "+91 7735583019",
      "contactType": "customer support",
      "email": "786khannusrat@gmail.com"
    },
    "sameAs": [
      "https://facebook.com/eduadvisorconsultancy",
      "https://twitter.com/eduadvisorconsulatancy",
      "https://instagram.com/eduadvisorconsultancy",
      "https://linkedin.com/company/eduadvisorconsultancy"
    ]
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EduAdvisor Consultancy",
    "description": "Expert educational counseling and college admission guidance services",
    "url": "https://eduadvisorconsultancy.in/",
    "telephone": "+91 7735583019",
    "address": {
      "@type": "Plot No:- K7/84, Kalinga Nagar, Bhubaneswar",
      "streetAddress": "Plot No:- K7/84, Kalinga Nagar, Bhubaneswar",
      "addressLocality": "Near Aanandabana",
      "postalCode": "751013",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.268167",
      "longitude": "85.759721"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Educational Consulting",
    "provider": {
      "@type": "Organization",
      "name": "EduAdvisor Consultancy"
    },
    "description": "Expert guidance for aspiring students in Medical, Engineering, BBA, BCA, Pharmacy, and Agricultural programs.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  // FAQ Schema for improved SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does EduAdvisor Consultancy provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EduAdvisor Consultancy provides comprehensive educational guidance including college selection, entrance exam preparation, application assistance, and career counseling for Medical, Engineering, BBA, BCA, Pharmacy, and Agricultural programs."
        }
      },
      {
        "@type": "Question",
        "name": "How can EduAdvisor Consultancy help with medical admissions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our expert counselors provide personalized NEET preparation strategies, guidance on medical college selection based on your profile, interview preparation, and comprehensive career path planning for aspiring medical students."
        }
      },
      {
        "@type": "Question",
        "name": "What is the success rate of EduAdvisor Consultancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EduAdvisor Consultancy has a 94% success rate, with our students getting admitted to their top 3 college choices across various programs."
        }
      }
    ]
  };

  return (
    <HelmetProvider>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="EduAdvisor Consultancy" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </HelmetProvider>
  );
};

export default SEO;