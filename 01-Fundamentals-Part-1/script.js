// * 1. JavaScript for beginners, `Hello, World`.

// let js = `amazing`;
// if (js === `amazing`) window.alert(`JavaScript if FUN!`);

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);


// * 2. Values and Variables

// console.log(`Jonas`);
// console.log(23);

// let firstName = `Jonas`;
// let PI = 3.1415;

// console.log(`The first name is ${firstName}`);
// console.log(`The first name is ${firstName}`);
// console.log(`The first name is ${firstName}`);

// // Variable name conventions !
// // Better as it is way more descriptive.
// let myFirstJob = `Programmer`;
// let myCurrentJob = `Teacher`;

// // Worse, less descriptive.
// let job1 = `programmger`;
// let job2 = `teacher`;

// console.log(`My job is ${myFirstJob}`);


// * 3. Data types

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(`javascriptIsFun: `, typeof javascriptIsFun);
// console.log(typeof false);
// console.log(typeof 23);
// console.log(typeof "Hello");

// javascriptIsFun = `YES`;
// console.log(`javascriptIsFun: `, typeof javascriptIsFun);

// let year;
// console.log(typeof year);

// year = 2024;
// console.log(typeof year);

// console.log(typeof null);


// * 4. Let, Const and Var

// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// // birthYear = 1990; // ! NOT LEGAL

// // const job; // ! NOT LEGAL

// var job = `programming`; // ! DON`T USE THIS AT ALL
// job = `teacher`;

// lastName = `schmedtmann` // ! DON`T USE THIS
// console.log(lastName);


// * 5. Basic operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSara = now - 2018;

// console.log(ageJonas, ageSara);
// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3, 3 = 2 * 2 * 2;

// const firstName = `Jonas`;
// const lastName = `Schmedtmann`;

// console.log(firstName + ` ` + lastName);

// let x = 10 + 5;
// x += 10; // x = x + 10;

// console.log(x);

// x *= 4;
// console.log(x);

// x++; // x = x + 1;
// x--; // x = x - 1;
// x--; // x = x - 1;
// console.log(x);

// // ageJonas = 49, ageSara = 19.
// console.log(ageJonas > ageSara);
// console.log(ageSara > ageJonas);
// console.log(ageSara >= 18);

// const isFullAge = ageSara >= 18;

// console.log(now - 1991 > now - 2019);


// * 6. Operators precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSara = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10; y = 10; x = y; x = 10;
// console.log(x, y);

// const averageAge = (ageJonas + ageSara) / 2;
// console.log(ageJonas, ageSara);
// console.log(averageAge);


// * 7. Strings and Template Literals

// const firstName = `Jonas`;
// const job = `teacher`;
// const birthYear = 1991;
// const currentYear = 2037;

// // Old way
// const jonas = `I'm ` + firstName + `, a ` + (currentYear - birthYear) + ` years old ` + job + `!`;
// console.log(jonas);

// // Modern way
// // Make sure to use backticks to make it work

// const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
// console.log(jonasNew);


// * 8. If/Else statements

// const age = 15;

// if (age >= 18) {
//     console.log(`Sarah can start driving license 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);


// * 9. Type conversion/coercion

// // type conversion

// // Number()
// // String()
// // Boolean()

// const inputYear = `1991`;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // NaN - Not a Number
// console.log(Number(`Jonas`));
// console.log(typeof NaN);

// console.log(String(23));

// // type coercion

// console.log(`I am ` + 23 + ` years old`);
// console.log(`23` - `10` - 3);
// console.log(`23` / `2`);

// let n = `1` + 1;
// console.log(typeof n);
// n = n - 1;
// console.log(typeof n, n);


// * 10. Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;

// if (money) { // ! money is converted to FALSE
//     console.log(`person have some money left!!!`);
// } else {
//     console.log(`person doesn't have any money`);
// }

// let height = 0; // it has "undefined" value.

// if (height) { // ! therefore, it converts to FALSE
//     console.log(`Something is here`);
// } else {
//     console.log(`Nuh-huh, empty here bud`);
// }


// * 11. Equality Operators: == vs ===

// const age = '18';

// if (age === 18) console.log(`You just became an adult :D`);
// else if (age < 18) console.log(`Nope.`);
// else console.log(`Boy you are old`);

// if (age == 18) console.log(`Loose equality operator rocks!`);

// const favorite = Number(window.prompt(`What's your favorite number?`));
// console.log(favorite, typeof favorite);

// if (favorite === 23) {
//     console.log(`Cool!`);
// } else if (favorite === 7) {
//     console.log(`7 is mid`);
// } else if (favorite === 9) {
//     console.log(`9 is great`);
// } else {
//     console.log(`Number is neither 23 nor 7`);
// }

// if (favorite !== 23) {
//     console.log(`Why not 23?`);
// }


// * 12. Logic Operators

// const hasLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasLicense && hasGoodVision);
// console.log(hasLicense || hasGoodVision);
// console.log(!hasLicense);

// // if (hasLicense && hasGoodVision) {
// //     console.log(`Sarah is able to drive!`);
// // } else {
// //     console.log(`Someone should drive...`);
// // }

// const isTired = false; // C

// console.log(hasLicense && hasGoodVision && isTired);

// if (hasLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }

// const scoreDolphins = (88 + 91 + 33) / 3;
// const scoreKoalas = (88 + 91 + 131) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win the trophy🏆`);
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`Koalas win the trophy🏆`);
// } else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
//     console.log(`Both win the trophy!🏆`);
// } else {
//     console.log(`Nobody wins!😭`);
// }


// * 13. The switch statement

// const day = `friday`;

// switch (day) {
//     case `monday`:
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case `tuesday`:
//         console.log(`Prepare theory videos`);
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Write code examples`);
//         break;
//     case `friday`:
//         console.log(`Record videos`);
//         break;
//     case `saturday`:
//     case `sunday`:
//         console.log(`Enjoy the weekend :D`);
//     default:
//         console.log(`Not a valid day`);
// }

// The same code but using if/else statement
// if (day === `monday`) {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if (day === `tuesday`) {
//     console.log(`Prepare theory videos`);
// } else if (day === `wednesday` || day === `thursday`) {
//     console.log(`Write code examples`);
// } else if (day === `friday`) {
//     console.log(`Record videos`);
// } else if (day === `saturday` || day === `sunday`) {
//     console.log(`Enjoy the weekend :D`);
// } else {
//     console.log(`Not a valid day`);
// }


// * 14. The Conditional (Ternary) Operator

// const age = 23;

// const isAdult = age >= 18;

// age >= 18 ? console.log(`I like to drink wine🍷`) : console.log(`I like to drink juice🧃`);

// // Mostly used with variables assignments
// const drink = isAdult ? `wine🍷` : `juice🧃`;
// console.log(drink);

// // Does the same thing, but more code.
// let drink2;
// if (isAdult) {
//     drink2 = `wine🍷`;
// } else {
//     drink2 = `juice🧃`;
// }

// console.log(drink2);

// // Ternary operators could be used is template literals,
// // since ternary operator is an expression.
// console.log(`I like to drink ${isAdult ? `wine🍷` : `juice🧃`}`);

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const totalValue = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);