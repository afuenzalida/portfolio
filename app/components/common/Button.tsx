'use client'

export default function Button({
  children,
  className = '',
  icon = false,
  ...props
}: {
  children: React.ReactNode
  className?: string
  icon?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition ease-in-out duration-200 hover:brightness-[110%] py-2 rounded ${
        icon ? 'px-2' : 'px-4'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
