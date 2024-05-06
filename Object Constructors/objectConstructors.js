"use strict";

function Car(make, model, price, engine){
    this["make"] = make;
    this["model"] = model;
    this["price"] = price;
    this["engine"] = engine;
    this["details"] = function(){
        console.log(`
            Make: ${this["make"]}
            Model: ${this.model}
            Price: $${this["price"]}
        `)
    }
    this.engine.details = function(){
        console.log(`
            Cylinders: ${this.cylinders}
            Displacement: ${this["displacement"]}cc
            Horsepower: ${this.horsepower}bhp
        `)
    }
}

let s60Engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250
}

let myCar = new Car("Volvo", "s60", 42000, s60Engine);

console.log(`My car is a ${myCar.make} ${myCar.model}.`)



console.log("My car details: \n");
myCar.details();

let caymanEngine = {
    cylinders: 4,
    displacement: 2500,
    horsepower: 350
}


let yourCar = new Car("Porsche", "718 Cayman", 61000, caymanEngine);
console.log("Your car is a " + yourCar.make + " " + yourCar["model"] + ".")

console.log("Your car details: \n");
yourCar.details();
console.log("Your car Engine details: ")
yourCar.engine.details();

class Vehicle{
    constructor(make, model, price, engine){
        this.make = make;
        this["model"] = model;
        this.price = price;
        this["engine"] = engine;
    }
    // Details of the vehicle
    details = function(){
        console.log(
            `
            Make: ${this.make}
            Model: ${this.model}
            Price: $${this["price"]};
            `
        )
    }
}

myCar = new Vehicle("Volvo", "S60", 4200, s60Engine);

console.log("Vehicle details: \n");
myCar.details();