import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import staticFastify from '@fastify/static'
import { resolve } from 'path'

import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'
import { memoriesPublicRoutes } from './routes/memories-public'
import { usersRoutes } from './routes/users'

const app = fastify()

app.register(multipart)
app.register(staticFastify, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})

app.register(memoriesRoutes)
app.register(memoriesPublicRoutes)
app.register(authRoutes)
app.register(uploadRoutes)
app.register(usersRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP Server running on port 3333')
  })
