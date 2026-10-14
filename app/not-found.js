import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center"
        style={{
          backgroundColor: '#E8E2CD',
          backgroundImage: `
            radial-gradient(at 15% 15%, rgba(212, 186, 145, 0.6) 0px, transparent 45%), 
            radial-gradient(at 85% 85%, rgba(190, 160, 110, 0.5) 0px, transparent 45%),
            linear-gradient(to bottom, rgba(244, 240, 224, 0.4) 0%, transparent 60%)
          `
        }}>
            <h2 className="text-3xl font-semibold">Pagina non trovata</h2>
            <p className="max-w-md text-gray-600">
                La pagina che stai cercando non esiste.
            </p>
            <Link
                href="/"
                className="inline-block px-8 py-4 bg-transparent border border-black rounded-full text-black 
                            text-base uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#D4BA91] hover:text-[#2A1E10] hover:border-[#D4BA91] hover:-translate-y-1"
            >
                Torna alla home
            </Link>
        </section>
    )
}