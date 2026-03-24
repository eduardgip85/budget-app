import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Quote } from "../types/quote";

function BudgetDetailPage() {
    const { id } = useParams()
    const [quote, setQuote] = useState<Quote | null>(null)

    useEffect(() => {
        const stored = localStorage.getItem('quotes')
        if(!stored) return

        const quotes: Quote[] = JSON.parse(stored)

        const found = quotes.find((q) => q.id === id)
        if(found) setQuote(found)
    }, [id])

    if(!quote) {
        return <p className="p-6">Pressupost no trobat</p>
    }

    return (
        <main className="min-h-screen bg-neutral-100 p-6">
            <div className="mx-auto max-w-2xl rounded-md bg-white p-6 shadow-sm">
                <h1 className="text-2xl font-bold mb-4">
                Detall del pressupost
                </h1>

                <p><strong>Nom:</strong> {quote.name}</p>
                <p><strong>Email:</strong> {quote.email}</p>
                <p><strong>Telèfon:</strong> {quote.phone}</p>

                <div className="mt-4">
                    <h2 className="font-semibold">Serveis:</h2>
                    <ul className="list-disc pl-5">
                        {quote.services.map((s) => (
                        <li key={s}>
                            {s}

                            {s === 'WEB' && quote.webOptions && (
                            <span className="ml-2 text-sm text-neutral-600">
                                ({quote.webOptions.pages} pàgines, {quote.webOptions.languages} idiomes)
                            </span>
                            )}
                        </li>
                        ))}
                    </ul>
                </div>

                <p className="mt-4 text-xl font-bold">
                    Total: {quote.total} €
                </p>
            </div>
        </main>
    )
}

export default BudgetDetailPage