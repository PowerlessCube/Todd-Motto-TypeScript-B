// // Index Signatures and interfaces

// interface Sizes {
//   sizes: string[];
// }

// interface Pizza extends Sizes {
//   name: string;
//   toppings?: number;
//   getAvailableSizes(): string[];
//   // adding an index signature
//   [key: number]: string; // it will hold a string
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     }
//   };
// }

// pizza = createPizza("Pepperoni", ["small", "medium"]);
// // Treating your object like a dictionary.
// pizza[1] = "xyz";
// pizza.toppings = 1;
