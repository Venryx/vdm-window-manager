import "./Logging";

G({Log}); declare global { function Log(...args); }
function Log(...args) {
	return console.log(...args);
}