function getStringLengths(...strings) {
    strings.forEach(str => console.log(`${str}: ${str.length}`));
}

getStringLengths('hello world', 'lorem ipsum', 'javascript is cool');

function toUpperCase(...strings) {
    return strings.map(str => str.toUpperCase());
}

console.log(toUpperCase('hello world', 'lorem ipsum', 'javascript is cool'));


function toLowerCase(...strings) {
    return strings.map(str => str.toLowerCase());
}

console.log(toLowerCase('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'));


function cleanString(str) {
    return str.trim();
}

let dirtyString = ' dirty string   ';
console.log(cleanString(dirtyString));


function stringToArray(str) {
    return str.split(' ');
}

let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str);
console.log(arr);


let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);

function sortNums(array, direction) {
    return array.sort((a, b) => direction === 'ascending' ? a - b : b - a);
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending')); // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21, 11, 3]

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];


coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);


let longCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(longCourses);


let mappedCourses = coursesAndDurationArray.map((course, index) => ({ id: index + 1, title: course.title, monthDuration: course.monthDuration }));
console.log(mappedCourses);


const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const colors = { spade: 'black', clubs: 'black', diamond: 'red', heart: 'red' };

const deck = [];

suits.forEach(suit => {
    values.forEach(value => {
        deck.push({ cardSuit: suit, value: value, color: colors[suit] });
    });
});


let aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(aceOfSpades);

let sixes = deck.filter(card => card.value === '6');
console.log(sixes);


let redCards = deck.filter(card => card.color === 'red');
console.log(redCards);


let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);


let clubsNineAndAbove = deck.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log(clubsNineAndAbove);


const packedDeck = deck.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(packedDeck);

let coursesArray = [
    { title: 'JavaScript Complex', monthDuration: 5, modules: ['html', 'css', 'js', 'react'] },
    { title: 'Java Complex', monthDuration: 6, modules: ['html', 'css', 'java', 'spring'] },
    { title: 'Python Complex', monthDuration: 6, modules: ['html', 'css', 'python', 'django'] },
    { title: 'QA Complex', monthDuration: 4, modules: ['html', 'css', 'js', 'qa'] },
    { title: 'FullStack', monthDuration: 7, modules: ['html', 'css', 'js', 'node', 'sass'] },
    { title: 'Frontend', monthDuration: 4, modules: ['html', 'css', 'js', 'react', 'sass'] },
];


let sassCourses = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassCourses);


let dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));
console.log(dockerCourses);
