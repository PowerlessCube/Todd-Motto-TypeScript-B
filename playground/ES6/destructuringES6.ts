// const pizza = {
//   name: 'pepperoni',
//   toppings: ['pepperoni'],
// };

// // object literal structure around it asking for just name and toppings
// // we can also name them new things
// function order({ name: pizzaName, toppings: pizzaToppings }) {
//   // asks for the propperties and creates them as varaibles as well.
//   return { pizzaName, pizzaToppings };
// }

// // We can also destructure when we pass things out of a function.
// const { pizzaName } = order(pizza);

// // Same thing that happens when you are importing modules from Angular.

// //Array destructuring:
// const toppings = ['pepperoni', 'bacon', 'chilli'];

// // Creates three variables and pulls them out of the array.
// const [ first, second, third ] = toppings;

// console.log(first, second, third); // pepperoni bacon chilli

// // destructuring properties for function.
// function logToppings([ first, second, third ]: any) {
//   console.log(first, second, third);
// };

// logToppings(toppings);