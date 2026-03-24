type WebOptionsProps = {
    pages: number
    languages: number
    onDecreasePages: ()=> void
    onIncreasePages: ()=> void
    onDecreaseLanguages: ()=> void
    onIncreaseLanguages: ()=> void
}

function WebOptions({
    pages,
    languages,
    onDecreasePages,
    onIncreasePages,
    onDecreaseLanguages,
    onIncreaseLanguages,
}: WebOptionsProps ) {
    return(
    <div className="flex flex-col gap-4 border-t pt-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Número de pàgines:</span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e)=> {
                e.stopPropagation()
                onDecreasePages()
            }}
            className="h-8 w-8 rounded-md border hover:bg-neutral-500"
          >
            -
          </button>
          <span className="min-w-6 text-center">{pages}</span>
          <button
            type="button"
            onClick={(e)=> {
                e.stopPropagation()
                onIncreasePages()
            }}
            className="h-8 w-8 rounded-md border hover:bg-neutral-500"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Número d'idiomes:</span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e)=> {
                e.stopPropagation()
                onDecreaseLanguages()
            }}
            className="h-8 w-8 rounded-md border hover:bg-neutral-500"
          >
            -
          </button>
          <span className="min-w-6 text-center">{languages}</span>
          <button
            type="button"
            onClick={(e)=> {
                e.stopPropagation()
                onIncreaseLanguages()
            }}
            className="h-8 w-8 rounded-md border hover:bg-neutral-500"
          >
            +
          </button>
        </div>
      </div>
    </div>
    )
}

export default WebOptions