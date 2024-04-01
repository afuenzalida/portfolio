'use client'

export default function TimeLineContainer({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className={`relative border-s border-primary/30 ${className}`} {...props}>
      {(children as React.ReactNode[]).map((subChildren, index) => (
        <li key={index} className="ms-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary"></div>
          {subChildren}
        </li>
      ))}
    </ol>
  )
}
