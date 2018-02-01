// /* Getters and Setters */
// class Sizes {
//   constructor(public sizes: string[]) {}

//   set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }

//   get availableSizes() {
//     return this.sizes;
//   }
// }

// // invoke getter
// const sizes = new Sizes(["small", "medium"]);
// console.log(sizes.availableSizes);
// // invoke setter
// sizes.availableSizes = ["medium", "large"];

// console.log(sizes.availableSizes);

// class Pizza {
//   public toppings: string[] = [];

//   // Readonly properties can only initialised at the declaration
//   constructor(readonly name: string) {}

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza("Pepperoni");

// pizza.addTopping("pepperoni");

// console.log(pizza.name);
// console.log(pizza);
