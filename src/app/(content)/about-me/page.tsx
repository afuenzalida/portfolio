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
}

export default async function AboutMe() {
  const data = (await getYAMLFileData('about-me.yaml')) as Data

  return (
    <main>
      <h1 className="text-2xl font-display font-bold mb-4">Sobre mí</h1>

      <div className="flex flex-col gap-4">
        <p>{data.aboutMe}</p>

        <div>
          Las tecnologías que utilizo son:
          <div className="flex gap-1 mt-2 flex-wrap">
            {data.technicalSkills.map((skill) => (
              <Badge key={skill} className="text-sm">
                {skill}
              </Badge>
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
                {educationItem.name} <span className="text-secondary">| </span>
                {educationItem.location}
              </span>
              <span className="text-primary text-sm">
                {educationItem.fromDate} — {educationItem.toDate || 'Actualidad'}
              </span>
            </div>

            {index + 1 < data.education.length && <hr className="my-4 border-t-primary" />}
          </div>
        ))}
      </TimeLineContainer>
    </main>
  )
}
