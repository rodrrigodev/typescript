//string
let personalName: string = 'João'
// console.log(personalName)

//number
let year: number = 23
// console.log(year)

//boolean
let hot: boolean =  true 
// console.log(hot)

//number
let myYear:number
myYear = 455
// console.log(myYear)

//array
let hobbies: any[] = ['Cooking', 'biking']
hobbies = [45]
// console.log(hobbies)

//tuplas
let address: [string, number, boolean] = ['Estrada Beira Rio', 123, true]
// console.log(address)

//enums
enum Color{
    Red,
    Green = 100,
    Blue = 2,
    Orange
}
let myColor: Color = Color.Blue
// console.log(myColor)

//any
let car: any = 'BMW'
// console.log(car)
car = {car: 'BMW', year: 2015}
// console.log(car)

//functions
function returnName():string{
    return personalName
}
// console.log(returnName())

function sayHi():void{
    // console.log('Hello!')
}
sayHi()

function sum(x: number, y:number){
    return x +y
}
// console.log(sum(38.52, 154.5))

let calc: (x:number, y:number)=> number
calc = sum
// console.log(calc(12,45))

//object
let user: {nameUser: string, age: number} = {
    nameUser: 'Rodrigo', age: 24
}
// console.log(user

//alias
type worker = {
    workers: string[],
    time: (hours:number) => string
}

let workers: worker = {
    workers: ['Rodrigo', 'Tiago', 'Breno'],
    time(hour: number): string{
        if(hour < 8){
            return 'Normal'
        }else{
            return 'Atrasado'
        }
    }
}
//console.log(workers.time(7))



//union types
let note: number | string = '10'
// console.log(`Minha nota é ${note}`)


//never
function fault(msg: string):never{
    throw new Error(msg)
}

const product = {
    productName: 'Soap',
    price: -10,
    validateProduct(){
        if(!this.productName || this.productName.trim().length === 0){
            fault('Precisa ter um nomme!')
        }
        if(this.price <=0){
            fault('Preço inválido!')
        }
    }
}
// console.log(product.validateProduct())


type contact = {
    nameUser: string,
    tel1: string,
    tel2: string | null
}

const contact1: contact = {
    nameUser: 'Alex',
    tel1: '12345678910',
    tel2: null
}
// console.log(contact1)

let nullValue = null  //typy = any

//challenge

type BankAccount ={
    balance: number,
    cashDeposit: (value:number) => number
}

let bankAccount: BankAccount = {
    balance: 3416,
    cashDeposit(value){
        return value + this.balance
    }
}

// console.log(bankAccount.cashDeposit(2000))