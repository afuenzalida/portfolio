'use client'

export default function Button({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-primary text-primary-foreground transition ease-in-out duration-200 hover:brightness-[110%] px-4 py-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
