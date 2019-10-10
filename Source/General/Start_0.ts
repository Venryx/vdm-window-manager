import "./Start_0"; // fake/empty import, so this module is correctly seen as module (rather than raw js script)

// special, early, definitely-safe codes
//var g = window as any;
declare global { const g; } global["g"] = global;

declare global { function G(...globalHolders); } g.G = G;
function G(...globalHolders) {
	for (let globalHolder of globalHolders) {
		g.Extend(globalHolder);
	}
}