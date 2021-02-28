
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length === 0) return [];

    const mapFunc = (val, index) => {
        if (index % 2 === 1) return val.reverse();
        return val;
    }

    return matrix.map(mapFunc).flat();

}
