console.log(fullName('Justin', 'Wykstra'));
// console.log(otherFullName('Justin', 'Wykstra'));
// console.log(thirdFullName('Justin', 'Wykstra'));
// Fuction declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function expression, hoisting
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Justin', 'Wykstra'));
console.log(otherFullName('Justin', 'Wykstra'));
console.log(thirdFullName('Justin', 'Wykstra'));
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map