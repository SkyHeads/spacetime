import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app.get('/', async () => {
  return { hello: 'world' }
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on port 3333')
  })
