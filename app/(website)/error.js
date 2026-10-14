'use client'
import { useEffect } from 'react'
import Link from 'next/link'


export default function Errorpage({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

  return (
  <section className="flex min-h-[60vh] bg-brand-dark flex-col items-center justify-center gap-6 px-4 text-center">
      <h2 className="text-3xl  text-white font-sans ">Qualcosa è andato storto</h2>
      <p className="max-w-md text-white">
        Si è verificato un errore imprevisto. Puoi riprovare oppure tornare alla home.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => reset()}
          className="inline-block px-8 py-4 bg-transparent border border-white rounded-full text-white 
                    text-base uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold hover:-translate-y-1"
        >
          Riprova
        </button>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-transparent border border-white rounded-full text-white 
                    text-base uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold hover:-translate-y-1"
        >
          Torna alla home
        </Link>
      </div>
    </section>
  )
}