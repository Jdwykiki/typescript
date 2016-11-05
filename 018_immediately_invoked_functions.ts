var names : string[] = ['Justin', 'Jason', 'Laura'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);