'use client'

import Cookie from 'js-cookie'
import { Camera } from 'lucide-react'
import { MediaPicker } from './MediaPicker'
import { FormEvent, SyntheticEvent, useState } from 'react'

import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

interface Memory {
  id: string
  userId: string
  coverUrl: string
  content: string
  createdAt: string
  isPublic: boolean
}

interface memorieIDProps {
  memorieId: string
  memory: Memory
}

export function UpdateMemoryForm({ memorieId, memory }: memorieIDProps) {
  const [isFileSelected, setIsFileSelected] = useState(false)
  const [memoryText, setMemoryText] = useState(memory.content)
  const router = useRouter()

  const token = Cookie.get('token')

  async function handleUpdateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverUrl')

    let coverUrl = ''

    if (isFileSelected) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload!)

      const uploadResponse = await api.post('/upload', uploadFormData)
      coverUrl = uploadResponse.data.fileUrl
    }

    if (coverUrl === '') {
      coverUrl = memory.coverUrl
    }

    await api.put(
      `/memories/${memorieId}`,
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    router.push('/')
  }

  function addDataValue(event: SyntheticEvent) {
    const target = event.target as HTMLTextAreaElement
    setMemoryText(target.value)
  }

  return (
    <form onSubmit={handleUpdateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className=" flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Anexar mídia
        </label>
        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memória pública
        </label>
      </div>

      <MediaPicker
        setIsFileSelected={setIsFileSelected}
        previewInitialValue={memory.coverUrl}
      />

      <textarea
        name="content"
        spellCheck={false}
        className="w-full resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        value={memoryText}
        onChange={(event) => addDataValue(event)}
      />

      <button
        type="submit"
        className="inline-block self-start rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        Salvar
      </button>
    </form>
  )
}
