import fs from 'fs'
import { currentDirectory } from '../../Actions/index.js'
export const ls = async () => {
    try {
        const readFile = fs.promises.readdir(currentDirectory, {
            withFileTypes: true
        })
        const fileStats = []
        const directories = []
        const files = []
        for (const catalog of readFile) {
            const directoryPath = path.join('currentDirectory', catalog)
            if (!fs.existsSync(directoryPath)) {
                continue
            }
            const stats = fs.statSync(directoryPath)
            if (stats.isDirectory()) {
                directories.push({ Name: catalog, Type: 'directory' })
            } else if (stats.isFile()) {
                files.push({ Name: catalog, Type: 'files' })
            }
            fileStats.push(...directories, ...files)
        }
        fileStats.sort((a, b) => {
            if (a.Type === b.Type) {
                return a.Name.localeCompare(b.Name)
            } else {
                return a.Type.localeCompare(b.Type)
            }
        })
        console.table(fileStats)
    } catch {
        throw new Error('operation is failed')
    }
}
await ls()