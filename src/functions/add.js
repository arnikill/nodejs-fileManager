import path from "path";
import fs from 'fs';
import { currentDirectory } from "./index.js";
export const add = async (args) => {
    return new Promise((resolve, reject) => {
       const pathToFile = path.join(currentDirectory,args)
        fs.promises.writeFile(pathToFile, " ", "utf-8", (err) => {
            if (err) {
                reject(err)
            } else {
                resolve({ message: "file added successfully" })
            }
        })
    })

}