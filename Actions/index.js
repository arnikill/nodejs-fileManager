import readline from "readline";
import { getUserName } from "./getUserName";
import { inputActions } from "./inputActions"
import os, { homedir } from "os";

// npm run start -- --username=arnikill

const username = getUserName()
const homeDirect = os.homedir()
export let currentDirectory = homeDirect
export let setUpCurrentDirectory = (newDIrect) => {
    currentDirectory += newDIrect
}
const fileManager = () => {
    console.log(`Welcome to the fileManager dear ${username}`)
    console.log(`You are in current directory ${homeDirect}`)

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.on('line', async (input) => {
        await inputActions(input)
        console.log(`You are in current directory ${currentDirectory}`)
    })
    rl.on('exit', () => {
        console.log(`Thank you for usin file Manager dear ${username}, goodbye!!!`)
    })
}
fileManager()