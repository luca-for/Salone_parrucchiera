import { client } from "../../../sanity/lib/client"
import { Suspense } from "react";
import Pagetitle from "../components/Pagetitle";




export const metadata = {
  title: "Servizi | listino prezzi de Il Salone Di Marika a Konoa",
  description: "Consulta il nostro listino prezzi e scegli quello che fa per te",
};
async function Listino() {
  const query = `*[_type == "listino"] | order(order asc) {
    _id,
    title,
    services[] {
      name,
      price,
      description
    }
  }`;

  const data = await client.fetch(query, {}, {
    next: {
      tags: ['listino'],
      revalidate: 31536000
    }
  });
  const categories = data || [];

  // Messaggio se non ci sono dati
  if (categories.length === 0) {
    return <p className="text-center py-10 text-gray-400">
      Carica i servizi su Sanity Studio per vederli qui.
    </p>
  }
  return (
    <div className="space-y-24">

      {categories.map((category, index) => {

        // LOGICA ZIG-ZAG:
        // Indice PARI (0, 2...) -> Sinistra
        // Indice DISPARI (1, 3...) -> Destra
        const isLeft = index % 2 === 0;

        return (
          <div
            key={category._id}
            className={`flex flex-col ${isLeft ? 'md:items-start' : 'md:items-end'}`}
          >

            {/* TITOLO CATEGORIA */}
            <div className={`mb-8 w-full max-w-lg ${isLeft ? 'text-left' : 'md:text-right'}`}>
              <h2 className="text-3xl md:text-4xl font-sans text-[#4A3F35] uppercase tracking-wider mb-2">
                {category.title}
              </h2>
              {/* Linea decorativa */}
              <div className={`h-px w-16 bg-black/20 ${isLeft ? 'mr-auto' : 'md:ml-auto md:mr-0'}`}></div>
            </div>

            {/* LISTA SERVIZI */}
            <ul className="w-full md:w-2/3 lg:w-1/2 space-y-6">
              {category.services && category.services.map((item, i) => (
                <li key={i} className="flex flex-col w-full group">
                  {/*Riga servizio + prezzo */}
                  <div className="flex items-end justify-between w-full">
                    {/* Nome Servizio */}
                    <span className="text-lg font-light tracking-wide  pr-3 z-10 relative uppercase text-[#333333] max-w-[60%] wrap-break-word leading-tight">
                      {item.name}
                    </span>

                    {/* Puntini di connessione */}
                    <span className="grow border-b-2 border-dotted border-black-200 mb-1.5 mx-2 min-w-1 md:min-w-20"></span>

                    {/* Prezzo */}
                    <span className="text-xl font-medium  pl-3 z-10 relative text-[#333333]  text-right shrink-0 max-w-[40%]">
                      {item.price}
                    </span>
                  </div>
                  {/*Riga descrizione*/}
                  {item.description && (
                    <p className="text-gray-950 text-xs md:text-sm font-light italic mt-1 leading-snug max-w-[60%]">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default function ServiziPage() {
  return (
    <div style={{
      backgroundColor: '#F4F0E0', 
      backgroundImage: `
      radial-gradient(at 15% 15%, rgba(212, 186, 145, 0.8) 0px, transparent 45%), 
      radial-gradient(at 85% 85%, rgba(190, 160, 110, 0.8) 0px, transparent 45%),
      linear-gradient(to bottom, rgba(251, 250, 220, 0.3) 0%, transparent 60%)
    `
    }}

      className="bg-white min-h-screen">

      {/*HERO SECTION (FOTO DIETRO HEADER)*/}
<Pagetitle title="servizi" subtitle="listino prezzi" contentClassName="md:pb-7 pb-6"/>
      {/*LISTINO PREZZI (ZIG-ZAG)*/}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">

        {/* Richiamiamo il listino dentro Suspense */}
        <Suspense fallback={
          <div className="w-full space-y-16 animate-pulse opacity-50">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-8">
                {/* Simula Titolo Categoria */}
                <div className="h-8 bg-gray-200 w-64 rounded-md mb-2"></div>
                <div className="h-px bg-gray-100 w-16 mb-8"></div>

                {/* Simula 3 Righe Servizi */}
                <div className="space-y-6">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex justify-between items-end">
                      <div className="h-4 bg-gray-100 w-1/2 rounded"></div>
                      <div className="h-4 bg-gray-100 w-20 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        }>
          <Listino />
        </Suspense>

      </section>
    </div>
  );
}