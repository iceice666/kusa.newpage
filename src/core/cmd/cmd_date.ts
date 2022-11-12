import { Cmd, Params, Opts } from "../cmd"

const date: Cmd = {
    cmd: "date",
    func: () => { new Date().toLocaleString() }
}

export default date