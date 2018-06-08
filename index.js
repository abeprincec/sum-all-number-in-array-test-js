function sumItems(array) {
	return array.reduce((acc, curr) => {
		return acc + (curr instanceof Array ? sumItems(curr) : curr);
	}, 0);
}

console.log(sumItems([1, 2, 3, 4, 5]));

module.exports = sumItems;
