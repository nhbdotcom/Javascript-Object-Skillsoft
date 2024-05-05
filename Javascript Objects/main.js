"use strict";

let firstItem = {
    id:1,
    name: "laptop",
    price: 500
}

let secondItem = {
    id: 2,
    name: "watch",
    price: 240,
    model: "Seiko"
}

console.log(`The name of the firstItem is ${firstItem.name} and the price is ${firstItem.price}.`)

console.log(`The name of the secondItem is ${secondItem["name"]} and the price is ${secondItem["price"]}.`)// you can also do it like this
//console.log(`The name of the secondItem is ${secondItem.name} and the price is ${secondItem.price}.`)


const USD_EUR = 0.9;
// let thirdItem = {
// id: 3,
// brand: "Sonical",
// price: 84,
    // priceEUR: this.price * USD_EUR
// };
// console.log("Price of thirdItem in Euros: ", thirdItem.priceEUR);// output Price of thirdItem in Euros:  NaN
//To make this right you should use function instead.

let thirdItem = {
    id: 3,
    brand: "Sonical",
    price: 84,
    priceEUR: function () {
        return this.price * USD_EUR;
    }
};
console.log("Price of updated thirdItem in Euros: ", thirdItem.priceEUR());// by calling t he function priceEUR() the this.price * USD_EUR will give the product.
