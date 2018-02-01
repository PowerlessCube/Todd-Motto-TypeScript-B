// // type assetions - asserting you know what object should be coming back.
// type Pizza = {
//   name: string;
//   toppings: number;
// };

// const pizza: Pizza = {
//   name: "Blazing Inferno",
//   toppings: 5
// };

// const serialized = JSON.stringify(pizza);

// function getNameFronJSON(obj: string) {
//   // old way - asserting it's a pizza (though jsx gets confused as it thinks that is a Pizza element)
//   // return (<Pizza>JSON.parse(obj)).toppings;

//   // New way - using the 'as' keyword
//   return (JSON.parse(obj) as Pizza).toppings;
// }

// getNameFronJSON(serialized);
