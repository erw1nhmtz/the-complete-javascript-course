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

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win the trophy🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win the trophy 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);


// * 7. Introduction to Arrays

// const friend1 = `Michael`;
// const friend2 = `Steven`;
// const friend3 = `Peter`;

// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Jay`;
// console.log(friends);

// let jonas = [`Jonas`, `Schmedtmann`, 2037 - 1991, `teacher`, friends];
// console.log(jonas);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// // NaN here, since years is an array and it cannot be subtracted from a number.
// console.log(calcAge(years));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// * 8. Basic Array Operations (Methods)

// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);

// // Push method
// const newLength = friends.push(`Jay`);
// console.log(friends, newLength);

// // Unshift method
// friends.unshift(`John`);
// console.log(friends);

// // Pop method
// friends.pop();
// const popped = friends.pop()
// console.log(friends, popped);

// // Shift method
// friends.shift();
// console.log(friends);

// // IndexOf method
// console.log(friends.indexOf(`Steven`));
// console.log(friends.indexOf(`Bob`));

// // Includes method
// console.log(friends.includes(`Bob`));

// // includes() does STRICT comparison
// friends.push(23);
// console.log(friends.includes(`23`));

// if (friends.includes(`Steven`)) {
//     console.log(`You have a friend called Steven`);
// }


// * Challenge #2

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = new Array(
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[bills.length - 1])
// );

// const totals = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[bills.length - 1] + tips[tips.length - 1]
// ];

// console.log(bills);
// console.log(tips);
// console.log(totals);


// * 9. Introduction to Objects

// const jonasArray = [
//     `Jonas`,
//     `Schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [`Michael`, `Peter`, `Steven`]
// ];

// console.log(jonasArray);

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Shmedtmann`,
//     age: 2037 - 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`]
// }

// console.log(jonas);


// * 10. Dot vs. Bracket Notation

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     age: 2037 - 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`]
// }

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas[`lastName`]);

// const nameKey = `Name`;

// // Pretty useful
// console.log(jonas[`first` + nameKey]);
// console.log(jonas[`last` + nameKey]);

// // ! CAN'T DO LIKE THAT
// // console.log(jonas.`last` + nameKey);

// const interestedIn = window.prompt(`What do you want to know about Jonas? (firstName, lastName, age, job, friends)`);
// console.log(interestedIn);

// // Non-existent property access returns 'undefined' which is falsy.
// if (!jonas[interestedIn]) {
//     console.log(`There is no such property :(`);
// } else {
//     console.log(jonas[interestedIn]);
// }

// jonas.location = `Portugal`;
// jonas[`twitter`] = `@jonasschmedtman`;
// console.log(jonas);

// // Using Brackets
// console.log(`${jonas[`firstName`]} has ${jonas[`friends`].length} friends, and his best friend is called ${jonas[`friends`][0]}`);

// // Using Dot Operator
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// * 11. Object Methods

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     birthYear: 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`],
//     hasDriversLicense: true,

//     calcAge: function (birthYear) {
//         return 2037 - birthYear;
//     },

//     // Arrow Function
//     calcAge2: birthYear => 2037 - birthYear
// }

// console.log(`${jonas.firstName}'s age is: ${jonas.calcAge(1991)}`);

// // ! jonas[`calcAge`](1991)
// console.log(`${jonas[`firstName`]}'s age is: ${jonas[`calcAge`](1991)}`);

// const optimizedJonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     birthYear: 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`],
//     hasDriversLicense: true,

//     calcAge: function () {
//         console.log(this);
//         return 2037 - jonas.birthYear;
//     }
// }

// console.log(optimizedJonas.calcAge());

// // Interesting lol
// console.log(this);

// const car = {
//     model: `Model 3`,
//     manufacturer: `Tesla`,
//     isNew: true,

//     describe: function () {
//         console.log(`Manufacturer: ${this.manufacturer}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`isNew: ${this.isNew}`);
//     }
// }

// car.describe();

// const newJonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     birthYear: 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`],
//     hasDriversLicense: false,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return 2037 - this.birthYear;
//     },

//     summary: function () {
//         console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? `has a` : `has no`} driver's license`);
//     }
// }

// console.log(newJonas.age);
// newJonas.calcAge();
// console.log(newJonas.age);
// newJonas.summary();


// * Challenge #3

