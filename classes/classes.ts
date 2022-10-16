class Data{
    public day:   number        //É possivel deixar o metedo publico ou privado
           month: number
           year:  number

    //O valor passado é um valor padrão
    constructor(day:number = 1, month: number = 1, year: number = 1970){
        this.day = day
        this.month = month
        this.year = year
    }
}

const birthday = new Data(21, 12, 2010) //Não e necessario passar os parenteses

// --------------------------//----------------------//----------------------

class DataTwo{

    //O valor passado é um valor padrão
    //Ao usar o public não é necessario passar os atributos como no exemplo anterior
    constructor(public day:number = 1, public month: number = 1, public year: number = 1970){
    }
}

const birthdayTwo = new DataTwo //Não e necessario passar os parenteses

// console.log(birthdayTwo)

class DiceEx{

   static Play(x:number){
        console.log(Math.floor(Math.random() * x))
    }

}

// DiceEx.Play(100)

class Dice{

    faces: number

    constructor(faces:number){
        this.faces = faces
    }

    Play(){
        console.log(this.Roll(this.faces))
    }

    Roll(x:number):number{
        return Math.floor(Math.random() * x)
    }

}

const d6 = new Dice(6)
const d12 = new Dice(12)
const d20 = new Dice(20)
const d100 = new Dice(100)

// d6.Play()
// d12.Play()
// d20.Play()
// d100.Play()



class Animal{

    name: string
    age: number
    price: number

    constructor(name:string, age:number, price:number){
        this.name = name
        this.age = age
        this.price = price
    }

    CheckAnimal(){
        console.log(`O nome do seu animal é ${this.name}
                     Ele tem ${this.age} anos
                     E custa R$${this.price},00 reais`)
    }
}

class Dog extends Animal{

    color:string

    constructor(name:string, age:number, price:number, color:string){
    super(name, age, price)
    this.color = color
    }

    CheckAnimal(): void {
        // super.CheckAnimal()             //o super é utilizado para reutilizar o codigo da herança e adicionar novas funcionalidades!
        // this.Sound()
        console.log(`O nome do seu animal é ${this.name}
                     Ele tem ${this.age} anos
                     A cor dele é ${this.color}
                     E custa R$${this.price},00 reais`)
    }

    Sound(){
        console.log(`O som que ele faz é Rolf Rolf`)
    }
}

const cat = new Animal('Tom', 5, 23)
const dog = new Dog('Max', 2, 100, 'Branco')
cat.CheckAnimal()
dog.CheckAnimal()
