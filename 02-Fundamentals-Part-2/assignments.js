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

function percentageOfWorld1(population) {
    const worldPopulation = 7900;
    return `${(population / worldPopulation) * 100}%`;
}

const chinaPercentage = percentageOfWorld1(1441);
const ukrainePercentage = percentageOfWorld1(45);
const francePercentage = percentageOfWorld1(65);

console.log(`China - ${chinaPercentage}, Ukraine - ${ukrainePercentage}, France - ${francePercentage}`);

const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900;
    return `${(population / worldPopulation) * 100}%`;
};

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(45));
console.log(percentageOfWorld2(65));