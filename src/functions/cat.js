import fs from 'fs';
import path from 'path'
import { currentDirectory } from './index.js';
export const cat = async (args) => {
    try {
        const filePath = path.join( currentDirectory,args)
        const readStrean = fs.createReadStream(filePath, 'utf-8')
        for await (const chunk of readStrean) {
            console.log(chunk)
        }
    } catch {
        throw new Error('Oops,operation is failed')
    }

}