import Logo from '@/components/common/Logo'
import NavBar from '@/components/layout/NavBar'
import Link from 'next/link'

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Logo
            className="cursor-pointer"
            titleClassName="text-xl text-primary"
            subTitleClassName="hidden"
          />
        </Link>

        <NavBar />
      </div>
      {children}
    </div>
  )
}
