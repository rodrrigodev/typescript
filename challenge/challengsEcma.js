"use strict";
const dobro = function (valor) {
    return valor * 2;
};
// console.log(dobro(10))
const dizerOla = function (nome = 'User') {
    console.log(`Hello ${nome}`);
};
// dizerOla()
// dizerOla("Anna")
const nums = [-3, 33, 38, 5];
// console.log(Math.min(...nums))
const num1 = [-3, 33, 38, 5];
const num2 = [55, 20, ...num1];
// console.log(num2)
const points = [8.5, 6.3, 9.4];
const [p1, p2, p3] = points;
// console.log(p1, p2, p3)
const scientist = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
// console.log(firstName, experience)
fetch('https://swapi.dev/api/people/1')
    .then(result => result.json())
    .then(data => data.films)
    .then(film => fetch(film[0]))
    .then(data => data.json())
    .then(film => console.log(film.title))
    .catch(error => console.log(`Houve um erro durante a sua solicitação ${error}`));
