import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  res.send('API de usuários funcionando! Use /users para interações.')
})

app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).json(req.body)
}) 

app.get('/users', async (req, res) => {
    const { name, email, age } = req.query

    let usuarios

    if (name || email || age) {
        usuarios = await prisma.user.findMany( {
            where: {
                name,
                email,
                age
            }
        })
    } else {
        usuarios = await prisma.user.findMany()
    }

    res.status(200).json(usuarios)
})

app.put('/users/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).json(req.body)
})

app.delete('/users/:id', async (req,res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Usuário deletado com sucesso!" })
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})