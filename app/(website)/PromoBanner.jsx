import { client } from "../../sanity/lib/client";

async function getPromoData() {
  const query = `*[_type == "settings"][0]{
      promoBanner,
      promoLink
    }`;
  try {

    return await client.fetch(query, {}, {
      next:
        process.env.NODE_ENV === 'development'
          ? { revalidate: 0 }
          : { tags: ['promobanner'], revalidate: 31536000 },


    });
  } catch (error) {
    console.error("Errore nel recupero della promo:", error);
    return null;
  }
}

export default async function PromoBanner() {
  const data = await getPromoData();

  // 2. CONTROLLO: Se non c'è l'oggetto o non c'è il testo scritto, nascondi tutto
  if (!data?.promoBanner) return null;

  return (

    <div id="promo-banner"
      className="relative xl:mt-17 mt-17 left-0 w-full bg-brand-gold text-brand-ink py-2.5 px-4 z-10">
      <div
        className="absolute top-0 left-0 h-full w-8 md:w-50 z-20 
               bg-linear-to-r from-[#5C0A0A] via-[#8B0000] to-transparent"/>
      <div
        className="absolute top-0 right-0 h-full w-8 md:w-50 z-20 
               bg-linear-to-l from-[#5C0A0A] via-[#8B0000] to-transparent"/>
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-center wrap-break-word w-full">

          {/* 3. LOGICA INTELLIGENTE */}
          {data.promoLink ? (
            // CASO A: C'è un link -> Testo cliccabile
            <a
              href={data.promoLink}
              className="hover:underline hover:opacity-80 transition-opacity cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.promoBanner}
            </a>
          ) : (
            // CASO B: Niente link -> Solo testo
            <span>
              {data.promoBanner}
            </span>
          )}

        </p>
      </div>
    </div>
  );
}