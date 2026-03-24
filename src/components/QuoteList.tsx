type Quote = {
    id: string
    name: string
    services: string[]
    total: number
}

type QuoteListProps = {
    quotes: Quote[]
}

function QuoteList ({ quotes }: QuoteListProps) {
    return(
        <section className="border-t border-neutral-500 pt-6">

            <h2 className="flex flex-col items-center text-2xl font-medium">
                Pressupost en curs
            </h2>

            <div className="flex flex-col py-3 gap-3 sm:flex-row sm:items-center sm:justify-between ">

                <input 
                    type="text"
                    placeholder="Cercar..."
                    className="w-full rounded-md bg-white px-3 py-2 shadow-sm outline-none" 
                    />

                <div className="flex items-center gap-2">

                    <button className="rounded-md bg-white px-3 py-2 text-sm font-medium shadow-sm">Import</button>
                    <button className="rounded-md bg-white px-3 py-2 text-sm font-medium shadow-sm">Nom</button>

                </div>
            </div>


            <div className="flex flex-col gap-3">
                {quotes.length === 0 && (
                    <p className="text-sm text-neutral-500">No hi ha pressupostos encara</p>
                )}

                {quotes.map((quote) => (
                    <article
                        key={quote.id}
                        className="rounded-md bg-white p-4 shadow-sm"
                    >
                        <div className="flex justify-between">
                            <span className="font-medium">{quote.name}</span>

                                <div className="flex flex-wrap gap-2">
                                    {quote.services.map((s) => ( 
                                        <span 
                                            key={s}
                                            className="rounded-full bg-neutral-200 px-2 py-1 text-xs font-medium"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>

                            <span className="font-bold">{quote.total}€</span>
                        </div>


                    </article>
                ))}
            </div>
        </section>
    )
}

export default QuoteList