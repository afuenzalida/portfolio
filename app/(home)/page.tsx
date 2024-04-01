import Button from '@/components/common/Button'
import Logo from '@/components/common/Logo'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-full">
      <div className="h-full relative flex flex-col justify-center items-center gap-6">
        <Logo className="z-10" titleClassName="text-6xl" subTitleClassName="text-2xl" />

        <div className="flex gap-2">
          <Link href="https://github.com/afuenzalida" target="_blank" title="Ir a perfil de GitHub">
            <Button className="rounded-full" icon>
              <GithubIcon />
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/afuenzalida"
            target="_blank"
            title="Ir a perfil de LinkedIn"
          >
            <Button className="rounded-full" icon>
              <LinkedinIcon />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
