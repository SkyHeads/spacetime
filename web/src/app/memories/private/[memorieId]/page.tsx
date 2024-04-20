import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { CopyToClipBoard } from '@/components/CopyToClipBoard'

dayjs.locale(ptBr)

interface Memory {
  id: string
  userId: string
  coverUrl: string
  content: string
  isPublic: boolean
  createdAt: string
}

interface User {
  id: string
  githubId: string
  name: string
  login: string
  avatarUrl: string
  memories: Memory[]
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

  const memory: Memory = response.data

  const responseUser = await api.get(`/user/${memory.userId}`)

  const user: User = responseUser.data

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
        <div className="flex items-center gap-3 text-left">
          <Image
            src={user.avatarUrl}
            className="h-10 w-10 rounded-full"
            width={40}
            height={40}
            alt=""
          />
          <div>
            <h1 className="text-sm leading-snug text-gray-50">
              {user.name}{' '}
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                className="text-gray-100 underline"
                rel="noreferrer"
              >
                (@<span className="capitalize">{user.login}</span>)
              </a>
            </h1>
            <p className="text-sm leading-snug">Autor da memória</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed text-gray-100">
          {memory.content}
        </p>
        <div className="flex flex-col items-center gap-2 md:flex-row">
          {memory.isPublic && <CopyToClipBoard memorieId={params.memorieId} />}
        </div>
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
