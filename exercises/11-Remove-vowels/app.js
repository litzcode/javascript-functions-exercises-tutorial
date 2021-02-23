
/*const rapid = (myString) => {
    let consonants = [];
    for(let position in myString){
        if(['a','e','i','o','u'].includes(myString[position]) == false)
            consonants.push(myString[position])
    }
    return consonants.join('');
}*/

const rapid = (myString) => {

    let newString = '';
    for (let i=0; i<myString.length; i++) {
        if (myString[i].toUpperCase() != "A" && 
            myString[i].toUpperCase() != "E" &&
            myString[i].toUpperCase() != "I" &&
            myString[i].toUpperCase() != "O" &&
            myString[i].toUpperCase() != "U" ) {
            newString += myString[i];
        }
    }

    return newString.toUpperCase();
}

// From this line up Do not change code below
let str = "John";
console.log(rapid(str));