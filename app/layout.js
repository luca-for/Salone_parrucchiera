import { Montserrat, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

//font firma 
const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap",
});


export default function RootLayout({ children }) {
  return (

    <html lang="it" className="scroll-smooth">


      <body className={`${montserrat.variable} ${dancing_script.variable} ${playfair.variable} font-sans antialiased`}>
        {children}



      </body>
    </html>
  );
}
export const metadata = {
  title: {
    default: "Il salone di Marika | Regalati una coccola",
    template: "Il salone di Marika | %s "
  },
  description: "Descrizione del salone...",

  // QUI AGGIUNGI IL CANONICAL
  //alternates: {
  //canonical: '', INSERISCI IL DOMINIO UNA SOLA VOLTA
  //},

  robots: {
    index: false,
    follow: false,
  },
};