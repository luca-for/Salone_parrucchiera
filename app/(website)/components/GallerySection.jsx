
import { client } from "../../../sanity/lib/client";
import GalleryClient from "./GalleryClient";

export default async function GallerySection() {

  const query = `*[_type == "gallery" && _id == "galleryHome"][0] {
    title,
    images
  }`;

  const data = await client.fetch(query, {}, {
    next: {
      tags: ['gallery'],
      revalidate: 31536000
    }
  });

  if (!data) return null;

  return (
    <section
      style={{
        backgroundColor: '#F4F0E0',
        backgroundImage: `
            radial-gradient(at 15% 15%, rgba(212, 186, 145, 0.8) 0px, transparent 45%), 
            radial-gradient(at 85% 85%, rgba(190, 160, 110, 0.8) 0px, transparent 45%),
            linear-gradient(to bottom, rgba(251, 250, 220, 0.3) 0%, transparent 60%)
            `
      }}
      className="w-full md:py-0 py-0 flex flex-col justify-center items-center">

      {/*Sfondo contenitore */}
      <div className="md:w-4/5 max-w-1500 p-10 md:p-10  ">
        {/*Titolo */}
        {data.title && (
          <h2 className="text-[#4A3F35] text-center text-xl md:text-2xl font-bold uppercase tracking-[0.2em] mb-8">
            {data.title}
          </h2>
        )}



        {/*In caso ci siano meno di 9 foto */}
        <div className="w-full">
          <GalleryClient images={data.images} /></div>
        <div className="mt-8 text-center">
          <p className="text-black text-[10px] uppercase tracking-widest">
            Il salone di Marika - Gallery
          </p>
          <a
            className="flex items-center justify-center gap-2 text-black font-bold  text-[10px] uppercase tracking-widest mt-2"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"

          >
            Guarda altri lavori su instagram
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>

          </a>
        </div>
      </div>



    </section>




  );

}

