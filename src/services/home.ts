import { doGet } from './api'

export const fetchUsers = () => {
  return doGet("/users")
}