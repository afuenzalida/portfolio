import Image from 'next/image'
import { HTMLAttributes } from 'react'

export function Card({
  children,
  body = false,
  ...props
}: { children: React.ReactNode; body?: boolean } & HTMLAttributes<HTMLDivElement>) {
  const extraClassName = body ? 'p-2' : 'flex flex-col gap-2'

  return (
    <div
      className={`flex flex-col justify-between bg-foreground/10 shadow-md shadow-foreground/20 rounded-lg ${extraClassName}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({
  children,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLHeadElement>) {
  return (
    <header className="px-3" {...props}>
      {children}
    </header>
  )
}

export function CardImage({
  src,
  alt = '',
  ...props
}: { src: string; alt?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="relative h-56" {...props}>
      <Image className="rounded-t-lg object-cover object-top" src={src} alt={alt} fill />
    </div>
  )
}

export function CardBody({
  children,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <main className="px-3" {...props}>
      {children}
    </main>
  )
}

export function CardFooter({
  children,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <footer className="px-3 pb-3" {...props}>
      {children}
    </footer>
  )
}
