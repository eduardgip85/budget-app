function QuoteForm(){
    return (
        <section
            className="rounded-md bg-neutral-300 p-4"
        >
            <h2 
                className="mb-4 text-center text-2xl font-medium"
            >
                Demanar pressupost
            </h2>

            <form 
                className="flex flex-col gap-3"
            >
                <input 
                    type="text" 
                    placeholder="Nom"
                    className="rounded-md bg-white px-3 py-2 outline-none"
                />

                <input 
                    type="text" 
                    placeholder="Telefon"
                    className="rounded-md bg-white px-3 py-2 outline-none"
                />

                <input 
                    type="text" 
                    placeholder="Email"
                    className="rounded-md bg-white px-3 py-2 outline-none"
                />

                <button
                    type="submit"
                    className="mx-auto mt-2 rounded-md bg-green-500 px-6 py-2 text-white"
                >
                    Enviar
                </button>
            </form>
        </section>
    )
}

export default QuoteForm