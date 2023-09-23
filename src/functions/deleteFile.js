import fs from 'fs/promises'
import { currentDirectory } from "../../Actions/index.js"
import path from 'path'
export const remove = async (args) => {
    try {
        const pathToDeleteFile = path.join(currentDirectory, args)
        await fs.promises.unlink(pathToDeleteFile);
        console.log(`file "${pathToDeleteFile}" succsessfully deleted`)
    } catch {
        throw new Error("Oops,operation is failed")
    }
}