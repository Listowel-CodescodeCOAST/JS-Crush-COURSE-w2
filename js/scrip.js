// let i = 0

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// console.log("******************");

// while (i < 10 ) {
//     console.log(i);
//     i++;
// }

//break and continue
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("Five");
//         break;
//     }
//     console.log(i);
// }

//function
function mySelf(name){
    console.log("My name is John Doe");
}
mySelf("name");

function mySelf() {

}
mySelf("Nobel Listowel")
mySelf("Nobel Jane");
mySelf("Nobel Sarkodie");

function add(x,y) {
    let sum = x + y;
    console.log(sum);
}

add(5, 6);
add(6, 7);
add(7, 8);

function multipy(a,b) {
    let sum = a * b;
    console.log(sum);
}
multipy(7, 8);
multipy(8, 9);
multipy(9, 10);

//function with return value
function add(x,y){
    let sum = x + y;
    return sum;
}

let result = add(10, 15);
let newResult = result *2;
console.log(newResult)

//arrow function
let divide = (a, b) => a / b;
let multipy = (a, b) =>{
    let sum = a * b;
    return sum;
}
console.log(divide (10, 5));
console.log(multipy(10, 5));

// Higher Order Function
// Is a function that takes a function as parameter
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((number) => number * number);
let dubbles = numbers.map((number) => number + number);
console.log(squares);
console.log(dubbles);

let evens = numbers.filter((number) => number % 2 ===0);
console.log(evens);
let odds = numbers.filter((number) => number % 2 !==0);
console.log(odds);

let five = numbers.find((num) => num ===11);
console.log(5);

// String
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(10));
console.log(sentence.concat("from concatenation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.includes("hardwork"));
console.log(sentence.indexOf("q"));
console.log(sentence.indexOf("o", 13));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.padStart(100));
console.log(sentence.padEnd(10));
console.log(sentence.repeat(3));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice(20, 30));
console.log(sentence.substring(20, 30));
console.log(sentence.split(""));
let email = "kofi@email.com";
console.log(sentence.toLocaleUpperCase);
console.log(sentence.toLowerCase);