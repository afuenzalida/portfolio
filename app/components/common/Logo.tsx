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
      <h1
        className={`text-4xl font-extrabold font-display select-none text-primary ${titleClassName}`}
      >
        Andrés Fuenzalida
      </h1>
      <h2 className={`text-md select-none drop-shadow-lg ${subTitleClassName} text-shadow`}>
        Full Stack Developer
      </h2>
    </div>
  )
}
