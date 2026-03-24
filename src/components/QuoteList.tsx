import { Link } from "react-router-dom"
import type { Quote } from '../types/quote'
import type { SortBy, SortDirection } from "../types/sort"

type QuoteListProps = {
    quotes: Quote[]
    searchTerm: string
    sortBy: SortBy
    sortDirection: SortDirection
    onSearchChange: (value:string) => void
    onSortByName: () => void
    onSortByTotal: () => void
}

function QuoteList ({ quotes, searchTerm, sortBy, sortDirection, onSearchChange, onSortByName, onSortByTotal }: QuoteListProps) {
    return(
        <section className="border-t border-neutral-500 pt-6">

            <h2 className="flex flex-col items-center text-2xl font-medium">
                Pressupost en curs
            </h2>

            <div className="flex flex-col py-3 gap-3 sm:flex-row sm:items-center sm:justify-between ">

                <input 
                    type="text"
                    placeholder="Cercar..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full rounded-md bg-white px-3 py-2 shadow-sm outline-green-300" 
                    />

                <div className="flex items-center gap-2">

                    <button 
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-medium shadow-sm cursor-pointer hover:bg-neutral-300"
                        onClick={onSortByTotal}
                    >
                        Import {sortBy === 'total' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                    </button>
                    <button 
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-medium shadow-sm cursor-pointer hover:bg-neutral-300"
                        onClick={onSortByName}
                    >
                        Nom {sortBy === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                    </button>

                </div>
            </div>


            <div className="flex flex-col gap-3">
                {quotes.length === 0 && (
                    <p className="text-sm text-neutral-500">No hi ha pressupostos encara</p>
                )}

                {quotes.map((quote) => (
                    <Link to={`/budget/${quote.id}`}>
                        <article
                            key={quote.id}
                            className="rounded-md bg-white p-4 shadow-green-500/50 shadow-md hover:bg-green-100"
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
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default QuoteList