// * 1. Values and Variables

// let country = `Ukraine`;
// let continent = `Europe`;
// let population = 45_000_000;

// console.log(`I live in ${country}`);
// console.log(`Which is a country in ${continent} continent`);
// console.log(`${country} has a population of ${population} people !`);

// * 2. Data types

// let country = `Ukraine`;
// let continent = `Europe`;
// let population = 45_000_000;

// let isIsland = false;
// let language;

// console.log(`Logging the types of variables values...`);
// console.log(`Type of \"country\": ${typeof country}`);
// console.log(`Type of \"continent\": ${typeof continent}`);
// console.log(`Type of \"population\": ${typeof population}`);
// console.log(`Type of \"isIsland\": ${typeof isIsland}`);
// console.log(`Type of \"language\": ${typeof language}`);

// console.log(`\n\nAssigning \"ukrainian\" value to the \"language\" variable...`);
// language = `ukrainian`;
// console.log(`\"language\": ${language}, ${typeof language}`);

// * 3. Let, const and var

// None of these variables should be consts,
// so I'll add a few of my own variables.
// let country = `ukraine`;
// let continent = `Europe`;
// let population = 45_000_000;
// let language = `ukrainian`;

// const birthMonth = `June`;
// const gender = `male`; // questionable but ok I guess.

// console.log(`birthMonth: ${birthMonth}`);

// birthMonth = `July`; // ! NOT LEGAL, THROWS 'TypeError'.

// * 4. Basic operators

// let country = `Ukraine`;
// let continent = `Europe`;
// let language = `ukrainian`;
// let population = 45_000_000;
// const halfOfPopulation = population / 2;

// console.log(halfOfPopulation);

// population++;
// console.log(population);

// const finlandPopulation = 6_000_000;
// console.log(`Does my country have more population than Finland? - ${population > finlandPopulation}`);

// const averagePopulation = 33_000_000;
// console.log(`Does my country have less population than average population? - ${population < averagePopulation}`);

// const description = country + ` is in ` + continent + `, and its ` + population + ` people speak ` + language + `.`;
// console.log(description);


// * 5. Strings and Template Literals

// const country = `Ukraine`;
// const continent = `Europe`;
// const population = 45_000_000;
// const language = `ukrainian`;

// const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
// console.log(description);


// * 6. If/Else statements

// const country = `Ukraine`;
// const continent = `Europe`;
// const population = 33_000_000;
// const language = `ukrainian`;

// const averagePopulation = 33_000_000;

// if (population >= 33_000_000) {
//     let difference = population - averagePopulation;
//     console.log(`${country}'s population is ${difference} people above average.`);
// } else {
//     let difference = averagePopulation - population;
//     console.log(`${country}'s populations is ${difference} people below average.`)
// }


// * 7. Type Conversion and Coercion

// let x = '9' - '5';
// console.log(x, typeof x) // 4 (number)

// x = '19' - '13' + '17';
// console.log(x, typeof x) // 617 (string)

// x = '19' - '13' + 17;
// console.log(x, typeof x) // 23 (number)

// x = '123' < 57;
// console.log(x, typeof x) // false (boolean)

// x = 5 + 6 + '4' + 9 - 4 - 2;
// console.log(x, typeof x) // 1143 (number)


// * 8. Equality Operators: == vs. ===

// const numNeighbours = Number(window.prompt(`How many neighbour countries does your country have?`));

// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border!`);
// } else {
//     console.log(`No borders!`);
// }


// * 9. Logical Operators

// const country = `Ukraine`;
// const continent = `Europe`;
// const population = 45_000_000;
// const language = `ukrainian`;
// const isIsland = false;

// const preferredLanguage = `english`;
// const maxPopulation = 50_000_000;
// const preferredIsIsland = false;

// if ((language === preferredLanguage) && (population < maxPopulation) && (isIsland === preferredIsIsland)) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your critera :(`);
// }


// * 10. The switch statement

// const language = `ukrainian`;

// switch (language) {
//     case `chinese`:
//     case `mandarin`:
//         console.log(`MOST number of native speakers!`);
//         break;
//     case `spanish`:
//         console.log(`2nd place in number of native speakers`);
//         break;
//     case `english`:
//         console.log(`3rd place`);
//         break;
//     case `hindi`:
//         console.log(`Number 4`);
//         break;
//     case `arabic`:
//         console.log(`5th most spoken language`);
//         break;
//     default:
//         console.log(`Great language too :D`);
// }


// * 11. The Conditional (Ternary) Operator

const country = `Ukraine`;
const population = 45_000_000;

// My solution (Stupid)
population > 33_000_000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

// Smarter Solution
console.log(`${country}'s population is ${population > 33_000_000 ? `above` : `below`} average`);