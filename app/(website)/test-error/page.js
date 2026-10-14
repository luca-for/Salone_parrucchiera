'use client'

import { useState } from 'react'

export default function TestError() {
    const [senderror, setSenderror] = useState(false)

    if (senderror) {
        throw new Error('Test error')
    }

    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
            <p className="max-w-md text-gray-600">pagina test errore</p>
            <button
                onClick={() => setSenderror(true)}
                className="rounded bg-black px-5 py-2 text-white transition hover:opacity-80"
            >
                Rompi la pagina
            </button>
        </section>
    )
}