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
