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

// Function Declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log(calcAge1(2015));
console.log(calcAge1(2005));
console.log(calcAge1(1991));

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

const canMakeCar = function (carModel, carParts) {
    const ladaPartsNeeded = 15;
    const bmwPartsNeeded = 25;
    const mercedezPartsNeeded = 50;
    const teslaPartsNeeded = 100;

    switch (carModel) {
        case `lada`:
            return carParts >= ladaPartsNeeded ? true : false;
        case `bmw`:
            return carParts >= bmwPartsNeeded ? true : false;
        case `mercedez`:
            return carParts >= mercedezPartsNeeded ? true : false;
        case `tesla`:
            return carParts >= teslaPartsNeeded ? true : false;
        default:
            return false;
    }
};

console.log(`Can make a lada ? - ${canMakeCar(`lada`, 15)}`);
console.log(`Can make a bmw ? - ${canMakeCar(`bmw`, 20)}`);
console.log(`Can make a mercedez ? - ${canMakeCar(`mercedez`, 55)}`);
console.log(`Can make a tesla ? - ${canMakeCar(`tesla`, 125)}`);