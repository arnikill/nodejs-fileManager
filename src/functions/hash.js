import path from "path";
import fs from "fs";
import crypto from "crypto";
import { currentDirectory } from "../../Actions/index.js"

export const hash = async (args) => {
    const pathToFile = path.join(args, currentDirectory)
    const readStream = await fs.promises.createReadStream(pathToFile, "utf-8")
    const hash = crypto.createHash('sha256')
    return new Promise((resolve, reject) => {
        readStream.on('data', (chunk) => {
            hash.update(chunk)
        })
        readStream.on('end', () => {
            const hexHash = hex.digest('hex')
            console.log(`hash for file SHA256 : ${hexHash.digest('hex')}`)
            resolve(hexHash)
        })
        readStream.on('error', (error) => {
            console.log('Error in reading file:', error);
            reject(error);
        });
    })
}
