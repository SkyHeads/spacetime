import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { prisma } from '../lib/prisma'

export async function memoriesPublicRoutes(app: FastifyInstance) {
  app.get('/memories/public', async () => {
    const memories = await prisma.memory.findMany({
      where: {
        isPublic: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 120).concat('...'),
        createdAt: memory.createdAt,
      }
    })
  })

  app.get('/memories/public/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })
}
