import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import HomeHero from "./components/HomepageHero";
// import SnowEffect from "./components/SnowEffect";

export const metadata = {
  title: "Home",
  description: "Ci prendiamo cura della tua immagine con attenzione, ascolto e tecnica.",
};

export default function Home() {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Il Salone Di Marika",
    "image": "#",
    "telephone": "#",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Esempio, 123",
      "postalCode": "00000",
      "addressLocality": "Milano",
      "addressRegion": "MI",
      "addressCountry": "IT",
    },
    "priceRange": "€€",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday"], "opens": "11:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "13:00", "closes": "21:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:30", "closes": "17:30" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday", "Saturday"], "opens": "09:00", "closes": "18:00" },
    ],
  };

  const homeServices = [
    {
      category: "Servizio",
      title: "Nanoplastia",
      description: "La nanoplastia è un trattamento lisciante e ristrutturante di ultima generazione che agisce a livello molecolare, penetrando nel capello grazie a nanoparticelle di aminoacidi, collagene e oli.",
      image: "/images/nanoplastia.jpg",
      reverse: false,
    },
    {
      category: "Servizio",
      title: "Color Glass",
      description: "Il colorglass (o hair gloss) è un trattamento professionale o domiciliare che agisce come un velo trasparente o colorato, sigillando le cuticole per donare estrema brillantezza effetto specchio e ravvivare il colore.",
      image: "/images/color_glass.jpg",
      reverse: true,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />

      <div
        style={{
          backgroundColor: '#E8E2CD',
          backgroundImage: `
            radial-gradient(at 15% 15%, rgba(212, 186, 145, 0.6) 0px, transparent 45%), 
            radial-gradient(at 85% 85%, rgba(190, 160, 110, 0.5) 0px, transparent 45%),
            linear-gradient(to bottom, rgba(244, 240, 224, 0.4) 0%, transparent 60%)
          `
        }}
      >
        <HomeHero />

        <Features items={homeServices} />
        <Testimonials />
      </div>
    </>
  );
}