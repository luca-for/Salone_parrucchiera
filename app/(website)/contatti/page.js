import Image from "next/image";
import Pagetitle from "../components/Pagetitle";

export const metadata = {
    title: "Contatti e dove trovarmi | Il Salone di Marika a konoa",
    description: "Vieni a trovarci al salone di Marika al villaggio di Konoa, prenota il tuo appuntamento via Whatsapp o chiamaci direttamente",

};

export default function ContattiPage() {
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=viagiovanniceloria18" //Mettere indirizzo vero
    return (
        <div style={{
            backgroundColor: '#F4F0E0',
            backgroundImage: `
            radial-gradient(at 15% 15%, rgba(212, 186, 145, 0.8) 0px, transparent 45%), 
            radial-gradient(at 85% 85%, rgba(190, 160, 110, 0.8) 0px, transparent 45%),
            linear-gradient(to bottom, rgba(251, 250, 220, 0.3) 0%, transparent 60%)
            `
        }}
            className="min-h-screen ">
            {/*HERO SECTION */}
            <Pagetitle title="Contatti" subtitle="dove puoi trovarci" contentClassName="md:pb-7 pb-6"/>
            {/*CONTENUTO CONTATTI*/}
            <div className="max-w-6xl mx-auto md:py-24 py-10 px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* COLONNA SINISTRA: INFO */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            {/* INDIRIZZO */}
                            <div className="flex items-center gap-5 group">
                                <div className="text-gray-700 group-hover:text-[#EA4335] transition-colors shrink-0">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 0C7.589 0 4 3.589 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.411-3.589-8-8-8zm0 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg uppercase tracking-widest text-black">Indirizzo</p>
                                    <p className="text-lg font-light uppercase text-[#333333]">Via Esempio 123, Città</p>
                                </div>
                            </div>

                            {/* TELEFONO */}
                            <a href="#" className="flex items-center gap-5 group">
                                <div className="text-gray-400 group-hover:text-black transition-colors shrink-0">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.558-8.907.092-.044 2.056-1.01 2.063-1.014l-3.521-6.795-2.064 1.012c-1.956.958-3.212 3-3.326 5.176-.142 2.73 1.014 5.924 3.441 9.492 2.72 3.996 6.075 6.2 8.941 6.2 1.609 0 3.091-.681 4.148-1.892L20 22.621z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg uppercase tracking-widest text-black">Telefono</p>
                                    <p className="text-lg font-light uppercase text-[#333333]">+39 0123 456789</p>
                                </div>
                            </a>

                            {/* WHATSAPP */}
                            <a href="#" className="flex items-center gap-5 group" target="_blank">
                                <div className="text-gray-400 group-hover:text-[#25D366] transition-colors shrink-0">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg uppercase tracking-widest text-black">Whatsapp</p>
                                    <p className="text-lg font-light uppercase text-[#333333]">Prenota un appuntamento</p>
                                </div>
                            </a>
                        </div>

                        {/* SOCIAL SEZIONE */}
                        <div className="pt-8 border-t border-black " >
                            <p className="text-lg uppercase tracking-widest text-black mb-6 font-bold">Seguici</p>
                            <div className="flex gap-8">
                                {/* FACEBOOK*/}
                                <a href="https://www.facebook.com/" className="text-gray-400 hover:text-[#0866FF] transition-colors" target="_blank">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                {/* iNSTAGRAM */}

                                <a href="https://www.instagram.com" className="text-gray-400 hover:text-[#E4405F] transition-colors" target="_blank">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                {/* TIKTOK */}
                                <a href="https://www.tiktok.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#000000] transition-colors duration-300"
                                    aria-label="TikTok"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.35-1.17.82-1.55 1.43-.6 1.05-.72 2.37-.32 3.52.4 1.15 1.5 2.05 2.73 2.14 1.12.09 2.19-.28 3.11-.91.95-.62 1.59-1.64 1.64-2.78.04-2.83.02-5.67.02-8.5.01-1.95-.01-3.9 0-5.85z" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-black text-lg uppercase tracking-widest mb-6 font-bold">
                                Orari
                            </h4>
                            <ul className="text-gray-400 text-base space-y-2 font-light ">
                                <li className="grid grid-cols-2 gap-4 border-b border-white/5 text-black pb-1">
                                    <span>Martedì</span>
                                    <span>11:00 - 19:00</span>
                                </li>
                                <li className="grid grid-cols-2 gap-4 border-b border-white/5 text-black pb-1">
                                    <span>Mercoledì</span>
                                    <span>13:00 - 21:00</span>
                                </li>
                                <li className="grid grid-cols-2 gap-4 border-b border-white/5 text-black pb-1">
                                    <span>Giovedì</span>
                                    <span>09:30 - 17:30</span>
                                </li>
                                <li className="grid grid-cols-2 gap-4 border-b border-white/5 text-black pb-1">
                                    <span>Venerdì-Sabato</span>
                                    <span>09:00 - 18:00</span>
                                </li>
                                <li className="grid grid-cols-2 gap-4 text-black pt-1">
                                    <span>Domenica - Lunedì</span>
                                    <span>Chiuso</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* COLONNA DESTRA: MAPPA */}
                    <div className="relative group">
                        <div className="overflow-hidden rounded-xl shadow-sm border border-gray-100 aspect-square md:aspect-video relative">
                            <Image
                                src="/images/mappa-screenshot.webp"
                                alt="Posizione Salone"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/75 text-black px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium shadow-xl hover:bg-black hover:text-white transition-all"
                                >
                                    Ottieni indicazioni
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}