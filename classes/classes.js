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
// console.log(birthdayTwo)
class Dado {
    static Jogar(x) {
        console.log(Math.floor(Math.random() * x));
    }
}
// Dado.Jogar(100)
class DadoDois {
    constructor(faces) {
        this.faces = faces;
    }
    Jogar() {
        console.log(this.Rolar(this.faces));
    }
    Rolar(x) {
        return Math.floor(Math.random() * x);
    }
}
const d6 = new DadoDois(6);
const d12 = new DadoDois(12);
const d20 = new DadoDois(20);
const d100 = new DadoDois(100);
d6.Jogar();
d12.Jogar();
d20.Jogar();
d100.Jogar();
