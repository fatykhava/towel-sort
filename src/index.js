
// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (arguments.length === 0 || matrix.length === 0) return [];

	let arr = [];
	arr.push(matrix[0]);
	for (let i = 1; i < matrix.length; i++) {
		if (i % 2 === 0) {arr.push(matrix[i]);}
		else {arr.push(matrix[i].reverse());}
	}
	return arr.flat();
}
