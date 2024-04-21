import { UpdateMemoryForm } from '@/components/UpdateMemoryForm'
import { api } from '@/lib/api'
import { ChevronLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

interface memorieIDProps {
  params: {
    memorieId: string
  }
}

interface Memory {
  id: string
  userId: string
  coverUrl: string
  content: string
  createdAt: string
  isPublic: boolean
}

export default async function UpdateMemories({ params }: memorieIDProps) {
  const token = cookies().get('token')?.value

  const response = await api.get(`/memories/${params.memorieId}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })

  const memory: Memory = response.data

  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>
      <UpdateMemoryForm memory={memory} memorieId={params.memorieId} />
    </div>
  )
}
