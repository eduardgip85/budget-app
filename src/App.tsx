import { useState } from 'react'
import ServiceCard from "./components/ServiceCard"
import QuoteForm from "./components/QuoteForm"
import QuoteList from "./components/QuoteList"
import WebOptions from './components/WebOptions'

const SEO_PRICE = 300
const ADS_PRICE = 500
const WEB_PRICE = 400
const EXTRA_PRICE = 30

function App() {

  const [seoSelected, setSeoSelected] = useState(false)
  const [adsSelected, setAdsSelected] = useState(false)
  const [webSelected, setWebSelected] = useState(false)
  const [pages, setPages ] = useState(1)
  const [languages, setLanguages ] = useState(1)

  const webExtraPrice = pages * EXTRA_PRICE - EXTRA_PRICE + languages * EXTRA_PRICE - EXTRA_PRICE

  const total =  
    (seoSelected ? SEO_PRICE : 0) +
    (adsSelected ? ADS_PRICE : 0) +
    (webSelected ? WEB_PRICE + webExtraPrice : 0)

  const decreasePages = () => {
    setPages((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const increasePages = () => {
    setPages((prev) => prev + 1)
  }

  const decreaseLanguages = () => {
    setLanguages((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const increaseLanguages = () => {
    setLanguages((prev) => prev + 1)
  }

  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-6 text-neutral-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="rounded-md bg-white px-4 py-5 shadow-sm">
          <h1 className="text-center text-2xl font-semibold">
            Aconsegueix la millor qualitat
          </h1>
        </header>

        <section className="rounded-md bg-neutral-200 p-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

            <ServiceCard 
              title="SEO"
              description="Seo d'una pagina web"
              price={SEO_PRICE}
              isSelected={seoSelected}
              onToggle={()=> setSeoSelected((prev) => !prev)} 
            />
            <ServiceCard 
              title="ADS"
              description="ADS d'una pagina web"
              price={ADS_PRICE}
              isSelected={adsSelected}
              onToggle={()=> setAdsSelected((prev) => !prev)} 
            />
            <ServiceCard 
              title="WEB"
              description="WEB d'una pagina web"
              price={WEB_PRICE}
              isSelected={webSelected}
              onToggle={()=> setWebSelected((prev) => !prev)} 
            >
              {webSelected && (
                <WebOptions
                  pages={pages}
                  languages={languages}
                  onDecreasePages={decreasePages}
                  onIncreasePages={increasePages}
                  onDecreaseLanguages={decreaseLanguages}
                  onIncreaseLanguages={increaseLanguages}
                />
              )}
            </ServiceCard>
            
          </div>
        </section>

        <section className="mx-auto w-full max-w-md rounded-md bg-white px-4 py-4 shadow-sm">
          <h2 className="text-2xl font-medium">Pressupost total: {total} €</h2>
        </section>

        <QuoteForm></QuoteForm>

        <QuoteList></QuoteList>

      </div>
    </main>
  )
}

export default App
