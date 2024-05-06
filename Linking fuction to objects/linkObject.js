let myCar = {
    make: "volvo",
    model: "s60",
    price: 42000,
    engine: {
        cylinders: 4,
        displacement: 2000,
        horsepower: 250,
    }
}

function printCarDetails(){
    console.log(` 
    Make: ${this.make}
    Model: ${this.model}
    Price: $${this.price}`)
}

function printEngineDetails(){
    console.log(
        `
        Displacement: ${this["displacement"]}cc
        Horsepower: ${this["horsepower"]}bhp
        `
    )
}

console.log("Car details: \n");
printCarDetails.call(myCar);
// benefit of linking object to function is
// you can recall the function and this will give a blueprint
// and give the properties of the object

console.log("Engine details: ");
printEngineDetails.call(myCar.engine);

