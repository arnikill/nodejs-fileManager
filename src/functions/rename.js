import fs from 'fs'
import path from 'path'
import { currentDirectory } from '../../Actions/index.js'
export const rename = async (args) => {
    const [oldFileName, NewFileName] = args.split(" ", 2)
    const pathToFile = path.join(currentDirectory, oldFileName)
    const pathToRenameFile = path.join(currentDirectory, NewFileName)
    try {
        await fs.promises.rename(pathToFile, pathToRenameFile)
        console.log('file was renamed successfully')
    } catch {
        throw new Error('operation is failed')
    }
}