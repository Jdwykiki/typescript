console.log(fullName('Justin', 'Wykstra'));
// console.log(otherFullName('Justin', 'Wykstra'));    |these dont work because of hoisting,
// console.log(thirdFullName('Justin', 'Wykstra'));    |difference between declaration and expression

// Fuction declaration
function fullName(first : string, last : string) : string {
	return first + " " + last;
}


// Function expression, hoisting
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;
}

console.log(fullName('Justin', 'Wykstra'));
console.log(otherFullName('Justin', 'Wykstra'));
console.log(thirdFullName('Justin', 'Wykstra'));