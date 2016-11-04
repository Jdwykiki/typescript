// Boolean
let paidAccount : boolean = false;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Justin Wykstra";

// Array
var ages : number[] = [33, 28, 11];
var names : string[] = ["Justin", "Ryan", "Michael"];

// Tuple
let player : [number, string];
player = [3, 'Chris Paul'];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiData : any[] = [123, "adfasdf", false];

// Void
function printOut(msg: string) : void {
	console.log(msg);
}