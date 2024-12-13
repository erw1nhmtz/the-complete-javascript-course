'use strict';

// * 1. Destructuring Arrays

// const restaurant = {
//     name: `Classico Italiano`,
//     location: `Via Angelo Tavanti 23, Firenze, Italy`,
//     categories: [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`],
//     starterMenu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
//     mainMenu: [`Pizza`, `Pasta`, `Risotto`],

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     }
// };

// // Old-fashioned way
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Modern way
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Bad
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// // Good
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);


// * 2. Destructuring Objects

// const restaurant = {
//     name: `Classico Italiano`,
//     location: `Via Angelo Tavanti 23, Firenze, Italy`,
//     categories: [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`],
//     starterMenu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
//     mainMenu: [`Pizza`, `Pasta`, `Risotto`],
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22
//         },
//         fri: {
//             open: 11,
//             close: 23
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24
//         }
//     },

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = `20:00`, address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//     }
// };

// restaurant.orderDelivery({
//     time: `22:30`,
//     address: `Via del Sole, 21`,
//     mainIndex: 2,
//     starterIndex: 2
// });

// restaurant.orderDelivery({
//     address: `Via del Sole, 21`,
//     starterIndex: 1
// });

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
//     a: 23, 
//     b: 7, 
//     c: 14
// };

// ({a, b} = obj);
// console.log(a, b);

// // Nested objects
// const { fri: {open: o, close: c} } = openingHours;
// console.log(o, c);


// * 3. The Spread Operator (...)

// const restaurant = {
//     name: `Classico Italiano`,
//     location: `Via Angelo Tavanti 23, Firenze, Italy`,
//     categories: [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`],
//     starterMenu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
//     mainMenu: [`Pizza`, `Pasta`, `Risotto`],
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22
//         },
//         fri: {
//             open: 11,
//             close: 23
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24
//         }
//     },

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = `20:00`, address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//     },

//     orderPasta: function(ing1, ing2, ing3) {
//         console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//     }
// };

// const arr = [7, 8, 9];
// // Bad way
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // Good way
// const newArr = [1, 2, ...arr];

// console.log(badNewArr);
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);
// console.log(...newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 Arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, sets, maps. NOT ALL objects
// const str = `Jonas`;
// const letters = [...str, ``, `S.`];
// console.log(letters);

// const ingredients = [
//     window.prompt(`Lets's make pasta. Ingredient 1`), 
//     window.prompt(`Ingredient 2`),
//     window.prompt(`Ingredient 3`)  
// ];

// console.log(ingredients);
// // Old way, lame
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // New way, rizz
// restaurant.orderPasta(...ingredients);


// Objects

// const newRestaurant = {...restaurant, founder: `Guiseppe`, testProperty: undefined};

// console.table(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = `Restaurante Roma`;
// console.log(restaurantCopy.name, restaurant.name);


// * 4. Rest Pattern and Parameters

// const restaurant = {
//     name: `Classico Italiano`,
//     location: `Via Angelo Tavanti 23, Firenze, Italy`,
//     categories: [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`],
//     starterMenu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
//     mainMenu: [`Pizza`, `Pasta`, `Risotto`],
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22
//         },
//         fri: {
//             open: 11,
//             close: 23
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24
//         }
//     },

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = `20:00`, address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//     },

//     orderPasta: function(ing1, ing2, ing3) {
//         console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//     },

//     orderPizza: function(mainIngredient, ...otherIngredients) {
//         console.log(mainIngredient);
//         console.log(otherIngredients);
//     }
// };

// // Spread because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4, 5]; 
// console.log(a, b, others);
// console.log(a, b, ...others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// };
 
// console.log(add(2, 3));
// console.log(add(5, 3, 7, 5));

// const x = [23, 5, 7];
// console.log(add(...x));

// restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
// restaurant.orderPizza(`Mushrooms`);


// * 5. Short Circuiting (&& and ||)

// Use ANY data type, return ANY data type
// short-circuiting
// console.log(3 || `Jonas`);
// console.log(`` || `Jonas`);
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || null || `` || `Hello` || 23 || 0);

const restaurant = {
    name: `Classico Italiano`,
    location: `Via Angelo Tavanti 23, Firenze, Italy`,
    categories: [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`],
    starterMenu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
    mainMenu: [`Pizza`, `Pasta`, `Risotto`],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24
        }
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = `20:00`, address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log(`----------AND-----------`);
// console.log(0 && `Jonas`);

// console.log(`Hello` && 23 && null && `jonas`);

// // Practical example
// if (restaurant.orderPizza) {
//     restaurant.orderPizza(`mushrooms`, `spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);


// * 6. The nullish Coalescing Operator (??)

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or ``)
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// * 7. Logical Assignment Operators

const rest1 = {
    name: `Capri`,
    numGuests: 20,
};

const rest2 = {
    name: `La Piazza`,
    owner: `Giovanni Rossi`,
    numGuests: undefined
};

rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// rest1.owner = rest1.owner && `<ANONYMOUS>`;

// Old way
// rest2.owner = rest2.owner && `<ANONYMOUS>`;

// New way 
rest2.owner &&= `ANONYMOUS`;
console.log(rest2);