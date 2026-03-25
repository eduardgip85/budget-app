type QuoteFormProps = {
    name: string
    phone: number
    email: string
    onNameChange: (value: string) => void
    onPhoneChange: (value: number) => void
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
            className="rounded-md bg-neutral-200 p-4 shadow-green-500/50 shadow-md"
        >
            <h2 
                className="mb-4 text-center text-2xl font-medium"
            >
                Demanar pressupost
            </h2>

            <div className="mx-auto w-full max-w-md">

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
                        className="text-center w-full rounded-md bg-white px-3 py-2 outline-green-200"
                        value={name}
                        onChange={(e)=> onNameChange(e.target.value)}
                        />

                    <input 
                        type="number" 
                        placeholder="Telefon"
                        className="text-center w-full rounded-md bg-white px-3 py-2 outline-green-200"
                        value={phone}
                        onChange={(e)=> onPhoneChange(Number(e.target.value))}
                    />

                    <input 
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>onEmailChange(e.target.value)}
                        className="text-center w-full rounded-md bg-white px-3 py-2 outline-green-200"
                    />

                    <button
                        type="submit"
                        className="mx-auto mt-2 rounded-md bg-green-500 px-6 py-2 text-white hover:bg-green-400 cursor-pointer"
                        >
                        Enviar
                    </button>
                </form>
            
            </div>
        </section>
    )
}

export default QuoteForm