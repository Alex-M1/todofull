import { Router } from 'express'
import Note from '../models/Note'
const router = Router()


router.get('/', async (req, res) => {
  try {
    Note.getNotes().then(data => res.send(data))
  } catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так'
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    Note.getNote(req.params.id).then((data) => res.send(data))
  } catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так'
    })
  }
})

router.post('/', async (req, res) => {
  try {
    if (req.body.name) {
      const note = new Note(req.body.name)
      await note.save()
      await Note.getNotes().then(data => res.send(data))
    }
  }
  catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так'
    })
  }

})

router.put('/:id', async (req, res) => {
  try {
    const note = new Note(req.body.name)
    await note.update(req.params.id, req.body.note)
    await Note.getNotes().then(data => res.send(data))
  }
  catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const note = new Note(req.body.name)
    await note.delete(req.params.id)
    await Note.getNotes().then(data => res.send(data))
  }
  catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так'
    })
  }
})


export default router