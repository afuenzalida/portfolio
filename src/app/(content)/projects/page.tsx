import { Card, CardBody, CardFooter, CardHeader, CardImage } from '@/components/common/Card'
import { ExternalLinkIcon } from 'lucide-react'
import { getYAMLFileData } from '@/utils/static-files'

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.projects.map((project) => (
          <Card key={project.title}>
            <CardImage src={project.imageUrl} />
            <CardHeader>
              <span className="font-bold">{project.title}</span>
            </CardHeader>
            <CardBody>{project.description}</CardBody>
            <CardFooter>
              <a href={project.url} target="_blank">
                <span className="flex gap-1 items-center font-bold text-primary">
                  <ExternalLinkIcon size="1rem" /> Visitar
                </span>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
