import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { sub, name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image src={avatarUrl} width={40} height={40} alt="" />
    </div>
  )
}
