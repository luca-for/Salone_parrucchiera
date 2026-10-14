import Image from "next/image";
import Pagetitle from "../components/Pagetitle";
export const metadata = {
  title: "Chi sono | Marika - Titolare de Il Salone di Marika a Milano",
  description: "La mia storia professionale e la mia ricerca per il continuo miglioramento per poter dare ai clienti il miglior trattamento possibile",
};
export default function ChiSonoPage() {
  return (
    <div
      style={{
        backgroundColor: '#F4F0E0',
        backgroundImage: `
            radial-gradient(at 15% 15%, rgba(212, 186, 145, 0.8) 0px, transparent 45%), 
            radial-gradient(at 85% 85%, rgba(190, 160, 110, 0.8) 0px, transparent 45%),
            linear-gradient(to bottom, rgba(251, 250, 220, 0.3) 0%, transparent 60%)
            `
      }}
      className="min-h-screen">

      {/*HERO SECTION */}
      <Pagetitle title="Chi sono" subtitle="Qualcosa su di me" />
      {/* SEZIONE STORIA */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Colonna sinistra FOTO */}
          <div className="relative w-full lg:w-125 h-125 lg:h-180 overflow-hidden shadow-2xl bg-gray-50">
            <Image
              src="/images/Marika.webp"
              alt="Marika, hair stylist titolare del salone di marika a Milano, inventrice del suo metodo Aura Effect"
              fill
              className="object-cover" style={{ objectPosition: '80% 50%' }}
              sizes="(max-width: 768px) calc(100vw - 48px), 50vw"
              priority={true}
              fetchPriority="high"
              quality={75}

            />
          </div>
          {/* Colonna destra: testo*/}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-[#4A3F35] uppercase tracking-wider">
              Mi presento
            </h2>
            <div className="h-px w-20 bg-black/20"></div>
            <p className="text-[#333333] leading-relaxed text-lg font-light">
              La mia avventura nel mondo dell'hair styling è iniziata 10 anni fa. Per me i capelli non sono solo una questione estetica, ma un modo per esprimere la propria personalità.
            </p>
            <p className="text-[#333333] leading-relaxed text-lg font-light">
              Nel mio salone ho voluto creare un ambiente dove ogni cliente possa sentirsi ascoltata e coccolata. Utilizzo solo prodotti naturali perché credo nella bellezza sostenibile.
            </p>
            <p className="text-[#333333] leading-relaxed text-lg font-light">
              Il mio obiettivo? Vederti sorridere ogni volta che ti guardi allo specchio.
            </p>
            <p className="text-[#4A3F35] font-signature text-5xl mb-6">Marika
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
