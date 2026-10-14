This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Il Salone

Sito web sviluppato per un salone di parrucchiera. Il progetto integra un CMS headless per permettere al cliente di aggiornare in totale autonomia le fotografie della gallery e i servizi offerti.


##  Tech Stack

*   **Framework:** Next.js 
*   **Linguaggio:** Javascript
*   **Styling:** Tailwind CSS  
*   **CMS:** Sanity.io
*   **Package Manager:** npm
*   **Deployment:** Vercel

##  Sicurezza e Privacy
Il progetto è configurato con particolare attenzione alla sicurezza:
*   Le chiavi API di Sanity e i token di sistema sono gestiti strettamente tramite variabili d'ambiente e non sono tracciati nel version control.
*   Il file `sanity.config.ts` (o `sanity.cli.ts`) utilizza riferimenti sicuri al `NEXT_PUBLIC_SANITY_PROJECT_ID`.
*   Nessun dato sensibile della clientela del salone transita o viene memorizzato sul repository.

