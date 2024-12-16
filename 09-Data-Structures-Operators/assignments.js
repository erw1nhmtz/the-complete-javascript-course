'use strict';

// * 1. Destructuring Arrays

// const books = [`Games of Thrones`, `Clash of Kings`, `Storm of Swords`, `Feast of Crows`, `Dance of Dragons`];

// // * 1.1 

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);


// // * 1.2

// const [, , thirdBook] = books;
// console.log(thirdBook); 


// // * 1.3

// const ratings = [[`rating`, 4.19], [`ratingsCount`, 144584]];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount); 


// // * 1.4

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);


// * 2. Destructuring Objects

// const books = [
//     {
//         title: `Game of Thrones`,
//         author: `George R.R. Martin`,
//         ISBN: 6322983997,
//         keywords: [`beep`, `beep`, `boop`],
//         thirdParty: {
//             goodreads: {
//               rating: 4.41,              // <-- HERE
//               ratingsCount: 1733,
//               reviewsCount: 63,
//               fiveStarRatingCount: 976,
//               oneStarRatingCount: 13
//             }
//         }
//     },
//     {
//         title: `Clash of Kings`,
//         author: `George R.R. Martin`,
//         ISBN: 6504187002,
//         keywords: [`beep`, `bop`, `beep`]
//     },
//     {
//         title: `Storm of Swords`,
//         author: `George R.R. Martin`,
//         ISBN: 1439013314,
//         keywords: [`beep`, `bop`, `beep`, `bop`]
//     },
//     {
//         title: `Feast of Crows`,
//         author: `George R.R. Martin`,
//         ISBN: 5586956527,
//         keywords: [`bop`, `bop`, `beep`]
//     },
//     {
//         title: `Dance with the Dragons`,
//         author: `George R.R. Martin`,
//         ISBN: 9373546023,
//         keywords: [`beep`, `bop`, `boop`],
//         language: `English`
//     }
// ];

// // * 2.1

// const {title, author, ISBN} = books[0];
// console.log(title, author, ISBN);


// // * 2.2

// const {keywords: tags} = books[0];
// console.log(tags);


// // * 2.3

// const {language, programmingLanguage = `unknown`} = books[4];
// console.log(language, programmingLanguage);


// // * 2.4
// console.log(`*****************`);

// let bookTitle = `unknown`;
// let bookAuthor = `unknown`;

// ({title: bookTitle, author: bookAuthor} = books[0]);
// console.log(bookTitle, bookAuthor);


// // * 2.5

// const {thirdParty: {goodreads: {rating}}} = books[0];
// console.log(rating);


// // * 2.6

// const printBookInfo = function({title, author, year = `year unknown`})  { // Second way
//     // First way
//     if (!year) year = `year unknown`;
//     console.log(`${title} by ${author}, ${year}`);
// };

// printBookInfo({title: `Algorithms`, author: `Robert Sedgewick`, year: `2011`});
// printBookInfo({title: `Game of Thrones`, author: `George R.R. Martin`});


// * 3 The Spread Operator

// * 3.1

// const books = [
//     {
//         title: `Game of Thrones`,
//         author: `George R.R. Martin`,
//         ISBN: 6322983997,
//         keywords: [`beep`, `beep`, `boop`],
//         thirdParty: {
//             goodreads: {
//               rating: 4.41,              // <-- HERE
//               ratingsCount: 1733,
//               reviewsCount: 63,
//               fiveStarRatingCount: 976,
//               oneStarRatingCount: 13
//             }
//         }
//     },
//     {
//         title: `Clash of Kings`,
//         author: [`George R.R. Martin`, `Some other dude`],
//         ISBN: 6504187002,
//         keywords: [`beep`, `bop`, `beep`]
//     },
//     {
//         title: `Storm of Swords`,
//         author: [`George R.R. Martin`, `Some other dude`, `Some other dude 2`],
//         ISBN: 1439013314,
//         keywords: [`beep`, `bop`, `beep`, `bop`]
//     },
//     {
//         title: `Feast of Crows`,
//         author: `George R.R. Martin`,
//         ISBN: 5586956527,
//         keywords: [`bop`, `bop`, `beep`]
//     },
//     {
//         title: `Dance with the Dragons`,
//         author: `George R.R. Martin`,
//         ISBN: 9373546023,
//         keywords: [`beep`, `bop`, `boop`],
//         language: `English`
//     }
// ];

// const bookAuthors = [books[0].author, ...books[2].author];
// console.log(bookAuthors);


// // * 3.2

// const spellWord = function(str) {
//     console.log(...str);
// }

// spellWord(`JavaScript`);


// * 4. Rest Pattern and Parameters

// const books = [
//     {
//         title: `Game of Thrones`,
//         author: `George R.R. Martin`,
//         ISBN: 6322983997,
//         keywords: [`beep`, `beep`, `boop`],
//         publisher: `Bantam books`,
//         thirdParty: {
//             goodreads: {
//               rating: 4.41,              // <-- HERE
//               ratingsCount: 1733,
//               reviewsCount: 63,
//               fiveStarRatingCount: 976,
//               oneStarRatingCount: 13
//             }
//         }
//     },
//     {
//         title: `Clash of Kings`,
//         author: [`George R.R. Martin`, `Some other dude`],
//         ISBN: 6504187002,
//         publisher: `Bantam books`,
//         keywords: [`beep`, `bop`, `beep`]
//     },
//     {
//         title: `Storm of Swords`,
//         author: [`George R.R. Martin`, `Some other dude`, `Some other dude 2`],
//         ISBN: 1439013314,
//         keywords: [`beep`, `bop`, `beep`, `bop`]
//     },
//     {
//         title: `Feast of Crows`,
//         author: `George R.R. Martin`,
//         ISBN: 5586956527,
//         keywords: [`bop`, `bop`, `beep`]
//     },
//     {
//         title: `Dance with the Dragons`,
//         author: `George R.R. Martin`,
//         ISBN: 9373546023,
//         keywords: [`beep`, `bop`, `boop`],
//         language: `English`
//     }
// ];

