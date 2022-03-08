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

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: "информатика" },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// console.log(students.map(student => student.courses));
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// console.log(students.flatMap(student => student.courses));
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// ====================================================

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// const evenValues = values.filter(value => value % 2 === 0);
// console.log(evenValues);

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// ====================================================

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const uniqueCourses = allCourses.filter(
//     (cours, index, array) => array.indexOf(cours) === index
// );
// console.log(uniqueCourses);

// ====================================================

/*
* Например, есть массив студентов с баллами за тест. 
* Необходимо отфильтровать: 
* лучших(балл выше 80), 
* худших(балл ниже 50), 
* средних студентов(балл от 50 до 80).
*/

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score > HIGH_SCORE);
// console.table(best);

// const average = students.filter(({score}) => score >= LOW_SCORE && score <= HIGH_SCORE);
// console.table(average);

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.table(worst);

// ====================================================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// console.table(students.find(student => student.name === 'Киви'));
// console.table(students.find(({name}) => name === 'Киви'));

// ====================================================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.findIndex(({label}) => label === "blue");
// colorPickerOptions.findIndex(option => option.label === "pink"); // 3
// colorPickerOptions.findIndex(option => option.label === "white"); // -1

// const true1 = colorPickerOptions.findIndex(({ label }) => label === "blue");
// const true2 = colorPickerOptions.findIndex(option => option.label === "pink");
// const notTrue = colorPickerOptions.findIndex(option => option.label === "white");

// const trueOrNotTrue = result => result !== -1
//     ? 'Урррааа!!!... Не лгали!)'
//     : 'Все, ребятки,... Допизделись!...';

// console.log(trueOrNotTrue(true1));
// console.log(trueOrNotTrue(true2));
// console.log(trueOrNotTrue(notTrue));

// ====================================================

// // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// ====================================================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//     return total += student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// console.log(totalScore);
// console.log(averageScore);

// ====================================================

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const countLikes = tweets => tweets.reduce((total, tweet) => total += tweet.likes, 0);
// // console.log(countLikes(tweets));

// const unFilteredTags = tweets => tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);
// // console.log(unFilteredTags(tweets));

// const tagsForFiltering = unFilteredTags(tweets);
// console.log(tagsForFiltering);

// const getFilteredTags = (tempAcc, tag) => {
//   if (!tempAcc.hasOwnProperty(tag)) {
//     tempAcc[tag] = 0;
//   };
//   console.log(!tempAcc.hasOwnProperty(tag));
//   tempAcc[tag] += 1;
//   console.log(tempAcc[tag]);

//   return tempAcc;
// };

// // console.log(getFilteredTags(tagsForFiltering));

// // ///// Вариант с инлайн-колбэком
// // const uniqueTags = tagsForFiltering => tagsForFiltering.reduce((tempAcc, tag) => {
// //   if (!tempAcc.hasOwnProperty(tag)) {
// //     tempAcc[tag] = 0;
// //   };

// //   tempAcc[tag] += 1;
// //   // console.log(tempAcc[tag]);

// //   return tempAcc;
// // }, {});

// //// Вариант с колбэком-переменной
// const uniqueTags = tagsForFiltering => tagsForFiltering.reduce(getFilteredTags, {});

// console.log(uniqueTags(tagsForFiltering));

// ====================================================

// const scores = [61, 100, 177, 19, 74, 35, 92, 56];
// scores.sort((a, b) => b - a);
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// ====================================================

// const students = ["Вика", "Андрей", "1Андрей", "А1ндрей", "Ан1дрей", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

// ====================================================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Мманго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Пполи", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ааякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Ккиви", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);
// console.table(inAscendingScoreOrder);

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);
// console.table(inDescendingScoreOrder);

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);
// console.table(inAlphabeticalOrder);

// ====================================================

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "физика"] },
//   { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//   { name: "Киви", score: 94, courses: ["литература", "информатика"] },
// ];

// /*
// * 1. Необходимо получить массив их имён отсортированный по возрастанию баллов за тест.
// * 2. Получим сортированный по алфавиту массив уникальных посещаемых предметов.
// */

// //// 1.
// const sortingNamesByScores = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.table(sortingNamesByScores);

// //// 2.
// const coursesAlphabeticalOrder = [...students]
//   .flatMap(student => student.courses)
//   .filter((course, index, courses) => courses.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.table(coursesAlphabeticalOrder);

// ====================================================



// ====================================================



// ====================================================



// ====================================================