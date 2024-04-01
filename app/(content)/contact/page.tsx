import Button from '@/components/common/Button'
import { Input, TextArea } from '@/components/common/Input'

export default function Contact() {
  return (
    <main>
      <h1 className="text-2xl font-display font-bold mb-4">Contacto</h1>

      <p className="mb-4">
        Puedes llenar el siguiente formulario o contactarme directamente en{' '}
        <a className="underline text-primary" href="mailto:a.fuenzalida1494@gmail.com">
          a.fuenzalida1494@gmail.com
        </a>
        .
      </p>

      <form
        className="grid grid-cols-2 gap-6"
        action="https://formsubmit.co/a.fuenzalida1494@gmail.com"
        method="POST"
      >
        <div className="col-span-2 md:col-span-1">
          <label className="flex flex-col gap-2">
            Nombre
            <Input name="name" required />
          </label>
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="flex flex-col gap-2">
            Email
            <Input type="email" name="email" required />
          </label>
        </div>

        <div className="col-span-2">
          <label className="flex flex-col gap-2">
            Mensaje
            <TextArea rows={6} name="message" required />
          </label>
        </div>

        <div className="col-span-2 flex justify-center">
          <Button type="submit" className="w-min">
            Enviar
          </Button>
        </div>
      </form>
    </main>
  )
}
