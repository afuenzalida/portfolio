import Logo from '@/components/common/Logo'

export default function Home() {
  return (
    <main className="h-full">
      <div className="h-full relative flex flex-col justify-center items-center">
        <Logo className="z-10" titleClassName="text-6xl" subTitleClassName="text-2xl" />
      </div>
    </main>
  )
}
