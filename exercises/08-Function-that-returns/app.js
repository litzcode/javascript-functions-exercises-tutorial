var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

let dollarToYen = (dollarValue) => {
    return euroToYen(dollarToEuro(dollarValue));
}

console.log(dollarToYen(137));

