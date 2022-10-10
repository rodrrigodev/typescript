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
