import { Suspense } from "react";
import Header from "./components/Header";
import PromoBanner from "./PromoBanner";
import ContactButtons from "./components/ContactButtons";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export const revalidate = 31536000
export default function WebsiteLayout({ children }) {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-100">
        <PromoBanner />
        <Header />
        <Suspense fallback={null}>

        </Suspense>
      </div>


      <main>
        {children}</main>
      <ContactButtons />
      <ScrollToTop />
      <Footer />

    </>
  );
}
export const metadata = {
  openGraph: {
    title: "Il salone di Marika | Regalati una coccola",
    description: "Vieni a scoprire i nostri trattamenti per la cura dei tuoi capelli",
    url: "salone.lucaforcelladev.it",
    siteName: "Il salone di Marika",
    locale: "it_IT",
    type: "website",

    // In futuro qui aggiungere l'immagine per l'anteprima che appare quando il sito viene condiviso sulle app di messaggistica
    // images: [
    //   {
    //     url: '/og-image.jpg', 
    //     width: 1200,
    //     height: 630,
    //     alt: 'Immagine condivisione social',
    //   },
    // ],
  },
};