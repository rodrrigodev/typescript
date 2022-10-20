function echo(object:any){
    return object
}

// console.log(echo('João'))
// console.log(echo(27).lenght)
// console.log(echo({name: 'João', age:25}))


function echoTwo<T>(object:T):T{
    return object
}

// console.log(echoTwo('Maria'))
// console.log(echoTwo<number>(27).length)
// console.log(echoTwo({name: 'joaoMaria', age:25}))

const numberArray: Array<number> = [10, 45, 21]
// numberArray.push(155)
// numberArray.push('45')
// console.log(numberArray)

function print<T>(arg: T[]){
    arg.forEach(element=> console.log(element))
}

// print([10, 45])
// print<number>([5, 56, 45])
// print<string>(['Ronald', 'Asheley', 'Terry'])
// print<{name:string, age:number}>([{name:'Guga', age:25}])

// type student = {name:string, age: number}
// print<student>([{name: 'Paulo', age: 45}])


//Type generic
type Echo = <T>(data: T)=> T
const callEchoTwo: Echo = echoTwo
// console.log(callEchoTwo('Hello'))

abstract class OperacaoBinaria<T, R>{
    constructor(public operando1: T,
        public operando2: R){}

        abstract executar():R
}

class SomaBinaria extends OperacaoBinaria<number, number>{
    executar():number{
        return this.operando1 + this.operando2
    }
}

// console.log(new SomaBinaria(15, 45).executar())