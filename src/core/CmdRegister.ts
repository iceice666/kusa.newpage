
import { Cmd, } from "./cmd"


import { promises as fsp } from "fs"

const cmdsDirPath: string = "/cmd/";

const enabled_cmd: string[] = [
    "date"
]


let CmdList: Cmd[] = [];

let CmdMap: Record<string, Cmd> = {};


enabled_cmd.forEach((filenames) => {
    import(`./cmd/cmd_${filenames}.ts`)
        .then((module) => {
            CmdList.push(module.cmd);
            CmdMap[module.cmd] = module.func;

        })
})

export { CmdList, CmdMap }