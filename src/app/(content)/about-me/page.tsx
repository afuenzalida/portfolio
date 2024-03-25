import Badge from '@/components/common/Badge'
import TimeLineContainer from '@/components/common/TimeLineContainer'
import { getYAMLFileData } from '@/utils/static-files'

interface Data {
  aboutMe: string
  technicalSkills: string[]
  education: {
    name: string
    location: string
    title: string
    fromDate: string
    toDate: string
  }[]
  certifications: {
    name: string
    company: string
    date: string
  }[]
}

export default async function AboutMe() {
  const data = (await getYAMLFileData('about-me.yaml')) as Data

  return (
    <main>
      <h1 className="text-2xl font-display font-bold mb-4">Sobre mí</h1>

      <div className="flex flex-col gap-4">
        <p>{data.aboutMe}</p>

        <div>
          Habilidades técnicas:
          <div className="flex gap-2 mt-2 flex-wrap">
            {data.technicalSkills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-display font-bold mt-10 mb-4">Formación académica</h2>

      <TimeLineContainer>
        {data.education.map((educationItem, index) => (
          <div key={educationItem.name}>
            <div className="flex justify-between">
              <span className="text-lg font-bold text-primary">{educationItem.title}</span>
            </div>

            <div className="flex flex-col gap-1 md:flex-row justify-between">
              <span>
                {educationItem.name} <span className="text-gray-500">| </span>
                {educationItem.location}
              </span>
              <span className="text-primary text-sm">
                {educationItem.fromDate} — {educationItem.toDate || 'Actualidad'}
              </span>
            </div>

            {index + 1 < data.education.length && <hr className="my-4 border-t-primary/30" />}
          </div>
        ))}
      </TimeLineContainer>

      <h2 className="text-2xl font-display font-bold mt-10 mb-4">Certificaciones</h2>

      <TimeLineContainer>
        {data.certifications.map((certification, index) => (
          <div key={certification.name}>
            <div className="flex justify-between">
              <span className="text-lg font-bold text-primary">{certification.name}</span>
            </div>

            <div className="flex flex-col gap-1 md:flex-row justify-between">
              <span>{certification.company}</span>
              <span className="text-primary text-sm">{certification.date}</span>
            </div>

            {index + 1 < data.education.length && <hr className="my-4 border-t-primary/30" />}
          </div>
        ))}
      </TimeLineContainer>
    </main>
  )
}
