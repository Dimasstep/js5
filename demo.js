let single = 'Одинарные ковычки';
let double = "Двойные ковычки";
let backticks = `Обратные ковычки`;

console.log(single, double, backticks);

let a =10, b =5;
let expressionBackticks = `Fifteen is ${(a+b)} and not ${(2 * a +b)}.`;
let expressionQuotes =  "Fifteen is " +(a+b) + "and not" + (2*a+b) +".";
console.log(expressionBackticks);
console.log(expressionQuotes);
let userList = `Users online :
* Ivan
* Dimas
* Anna
`;

console.log(userList);


// let userList1 = "Users online: 

// Ivan";

//Специальные символы

let userListSpecial = "Users online:\n *Ivan";//Символ экранирования
console.log(userListSpecial);
console.log("\u{1F60D}");
let confessionOne = 'I\ `m Batman';
let confessionTwo = "I `m Batman";
console.log(confessionOne, confessionTwo);

//длина строки

let str = "Length of this string is";
console.log(`Length of this string is ${str.length}`);

// Доступ к символу

let greeting = "Hello!";
console.log(greeting[0]);// первый символ имеет индекс 0
console.log(greeting.charAt(0));// метод


console.log(greeting[10]); //undefined
console.log(greeting.charAt(10)); //""

for (let char of greeting) {
    console.log(char);
}

greeting[1] = 'a'; // не работает
console.log(greeting);

//Метод

console.log(greeting.toUpperCase());
console.log(greeting.toLocaleLowerCase());
console.log(greeting[0].toUpperCase());


darthVader = "Luke, I am our father";
console.log(darthVader.indexOf("Luke"));
console.log(darthVader.indexOf("muther"));
console.log(darthVader.indexOf("a"));
console.log(darthVader.indexOf("a", 9));

console.log("Работает цыкл: ");
let pos = -1;
while ((pos = darthVader.indexOf("a", pos +1)) != -1) {
    console.log(pos);
}

console.log(darthVader.indexOf("u"));
console.log(darthVader.lastIndexOf("u"));

console.log(darthVader.includes("a"));
console.log(darthVader.includes("a", 9));

console.log(darthVader.startsWith("Luke"));
console.log(darthVader.endsWith("father"));

console.log(darthVader.slice(11));
console.log(darthVader.slice(6, 10));
console.log(darthVader.slice(-6));

