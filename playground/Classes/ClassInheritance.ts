// /* Class Inheritance = extending our sizes class in the Pizza class */
// class Sizes {
//   constructor(public sizes: string[]) {}

//   set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }

//   get availableSizes() {
//     return this.sizes;
//   }
// }

// class Pizza extends Sizes {
//   public toppings: string[] = [];

//   // constructor takes in pizza name and available sizes
//   constructor(readonly name: string, public sizes: string[]) {
//     // needs a super
//     super(sizes);
//   }

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza("Pepperoni", ["small", "medium"]);
// console.log(pizza.availableSizes);

// pizza.addTopping("pepperoni");

// console.log(pizza.name);
// console.log(pizza);
