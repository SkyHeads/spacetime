'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import dayjs from 'dayjs'
import classNames from 'classnames'
import { useState } from 'react'

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

interface TimelineProps {
  myMemoriesData: Memory[]
  memoriesPublicData: Memory[]
}

export default function Timeline({
  myMemoriesData,
  memoriesPublicData,
}: TimelineProps) {
  const [isMyMemories, setIsMyMemories] = useState(true)

  function toggleToMyMemories() {
    setIsMyMemories(true)
  }

  function toggleToMemoriesPublic() {
    setIsMyMemories(false)
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="mt-3 flex flex-col justify-center gap-2 md:flex-row">
        <button
          type="button"
          className={classNames(
            'rounded border-[2px] border-gray-700 px-4 py-2 transition-colors hover:bg-gray-700',
            {
              'bg-transparent': !isMyMemories,
              'bg-gray-700': isMyMemories,
            },
          )}
          onClick={() => toggleToMyMemories()}
        >
          Ver minhas mémorias
        </button>
        <button
          type="button"
          className={classNames(
            'rounded border-[2px] border-gray-700 px-4 py-2 transition-colors hover:bg-gray-700',
            {
              'bg-transparent': isMyMemories,
              'bg-gray-700': !isMyMemories,
            },
          )}
          onClick={() => toggleToMemoriesPublic()}
        >
          Ver memórias públicas
        </button>
      </div>

      {isMyMemories &&
        myMemoriesData.map((memory) => {
          return (
            <div key={memory.id} className="space-y-4">
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
                {memory.excerpt}
              </p>
              <Link
                href={`/memories/${memory.id}`}
                className="w-34 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
              >
                Ler mais
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )
        })}

      {!isMyMemories &&
        memoriesPublicData.map((memory) => {
          return (
            <div key={memory.id} className="space-y-4">
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
                {memory.excerpt}
              </p>
              <Link
                href={`/memories/${memory.id}`}
                className="w-34 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
              >
                Ler mais
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )
        })}
    </div>
  )
}
