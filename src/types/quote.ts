export type Quote = {
  id: string
  name: string
  phone: string
  email: string
  total: number
  services: string[]
  date: string
  webOptions?: {
    pages: number
    languages: number
  }
}