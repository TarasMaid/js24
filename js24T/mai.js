
function rectangleArea(a, b) {
    return a * b;
}


function circleArea(r) {
    return Math.PI * r ** 2;
}


function cylinderArea(r, h) {
    return 2 * Math.PI * r * (r + h);
}


function printArray(arr) {
    arr.forEach(item => console.log(item));
}


function createParagraph(text) {
    return `<p>${text}</p>`;
}


function createListWithThreeItems(text) {
    return `<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`;
}


function createListWithItems(text, count) {
    let list = '<ul>';
    for (let i = 0; i < count; i++) {
        list += `<li>${text}</li>`;
    }
    list += '</ul>';
    return list;
}

function createListFromArray(arr) {
    let list = '<ul>';
    arr.forEach(item => {
        list += `<li>${item}</li>`;
    });
    list += '</ul>';
    return list;
}


function printObjects(objArray) {
    objArray.forEach(obj => {
        document.write(`<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`);
    });
}


function findMinNumber(arr) {
    return Math.min(...arr);
}


function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}


function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}


function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const currency = currencyValues.find(item => item.currency === exchangeCurrency);
    if (currency) {
        return sumUAH / currency.value;
    } else {
        return 'Currency not found';
    }
}


console.log(rectangleArea(5, 7)); // 35
console.log(circleArea(3)); // ~28.27
console.log(cylinderArea(3, 5)); // ~150.8
printArray([1, 2, 3, 4, 5]);
console.log(createParagraph("Some text")); // <p>Some text</p>
console.log(createListWithThreeItems("Item")); // <ul><li>Item</li><li>Item</li><li>Item</li></ul>
console.log(createListWithItems("Item", 4)); // <ul><li>Item</li><li>Item</li><li>Item</li><li>Item</li></ul>
console.log(createListFromArray([1, 'two', true])); // <ul><li>1</li><li>two</li><li>true</li></ul>
printObjects([{id: 1, name: 'John', age: 30}, {id: 2, name: 'Alice', age: 25}]);
console.log(findMinNumber([5, 3, 9, 2])); // 2
console.log(sum([1, 2, 3])); // 6
console.log(swap([11, 22, 33, 44], 0, 1)); // [22, 11, 33, 44]
console.log(exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')); // 250
