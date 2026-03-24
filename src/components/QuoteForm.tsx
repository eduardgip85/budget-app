type QuoteFormProps = {
    name: string
    phone: string
    email: string
    onNameChange: (value: string) => void
    onPhoneChange: (value: string) => void
    onEmailChange: (value: string) => void
    onSubmit: ()=> void
}

function QuoteForm({
    name,
    phone,
    email,
    onNameChange,
    onPhoneChange,
    onEmailChange,
    onSubmit,
}: QuoteFormProps){
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
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit()
                }}
            >
                <input 
                    type="text" 
                    placeholder="Nom"
                    className="rounded-md bg-white px-3 py-2 outline-none"
                    value={name}
                    onChange={(e)=> onNameChange(e.target.value)}
                />

                <input 
                    type="text" 
                    placeholder="Telefon"
                    className="rounded-md bg-white px-3 py-2 outline-none"
                    value={phone}
                    onChange={(e)=> onPhoneChange(e.target.value)}
                />

                <input 
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>onEmailChange(e.target.value)}
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