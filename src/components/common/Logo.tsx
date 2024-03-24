'use client'

import { HTMLAttributes } from 'react'

export default function Logo({
  titleClassName = '',
  subTitleClassName = '',
  ...props
}: {
  titleClassName?: string
  subTitleClassName?: string
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <h1 className={`text-4xl font-extrabold font-display select-none ${titleClassName}`}>
        Andrés Fuenzalida
      </h1>
      <h2
        className={`text-md select-none text-primary drop-shadow-lg ${subTitleClassName}`}
        style={{
          textShadow: `0 0 0.5rem rgba(0, 0, 0, 0.05)`,
        }}
      >
        Full Stack Developer
      </h2>
    </div>
  )
}
