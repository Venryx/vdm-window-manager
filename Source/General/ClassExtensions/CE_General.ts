interface Array<T> { SequenceEquals(otherArray: any[], equalsFunc?: (a, b)=>boolean): boolean; }
Array.prototype._AddFunction_Inline = function SequenceEquals(this: any[], otherArray: any[], equalsFunc = ((a, b)=>a == b)) {
	if (this.length != otherArray.length) return false;
	return this.every((item, index)=> {
		return equalsFunc(item, otherArray[index]);
	});
};