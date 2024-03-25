import React from 'react'
import Badge from '@/components/common/Badge'
import TimeLineContainer from '@/components/common/TimeLineContainer'
import { getYAMLFileData } from '@/utils/static-files'

interface Data {
  title: string
  experiences: {
    company: string
    location: string
    position: string
    fromDate: string
    toDate: string | null
    responsabilities: string[]
    technologies: string[]
  }[]
}

export default async function Experience() {
  const data = (await getYAMLFileData('experience.yaml')) as Data

  return (
    <main>
      <h1 className="text-2xl font-display font-bold mb-4">Experiencia laboral</h1>

      <TimeLineContainer>
        {data.experiences.map((work, index) => (
          <React.Fragment key={work.company}>
            <div>
              <div className="flex justify-between">
                <span className="text-lg font-bold text-primary">{work.position}</span>
              </div>

              <div className="flex flex-col gap-1 md:flex-row justify-between">
                <span>
                  {work.company} <span className="text-gray-500">| </span>{work.location}
                </span>
                <span className="text-primary text-sm">
                  {work.fromDate} — {work.toDate || 'Actualidad'}
                </span>
              </div>

              <div className="mt-4">
                <ul>
                  {work.responsabilities.map((responsability) => (
                    <li className="flex items-baseline md:items-center gap-2" key={responsability}>
                      <span className="text-primary text-sm">●</span> {responsability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {work.technologies.map((technology) => (
                  <Badge key={technology}>
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>
            {index + 1 < data.experiences.length && <hr className="my-4 border-t-primary/30" />}
          </React.Fragment>
        ))}
      </TimeLineContainer>
    </main>
  )
}
