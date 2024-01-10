let j;
j = 10.5;
// type-safe
console.log(j);
// tanımın bittiği bloğun başladığı nokta
const myFunction = () => {
    return 5;
};
function myFunction2() { }
let function1 = myFunction();
let function2 = myFunction2();
class ProductService {
    // any => herhangi bir tip
    getAll() {
        return true;
    }
    getById(id) {
        return { id: 1, name: "Telefon", price: 10 };
    }
}
let productService = new ProductService();
let product = productService.getById(1);
console.log(product.id);
