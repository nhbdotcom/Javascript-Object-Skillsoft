"use strict";
// console.log("Is this === window?", this === window);
// console.log("What is this", this);

// var age = 35;
// console.log("window age: ", window.age);
// console.log("this age: ", this.age);
// // If you initialize this, the age will be a property of window object

// this.age = 55;
// console.log("window age: ", window.age);
// console.log("age: ", this.age);
// // Property value of window.age and this.age will also output 55.

// let someFunction = () => this;
// console.log("this returned from a function: ", someFunction());
// // this will also point to window.

/*let myCar = {
    make: "Volvo",
    model: "S60",
    price: 42000,
    printDetails(){
        // console.log("this from myCar: ", this);// this will print the myCar properties
        // to make this meaningful
        console.log(`
        ${myCar.make}
        ${myCar.model}
        ${myCar.price}
        `)
    },
    engine:{
        cylinder: 4, 
        displacement: 2000,
        horsepower: 258,
        printDetails(){
            console.log(`
            Displacement: ${this.displacement}cc 
            Horsepower: ${ this.horsepower}bhp`)
        }
    }
}
console.log("The field of myCar.");
myCar.printDetails();
console.log("Engine details: \n")
myCar.engine.printDetails();
*/
let myCar = {
    make: "Volvo",
    model: "S60",
    price: 42000,
    engine: {
        cylinders: 4,
        displacement: 2000,
        horsepower: 250
    }
}
console.log(myCar); // without functions