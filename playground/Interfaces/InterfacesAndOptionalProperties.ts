// /* Extending an interface */
// interface Sizes {
//   sizes: string[];
// }

// interface Pizza extends Sizes {
//   name: string;
//   // Marking it as optional ?
//   toppings?: number;
//   getAvailableSizes(): string[];
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

// pizza.toppings = 1;
