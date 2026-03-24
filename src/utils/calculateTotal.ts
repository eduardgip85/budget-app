type Params = {
  seoSelected: boolean
  adsSelected: boolean
  webSelected: boolean
  pages: number
  languages: number
}

export function calculateTotal({
  seoSelected,
  adsSelected,
  webSelected,
  pages,
  languages,
}: Params) {
  const SEO_PRICE = 300
  const ADS_PRICE = 400
  const WEB_PRICE = 500
  const EXTRA_PRICE = 30

  const webExtra = pages * EXTRA_PRICE - EXTRA_PRICE + languages * EXTRA_PRICE - EXTRA_PRICE

  return (
    (seoSelected ? SEO_PRICE : 0) +
    (adsSelected ? ADS_PRICE : 0) +
    (webSelected ? WEB_PRICE + webExtra : 0)
  )
}