import { notStrictEqual } from 'assert/strict'
import express from 'express'
import {Request, Response} from 'express'
import {Note} from './note'
import { v4 as uuidv4 } from 'uuid'

const app = express()

app.use(express.json())

const notes: Note[] = []  


app.get('/note', function (req: Request, res: Response) {
  res.send(notes)
})


app.post('/note', function (req: Request, res: Response) {       
  const id = uuidv4();
  const title = req.body.title
  const content = req.body.content
  const note = req.body;
  const noteid = {...note, id:id}

  if (title===undefined){
    res.status(400).send("Brak Tytułu")
  }

  if (content===undefined){
    res.status(400).send("Brak Treści")
  }

  notes.push(noteid);
  console.log(notes)
  res.status(201).send(noteid)

  })
app.get('/note/:id', function (req: Request, res: Response) {
  const id=req.params.id
  const result = notes.find(el => el.id === id)

  if (result){
    res.status(200).send(result)
  }
  else {
    res.status(404).send("Błędne id notatki")
  }
})


app.put('/note/:id', function (req: Request, res: Response) {
  const id = req.params.id
  const changeNote = req.body
  const title = req.body.title
  const content = req.body.content

  const result = notes.find(el => el.id === id)
  const index = notes.indexOf(result!, 0);

  if (title === undefined) {
      res.status(404).send('Podaj poprawny tytuł!')
      console.log("Podaj poprawny tytuł!")
  }

  if (content === undefined) {
      res.status(404).send('Podaj poprawna tresc!')
      console.log("Podaj poprawna tresc!")
  }

  if (index > -1) {
      notes[index] = changeNote
      res.status(204).send(notes)
  }
  else {
      res.status(404).send("Notatka nie istnieje")
  }
  console.log(notes)
})


app.delete('/note/:id', function (req: Request, res: Response) {
  const id=req.params.id
  const result = notes.find(el => el.id === id)
  const index = notes.indexOf(result!,0)

  if (index > -1) {
    notes.splice(index,1)
  }
  res.status(204).send("Notatka Usunięta")
})

app.listen(3000)