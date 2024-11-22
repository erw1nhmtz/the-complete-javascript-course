'use strict';

// * 1. Functions

// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} people and its capital city is ${capitalCity}`;
//     return description;
// }

// console.log(describeCountry(`Ukraine`, 45_000_000, `Kyiv`));
// console.log(describeCountry(`Finland`, 6_000_000, `Helsinki`));
// console.log(describeCountry(`France`, 66_500_000, `Paris`));

// function juiceMaker(fruit, amount) {
//     if (amount <= 0) {
//         return `No ${fruit} juice could be made with ${amount} fruits :(`;
//     }

//     switch (fruit) {
//         case `apple`:
//             return `Tasty apple juice made from ${amount} apples! 🧃`;
//         case `orange`:
//             return `Tasty orange juice made from ${amount} oranges! 🧃`;
//         case `grape`:
//             return `Tasty grape juice made from ${amount} grapes! 🧃`;
//         case `strawberry`:
//         case `raspberry`:
//         case `cranberry`:
//         case `blackberry`:
//         case `blueberry`:
//             return `Tasty berry juice made from ${amount} berries! 🧃`;
//         default:
//             return `No juice could be made from ${fruit} :( `;
//     }
// }

// console.log(juiceMaker(`apple`, 0));
// console.log(juiceMaker(`apple`, 10));
// console.log(juiceMaker(`orange`, 300));
// console.log(juiceMaker(`grape`, 10));
// console.log(juiceMaker(`strawberry`, 100));
// console.log(juiceMaker(`blueberry`, 100));
// console.log(juiceMaker(`tires`, 3));


// * 2. Function Declarations vs. Function Expressions

// function percentageOfWorld1(population) {
//     const worldPopulation = 7900;
//     return `${(population / worldPopulation) * 100}%`;
// }

// const chinaPercentage = percentageOfWorld1(1441);
// const ukrainePercentage = percentageOfWorld1(45);
// const francePercentage = percentageOfWorld1(65);

// console.log(`China - ${chinaPercentage}, Ukraine - ${ukrainePercentage}, France - ${francePercentage}`);

// const percentageOfWorld2 = function (population) {
//     const worldPopulation = 7900;
//     return `${(population / worldPopulation) * 100}%`;
// };

// console.log(percentageOfWorld2(1441));
// console.log(percentageOfWorld2(45));
// console.log(percentageOfWorld2(65));


// * 3. Arrow Functions

// const percentageOfWorld3 = population => (population / 7900) * 100;

// console.log(percentageOfWorld3(1441));

// const canMakeCar = (carModel, carParts) => {
//     const ladaPartsNeeded = 25;
//     const bmwPartsNeeded = 50;
//     const mercedezPartsNeeded = 100;
//     const teslaPartsNeeded = 150;

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
// }

// console.log(`Can I make a lada ? - ${canMakeCar(`lada`, 25)}`);
// console.log(`Can I make a mercedez ? - ${canMakeCar(`mercedez`, 90)}`);
// console.log(`Can I make a fiat? - ${canMakeCar(`fiat`, 10000)}`);

// const canDrive = (firstName, hasDriversLicense, hasGoodVision, isTired) => {
//     if (hasDriversLicense && hasGoodVision && !isTired) return `${firstName} has a drivers license, a good vision and is not tired, therefore, can drive a car!`;

//     if (!hasDriversLicense) return `${firstName} doesn't have a drivers license !`;
//     else if (!hasGoodVision) return `${firstName} has a bad vision !`;
//     else return `${firstName} is too tired to drive a car!`;
// }

// console.log(canDrive(`Sarah`, true, true, false));
// console.log(canDrive(`Jonas`, true, true, true));
// console.log(canDrive(`Chad`, true, false, false));
// console.log(canDrive(`Sarah`, false, true, false));


// * 4. Functions Calling Other Functions

// const percentageOfWorld1 = function (population) {
//     const worldPopulation = 7900;
//     return (population / worldPopulation) * 100;
// }

// // Function Declaration
// function describePopulation1(country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
// }

// // Function Expression
// const describePopulation2 = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
// };

// // Arrow Function
// const describePopulation3 = (country, population) => {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentage}% of the world.`
// }

// console.log(describePopulation1(`Ukraine`, 45));
// console.log(describePopulation2(`China`, 1441));
// console.log(describePopulation3(`USA`, 338));


// * 5. Introduction to Arrays

