export interface ShawarmaState {
  orders: {
    id?: number | string
    meat: string
    exceptions: string
    size: string
    name: string
    created: string
  }[]
}