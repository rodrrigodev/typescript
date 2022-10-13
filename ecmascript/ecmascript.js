"use strict";
/*
//let & const - var

console.log(isItAllow)

var isItAllow = '?' //hoisting


let isCold = true
if(isCold){
    let action = 'Put on hoodie' //scope local
}
console.log(action)

function reveal(){
    var secret = 'intern' //function has local scope
}

console.log(secret)*/
//pattern
// function regressiveTime(start:number = 5, ends:number = start - 5):void{
//     console.log(start)
//     while(start > ends){
//         start --
//         console.log(start)
//     }
//     console.log('Fim')
// }
// regressiveTime()
// rest & spread
const numbers = [12, 5, 54, 6];
// console.log(Math.max(...numbers))
const classroomOne = ['Tiago', 'Bruno', 'Michael'];
const classroomTwo = ['Amanda', 'Rose', 'Bia'];
// const classroomThree: string[] = [...classroomOne, ...classroomTwo]
// console.log(classroomThree)
// function returnArray(x:number, ...args:number[]):number[]{
//     return [x, ...args]
// }
// console.log(returnArray(12, 45, 54))
const array = [15, 'Hello', true];
function tupla(a, b, c) {
    console.log(`${a} ${b} ${c}`);
}
// tupla(...array)
//destructuring(array)
const arrayLaptop = ['notebook', 2020];
const [type, lauchIn] = arrayLaptop;
// console.log(type, lauchIn)
//destructuring(object)
const student = { name: 'Rodrigo', age: 24, born: { day: 6, month: 'setember' } };
const { name: studentName, age, born: { day } } = student;
// console.log(studentName, age, day)
const userS = "Rodrigo";
const notifications = '18';
const welcome = `Bem vindo ${userS},
                Notificações: ${parseInt(notifications) > 9 ? '+9' : notifications}
`;
// console.log(welcome)
// console.log(`${type}`)
