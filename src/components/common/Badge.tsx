'use client'

export default function Badge({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div
      className={`rounded-lg bg-primary dark:bg-primary-700 text-primary-foreground dark:text-primary-50 py-0.5 px-2 ${className} hover:brightness-[110%] hover:shadow-md select-none`}
      {...props}
    >
      {children}
    </div>
  )
}
