import Link from 'next/link'
import Button from './components/common/Button'

export default function Error() {
  return (
    <div className="w-full h-[calc(100vh-(theme(spacing.6)*2))]">
      <div className="h-full flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-extrabold font-display text-primary">404</h1>
          <h2>Página no encontrada</h2>
        </div>

        <Link href="/">
          <Button>Volver a Inicio</Button>
        </Link>
      </div>
    </div>
  )
}
