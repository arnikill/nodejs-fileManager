import { createReadStream, createWriteStream } from 'fs'
import { currentDirectory } from '../../Actions/index.js'
import path from 'path'
import zlib from 'zlib'
export const decompress = async (args) => {
    try {
        const [pathToFile] = args.split(' ', 2)
        const pathFile = path.join(pathToFile, currentDirectory)
        const anotherPathToFile = path.join(currentDirectory, (path.basename(pathToFile, extname(pathToFile))))
        const readStream = createReadStream(pathFile)
        const writeStream = createWriteStream(anotherPathToFile)
        const brotliStream = zlib.createBrotliDecompress()
        readStream.pipe(brotliStream).pipe(writeStream)

        await new Promise((resolve, reject) => {
            writeStream.on('finish', () => {
                console.log('file successfull decompressed!')
                resolve()
            })
            writeStream.on('error', (error) => {
                console.log('error decompressing file:', error.message)
                reject(error)
            })
        })
    } catch {
        throw new Error('Ops,operation is failed')
    }


}
await decompress()