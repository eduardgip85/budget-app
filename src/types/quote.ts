export type Quote = {
  id: string
  name: string
  phone: number
  email: string
  total: number
  services: string[]
  date: string
  webOptions?: {
    pages: number
    languages: number
  }
}