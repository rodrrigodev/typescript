"use strict";
/*
// Exercício 1 - Classe
function Moto(nome) {
    this.nome = nome
    this.velocidade = 0
 
    this.buzinar = function() {
        console.log('Toooooooooot!')
    }
 
    this.acelerar= function(delta) {
        this.velocidade = this.velocidade + delta
    }
}
 
var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança
var objeto2D = {
    base: 0,
    altura: 0
}
 
var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function() {
    return this.base * this.altura
}
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
var estagiario = {
    _primeiroNome: ''
}
 
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    },
    enumerable: true,
    configurable: true
})
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
*/
class Motorbike {
    constructor(name, speed = 0) {
        this.speed = 0;
        this.name = name;
        this.speed = speed;
    }
    honk() {
        console.log('Toooooooooot!');
    }
    speedUp(delta) {
        this.speed = this.speed + delta;
    }
}
const moto = new Motorbike('Ducati');
// moto.honk()
// console.log(moto.speed)
moto.speedUp(30);
// console.log(moto.speed)
//Herança
class objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class objeto extends objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const test = new objeto();
test.altura = 2;
test.base = 4;
// console.log(test.area())
// Exercício 3 - Getters & Setters
class Boss {
    constructor() {
        this._firstName = '';
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(valor) {
        if (valor.length >= 3) {
            this._firstName = valor;
        }
        else {
            this._firstName = '';
        }
    }
}
const le = new Boss;
le.firstName = 'Le';
// console.log(le.firstName)
le.firstName = 'Leonardo';
// console.log(le.firstName)
