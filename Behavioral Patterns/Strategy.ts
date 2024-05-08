interface Discount{
    makeDiscount(totalPrice: number): number;
}

class Product{
    private _name: string;
    private _price: number;

    constructor(name, price){
        this._name = name;
        this._price = price;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }
}

class Discount10Percent implements Discount{
    makeDiscount(totalPrice: number): number {
        return totalPrice * 0.1;
    }
}

class Discount50Percent implements Discount{
    makeDiscount(totalPrice: number): number {
        return totalPrice * 0.5;
    }
}

class Cart{
    private _items: Product[] = [];
    private _discount: Discount;

    constructor(items: Product[], discount: Discount){
        this._items = items;
        this._discount = discount;
    }

    checkout(){
        let totalPrice = 0;
        this._items.forEach((item)=>{
            totalPrice+=item.price;
        })
        return totalPrice - this._discount.makeDiscount(totalPrice);
    }
}


const product1 = new Product('product1', 100.0);
const product2 = new Product('product2', 100.0);
const product3 = new Product('product3', 100.0);

const discount10percent = new Discount10Percent();

const discount50percent = new Discount50Percent();

const cart = new Cart([product1, product2, product3], discount50percent);

console.log(`total price after discount is: ${cart.checkout()}`);