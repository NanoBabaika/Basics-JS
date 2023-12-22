
// Задача 1
function returnArgument (){
    return argument;  
}

var argument = 'Hi!';
console.log(returnArgument(argument));
var argument = '100!';
console.log(returnArgument(argument));


// Задача2
function summ(a, b){
    result = a + b;
    return result;
}

console.log(summ(15, 25));


// Задача 2.2
function summ22 (arguments, d = 100){
    result = arguments + d;
    return result;
}


console.log(summ22(10));



// Задача 3

function funcHi () {
    return 'Hi from funcHi!';
}
 

function resultReturn (funcHi) {
     return funcHi();
}



// Задача 4 
function returnCounter(){
    let f = 10;

    function inc () {
        f += 1;
        return f;
    }

    return inc;
}

const counter = returnCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



// Задача 5 
function createMassive (...arguments) {
    return Array.of(...arguments);;
}

console.log(createMassive(1, 'Hi from array!', 20, 11));