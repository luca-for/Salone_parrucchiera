// app/global-error.js
'use client'

import { useEffect } from 'react'
import { Montserrat, Dancing_Script, Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})
const dancing_script = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-signature',
  display: 'swap',
})

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error)
    // qui puoi mandare l'errore a Sentry o simili
  }, [error])

  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${dancing_script.variable} ${playfair.variable} font-sans antialiased`}
      >
        <section
          className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center"
          style={{
            backgroundColor: '#E8E2CD',
            backgroundImage: `
              radial-gradient(at 15% 15%, rgba(212, 186, 145, 0.6) 0px, transparent 45%),
              radial-gradient(at 85% 85%, rgba(190, 160, 110, 0.5) 0px, transparent 45%),
              linear-gradient(to bottom, rgba(244, 240, 224, 0.4) 0%, transparent 60%)
            `,
          }}
        >
          <h2 className="text-3xl font-semibold">Qualcosa è andato storto</h2>
          <p className="max-w-md text-gray-600">
            Si è verificato un errore imprevisto. Prova a ricaricare la pagina.
          </p>
          <button
            onClick={() => reset()}
            className="cursor-pointer inline-block px-8 py-4 bg-transparent border border-[#2A1E10] rounded-full text-[#2A1E10]
                       text-base uppercase tracking-[0.2em] font-medium transition-all duration-500
                       hover:bg-[#D4BA91] hover:text-[#2A1E10] hover:border-[#D4BA91] hover:-translate-y-1"
          >
            Riprova
          </button>
        </section>
      </body>
    </html>
  )
}