"use strict";
class Data {
    //O valor passado é um valor padrão
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const birthday = new Data(21, 12, 2010); //Não e necessario passar os parenteses
// --------------------------//----------------------//----------------------
class DataTwo {
    //O valor passado é um valor padrão
    //Ao usar o public não é necessario passar os atributos como no exemplo anterior
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const birthdayTwo = new DataTwo; //Não e necessario passar os parenteses
console.log(birthdayTwo);
