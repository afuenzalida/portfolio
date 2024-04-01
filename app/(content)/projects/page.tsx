import { Card, CardBody, CardFooter, CardHeader, CardImage } from '@/components/common/Card'
import { ExternalLinkIcon } from 'lucide-react'
import { getYAMLFileData } from '@/utils/static-files'
import Link from 'next/link'
import Button from '@/components/common/Button'

interface Data {
  title: string
  projects: {
    title: string
    imageUrl: string
    description: string
    url: string
  }[]
}

export default async function Projects() {
  const data = (await getYAMLFileData('projects.yaml')) as Data

  return (
    <main>
      <h1 className="text-2xl font-display font-bold mb-4">Proyectos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.projects.map((project) => (
          <Card key={project.title}>
            <div className="flex flex-col gap-3">
              <CardImage src={project.imageUrl} />
              <CardHeader>
                <span className="font-bold">{project.title}</span>
              </CardHeader>
              <CardBody>{project.description}</CardBody>
            </div>
            <CardFooter className="mt-2">
              <Link href={project.url} target="_blank">
                <Button className="w-full rounded-t-none rounded-b-lg">
                  <span className="flex gap-1 items-center justify-center">
                    <ExternalLinkIcon size="1rem" /> Visitar
                  </span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
