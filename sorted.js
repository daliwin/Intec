function isSorted(input) {
	var len = input.length - 1
	for (var i = 0; i < len; i++) {
		if (input[i] > input[i + 1]) {
			return false
		}
	}
	return true
}

console.log(isSorted([0, 0, 5, 6]))
console.log(isSorted([5, 2, 5, 6]))
console.log(isSorted([5]))
console.log(isSorted([]))