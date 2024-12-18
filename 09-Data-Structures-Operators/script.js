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

// const rest1 = {
//     name: `Capri`,
//     numGuests: 20,
// };

// const rest2 = {
//     name: `La Piazza`,
//     owner: `Giovanni Rossi`,
//     numGuests: undefined
// };

// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// // rest1.owner = rest1.owner && `<ANONYMOUS>`;

// // Old way
// // rest2.owner = rest2.owner && `<ANONYMOUS>`;

// // New way 
// rest2.owner &&= `ANONYMOUS`;
// console.log(rest2);


// * Challenge #1

// const players1 = [
//     "Bayern Munich",
//     "Noah Parker",
//     "Oliver Harris",
//     "Elijah Mitchell",
//     "James Carter",
//     "William Roberts",
//     "Benjamin Phillips",
//     "Lucas Campbell",
//     "Henry Evans",
//     "Jack Edwards",
//     "Alexander Collins"
// ];

// const players2 = [
//     "Olivia Green",
//     "Emma Baker",
//     "Charlotte Adams",
//     "Amelia Turner",
//     "Ava Nelson",
//     "Sophia Flores",
//     "Isabella Morris",
//     "Mia Reed",
//     "Evelyn Cook",
//     "Harper Morgan",
//     "Camila Bell"  
// ];

// const game = {
//     team1: players1,
//     team2: players2,
//     odds: {
//         players1: 15,
//         draw: 25,
//         players2: 60
//     }
// };

// const printGoals = function(...names) {
//     for (let i = 0; i < names.length; i++) {
//         console.log(`Player ${i+1}: ${names[i]}`);
//     }
//     console.log(`${names.length} goals were scored`);
// };

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, `Thiago`, `Coutinho`, `Periscic`];
// console.log(players1Final);

// const {odds: {players1: team1 = `15%`, draw = `25%`, players2: team2 = `60%`}} = game;
// console.log(team1, draw, team2);

// printGoals(`test1`, `test2`);
// printGoals(...game.team1);
// printGoals(...players2);

// (game.odds.players1 > game.odds.players2) && console.log(`First team is more likely to win 🎉`);

// (game.odds.players2 > game.odds.players1) && console.log(`Second team is more likely to win 🎉`);


// * 8. Looping arrays: The for-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // The old way (Boring!)
// for (let i = 0; i < menu.length; i++) {
//     console.log(menu[i]);
// }

// // A new way (Fun!). Introduced in ES6

// for (const item of menu) {
//     console.log(item);
// }

// for (const item of menu.entries()) {
//     console.log(item);
// }

// console.log([...menu.entries()]);

// for (const item of menu.entries()) {
//     // The old way
//     console.log(`${item[0] + 1}: ${item[1]}`);

//     // A new way
//     const [index, element] = item;
//     console.log(`${index + 1}: ${element}`);
// }

// // Even better way
// console.log(`-------------------------------`);
// for (const [index, element] of menu.entries()) {
//     console.log(`${index + 1}: ${element}`);
// }


// * 9. Enhanced Object Literals

// const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

// const openingHours = {
//     [weekdays[3]]: {
//         open: 12,
//         close: 22
//     },
//     fri: {
//         open: 11,
//         close: 23
//     },
//     sat: {
//         open: 0, // Open 24 hours
//         close: 24
//     }
// };

// const restaurant = {
//     name: `Classico Italiano`,
//     location: `Via Angelo Tavanti 23, Firenze, Italy`,
//     categories: [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`],
//     starterMenu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
//     mainMenu: [`Pizza`, `Pasta`, `Risotto`],

//     // ES6 Enhanced object literals
//     openingHours,

//     order(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery({starterIndex = 1, mainIndex = 0, time = `20:00`, address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//     },

//     orderPasta(ing1, ing2, ing3) {
//         console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//     },

//     orderPizza(mainIngredient, ...otherIngredients) {
//         console.log(mainIngredient);
//         console.log(otherIngredients);
//     }
// };


// * 10. Optional Chaining (?.)

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//     console.log(restaurant.openingHours.mon.open);
// }

// // With optional chaining

// console.log(restaurant.openingHours.mon?.open);

// // Example
// const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
// for (const day of days) {
//     console.log(day);
//     const open = restaurant.openingHours[day]?.open;
//     console.log(`On ${day}, we open at ${open ?? `closed`}`);
// }

// // Methods

// console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
// console.log(restaurant.tes?.(`abs`, false) ?? `Method doesn't exist`);

// const users = [
//     {name: `Jonas`, email: `hello@jonas.io`}  
// ];

// console.log(users[0]?.name ?? `User array empty`);


// * 11. Looping Objects: Object Keys, Values, and Entries

const openingHours = {
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
};

// const properties = Object.keys(openingHours);
// console.log(properties);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const day of Object.keys(openingHours)) {
//     console.log(day);
// }

// for (const [key, {open, close}] of entries) {
//     console.log(key, open, close);
// }

// const arr = [12, 32, `abc`, -3.53];

// const entries = Object.entries(arr);

// for (const [index, element] of entries) {
//     console.log(index, element);
// }


// * Challenge #2

// const game = {
//     team1: `Bayern Munich`,
//     team2: `Borussia Dortmund`,
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski'
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze'
//         ]
//     ],
//     score: `4:0`,
//     scored: [`Lewandowski`, `Gnarby`, `Lewandowski`, `Hummels`],
//     date: `Nov 9th, 2037`,
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5
//     }
// };

