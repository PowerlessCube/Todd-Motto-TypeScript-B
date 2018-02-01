/* ReadOnly value*/

class Pizza {
  public toppings: string[] = [];

  // Readonly properties can only initialised at the declaration
  constructor(readonly name: string) {}

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Pepperoni");

pizza.addTopping("pepperoni");

console.log(pizza.name);
console.log(pizza);
