import { commandList } from "./commandList.js";

export const inputActions = async (input) => {
    try {
        const [actionName, ...args] = input.trim().split(" ");
        const joinArg = args.join(" ");
        const action = commandList[actionName];
        await action(joinArg);
    } catch {
        console.log("Invalid input");
    }
};