// // * Task 1

// for (const [goalNum, goalPlayer] of game.scored.entries()) {
//     console.log(`Goal ${goalNum + 1}: ${goalPlayer}`);
// }

// // * Task 2

// let oddSum = 0;
// for (const odd of Object.values(game.odds)) {
//     oddSum += odd;
// }

// const oddAverage = oddSum / Object.keys(game.odds).length;

// // Just to be sure
// console.log(oddAverage);
// console.log(oddSum / 3);

// // * Task 3

// console.log(`------------Task 3------------`);

// for (const [result, odd] of Object.entries(game.odds)) {
//     const teamStr = `Odd of ` + (result === `x` ? `draw` : `victory ${game[result]}`);
//     console.log(`${teamStr}: ${odd}`);
// }

// // * Task 4

// const result = {};

// for (const goal of game.scored) {
//     if (!result[goal]) result[goal] = 0;
//     result[goal] += 1;
// }

// console.log(result);


// * 12. Sets

// const ordersSet = new Set([
//     `Pasta`,
//     `Pizza`,
//     `Pizza`,
//     `Risotto`,
//     `Pasta`,
//     `Pizza`
// ]);

// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has(`Bread`));
// console.log(ordersSet.has(`Pizza`));
// console.log(ordersSet);

// for (const order of ordersSet) {
//     console.log(order);
// }

// // Example 
// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];

// const uniqueStaff = [...new Set(staff)];
// console.log(uniqueStaff);


// * 13. New Operations to make Sets useful

// const italianFoods = new Set([
//     `pasta`,
//     `gnocchi`,
//     `tomatoes`,
//     `olive oil`,
//     `garlic`,
//     `basil`
// ]);

// const mexicanFoods = new Set([
//     `tortillas`,
//     `beans`,
//     `rice`,
//     `tomatoes`,
//     `avocado`,
//     `garlic`
// ]);

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log(commonFoods);
// console.log([...commonFoods]);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log(italianMexicanFusion);

// // Old way

// const unionF = function (...arrays) {
//     let combinedArray = [];
//     for (const array of arrays) {
//         // combinedArray = [...combinedArray, ...array];
//         combinedArray.push(...array);
//     }
//     const uniqueArray = [...new Set(combinedArray)];
//     console.log(uniqueArray);
// }

// const combinedArray = [...new Set([
//     ...mexicanFoods,
//     ...italianFoods
// ])];
// console.log(combinedArray);

// unionF(mexicanFoods, italianFoods, [`test1`, `test2`]);

// const uniqueItalian = italianFoods.difference(mexicanFoods);
// console.log(`Difference italian`, uniqueItalian);


// * 14. Maps: Fundamentals

// const rest = new Map();

// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);

// console.log(rest.set(2, `Lisbon, Portugal`));

// rest
//     .set(`categories`, [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`])
//     .set(`open`, 11)
//     .set(`close`, 23)
//     .set(true, `We are open :D`)
//     .set(false, `We are closed :(`);

// console.log(rest.get(`name`));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 10;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// console.log(rest.has(`categories`));
// rest.delete(2);
// console.log(rest.has(2));
// console.log(rest.size);
// console.log(rest.clear());

// const arr = [1, 2];
// rest.set(arr, `Test`);
// rest.set(document.querySelector(`h1`), `Heading`);
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));


// * 15. Maps: Iteration

// // This way is preferred instead of using .set()
// // when initializing a Map.
// const question = new Map([
//     [`question`, `What is the best programming language in the world?`],
//     [1, `C`],
//     [2, `Java`],
//     [3, `JavaScript`],
//     [`correct`, 3],
//     [true, `Correct 🎉`],
//     [false, `Try again!`]
// ]);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//     if (typeof key === `number`) console.log(key, value);
// }

// // const answer = Number(window.prompt(`Your answer: `));
// const answer = 3;
// console.log(answer);

// console.log(question.get(answer === question.get(`correct`)));

// // Convert map to array
// console.log([...question]);


// * 16. Challenge #3

const gameEvents = new Map([
    [17, `⚽ GOAL`],
    [36, `🔁 Substitution`],
    [47, `⚽ GOAL`],
    [61, `🔁 Substitution`],
    [64, `🟨 Yellow card`],
    [69, `🔴 Red card`],
    [70, `🔁 Substitution`],
    [72, `🔁 Substitution`],
    [76, `⚽ GOAL`],
    [80, `⚽ GOAL`],
    [92, `🟨 Yellow card`]
]);

// * Task 1

// LOL 
let events = [];
for (const value of gameEvents.values()) events.push(value);
events = [...new Set(events)];

// More convenient way
events = [...new Set(gameEvents.values())];
console.log(events);

// * Task 2

gameEvents.delete(64);
console.log(gameEvents);

// * Task 3

const eventAverageFrequency = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${eventAverageFrequency} minutes.`);

// * Task 4

for (const [k, v] of gameEvents) {
    let halfStr = ``;
    if (k > 0 && k <= 45) halfStr = `[FIRST HALF]`;
    else if (k > 45) halfStr = `[SECOND HALF]`;

    console.log(`${halfStr} ${k}: ${v}`);
}