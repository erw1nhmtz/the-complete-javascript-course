'use strict';

// * 1. Scopes in practice

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
    
//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             // Creating NEW variable with the same name as outer 
//             // scope's variable
//             const firstName = `Steven`;
//             var millenial = true;
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }

//         console.log(millenial);
//         console.log(output);
//     }
//     printAge();

//     return age;
// }

// const firstName = `Jonas`;
// calcAge(1991);


// * 2. Hoisting and TDZ in practice

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = `Jonas`;
// let job = `teacher`;
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 4));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// // Example
// // numOfProducts is UNDEFINED
// if (!numOfProducts) deleteShoppingCart();

// var numOfProducts = 10;

// function deleteShoppingCart() {
//     console.log(`All products deleted.`);
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);


// * 3. The this keyword in practice

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }

// jonas.calcAge();

// const matilda = {
//     year: 2017
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();


// * 4. Regular Functions vs. Arrow Functions

// var firstName = `Matilda`;

// const jonas = {
//     firstName: `Jonas`,
//     year: 1991, 
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);

//         // * Solution 1

//         // const self = this; // self or that
//         // const isMillenial = function() {
//         //     // console.log(this.year >= 1981 && this.year <= 1996);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // }

//         // * Solution 2
//         const isMillenial = () => {
//             console.log(this.year >= 1981 && this.year <= 1996);
//         }
//         isMillenial();
//     },

//     // ! Arrow function doesn't have its own "this" keyword.
//     greet: () => {
//         console.log(`Hey, ${this.firstName}`) 
//         console.log(this);
//     }
// };

// jonas.greet();
// jonas.calcAge();
// // console.log(this.firstName);

// const addExpr = function(a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) =>{
//     console.log(arguments);
//     return a + b;
// };

// addArrow(2, 5, 8);


// * 5. Object references in practice (Shallow vs. Deep copies)

const jessica = {
    firstName: `Jessica`,
    lastName: `Williams`,
    age: 27
};

function marryPerson(person, newLastName) {
    person.lastName = newLastName;
    return person;
}

const marriedJessica = marryPerson(jessica, `Davis`);

// const marriedJessica = jessica;
// marriedJessica.lastName = `Davis`;

console.log(`Before: ${jessica.lastName}`);
console.log(`After: ${marriedJessica.lastName}`);

// Shallow copy
const jessica2 = {
    firstName: `Jessica`,
    lastName: `Williams`,
    age: 27,
    family: [`Alice`, `Bob`]
};

const jessicaCopy = {...jessica2};
jessicaCopy.lastName = `Davis`;

jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`Jon`);
console.table(jessica2);
console.table(jessicaCopy);

// Deep(Complete) copy
const jessicaClone = structuredClone(jessica);

// console.log(`Original: ${jessica}`);
// console.log(`Clone: ${jessicaClone}`);
console.table(jessicaClone);