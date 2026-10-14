import Link from "next/link";
import Image from "next/image";
// import SnowEffect from "./SnowEffect";

export default function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* <SnowEffect /> per Natale */}

      {/* VERSIONE DESKTOP: Layout Split-Screen*/}

      <div className="hidden md:flex h-full w-full flex-row">

        {/* LATO SINISTRO (Contenuto e CTA) */}
        <div
          className="w-1/2 h-full flex flex-col justify-center pl-12 lg:pl-20 z-10"
          style={{ backgroundColor: '#2A1E10' }}
        >
          <div className=" mt-50 text-left">
            <h1 className="text-white text-6xl lg:text-7xl font-light tracking-widest uppercase leading-tight">
              Capelli come <br />non li hai <br />
              <span className="font-bold">mai avuti</span>
            </h1>

            <div className="mt-12">
              <Link
                aria-label="Scopri Aura Effect"
                href="/Aura_Effect"
                prefetch={false}
                className="inline-block px-8 py-4 bg-transparent border border-white rounded-full text-white 
                    text-base uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold hover:-translate-y-1">
                Scopri Aura Effect
              </Link>
            </div>
          </div>
        </div>

        {/* LATO DESTRO (Immagine) */}
        <div className="w-1/2 h-full relative">
          <Image
            src="/images/hero_homepage.webp"
            alt="Donna di spalle con i capelli fatti con il metodo aura effect sample"
            fill
            priority
            className="object-cover object-top"
            quality={85}
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/20 z-10"></div>
        </div>

      </div>



      {/* VERSIONE MOBILE*/}
      <div className="block md:hidden h-full w-full relative">
        <Image
          src="/images/hero_mobile.webp"
          alt="Donna di spalle con i capelli fatti con il metodo aura effect sample"
          fill
          priority
          className="object-cover object-top"
          quality={85}
          sizes="100vw"
        />
        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Contenuto sovrapposto */}
        <div className="relative z-20 h-full w-full flex flex-col justify-start pt-50 px-4">
          <div className="max-w-2xl text-left">
            <h1 className="text-white text-3xl font-light tracking-widest uppercase leading-tight">
              Capelli come <br />non li hai <br />
              <span className="font-bold">mai avuti</span>
            </h1>

            <div className="mt-12">
              <Link
                aria-label="Scopri Aura Effect"
                href="/Aura_Effect"
                prefetch={false}
                className="inline-block px-8 py-4 bg-transparent border border-white hover:border-brand-gold rounded-full text-white 
                    text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#4A3F35] hover:text-white hover:-translate-y-1">
                Scopri Aura Effect
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}