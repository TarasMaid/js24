let myArray = [10, 'hello', true, {name: 'John', age: 25}, ['apple', 'banana'], null, undefined, 3.14, false, function() {console.log('Hello from function!')}];

myArray.forEach(item => console.log(item));
let book1 = {title: 'The Great Gatsby', pageCount: 180, genre: 'Fiction'};
let book2 = {title: 'To Kill a Mockingbird', pageCount: 281, genre: 'Novel'};
let book3 = {title: 'Harry Potter and the Philosopher\'s Stone', pageCount: 332, genre: 'Fantasy'};

console.log(book1);
console.log(book2);
console.log(book3);

let book4 = {title: 'The Great Gatsby', pageCount: 180, genre: 'Fiction', authors: [{name: 'F. Scott Fitzgerald', age: 44}]};
let book5 = {title: 'To Kill a Mockingbird', pageCount: 281, genre: 'Novel', authors: [{name: 'Harper Lee', age: 89}]};
let book6 = {title: 'Harry Potter and the Philosopher\'s Stone', pageCount: 332, genre: 'Fantasy', authors: [{name: 'J.K. Rowling', age: 56}]};

console.log(book4);
console.log(book5);
console.log(book6);

let x = 1;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let time = 30;

if (time >= 0 && time <= 59) {
    if (time < 15) {
        console.log('Число потрапляє у першу четверть години');
    } else if (time < 30) {
        console.log('Число потрапляє у другу четверть години');
    } else if (time < 45) {
        console.log('Число потрапляє у третю четверть години');
    } else {
        console.log('Число потрапляє у четверту четверть години');
    }
} else {
    console.log('Некоректне значення часу');
}

let day = 16;

if (day >= 1 && day <= 31) {
    if (day <= 10) {
        console.log('Число потрапляє у першу половину місяця');
    } else if (day <= 20) {
        console.log('Число потрапляє у другу половину місяця');
    } else {
        console.log('Число потрапляє у третю половину місяця');
    }
} else {
    console.log('Некоректне значення дня');
}

let dayOfWeek = 4; 

switch (dayOfWeek) {
    case 1:
        console.log('Понеділок');
        break;
    case 2:
        console.log('Вівторок');
        break;
    case 3:
        console.log('Середа');
        break;
    case 4:
        console.log('Четвер');
        break;
    case 5:
        console.log('П\'ятниця');
        break;
    case 6:
        console.log('Субота');
        break;
    case 7:
        console.log('Неділя');
        break;
    default:
        console.log('Некоректний день тижня');
}

let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log('Максимальне число:', num1);
} else if (num2 > num1) {
    console.log('Максимальне число:', num2);
} else {
    console.log('Числа рівні між собою');
}

