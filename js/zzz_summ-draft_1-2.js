/* !!!!!! ЗАДАЧА******** !!!!!!!!! */

// const number = 1000;
// let sum = 0;
// let message;

// for (let i = 0; i <= number; i += 1) {
//   if (i % 3 !== 0 && i % 5 !==0) {
//     continue;
//     }
    
//     sum += i;
    
//     if (i % 3 === 0 && i % 5 === 0) {
//         message = `Делимое на 3 и на 5: ${i}`;
//     } else if (i % 3 === 0) {
//         message = `Делимое на 3: ${i}`;
//     } else {
//         message = `Делимое на 5: ${i}`;
//     }

//     console.log(message);
// }

// console.log(sum);

// ====================================================


// const clients = ["Mango", "Poly", "Ajax", "Zzz", "Xxx"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// ==================================================

// const target = 3;
// let sum = 6;

// for (let i = 0; i <= target; i += 1) {
//     sum += i;
//     console.log(i);
// }


// console.log(sum);

// =====================================================

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// ====================================================

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 2) {
//     console.log("Нашли число 2, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

    // } else if (i % 5 === 0) {

// ====================================================

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// ====================================================

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// ====================================================

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Zero";
// let message;

// for (const client of clients) {
  
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message);

// ====================================================

        // Вариант 1

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

        // Вариант 2

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (const number of numbers) {
//     if (number < threshold) {
//         continue;
//     }

//     console.log(`Число больше чем ${threshold}: ${number}`);
// }

// ====================================================

// const a = ["Mango"];
// const b = a;
// const c = b;

// console.log(a);
// console.log(b);

// a.push("Poly");
// console.log(a);
// console.log(b);

// b.push("Ajax");
// console.log(a);
// console.log(b);

// c.push('Add from c')
// console.log(a);
// console.log(b);
// console.log(c);

// ====================================================

// const name = "Mango";
// console.log(name.split(""));

// const massiv = name.split("");
// massiv[3] = 'D';
// console.log(massiv);

// const reName = massiv.join("");
// console.log(reName);

// const message = "JavaScript это интересно";
// console.log(message.split(" "));

// ====================================================
// -------Вариант 1
// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

// -------Вариант 2
// const fruit = "cherry";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// -------Вариант 3
// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "apple";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);
// console.log(hasFruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// ====================================================

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(4);
// console.log(numbers); // [1, 2]

// numbers.push(2);
// console.log(numbers); // [1, 2, 3]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3, 4, 5]

// ====================================================

// const numbers = [1, 4, 2, 5, 3];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// ====================================================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(2, 3));

// ====================================================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice());

// ====================================================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1));
// console.log(clients.slice(4));

// ====================================================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-3));

// ====================================================

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

// ====================================================

// const scores = [1, 2, 3, 4, 5];

// scores.splice(2, 0, 2.5);
// console.log(scores);

// ====================================================

// const slogan = 'Летом мне не придется отдохнуть так, как я хочу!';
// const massiv = slogan.split(" ");
// massiv.splice(1, 4, 'я', 'обязательно', 'отдохну');
// const optimisticSlogan = massiv.join(" ");

// console.log(slogan.strike());
// console.log(optimisticSlogan);
