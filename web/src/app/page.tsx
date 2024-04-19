import { cookies } from 'next/headers'
import { api } from '@/lib/api'

import { EmptyMemories } from '@/components/EmptyMemories'
import Timeline from '@/components/Timeline'

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  const responseMemoriesPublic = await api.get('/memories/public')

  const memoriesPublic: Memory[] = responseMemoriesPublic.data

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <Timeline myMemoriesData={memories} memoriesPublicData={memoriesPublic} />
  )
}
