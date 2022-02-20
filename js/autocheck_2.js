/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*=========== <МОДУЛЬ 2.> "МАССИВЫ. ФУНКЦИИ." ===========*/
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

/*=======================================================*/
// Задача № 1: "РАННИЙ ВОЗВРАТ"

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(12));

/*=======================================================*/
// Задача № 2: "ПРОВЕРКА ПАРОЛЯ (РАННИЙ ВОЗВРАТ)"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) return "Welcome!";

//   return "Access denied, wrong password";
//   // Change code above this line
// }

// console.log(checkPassword('jqueryismyjam'));

/*=======================================================*/
// Задача № 3: "СКЛАД ТОВАРОВ (РАННИЙ ВОЗВРАТ)"

// // Вариант 1
// function checkStorage(available, ordered) {
    
//     if (ordered === 0) return "Your order is empty!";
//     if (ordered > available) return "Your order is too large, not enough goods in stock!";

//     return "The order is accepted, our manager will contact you";
// }
    
// // Вариант 2
// function checkStorage(available, ordered) {
    
//     if (ordered === 0) {
//     return "Your order is empty!";
//     }
//     if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//     }

//     return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(4, 2));
 
/*=======================================================*/
// Задача № 4: "СОЗДАНИЕ МАССИВА"

// const fruits = ["apple", "plum", "pear", "orange"];

/*=======================================================*/
// Задача № 5: "ДОСТУП К ЭЛЕМЕНТАМ ПО ИНДЕКСУ"

// Вариант 1
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.table(fruits);
// console.table(firstElement);
// console.table(secondElement);
// console.table(lastElement);

// Вариант 2
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(fruits);
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

/*=======================================================*/
// Задача № 6: "ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ЭЛЕМЕНТА"

// Вариант 1
// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

// Вариант 2
// const fruits = ["apple", "plum", "pear", "orange"];

// function fruitReplacement (oldFruit, newFruit) {
    
//     if (fruits.includes(oldFruit)) {

//         fruits[fruits.indexOf(oldFruit)] = newFruit

//         return `Замена фрукта ${oldFruit} на фрукт ${newFruit} произошла успешно!`
//     }
    
//     return `Фрукта ${oldFruit} нет ы массиве!`;
// }

// Вариант 3
// const fruits = ["apple", "plum", "pear", "orange"];

// function fruitReplacement(oldFruit, newFruit) {

//     let message = `Замена фрукта ${oldFruit} на фрукт ${newFruit} произошла успешно!`;

//     fruits.includes(oldFruit)
//     ? fruits[fruits.indexOf(oldFruit)] = newFruit
//     : message = `Фрукта ${oldFruit} нет ы массиве!`;
    
//     return message;
// }

// console.log(fruits);

// console.log(fruitReplacement('plum', 'peach'));
// console.log(fruits);

// console.log(fruitReplacement('orange', 'banana'));
// console.log(fruits);

/*=======================================================*/
// Задача № 7: "ДЛИНА МАССИВА"

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);


/*=======================================================*/
// Задача № 8: "ИНДЕКС ПОСЛЕДНЕГО ЭЛЕМЕНТА"

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);

/*=======================================================*/
// Задача № 9: "КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА"
// const fruits = ["apple", "peach", "pear", "banana"];
// const clients = ["Mango", "Ajax", "Kiwi"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const numbers2 = [1, 2];
// const numbers1 = [1];

// // // Вариант 1
// // function getExtremeElements(array) {
// //     array.splice(1, array.length - 2);
// //     // console.log(deletedElements);
// // }

// // getExtremeElements(fruits);
// // console.log(fruits);

// // getExtremeElements(clients);
// // console.log(clients);

// // getExtremeElements(numbers);
// // console.log(numbers);

// // getExtremeElements(numbers2);
// // console.log(numbers2);

// // getExtremeElements(numbers1);
// // console.log(numbers1);

// // ЕБАНУТОЕ но ТОЖЕ ПОЧТИ ПРАВИЛЬНОЕ РЕШЕНИЕ (для автопроверки)
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements(fruits));

// console.log(getExtremeElements(clients));

// console.log(getExtremeElements(numbers));

// console.log(getExtremeElements(numbers2));

// console.log(getExtremeElements(numbers1));


/*=======================================================*/
// Задача № 10: "МЕТОД СТРОК SPLIT()"

// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(delimeter);

//   return words;
// }

// console.table(splitMessage('Чет я подзае...', ' '));
// console.table(splitMessage('Чет я подзае...', ''));

/*=======================================================*/
// Задача № 11: "ГРАВИРОВКА УКРАШЕНИЙ"

// function calculateEngravingPrice(message, pricePerWord) {

//    return message.split(' ').length * pricePerWord;
// }

// console.table(calculateEngravingPrice('Чет я подзае...', 10));

/*=======================================================*/
// Задача № 12: "МЕТОД МАССИВА JOIN()"

// function makeStringFromArray(array, delimeter) {
  
//   return array.join(delimeter);
// }

// console.table(makeStringFromArray(['Чет', 'я', 'подзае...'], '-=#=-'));

/*=======================================================*/
// Задача № 13: "ГЕНЕРАТОР SLUG"

// function slugify(title) {

// return title.toLowerCase().split(' ').join('-');
// }

/*=======================================================*/
// Задача № 14: "МЕТОД SLICE()"

// Вариант 1
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// Вариант 2
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

/*=======================================================*/
// Задача № 15: "МЕТОД CONCAT()"

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

/*=======================================================*/
// Задача № 16: "КОМПОЗИЦИЯ МАССИВОВ"

// const fruits = ["apple", "peach", "pear", "banana", "mango"];
// const numbers = [1, 2, 3, 4, 5];

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);

//   newArray.length <= maxLength ? newArray : newArray = newArray.slice(0, maxLength);

//   return newArray;
// }
  
// console.log(makeArray(fruits, numbers, 5));

/*=======================================================*/
// Задача № 17: "ЦИКЛ FOR"

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }


/*=======================================================*/
// Задача № 18: "СУММА ЧИСЕЛ (ЦИКЛ FOR)"

// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;

//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
//   // Change code above this line
// }

// console.log(calculateTotal(5));

/*=======================================================*/
// Задача № 19: "ИТЕРАЦИЯ ПО МАССИВУ"

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
  
//   console.log(fruit);
// }

/*=======================================================*/
// Задача № 20: "ПОДСЧЁТ СУММЫ ПОКУПКИ"

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const orderItem of order) {
//     total += orderItem;
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([1, 2, 3]));
/*=======================================================*/
// Задача № 21: "ПОИСК САМОГО ДЛИННОГО СЛОВА"



/*=======================================================*/
// Задача № 22: "------"



/*=======================================================*/
// Задача № 23: "------"



/*=======================================================*/
// Задача № 24: "------"



/*=======================================================*/
// Задача № 25: "------"



/*=======================================================*/
// Задача № 26: "------"



/*=======================================================*/
// Задача № 27: "------"



/*=======================================================*/
// Задача № 28: "------"



/*=======================================================*/
// Задача № 29: "------"



/*=======================================================*/
// Задача № 30: "------"



/*=======================================================*/
// Задача № 31: "------"



/*=======================================================*/
// Задача № 32: "------"



