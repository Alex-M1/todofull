import axios from 'axios'
import { INotes } from '../redux'

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/notes',
})

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

export const API = {
  async getNotes(): Promise<INotes[]> {
    const response = await instance.get('/')
    const data = await response.data
    return data
  },
  async getNote(id: string) {
    const response = await instance.get(`/${id}`)
    const data = await response.data
    return data
  },
  async postNotes(name: string) {
    const response = await instance.post('/', { name })
    const data = await response.data
    return data
  },
  async updateNote(id: string, note: INotes) {
    const response = await instance.put(`/${id}`, { note })
    const data = await response.data
    return data
  },
  async deleteNote(id: string) {
    const response = await instance.delete(`/${id}`)
    const data = await response.data
    return data
  }
}
