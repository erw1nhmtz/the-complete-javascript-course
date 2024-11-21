'use strict';

// * 1. Activating Strict Mode

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// // ! This will show an error, hasDriverLicense != hasDriversLicense
// // if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// // ! Those are reserved words.
// // let interface = `Audio`;
// // const private = 544;


// * 2. Functions

// function logger() {
//     console.log(`My name is Jonas`);
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// * 3. Function Declarations vs. Expressions

// // Function Declaration
// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }

// console.log(calcAge1(2015));
// console.log(calcAge1(2005));
// console.log(calcAge1(1991));

// // Function Expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

// const canMakeCar = function (carModel, carParts) {
//     const ladaPartsNeeded = 15;
//     const bmwPartsNeeded = 25;
//     const mercedezPartsNeeded = 50;
//     const teslaPartsNeeded = 100;

//     switch (carModel) {
//         case `lada`:
//             return carParts >= ladaPartsNeeded ? true : false;
//         case `bmw`:
//             return carParts >= bmwPartsNeeded ? true : false;
//         case `mercedez`:
//             return carParts >= mercedezPartsNeeded ? true : false;
//         case `tesla`:
//             return carParts >= teslaPartsNeeded ? true : false;
//         default:
//             return false;
//     }
// };

// console.log(`Can make a lada ? - ${canMakeCar(`lada`, 15)}`);
// console.log(`Can make a bmw ? - ${canMakeCar(`bmw`, 20)}`);
// console.log(`Can make a mercedez ? - ${canMakeCar(`mercedez`, 55)}`);
// console.log(`Can make a tesla ? - ${canMakeCar(`tesla`, 125)}`);/


// * 4. Arrow functions

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge3(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;

//     return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, `Jonas`));
// console.log(yearsUntilRetirement(1980, `Chad`));


// * 5. Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// *  6. Reviewing Functions

// const calcAge = function (birthYear) {
//     const currentYear = 2037;
//     return currentYear - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) return retirement;
//     else return -1;
// }

// console.log(calcAge(1991));
// console.log(yearsUntilRetirement(1991, `Jonas`));
// console.log(yearsUntilRetirement(1950, `Mike`));


// * Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win the trophy🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win the trophy 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);