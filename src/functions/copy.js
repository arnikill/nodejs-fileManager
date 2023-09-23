import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { currentDirectory } from '../../Actions/index.js';
export const copy = async (args) => {
    try {
        const [pathToFile] = args.slice(0, 2)
        const __filename = fileURLToPath(import.meta.url)
        const pathTo = path.join(pathToFile, currentDirectory)
        const filePath = path.join(__filename, currentDirectory)
        const readStream = fs.createReadStream(pathTo)
        const writeStream = fs.createWriteStream(filePath)
        readStream.pipe(writeStream)

        await new Promise((resolve, reject) => {
            writeStream.on('finish', () => {
                console.log('File copied successfully')
                resolve()
            })
            writeStream.on('error', (error) => {
                console.error('Error copying file:', error);
                reject(error);
            })
        })
    }
    catch {
        throw new Error("current operation is failed")
    }
}
await copy()