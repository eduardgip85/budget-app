type ServiceCardProp = {
    title: string
    description: string
    price: number
    isSelected: boolean
    onToggle: () => void
    children?: React.ReactNode
}

function ServiceCard({ 
    title, 
    description,
    price,
    isSelected,
    onToggle,
    children, 

}: ServiceCardProp) {
    return(
        <article
            className={`flex flex-col min-h-[160px] items-center justify-center rounded-md p-4 ${
                isSelected
                    ? `border-2 border-blue-300 bg-neutral-300`
                    : `bg-neutral-400`
            }`}
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className={`text-3xl font-medium ${isSelected ? `text-black` : `text-white`}`}>{title}</h2>
                    <p className="mt-2 text-sm text-neutral-600">{description}</p>
                </div>

                <div className="flex flex-col items-end gap-3">
                    <span className="text-3xl font-bold">{price}</span>

                    <label className="flex cursor-pointer items-center gap-2 text-sm">
                        <input 
                            type="checkbox"
                            checked={isSelected}
                            onChange={onToggle} 
                        />

                        Afegir

                    </label>
                </div>

            </div>

            {children ? <div className="mt-5">{children}</div> : null}

        </article>
    )
}

export default ServiceCard