import path from "path";
import fs from "fs";
import { currentDirectory, setCurrentDirectory } from "../../Actions/index.js";
export const cd = async (args) => {
    try {
        const selectPath = path.join(currentDirectory, args)
        const stats = await fs.promises.stat(selectPath)
        if (!stats.isDirectory()) {
            console.error('not directory')
        }
        else {
            setCurrentDirectory(selectPath)
        }
    } catch {
        throw new Error('operation is failed')
    }
}