// Function overload allows us to
function reverse(str: string): string; // overloads don't get compiled down.
function reverse<T>(arr: T[]): T[];

// Absolute implementation of the function
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === "string") {
    return stringOrArray
      .split("")
      .reverse()
      .join("");
  } else {
    return stringOrArray.slice().reverse();
  }
}

console.log(reverse("Pepperoni"));
console.log(reverse(["Pepperoni", "bacon", "chilli", "mushrooms"]));
reverse([1, 2, 3]);
