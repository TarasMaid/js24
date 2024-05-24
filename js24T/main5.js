let rectangleArea = (a, b) => a * b;

let circleArea = r => Math.PI * Math.pow(r, 2);

let cylinderArea = (h, r) => 2 * Math.PI * r * (r + h);

let printArray = arr => arr.forEach(elem => console.log(elem));

let createParagraph = text => console.log(`<p>${text}</p>`);

let createUlWithLi = text => console.log(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);

let createUlWithLiDynamic = (text, count) => {
    let result = "<ul>";
    for (let i = 0; i < count; i++) {
        result += `<li>${text}</li>`;
    }
    result += "</ul>";
    console.log(result);
};

const createListFromArray = arr => {
    let result = "<ul>";
    arr.forEach(elem => {
        result += `<li>${elem}</li>`;
    });
    result += "</ul>";
    console.log(result);
};

const printObjects = arr => arr.forEach(obj => console.log(`ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}`));

const findMinimum = arr => console.log(Math.min(...arr));

const sumArray = arr => console.log(arr.reduce((acc, curr) => acc + curr, 0));

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    console.log(arr);
};

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const exchangeRate = currencyValues.find(currency => currency.currency === exchangeCurrency).value;
    console.log(sumUAH / exchangeRate);
};
