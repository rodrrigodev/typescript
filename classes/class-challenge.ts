class Product{

    constructor( public name:string, public price:number, public discount:number = 0){
        this.name = name
        this.price = price
        this.discount = discount
    }

    Print():void{
        console.log(`Nome do produto ${this.name}
                     Preço do produto com desconto ${(this.price - ((this.price * this.discount) / 100)).toFixed(2)}
                     O desconto aplicado foi de ${this.discount}`)
    }

}

const smartphone = new Product('Galaxy Javascript 10Js', 213.15, 13)
const notebook = new Product('Notebook Ts 2000', 1450)

// smartphone.Print()
// notebook.Print()