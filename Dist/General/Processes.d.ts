export declare class RunOptions {
    async: boolean;
}
export declare function Run(fileToRun: string, args?: string, options?: RunOptions): any;
export declare function RunSync(fileToRun: string, args?: string, options?: RunOptions): string;
export declare class Process {
    id: number;
    name: string;
}
export declare function GetListOfProcesses(): {
    id: string;
    name: string;
}[];
