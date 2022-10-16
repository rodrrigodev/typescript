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
class DiceEx {
    static Play(x) {
        console.log(Math.floor(Math.random() * x));
    }
}
// DiceEx.Play(100)
class Dice {
    constructor(faces) {
        this.faces = faces;
    }
    Play() {
        console.log(this.Roll(this.faces));
    }
    Roll(x) {
        return Math.floor(Math.random() * x);
    }
}
const d6 = new Dice(6);
const d12 = new Dice(12);
const d20 = new Dice(20);
const d100 = new Dice(100);
// d6.Play()
// d12.Play()
// d20.Play()
// d100.Play()
class Animal {
    constructor(name, age, price) {
        this.name = name;
        this.age = age;
        this.price = price;
    }
    CheckAnimal() {
        console.log(`O nome do seu animal é ${this.name}
                     Ele tem ${this.age} anos
                     E custa R$${this.price},00 reais`);
    }
}
class Dog extends Animal {
    constructor(name, age, price, color) {
        super(name, age, price);
        this.color = color;
    }
    CheckAnimal() {
        // super.CheckAnimal()             //o super é utilizado para reutilizar o codigo da herança e adicionar novas funcionalidades!
        // this.Sound()
        console.log(`O nome do seu animal é ${this.name}
                     Ele tem ${this.age} anos
                     A cor dele é ${this.color}
                     E custa R$${this.price},00 reais`);
    }
    Sound() {
        console.log(`O som que ele faz é Rolf Rolf`);
    }
}
const cat = new Animal('Tom', 5, 23);
const dog = new Dog('Max', 2, 100, 'Branco');
cat.CheckAnimal();
dog.CheckAnimal();
