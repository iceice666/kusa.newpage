interface Cmd {
    cmd: string;
    desc?: string | null;
    alias?: string[];
    subCmd?: Record<string, Cmd>;
    params?: Params[];
    opts?: Opts[];
    func: (cmd_args?: string[]) => void;
}

interface Params {
    key: string;
    desc?: string;
    default?: string | Boolean;
    required?: boolean;
}

interface Opts {
    key: string;
    alias?: string[];
    desc?: string;
    default?: string | Boolean;
    required?: boolean;
}

export { Cmd, Params, Opts }

help = {}
export { help }