"use strict";

// const USD_EUR = 0.9;

// let thirdItem = {
//     id: 3,
//     brand: "Sonical",
//     price: 84,
//     priceEUR: function () {
//         return this.price * USD_EUR;
//     }
// };
// console.log("Price of ES6 thirdItem in Euros: ", thirdItem.priceEUR());// by calling t he function priceEUR() the this.price * USD_EUR will give the product.

// thirdItem.manufacturingCountry = "Canada"; // You can add another property of the thirdItem by doing this.

// console.log("The third item is ", thirdItem);

/*Using the Object constructor */

let fourthItem = new Object(); 

fourthItem.id = 4;
fourthItem.name = "cell phone";
fourthItem.price = 450;

console.log("The fourthItem is: ", fourthItem);

delete fourthItem.price; // If you want to delete a property you can use delete.

console.log("The fourthItem is: ", fourthItem);
