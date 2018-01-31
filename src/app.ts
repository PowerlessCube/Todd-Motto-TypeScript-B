// Tuple Types for arrays = different types contained within an array.
// tuple - we tell typescript we have a strict structure for the array and it should adhear to those changes.
let pizza: [string, number, boolean]; // restricting our datastructure to a tuple type, only if you are sure your data structure will look like this.

pizza = ['Pepperoni', 20, true]; // assignable
// pizza = [true, 'Pepperoni', 20]; // breaks, doesn't adhear to tupal