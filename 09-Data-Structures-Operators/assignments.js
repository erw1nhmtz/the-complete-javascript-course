'use strict';

// * Destructuring Arrays

// // * 1.1

// const books = [`Games of Thrones`, `Clash of Kings`, `Storm of Swords`, `Feast of Crows`, `Dance of Dragons`];
// const [firstBook, secondBook] = books;
// console.log(firstBook, `,`, secondBook);


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


// * Destructuring Objects

// * 2.1

const books = [
    {
        title: `Game of Thrones`,
        author: `George R.R. Martin`,
        ISBN: 6322983997,
        keywords: [`beep`, `beep`, `boop`],
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
        author: `George R.R. Martin`,
        ISBN: 6504187002,
        keywords: [`beep`, `bop`, `beep`]
    },
    {
        title: `Storm of Swords`,
        author: `George R.R. Martin`,
        ISBN: 1439013314,
        keywords: [`beep`, `bop`, `beep`, `bop`]
    },
    {
        title: `Feast of Crows`,
        author: `George R.R. Martin`,
        ISBN: 5586956527,
        keywords: [`bop`, `bop`, `beep`]
    },
    {
        title: `Dance with the Dragons`,
        author: `George R.R. Martin`,
        ISBN: 9373546023,
        keywords: [`beep`, `bop`, `boop`],
        language: `English`,
    }
];

const {title, author, ISBN} = books[0];
console.log(title, author, ISBN);


// * 2.2 

const {keywords: tags} = books[0];
console.log(tags);


// * 2.3

const {language, programmingLanguage = `unknown`} = books[4];
console.log(language, programmingLanguage);


// * 2.4

let bookTitle = `unknown`;
let bookAuthor = `unknown`;

({title: bookTitle, author: bookAuthor} = books[0]);
console.log(bookTitle, bookAuthor);


// * 2.5

const {thirdParty: {goodreads: {rating}}} = books[0];
console.log(rating);


// * 2.6

