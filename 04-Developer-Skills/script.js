'use strict';

// * 1. Learning How to Code

// const x = 23;
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// console.log(`Hello World`);
// console.log(calcAge(1991));
// console.log(calcAge(2005));

// const str = `My test string`;
// const array1 = str.split('');

// console.log(array1);

// const reversedArray = [];
// for (let i = 0; i < array1.length; i++) {
//     reversedArray.push(array1[array1.length - (1 + i)]);
// }

// console.log(reversedArray);


// * 2. Using Google, StackOverflow and MDN.

// const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];

//     // Find max and min values
//     for(let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== `number`) continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }

//     console.log(min, max);
//     return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // PROBLEM 2: 
// // Function should now receive 2 arrays of temps

// const temperatures2 = [3, 5, 1, `error`, `error`, 9, 0, 5];

// const calcTempAmplitude2 = function (t1, t2) {
//     const temps = t1.concat(t2);
    
//     let max = temps[0];
//     let min = temps[0];

//     console.log(temps);

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if (typeof curTemp !== `number`) continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }

//     console.log(min, max);
//     return max - min;
// }

// const amplitude2 = calcTempAmplitude2(temperatures, temperatures2);
// console.log(amplitude2);


// * 3/4. Debugging (Fixing Errors)

const measureKelvin = function () {
    const measurement = {
        type: `temp`,
        unit: `celsius`,

        // C) FIX THE BUG
        value: Number(window.prompt(`Degrees celsius: `))
    };

    // B) FIND THE BUG
    console.table(measurement);

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

// A) IDENTIFY THE BUG
console.log(measureKelvin());