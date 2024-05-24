function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890'),
    new User(2, 'Jane', 'Doe', 'jane.doe@example.com', '123-456-7891'),
    new User(3, 'Jim', 'Beam', 'jim.beam@example.com', '123-456-7892'),
    new User(4, 'Jack', 'Daniels', 'jack.daniels@example.com', '123-456-7893'),
    new User(5, 'Johnny', 'Walker', 'johnny.walker@example.com', '123-456-7894'),
    new User(6, 'Jameson', 'Whiskey', 'jameson.whiskey@example.com', '123-456-7895'),
    new User(7, 'Jill', 'Valentine', 'jill.valentine@example.com', '123-456-7896'),
    new User(8, 'Chris', 'Redfield', 'chris.redfield@example.com', '123-456-7897'),
    new User(9, 'Leon', 'Kennedy', 'leon.kennedy@example.com', '123-456-7898'),
    new User(10, 'Claire', 'Redfield', 'claire.redfield@example.com', '123-456-7899')
];

let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

let sortedUsers = users.slice().sort((a, b) => a.id - b.id);
console.log(sortedUsers);

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890', ['item1', 'item2']),
    new Client(2, 'Jane', 'Doe', 'jane.doe@example.com', '123-456-7891', ['item1']),
    new Client(3, 'Jim', 'Beam', 'jim.beam@example.com', '123-456-7892', ['item1', 'item2', 'item3']),
    new Client(4, 'Jack', 'Daniels', 'jack.daniels@example.com', '123-456-7893', ['item1']),
    new Client(5, 'Johnny', 'Walker', 'johnny.walker@example.com', '123-456-7894', ['item1', 'item2', 'item3', 'item4']),
    new Client(6, 'Jameson', 'Whiskey', 'jameson.whiskey@example.com', '123-456-7895', ['item1', 'item2']),
    new Client(7, 'Jill', 'Valentine', 'jill.valentine@example.com', '123-456-7896', ['item1']),
    new Client(8, 'Chris', 'Redfield', 'chris.redfield@example.com', '123-456-7897', ['item1', 'item2', 'item3']),
    new Client(9, 'Leon', 'Kennedy', 'leon.kennedy@example.com', '123-456-7898', ['item1', 'item2']),
    new Client(10, 'Claire', 'Redfield', 'claire.redfield@example.com', '123-456-7899', ['item1'])
];


let sortedClients = clients.slice().sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

// function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     this.info = function() {
//         console.log(`Модель: ${this.model}, Виробник: ${this.producer}, Рік випуску: ${this.year}, Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.engineVolume}`);
//     };
//
//     this.increaseMaxSpeed = function(newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     this.changeYear = function(newValue) {
//         this.year = newValue;
//     };
//
//     this.addDriver = function(driver) {
//         this.driver = driver;
//     };
// }
//
// let myCar = new Car('Model S', 'Tesla', 2020, 250, 2.0);
// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(50);
// myCar.changeYear(2021);
// myCar.addDriver({ name: 'John Doe', age: 30 });
// myCar.info();


class Car {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Модель: ${this.model}, Виробник: ${this.producer}, Рік випуску: ${this.year}, Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.engineVolume}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let myCar = new Car('Model S', 'Tesla', 2020, 250, 2.0);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(50);
myCar.changeYear(2021);
myCar.addDriver({ name: 'John Doe', age: 30 });
myCar.info();


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Cindy', 18, 36),
    new Cinderella('Ella', 19, 37),
    new Cinderella('Bella', 20, 38),
    new Cinderella('Anna', 21, 39),
    new Cinderella('Elsa', 22, 36),
    new Cinderella('Ariel', 23, 37),
    new Cinderella('Mulan', 24, 38),
    new Cinderella('Jasmine', 25, 39),
    new Cinderella('Tiana', 26, 36),
    new Cinderella('Rapunzel', 27, 37)
];

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findCinderella(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.footSize === this.foundShoeSize) {
                return cinderella;
            }
        }
        return null;
    }

    findCinderellaWithFind(cinderellas) {
        return cinderellas.find(cinderella => cinderella.footSize === this.foundShoeSize);
    }
}

let prince = new Prince('Charming', 30, 38);
let foundCinderella = prince.findCinderella(cinderellas);
console.log(foundCinderella);

let foundCinderellaWithFind = prince.findCinderellaWithFind(cinderellas);
console.log(foundCinderellaWithFind);


Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};


let numbers = [1, 2, 3, 4, 5];

numbers.myForEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});

let evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log(evenNumbers);

let squaredNumbers = numbers.myMap(num => num * num);
console.log(squaredNumbers);

