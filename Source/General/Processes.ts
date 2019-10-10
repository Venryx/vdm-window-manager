let {exec, execSync} = require("child_process");

export class RunOptions {
	async = true;
}
export function Run(fileToRun: string, args?: string, options = new RunOptions()) {
	fileToRun = fileToRun.replace(/\//g, "\\");

	let command = `"${fileToRun}"` + (args ? ` ${args}` : "");
	try {
		return (options.async ? exec : execSync)(command);
	} catch (ex) {
		console.log("Error: " + ex);
	}
}
export function RunSync(fileToRun: string, args?: string, options = new RunOptions().VSet({async: false})): string {
	let result = Run(fileToRun, args, options);
	return result != null ? result.toString() : null;
}

export class Process {
	id: number;
	name: string;
}

export function GetListOfProcesses() {
	let output = RunSync("tasklist") || "";
	let lines = output.trim().split("\n"); // split by lines
	var processLines = lines.slice(2); // remove the table headers
	return processLines.map(line=> {
		let match = line.match(/(.+?)[\s]+?(\d+)/);
		return {id: match[2], name: match[1]};
	});
}