function QuoteList () {
    return(
        <section
            className="border-t border-neutral-500 pt-6"
        >
            <div 
                className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
                <h2
                    className="text-2xl font-medium"
                >
                    Pressupost en curs
                </h2>

                <div 
                    className="flex flex-col gap-3 sm:flex-row sm_items-center"
                >
                    <input 
                        type="text"
                        placeholder="Cercar..."
                        className="rounded-md bg-white px-3 py-2 shodow-sm outline-none" 
                    />
                    <button className="text-sm font-medium">Import</button>
                    <button className="text-sm font-medium">Nom</button>
                </div>
            </div>

            <div 
                className="flex flex-col gap-4"
            >
                <article className="min-h-[100px] rounded-md bg-neutral-300"></article>
                <article className="min-h-[100px] rounded-md bg-neutral-300"></article>
                <article className="min-h-[100px] rounded-md bg-neutral-300"></article>

            </div>

        </section>
    )
}

export default QuoteList