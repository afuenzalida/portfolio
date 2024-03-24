import path from 'path'
import { promises as fs } from 'fs'
import jsYaml from 'js-yaml'

export async function getYAMLFileData(fileName: string) {
  const dataDirectory = path.join(process.cwd(), '/src/data')
  const fileContent = await fs.readFile(dataDirectory + `/${fileName}`, 'utf8')

  return jsYaml.load(fileContent)
}
