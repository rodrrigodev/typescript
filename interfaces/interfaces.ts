interface Human{
    name:string
    age?: number
    [prop: string]:any  //pode ser usadoq quando você não sabe o nome da prop ou não sabe o tipo de dado a ser recebido
    hi(secondName:string):void
}

function hello(person:Human){
    console.log('Hello ' + person.name)
}

function changeName(person: Human){
    person.name = "Joana"
}

const person = {
    name: "João",
    age: 27,
    hi(secondName:string){console.log('Hello, my name is ' + this.name + ' ' + secondName)}
}

// hello(person)
// changeName(person)
// hello(person)
// person.hi("Oliveira")
// hello({name: 'Maria', age: 15, female: true})


//using class

class Client implements Human{

    name:string = ''
    lastShop: Date = new Date
    hi(secondName:string){console.log('Hello, my name is ' + this.name + ' ' + secondName)}
}

const newClient = new Client()
newClient.name = "Han"
// newClient.hi("Ben")
// console.log(newClient)



//using function

interface Power{
    (a:number, b:number):number
}

const power: Power = (a:number, b:number):number=>{
    return a ** b
    // return Math.pow(a, b)
    // return Array(b).fill(a).reduce((t, a)=> t * a)
}

// console.log(power(55, 4))