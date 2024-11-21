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

const percentageOfWorld1 = function (population) {
    const worldPopulation = 7900;
    return (population / worldPopulation) * 100;
}

// Function Declaration
function describePopulation1(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

// Function Expression
const describePopulation2 = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};

// Arrow Function
const describePopulation3 = (country, population) => {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

console.log(describePopulation1(`Ukraine`, 45));
console.log(describePopulation2(`China`, 1441));
console.log(describePopulation3(`USA`, 338));