// ====================================================

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet и выводим результат в консоль
// console.log(greet("Манго")); // Добро пожаловать Манго.

// // Выводим функцию greet в консоль не вызывая её
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// ====================================================

// const maxNum = function (massiv) {
//     let max = 0;
//     for (const num of massiv) {
//         if (num > max) max = num;
//     };

//     return max;
// };

// const massivNumbers = [2, 7, 3, 8, 12, 14, 9, 1];

// console.log(maxNum(massivNumbers));
// console.log(maxNum);

// ====================================================

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// console.log(registerGuest);

// ====================================================

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//  callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// ====================================================

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// ====================================================

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// ====================================================

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(Number((Math.random() * 10).toFixed(0)));

// ====================================================

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat((Math.random() * 10).toFixed(0), printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat((Math.random() * 10).toFixed(0), prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// ====================================================

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`);
// });

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//     if (index <= 2) {
//         console.log(`Индекс ${index}, значение ${number}`);
//     }
// });

// ====================================================

// const printValue = value => {
//     console.log(value);
// };

// const prettyPrint = value => {
//     console.log("Logging value: ", value);
// };

// const repeat = (n, action) => {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     };
// };

// // Передаем printValue как callback-функцию
// repeat((Math.random() * 10).toFixed(0), printValue);

// // Передаем prettyPrint как callback-функцию
// repeat((Math.random() * 10).toFixed(0), prettyPrint);

// ====================================================

// const printValue = value => console.log(value);

// const prettyPrint = value => console.log("Logging value: ", value);

// const repeat = (n, action) => {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     };
// };

// // Передаем printValue как callback-функцию
// repeat((Math.random() * 10).toFixed(0), printValue);

// // Передаем prettyPrint как callback-функцию
// repeat((Math.random() * 10).toFixed(0), prettyPrint);

// ====================================================

// const add = (x, y, ...args) => console.log([x, ...args, y]);

// add(42, 13, 1, 2, 3); // [1, 2, 3]

// ====================================================

// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Анонимная стрелочная функция
// numbers.forEach((number, index) => console.log(`Индекс ${index}, значение ${number}`));

// ====================================================

// const numbers = [5, 10, 15, 20, 25];
// const semiNumbers = [2.5, 5, 7.5, 10, 12.5];

// const logMessage = (number, index) => console.log(`Индекс ${index}, значение ${number}`);

// numbers.forEach(logMessage);
// semiNumbers.forEach(logMessage);

// ====================================================

// // Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// ====================================================

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase);

// const planetsReverse = planets.map(planet => {
    
//     let reversedMassiv = [];
//     planet.split('').map(letter => {
//         if (letter === letter.toUpperCase()) {
//             reversedMassiv.push(letter.toLowerCase());
//         } else {
//             reversedMassiv.push(letter.toUpperCase());
//         };
//     });
//     return reversedMassiv.join('');
// });
// console.log(planetsReverse);

// // Оригинальный массив не изменился
// console.log(planets);

// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================



// ====================================================