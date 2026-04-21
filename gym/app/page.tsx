import Hero from '../components/Hero';
import ClassesGrid from '../components/ClassesGrid';
import MembershipTable from '../components/MembershipTable';
import Trainers from '../components/Trainers';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <ClassesGrid />
      <MembershipTable />
      <Trainers />
      <ContactForm />
      
      {/* SEO Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Gym",
            "name": "Elite Gym",
            "description": "Premium gym offering personal training, group classes, and yoga",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Your City",
            },
            "telephone": "+1-555-GYM-ELITE",
            "sameAs": [
              "https://instagram.com/elitegym",
              "https://facebook.com/elitegym"
            ],
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "currenciesAccepted": "USD",
            "paymentAccepted": "Cash, Credit Card"
          })
        }} 
      />
    </>
  )
}
