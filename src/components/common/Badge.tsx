'use client'

export default function Badge({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div
      className={`rounded-lg bg-primary text-primary-foreground py-0.5 px-2 ${className} hover:brightness-[110%] hover:shadow-md select-none`}
      {...props}
    >
      {children}
    </div>
  )
}
