import { v4 as uuid } from 'uuid'
import fs from 'fs'
import path from 'path'

export default class Note {
  id: string
  name: string
  important: string
  done: string
  constructor(name: string) {
    this.id = uuid()
    this.name = name
    this.important = ''
    this.done = ''
  }
  toJSON = () => ({
    id: this.id,
    name: this.name,
    important: this.important,
    done: this.done
  })

  private write = (data: IData[]) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'notes.json'),
        JSON.stringify(data),
        (err) => {
          if (err) reject(err)
          else {
            resolve('')
          }
        }
      )
    })
  }
  save = async () => {
    const notes = await Note.getNotes()
    notes.push(this.toJSON())
    return this.write(notes)
  }

  static getNotes = (): Promise<IData[]> => {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'notes.json'),
        'utf-8',
        (err, content) => {
          if (err) reject(err)
          else {
            resolve(JSON.parse(content))
          }
        }
      )
    })
  }

  static getNote = (id: string) => {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'notes.json'),
        'utf-8',
        (err, content) => {
          if (err) reject(err)
          else {
            const data: IData[] = JSON.parse(content)
            const note = data.filter((note) => note.id === id)
            resolve(note)
          }
        }
      )
    })
  }

  update = async (id: string, update: IData) => {
    const notes = await Note.getNotes()
    const data = notes.map(note => {
      if (note.id === id) {
        note.id = update.id
        note.important = update.important
        note.done = update.done
        note.name = update.name
      }
      return note
    })
    return this.write(data)
  }
  delete = async (id: string) => {
    const notes = await Note.getNotes()
    const data = notes.filter(note => note.id !== id)
    return this.write(data)
  }
}

interface IData {
  id: string
  name: string
  important: string
  done: string
}
