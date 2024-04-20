'use client'

import { CheckCircle, Link as Link1 } from 'lucide-react'
import { useState } from 'react'

interface CopyToClipBoardProps {
  memorieId: string
}

export function CopyToClipBoard({ memorieId }: CopyToClipBoardProps) {
  const [isClipBoardClick, setIsClipBoardClick] = useState(false)

  function copyToClipBoard() {
    const mainUrl = window.location.origin
    navigator.clipboard.writeText(`${mainUrl}/memories/public/${memorieId}`)
    setIsClipBoardClick(true)

    setTimeout(() => {
      setIsClipBoardClick(false)
    }, 3000)
  }

  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-1 rounded-full bg-zinc-700 px-5 py-3 font-alt text-sm uppercase leading-none transition-colors hover:bg-zinc-600"
      onClick={() => copyToClipBoard()}
    >
      {isClipBoardClick ? (
        <>
          <CheckCircle className="h-5 w-5" text-green-400 />
        </>
      ) : (
        <Link1 className="h-5 w-5"></Link1>
      )}
      <p>Copiar Link para compartilhar a memória</p>
    </button>
  )
}
