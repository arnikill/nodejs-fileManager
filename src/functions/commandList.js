import { up } from "./up.js";
import { cd } from "./cd.js";
import { add } from './add.js'
import { ls } from "./ls.js";
import { move } from "./move.js";
import { cat } from "./cat.js";
import { copy } from "./copy.js";
import { rename } from "./rename.js";
import { deleteFile } from "./deleteFile.js";
import { osActions } from "./up.js";
import { hash } from "./hash.js";
import { compress } from "./compress.js";
import { decompress } from "./decompress.js"

export const commandList = {
    ".exit": () => {
        process.exit(0);
    },
    up,
    cd,
    add,
    ls,
    move,
    cat,
    copy,
    rename,
    deleteFile,
    os: osActions,
    hash,
    compress,
    decompress

}