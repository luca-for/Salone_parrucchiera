export default function Footer() {
  return (
    <footer className="relative z-100 bg-[#1E1B18]/95 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Info Salone */}
        <div>
          <h3 className="text-xl font-light uppercase tracking-tighter mb-6">Il Salone di Marika</h3>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            Valorizziamo la tua naturale bellezza attraverso lo studio, l'ascolto e trattamenti d'avanguardia.
          </p>
        </div>

        {/* Orari */}
        <div>
          <h4 className=" text-xs uppercase tracking-widest mb-6 font-bold">
            Orari
          </h4>
          <ul className="text-gray-300 text-sm space-y-2 font-light">
            <li className="grid grid-cols-2 gap-4 border-b border-white/5 pb-1">
              <span>Martedì</span>
              <span>11:00 - 19:00</span>
            </li>
            <li className="grid grid-cols-2 gap-4 border-b border-white/5 pb-1">
              <span>Mercoledì</span>
              <span>13:00 - 21:00</span>
            </li>
            <li className="grid grid-cols-2 gap-4 border-b border-white/5 pb-1">
              <span>Giovedì</span>
              <span>09:30 - 17:30</span>
            </li>
            <li className="grid grid-cols-2 gap-4 border-b border-white/5 pb-1">
              <span>Venerdì-Sabato</span>
              <span>09:00 - 18:00</span>
            </li>
            <li className="grid grid-cols-2 gap-4 text-white/30 pt-1">
              <span>Domenica - Lunedì</span>
              <span>Chiuso</span>
            </li>
          </ul>
        </div>

        {/* Indirizzo */}
        <div>
          <h4 className=" text-xs uppercase tracking-widest mb-6 font-bold">Dove Siamo</h4>
          <p className="text-gray-300 text-sm font-light">Via Esempio 123, Città</p>
          <p className="text-gray-300 text-sm font-light mt-2">Tel: #</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className=" text-xs uppercase tracking-widest mb-6 font-bold">Seguici</h4>
          <div className="flex space-x-5">

            {/* Instagram */}
            <a
              href="https://www.instagram.com" // INSERISCI QUI IL LINK VERO
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#E4405F] transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/" // INSERISCI QUI IL LINK VERO
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#0866FF] transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/" // INSERISCI QUI IL LINK VERO
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-700 transition-colors duration-300"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.35-1.17.82-1.55 1.43-.6 1.05-.72 2.37-.32 3.52.4 1.15 1.5 2.05 2.73 2.14 1.12.09 2.19-.28 3.11-.91.95-.62 1.59-1.64 1.64-2.78.04-2.83.02-5.67.02-8.5.01-1.95-.01-3.9 0-5.85z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
      {/* Copyright e Privacy */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-1/3 text-[10px] text-gray-300 uppercase tracking-widest text-center md:text-left">
          ©{new Date().getFullYear()} Il Salone di Marika di Marika Bo <br />
          0123 456789 - Mail <br />
          Via Esempio 123, Città, P.I. 00000000000

        </div>


        <div className="w-full md:w-1/3 text-[10px] text-gray-300 uppercase tracking-widest text-center ">
          <a
            href="https://www.lucaforcelladev.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >

            Design by Luca Forcella</a></div>





        {/* link rapidi alla Privacy*/}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6 text-[10px] text-gray-300 uppercase tracking-widest">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}