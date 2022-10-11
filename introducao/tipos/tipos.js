"use strict";
//string
let personalName = 'João';
// console.log(personalName)
//number
let year = 23;
// console.log(year)
//boolean
let hot = true;
// console.log(hot)
//number
let myYear;
myYear = 455;
// console.log(myYear)
//array
let hobbies = ['Cooking', 'biking'];
hobbies = [45];
// console.log(hobbies)
//tuplas
let address = ['Estrada Beira Rio', 123, true];
// console.log(address)
//enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Orange"] = 3] = "Orange";
})(Color || (Color = {}));
let myColor = Color.Blue;
// console.log(myColor)
//any
let car = 'BMW';
// console.log(car)
car = { car: 'BMW', year: 2015 };
// console.log(car)
//functions
function returnName() {
    return personalName;
}
// console.log(returnName())
function sayHi() {
    // console.log('Hello!')
}
sayHi();
function sum(x, y) {
    return x + y;
}
// console.log(sum(38.52, 154.5))
let calc;
calc = sum;
// console.log(calc(12,45))
//object
let user = {
    nameUser: 'Rodrigo', age: 24
};
let workers = {
    workers: ['Rodrigo', 'Tiago', 'Breno'],
    time(hour) {
        if (hour < 8) {
            return 'Normal';
        }
        else {
            return 'Atrasado';
        }
    }
};
//console.log(workers.time(7))
//union types
let note = '10';
// console.log(`Minha nota é ${note}`)
//never
function fault(msg) {
    throw new Error(msg);
}
const product = {
    productName: 'Soap',
    price: -10,
    validateProduct() {
        if (!this.productName || this.productName.trim().length === 0) {
            fault('Precisa ter um nomme!');
        }
        if (this.price <= 0) {
            fault('Preço inválido!');
        }
    }
};
// console.log(product.validateProduct())
