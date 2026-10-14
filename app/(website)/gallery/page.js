import GallerySection from "../components/GallerySection";
import Pagetitle from "../components/Pagetitle";

export const metadata = {
  title: "Gallery look | Il Salone di Marika",
  description: "Lasciati ispirare dai nostri lavori: sfoglia la gallery di Aura Effect. Tagli, schiariture e trattamenti realizzati da Marika a Stezzano per esaltare la tua bellezza naturale.",
};

export default function GalleryPage() {
  return (
    <div className=" min-h-screen flex flex-col">
      {/*HERO SECTION*/}
      <Pagetitle title="gallery" subtitle="il cambiamento che fa la differenza" contentClassName="md:pb-7 pb-6"/>

      <div className="grow pt-0 pb-0">
        <GallerySection />

      </div>

    </div>
  );
}