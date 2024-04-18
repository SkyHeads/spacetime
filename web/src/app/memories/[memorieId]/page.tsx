import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import { ArrowLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

interface Memory {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

interface memorieIdProps {
  params: {
    memorieId: string
  }
}

export default async function MemorieId({ params }: memorieIdProps) {
  const token = cookies().get('token')?.value

  const response = await api.get(`/memories/${params.memorieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response) {
    return <EmptyMemories />
  }

  const memory: Memory = response.data

  return (
    <div className="flex flex-1 flex-col gap-10 p-8">
      <div className="space-y-4">
        <time className=" -ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
        </time>
        <Image
          src={memory.coverUrl}
          alt=""
          width={592}
          height={280}
          className="aspect-video w-full rounded-lg object-cover"
        />
        <p className="text-lg leading-relaxed text-gray-100">
          {memory.content}
        </p>
        <Link
          href="/"
          className="w-34 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
      </div>
    </div>
  )
}
