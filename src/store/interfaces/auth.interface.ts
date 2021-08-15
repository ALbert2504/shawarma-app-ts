export type stateType = {
  user: {
    auth_id: string
    email: string
    id: number | string
    role: string
  } | null
  access_token: string | null
};