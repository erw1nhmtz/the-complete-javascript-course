'use strict';

// * 1. Functions

// // Function declaration
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// // Function expression
// const describeCountry1 = function (country, population, capitalCity) {
//     return describeCountry(country, population, capitalCity);
// }

// // Arrow function
// const describeCountry2 = (country, population, capitalCity) => describeCountry(country, population, capitalCity);

// console.log(describeCountry(`Ukraine`, 45, `Kyiv`));
// console.log(describeCountry1(`China`, 1441, `Beijing`));
// console.log(describeCountry2(`France`, 65, `Paris`));


// * 2. Function Declarations vs. Function Expressions

// function percentageOfWorld(population) {
//     const worldPopulation = 7900;
//     return (population / worldPopulation) * 100;
// }

// console.log(percentageOfWorld(45));
// console.log(percentageOfWorld(1441));
// console.log(percentageOfWorld(332));

// const percentageOfWorld1 = function (population) {
//     const worldPopulation = 7900;
//     return (population / worldPopulation) * 100;
// }

// console.log(percentageOfWorld1(1441));


// * 3. Arrow Functions

// const percentageOfWorld3 = population => (population / 7900) * 100;

// console.log(percentageOfWorld3(1441));

// const describeCountry = (country, population, capitalCity) => `${country} has ${population} million people and its capital city is ${capitalCity}`;

// console.log(describeCountry(`Ukraine`, 45, `Kyiv`));


// * 4. Functions Calling Other Functions

// const percentageOfWorld = population => {
//     const worldPopulation = 7900;
//     return (population / worldPopulation) * 100;
// }

// const describePopulation = function (country, population) {
//     return `${country} has ${population} million people, which is about ${percentageOfWorld(population)} of the world`
// }

// console.log(describePopulation(`Finland`, 9));


// * 5. Introduction to Arrays

// const percentageOfWorld = function (population) {
//     const worldPopulation = 7900;
//     return (population / worldPopulation) * 100;
// }

// const populations = [45, 1441, 69, 331];

// console.log(`The \"populations\" array ${populations.length === 4 ? `does` : `doesn't`} contain 4 elements`);

// const percentages = [
//     percentageOfWorld(populations[0]),
//     percentageOfWorld(populations[1]),
//     percentageOfWorld(populations[2]),
//     percentageOfWorld(populations[populations.length - 1])
// ];

// console.log(percentages);


// * 6. Basic Array Operations

// const printArray = function (array) {
//     console.log(`=== Printing the array ===`);
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// const neighbours = new Array(
//     `Belarus`,
//     `Russia`,
//     `Romania`,
//     `Moldova`,
//     `Hungary`,
//     `Slovakia`,
//     `Poland`
// );

// printArray(neighbours);

// neighbours.push(`Utopia`);

// printArray(neighbours);

// neighbours.pop();

// printArray(neighbours);

// if (!neighbours.includes(`Germany`)) {
//     console.log(`Probably not a central eropean country :D`);
// }

// const belarusIndex = neighbours.indexOf(`Belarus`);

// if (belarusIndex !== -1) {
//     neighbours[belarusIndex] = `Small Russia`;
// } else {
//     console.log(`There is no Belarus as a neighbouring country`);
// }

// printArray(neighbours);


// * 7. Introduction to Objects

// const myCountry = {
//     country: `Ukraine`,
//     capital: `Kyiv`,
//     population: 45,
//     neighbours: [`Belarus`, `Russia`, `Romania`, `Moldova`, `Hungary`, `Slovakia`, `Poland`]
// };

// const france = {
//     country: `France`,
//     capital: `Paris`,
//     population: 69,
//     neighbours: [`Spain`, `Andorra`, `Belgium`, `Garmany`, `Switzerland`, `Italy`]
// }

// const USA = {
//     country: `USA`,
//     capital: `Washington`,
//     population: 331,
//     neighbours: [`Canada`, `Mexico`]
// }

// console.log(myCountry);
// console.log(france);
// console.log(USA);


// * 8. Dot vs. Bracket Notation

// const myCountry = {
//     myCountry: `Ukraine`,
//     capital: `Kyiv`,
//     population: 45,
//     language: `ukrainian`,
//     neighbours: [`Belarus`, `Russia`, `Romania`, `Moldova`, `Hungary`, `Slovakia`, `Poland`]
// }

// console.log(`${myCountry.myCountry} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} countries and a capital called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry);

// myCountry[`population`] -= 2;
// console.log(myCountry);


// * 9. Object Methods

// const myCountry = {
//     country: `Ukraine`,
//     capital: `Kyiv`,
//     language: `ukrainian`,
//     population: 45,
//     neighbours: [`Belarus`, `Russia`, `Romania`, `Moldova`, `Hungary`, `Slovakia`, `Poland`],

//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} countries and a capital called ${this.capital}`);
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//         return this.isIsland;
//     }
// }

// myCountry.describe();
// console.log(myCountry.checkIsland());


// * 10. Iteration: The for Loop

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting.`);
// }


// * 11. Looping arrays, breaking and continuing.

// const percentageOfWorld1 = function (population) {
//     const worldPopulation = 7900;
//     return (population / worldPopulation) * 100;
// }

// const populations = [45, 1441, 9, 331];
// const percentages = [];

// for (let i = 0; i < populations.length; i++) {
//     percentages.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages);


// * 12. Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//     [`Canada`, `Mexico`],
//     [`Spain`],
//     [`Norway`, `Sweden`, `Russia`]
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbout: ${listOfNeighbours[i][j]}`);
//     }
// }


// * 13. The while loop

// const percentageOfWorld = function (population) {
//     const worldPopulation = 7900;
//     return (population / worldPopulation) * 100;
// };

// const populations = [45, 1441, 9, 331];
// const percentages = [];

// let counter = 0;
// while (counter < populations.length) {
//     const perc = percentageOfWorld(populations[counter]);
//     percentages.push(perc);

//     counter++;
// }

// console.log(percentages);