// const percentageOfWorld = function (population) {
//     const worldPopulation = 7900;
//     return (population / worldPopulation) * 100;
// }

// const populations = [1441, 45, 64, 338];
// console.log(populations);

// console.log(populations.length === 4);
// if (populations.length === 4) {
//     console.log(`The \"populations\" array has 4 elements!😊`);
// } else {
//     console.log(`The \"populations\" array has more or less than 4 elements!😒`);
// }

// const percentages = new Array(percentageOfWorld(1441), percentageOfWorld(45), percentageOfWorld(64), percentageOfWorld(338));
// console.log(percentages);


// * 6. Basic Array Operations (Methods)

// const neighbours = [`Poland`, `Moldova`, `Romania`, `Belarus`, `Hungary`];
// console.log(neighbours);

// console.log(`A new country called \"Utopia\" has appeared!`);
// neighbours.push(`Utopia`);
// console.log(neighbours);

// console.log(`But, unfortunately, it didn't live too long 😭`);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes(`Germany`)) {
//     console.log(`Probably not a central european country :D`);
// }

// console.log(`Changing the name of one of the neighbouring countries...`);

// const indexOfBelarus = neighbours.indexOf(`Belarus`);

// // 1st way
// neighbours[indexOfBelarus] = `Russia`;
// console.log(neighbours);

// // 2nd way
// // neighbours.splice(indexOfBelarus, 1, `Russia`);
// // console.log(neighbours);


// * 7. Introduction to Objects

// const ukraine = {
//     country: `Ukraine`,
//     capital: `Kyiv`,
//     language: `ukrainian`,
//     population: 45,
//     neighbours: [`Slovakia, Romania, Moldova, Poland, Hungary`]
// };

// const describeCountry = function (country) {
//     console.log(`Name: ${country.country}`);
//     console.log(`Capital: ${country.capital}`);
//     console.log(`Language: ${country.language}`);
//     console.log(`Population: ${country.population}`);
//     console.log(`Neighbours: ${country.neighbours}`);
// }

// const car = {
//     manufacturer: `BMW`,
//     model: `M5`,
//     price: 45,
//     country: `Ukraine`
// }

// describeCountry(ukraine);
// describeCountry(car);


// * 8. Dot vs. Bracket Notation

// const finland = {
//     country: `Finland`,
//     capital: `Helsinki`,
//     language: `finnsih`,
//     population: 6,
//     neighbours: [`Russia`, `Sweden`, `Norway`]
// }

// const describeViaDots = function (country) {
//     console.log(`${country.country} has ${country.population} million ${country.language}-speaking people, ${country.neighbours.length} neighbouring countries and a capital called ${country.capital}.`);
// }

// const describeViaBrackets = function (country) {
//     console.log(`${country[`country`]} has ${country[`population`]} million ${country[`language`]}-speaking people, ${country[`neighbours`].length} neighbouring countries and a capital called ${country[`captial`]}`);
// }

// finland.population *= 2;
// describeViaDots(finland);

// finland[`population`] = finland[`population`] - 2;
// describeViaBrackets(finland);


// * 9. Object Methods

// const myCountry = {
//     country: `Ukraine`,
//     capital: `Kyiv`,
//     language: `ukrainian`,
//     population: 45,
//     neighbours: [`Belarus`, `Russia`, `Romania`, `Moldova`, `Hungary`, `Slovakia`, `Poland`],

//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this[`neighbours`].length} neighbouring countries and a capital called \"${this[`capital`]}\"`);
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//         console.log(this.isIsland);
//         return this.isIsland;
//     }
// }

// myCountry.describe();
// myCountry.checkIsland();


// * 11. Iteration: The For Loop

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }


// * 12. Looping Arrays, Breaking and Continuing.

// const populations = [1441, 45, 64, 338];
// const percentages = [];

// const percentageWorld = population => (population / 7900) * 100;

// for (let i = 0; i < populations.length; i++) {
//     const percentage = percentageWorld(populations[i]);

//     percentages.push(percentage);
// }

// console.log(percentages);


// * 13. Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//     [`Canada`, `Mexico`],
//     [`Spain`],
//     [`Norway`, `Sweden`, `Russia`]
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }


// * 14. The while Loop

const populations = [1441, 45, 64, 338];
const percentages = [];

const percentageWorld = population => (population / 7900) * 100;

let index = 0;
while (index < populations.length) {
    const percentage = percentageWorld(populations[index]);
    percentages.push(percentage);

    index++;
}

console.log(percentages);