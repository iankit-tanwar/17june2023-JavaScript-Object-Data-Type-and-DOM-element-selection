


// lets create a JS object
var car1 = {
    //1 property : value
    brand: "Tata",
    name: 'Harrier',
    year: 2023,
    color: 'black',
    engine: `EV/Petrol/Desel`,
    Pice: 200000,
    //1 Function/methods Defination
    getMyCar1() {
        return  this.brand +' '+this.name+' '+this.year +' '+this.color ;

    }

}; // Student1 is a type of JS object

// how to these information from JS object
//2 Function Calling
console.log(car1.getMyCar1());  // objectName.propertyName


console.log(car1["brand"]);  //objectName["propertyName"]


let x = 'brand'
console.log(car1[x]);  //objectName[Expression]



