let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];


console.log("apple is equal to apple");
console.log(apple == "apple");


console.log("apple is not equal to apple");
console.log(apple != "apple");

console.log("APPLE is equal to apple after converting lowercase");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("APPLE is not equal to apple after converting lowercase");
console.log(upperCaseApple.toLowerCase() != "apple");

console.log("ten is equal to twenty");
console.log(ten ==twenty);

console.log("ten is not equal to twenty");
console.log(ten != twenty);

console.log("ten is equal to or greater than 5");
console.log(10 >= 5);

console.log("twenty is less than or equal to 10");
console.log(20 <= 10);

console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 20);

console.log("twenty is greater thn 50 or 20 is equal to 20");
console.log(twenty > 50 || twenty == 20);

console.log("twenty is greater thn 50 or 20 is equal to 20");
console.log(twenty > 50 || twenty != 20);

console.log("is orange include in my gruits array");
console.log(fruits.includes ("orange"));

console.log("orange is not include in my fruit array");
console.log(!fruits.includes ("orange"));