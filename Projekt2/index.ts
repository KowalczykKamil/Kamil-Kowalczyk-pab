import { notStrictEqual } from 'assert/strict'
import express from 'express'
import {Request, Response} from 'express'

const app = express()

app.use(express.json())



app.post('/note', function (req: Request, res: Response) {
    const note = {
        id:1,
        tittle:"Notatka 1",
        content:"Moja pierwsza notatka",
    }
    notes.push(note)
    res.status(200).send('POST Hello World')
  })
app.get('/note/:id', function (req: Request, res: Response) {
  res.send('GET Hello World')
})
app.put('/note/:id', function (req: Request, res: Response) {
    console.log(req.body) // e.x. req.body.title 
    res.status(200).send('PUT Hello World')
})
app.delete('/note/:id', function (req: Request, res: Response) {
    console.log(req.body) // e.x. req.body.title 
    res.status(200).send('POST Hello World')
})

app.listen(3000)