export interface ShawarmaState {
  orders: {
    id?: number | string
    meat: string
    exceptions: string
    size: string
    user_name: string
    created: string
  }[]
}