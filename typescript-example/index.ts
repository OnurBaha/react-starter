let j: number;
j = 10.5;
// type-safe
console.log(j);

// tanımın bittiği bloğun başladığı nokta
const myFunction = (): number => {
	return 5;
};

function myFunction2(): void {}

let function1 = myFunction();
let function2 = myFunction2();

class ProductService {
	// any => herhangi bir tip
	getAll(): any {
		return true;
	}

	getById(id: number): Product {
		return {id: 1, name: "Telefon", price: 10};
	}
}
// npm install typescript -g
interface Product {
	id: number;
	name: string;
	price: number;
}

let productService = new ProductService();
let product = productService.getById(1);
console.log(product.id);