// // * 4.1

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);
// console.log(mainKeyword, ...rest);


// // * 4.2

// const {publisher: bookPublisher, ...restOfTheBook} = books[1];
// console.log(bookPublisher, restOfTheBook);
// // ! Unable to use "spread operator" on object restOfTheBook
// // console.log(bookPublisher, ...restOfTheBook);


// // * 4.3

// const printBookAuthorsCount = function(title, ...authors) {
//     console.log(`The book ${title} has ${authors.length} authors`);
// };

// printBookAuthorsCount(`Algorithms`, `Robert Sedgewick`, `Kevin Wayne`);


// * 5. Short Cicruiting (&& and ||)

const books = [
    {
        title: `Game of Thrones`,
        author: `George R.R. Martin`,
        ISBN: 6322983997,
        keywords: [`beep`, `beep`, `boop`],
        publisher: `Bantam books`,
        onlineContent: true,
        highlighted: true,
        pages: 700,
        edition: 3,
        thirdParty: {
            goodreads: {
              rating: 4.41,              // <-- HERE
              ratingsCount: 1733,
              reviewsCount: 63,
              fiveStarRatingCount: 976,
              oneStarRatingCount: 13
            }
        }
    },
    {
        title: `Clash of Kings`,
        author: [`George R.R. Martin`, `Some other dude`],
        ISBN: 6504187002,
        onlineContent: false,
        pages: 900,
        edition: undefined,
        publisher: `Bantam books`,
        keywords: [`beep`, `bop`, `beep`],
        highlighted: true,
        programmingLanguage: `Java`
    },
    {
        title: `Storm of Swords`,
        author: [`George R.R. Martin`, `Some other dude`, `Some other dude 2`],
        onlineContent: false,
        pages: 1200,
        edition: undefined,
        ISBN: 1439013314,
        highlighted: true,
        keywords: [`beep`, `bop`, `beep`, `bop`],
        programmingLanguage: `Kotlin`
    },
    {
        title: `Feast of Crows`,
        author: `George R.R. Martin`,
        edition: undefined,
        pages: 750,
        ISBN: 5586956527,
        highlighted: true, 
        keywords: [`bop`, `bop`, `beep`]
    },
    {
        title: `Dance with the Dragons`,
        author: `George R.R. Martin`,
        edition: undefined,
        pages: 900,
        ISBN: 9373546023,
        highlighted: true,
        language: `English`
    }
];

// // * 5.1

// const hasExamplesInJava = function(book) {
//     return book.programmingLanguage === `Java` || `no data available`;  
// };

// console.log(hasExamplesInJava(books[0]));
// console.log(hasExamplesInJava(books[1]));
// console.log(hasExamplesInJava(books[2]));


// // * 5.2

// for(let i = 0; i < books.length; i++) {
//     books[i].onlineContent && console.log(`${books[i].title} provides online content.`);
// }


// * 6. The Nullish Coalescing Operator (??)

// // * 6.1

// for (let i = 0; i < books.length; i++) {
//     books[i].onlineContent ?? console.log(`${books[i].title} provides no data about its online content`);
// }


// * 7. Logical Assignments Operators

// * 7.1

// for (let i = 0; i < books.length; i++) {
//     books[i].edition ||= 1;
// }


// // * 7.2

// for (let i = 0; i < books.length; i++) {
//     books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// for (let i = 0; i < books.length; i++) {
//     console.log(books[i]);
// }


// * 8. Looping arrays: The for-of loop

// // * 8.1 
// let sumOfPages = 0;
// for (const book of books) {
//     sumOfPages += book.pages;
// }
// console.log(sumOfPages);

// // * 8.2

// const allAuthors = [];
// for (const book of books) {
//     const authors = book.author;
//     if ((typeof authors) === `string`) allAuthors.push(authors);
//     else if ((typeof authors) === `object`) allAuthors.push(...authors);
// }

// console.log(allAuthors);

// // * 8.3

// console.log(`-------------------------`);
// for (const [index, el] of allAuthors.entries()) {
//     console.log(`${index + 1}: ${el}`);
// }


// * 9. Enhanced Object Literals

// * 9.1

// const bookData = [
//     [`title`, `Computer Networking: A Top-Down Approach`],
//     [`author`, [`James F. Kurose`, `Keith W. Ross`]],
//     [`publisher`, `Addison Wesley`]
// ];

// const newBook = {
//     [bookData[0][0]]: bookData[0][1],
//     [bookData[1][0]]: bookData[1][1],
//     [bookData[2][0]]: bookData[2][1]
// };

// console.log(newBook);

// // * 9.2

// const pages = 880;

// const newBook2 = {
//     title: `The C Programming Language`,
//     author: [`Brian W. Kernighan`, `Dennis M. Ritchie`],
//     pages
// };

// console.log(newBook2);


// * 10. Optional chaining (?.)

// const getFirstKeyword = function(book) {
//     return book.keywords?.[0];
// }

// for (const book of books) {
//     console.log(getFirstKeyword(book));
// }


// * 11. Looping Objects: Object keys, values and entries

// * 11.1

let entries = [];
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
    entries.push(key);
}
console.log(entries);

// * 11.2

// for (const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
//     entries[index] = [index, value];
// }
// console.log(entries);

// * 11.3

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

// * 11.4

console.log(entries);
console.log(entries2);