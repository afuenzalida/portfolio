import NavBar from '@/components/layout/NavBar'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-[calc(100vh-(theme(spacing.6)*2))]">
      <header className="flex justify-end">
        <NavBar />
      </header>
      {children}
    </div>
  )
}
