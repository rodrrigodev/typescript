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

console.log(birthdayTwo)