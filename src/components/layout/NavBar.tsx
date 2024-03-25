'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ThemeSwitcher } from '../common/ThemeSwitcher'

const routes = [
  {
    label: 'Inicio',
    path: '/',
  },
  {
    label: 'Sobre mí',
    path: '/about-me',
  },
  {
    label: 'Experiencia laboral',
    path: '/experience',
  },
  {
    label: 'Proyectos',
    path: '/projects',
  },
  {
    label: 'Contacto',
    path: '/contact',
  },
]

export default function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  function redirectTo(route: string) {
    setIsOpenMenu(false)
    router.push(route)
  }

  function handleOutsideMenuClick(e: MouseEvent) {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setIsOpenMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideMenuClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideMenuClick)
    }
  })

  return (
    <nav ref={navRef}>
      <div className="flex md:hidden gap-4">
        <ThemeSwitcher size="1.5rem" />
        <button onClick={() => setIsOpenMenu((prevValue) => !prevValue)}>
          {isOpenMenu ? <XIcon size="2rem" /> : <MenuIcon size="2rem" />}
        </button>
      </div>

      <div
        className={`bg-background/80 px-5 py-3 ${
          isOpenMenu ? 'absolute' : 'hidden'
        } z-50 right-8 top-16 rounded-md shadow-xl shadow-primary/10 backdrop-blur-md border border-primary`}
      >
        <div className="flex flex-col w-full gap-3">
          {routes.map((route) => (
            <button
              key={route.path}
              onClick={() => redirectTo(route.path)}
              className={`transition ease-in-out duration-100 ${
                pathname === route.path ? 'text-primary font-bold' : 'text-current'
              }`}
            >
              {route.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:flex gap-6">
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            <button
              className={`transition ease-in-out duration-100 ${
                pathname === route.path ? 'text-primary' : 'text-current'
              }`}
            >
              {route.label}
            </button>
          </Link>
        ))}

        <ThemeSwitcher />
      </div>
    </nav>
  )
}
