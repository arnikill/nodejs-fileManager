import os from 'os'
export const osActions = async (args) => {
    return new Promise((resolve, reject) => {
        try {
            const arg = args.split("")
            const result = {}
            if (arg.includes("--EOL")) {
                result.eol = os.EOL
            }
            if (arg.includes("--cpu")) {
                result.cpu = os.cpu().map((cpu, index) => {
                    const { model, speed } = cpu
                    return `CPU ${index + 1}: ${model} - ${speed / 1000} GHz`
                })
            }
            if (arg.includes("--homedir")) {
                result.homeDirectory = os.homedir()
            }
            if (arg.includes("--username")) {
                result.username = os.userInfo({ encoding: "utf-8" }).username
            }
            if (arg.includes("--architecture")) {
                result.arch = os.arch()
            }
            resolve(result)
        } catch (error) {
            reject('Invalid arguments', error)
        }
    })
}
await osActions()





















