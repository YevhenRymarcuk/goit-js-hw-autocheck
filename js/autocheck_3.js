/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*=== <МОДУЛЬ 3.> "ОБЪЕКТЫ. ОПЕРАЦИИ 'rest' 'spread'" ===*/
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

/*=======================================================*/
// Задача № 1: "СОЗДАНИЕ ОБЪЕКТА"

/*
* const apartment = ;
*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// console.table(apartment);

/*=======================================================*/
// Задача № 2: "ВЛОЖЕННЫЕ СВОЙСТВА"

/* 
*  const apartment = {
*    imgUrl: "https://via.placeholder.com/640x480",
*    descr: "Spacious apartment in the city center",
*    rating: 4,
*    price: 2153,
*    tags: ["premium", "promoted", "top"],
*  };
*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// console.table(apartment);

/*=======================================================*/
// Задача № 3: "ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ ТОЧКУ"
/*
* const apartment = {
*   imgUrl: "https://via.placeholder.com/640x480",
*   descr: "Spacious apartment in the city center",
*   rating: 4,
*   price: 2153,
*   tags: ["premium", "promoted", "top"],
* };
* 
* // Change code below this line
* const aptRating = apartment;
* const aptDescr = apartment;
* const aptPrice = apartment;
* const aptTags = apartment;
* // Change code above this line
*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

/*=======================================================*/
// Задача № 4: "ДОСТУП К ВЛОЖЕННЫМ СВОЙСТВАМ"

/*
* const apartment = {
*   imgUrl: "https://via.placeholder.com/640x480",
*   descr: "Spacious apartment in the city center",
*   rating: 4,
*   price: 2153,
*   tags: ["premium", "promoted", "top"],
*   owner: {
*     name: "Henry",
*     phone: "982-126-1588",
*     email: "henry.carter@aptmail.com",
*   },
* };
* 
* // Change code below this line
* const ownerName = apartment;
* const ownerPhone = apartment;
* const ownerEmail = apartment;
* const numberOfTags = apartment;
* const firstTag = apartment;
* const lastTag = apartment;
* // Change code above this line
*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

/*=======================================================*/
// Задача № 5: "ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ КВАДРАТНЫЕ СКОБКИ"

/*
* const apartment = {
*   imgUrl: "https://via.placeholder.com/640x480",
*   descr: "Spacious apartment in the city center",
*   rating: 4,
*   price: 2153,
*   tags: ["premium", "promoted", "top"],
* };
* 
* // Change code below this line
* const aptRating = apartment;
* const aptDescr = apartment;
* const aptPrice = apartment;
* const aptTags = apartment;
* // Change code above this line
*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

/*=======================================================*/
// Задача № 6: "ИЗМЕНЕНИЕ ЗНАЧЕНИЯ СВОЙСТВА"

/*
* const apartment = {
*   imgUrl: "https://via.placeholder.com/640x480",
*   descr: "Spacious apartment in the city center",
*   rating: 4,
*   price: 2153,
*   tags: ["premium", "promoted", "top"],
*   owner: {
*     name: "Henry",
*     phone: "982-126-1588",
*     email: "henry.carter@aptmail.com",
*   },
* };
* 
* // Change code below this line
*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment);

/*=======================================================*/
// Задача № 7: "ДОБАВЛЕНИЕ СВОЙСТВ"

/*
* const apartment = {
*   imgUrl: "https://via.placeholder.com/640x480",
*   descr: "Spacious apartment in the city center",
*   rating: 4.7,
*   price: 5000,
*   tags: ["premium", "promoted", "top", "trusted"],
*   owner: {
*     name: "Henry Sibola",
*     phone: "982-126-1588",
*     email: "henry.carter@aptmail.com",
*   },
* };
* 
* // Change code below this line
*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

// console.log(apartment);

/*=======================================================*/
// Задача № 8: "КОРОТКИЕ СВОЙСТВА"

/*
* const name = "Repair Droid";
* const price = 2500;
* const image = "https://via.placeholder.com/640x480";
* const tags = ["on sale", "trending", "best buy"];
* 
* const product = {
*   // Change code below this line
*   // Change code above this line
* };
*/

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// console.log(product);

/*=======================================================*/
// Задача № 9: "ВЫЧИСЛЯЕМЫЕ СВОЙСТВА"

/*
* const emailInputName = "email";
* const passwordInputName = "password";
* 
* const credentials = {
*   // Change code below this line
*   // Change code above this line
* };
*/

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
//   // Change code above this line
// };

// console.log(credentials);

/*=======================================================*/
// Задача № 10: "ЦИКЛ 'FOR...IN'"

/*
* const apartment = {
*   descr: "Spacious apartment in the city center",
*   rating: 4,
*   price: 2153,
* };
* const keys = [];
* const values = [];
* // Change code below this line
*/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// };

// console.log(keys);
// console.log(values);

/*=======================================================*/
// Задача № 11: "МЕТОД HASOWNPROPERTY()"

/*
* const keys = [];
* const values = [];
* const advert = {
*   service: "apt",
* };
* const apartment = Object.create(advert);
* apartment.descr = "Spacious apartment in the city center";
* apartment.rating = 4;
* apartment.price = 2153;
* 
* for (const key in apartment) {
*   // Change code below this line
* 
*   keys.push(key);
*   values.push(apartment[key]);
* 
*   // Change code above this line
* }
*/

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//     // console.log(key);
//   }
//   // Change code above this line
// }

// console.log(apartment);
// console.log(keys);
// console.log(values);

/*=======================================================*/
// Задача № 12: "ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ"

/*
* function countProps(object) {
*   let propCount = 0;
*   // Change code below this line
* 
*   // Change code above this line
*   return propCount;
* }
*/

//// Вариант 1.
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     };
//   };
//   // Change code above this line
//   return propCount;
// };

// /// Вариант 2.
// function countProps(object) {
// const ownKeys = Object.keys(object);
// let propCount = 0;
// // Change code below this line
// for (const key of ownKeys) {
//     propCount += 1;
// };
// // Change code above this line
// return propCount;
// };

// console.log(countProps(apartment));
// console.log(countProps(advert));

/*=======================================================*/
// Задача № 13: "МЕТОД OBJECT.KEYS()"

/*
* const apartment = {
*   descr: "Spacious apartment in the city center",
*   rating: 4,
*   price: 2153,
* };
* const values = [];
* // Change code below this line
* const keys = apartment;
*/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// ///// Вариант с function
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const test = Object.create(apartment);

// const ownProperty = function (object) {
//     const values = [];
//     const keys = Object.keys(object);

//     for (const key of keys) {
//         values.push(object[key]);
//     };

//     console.log(values);
// }

// ownProperty(apartment);
// ownProperty(test);

/*=======================================================*/
// Задача № 14: "ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0"

/*
* function countProps(object) {
*   // Change code below this line
*   let propCount = 0;
* 
*   for (const key in object) {
*     if (object.hasOwnProperty(key)) {
*       propCount += 1;
*     }
*   }
* 
*   return propCount;
*   // Change code above this line
* }
*/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const test = Object.create(apartment);

// ///// Вариант 1.
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// };

// ///// Вариант 2.
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//     propCount = keys.length;

//   return propCount;
//   // Change code above this line
// };

// ///// Вариант 3.
// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;
    
//   propCount = Object.keys(object).length;

//   return propCount;
//   // Change code above this line
// };

// ///// Вариант 4.
// function countProps(object) {
//   // Change code below this line
    
//   return Object.keys(object).length;
//   // Change code above this line
// };

// console.log(countProps(apartment));
// console.log(countProps(test));

/*=======================================================*/
// Задача № 15: "МЕТОД OBJECT.VALUES()"

/*
* const apartment = {
*   descr: "Spacious apartment in the city center",
*   rating: 4,
*   price: 2153,
* };
* // Change code below this line
* const keys = apartment;
* const values = apartment;
*/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

/*=======================================================*/
// Задача № 16: "ЗАДАЧА. РАСХОДЫ НА ЗАРПЛАТУ"

/*
* function countTotalSalary(salaries) {
*   let totalSalary = 0;
*   // Change code below this line
* 
*   // Change code above this line
*   return totalSalary;
* };
*/

// const firstGroup = {
//     Ваня: 100,
//     Саша: 200,
//     Валя: 300,
// };

// const secondGroup = {
//     Коля: 200,
//     Петя: 300,
//     Вася: 500,
// };

// const totalGroup = { ...firstGroup, ...secondGroup };

// const testGroup = Object.create(totalGroup);

// //// Вариант 1.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//       totalSalary += salaries[key];
//     };
//   };
//   // Change code above this line
//   return totalSalary;
// };

// //// Вариант 2.
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//   // Change code below this line
//     const keys = Object.keys(salaries);

//     for (const key of keys) {
//         totalSalary += salaries[key];
//     };
//   // Change code above this line
//     return totalSalary;
// };

// //// Вариант 3.
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//   // Change code below this line
//     const keys = Object.values(salaries);

//     for (const key of keys) {
//         totalSalary += key;
//     };
//   // Change code above this line
//     return totalSalary;
// };

// //// Вариант 4.
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//   // Change code below this line
//     for (const value of Object.values(salaries)) {
//         totalSalary += value;
//     };
//   // Change code above this line
//     return totalSalary;
// };

// console.log(countTotalSalary(firstGroup));
// console.log(countTotalSalary(secondGroup));
// console.log(countTotalSalary(totalGroup));
// console.log(countTotalSalary(testGroup));

/*=======================================================*/
// Задача № 17: "МАССИВ ОБЪЕКТОВ"

/*
* const colors = [
*   { hex: "#f44336", rgb: "244,67,54" },
*   { hex: "#2196f3", rgb: "33,150,243" },
*   { hex: "#4caf50", rgb: "76,175,80" },
*   { hex: "#ffeb3b", rgb: "255,235,59" },
* ];
* 
* const hexColors = [];
* const rgbColors = [];
* // Change code below this line
*/

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// };

// console.table(hexColors);
// console.table(rgbColors);

/*=======================================================*/
// Задача № 18: "ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА"

/*
* const products = [
*   { name: "Radar", price: 1300, quantity: 4 },
*   { name: "Scanner", price: 2700, quantity: 3 },
*   { name: "Droid", price: 400, quantity: 7 },
*   { name: "Grip", price: 1200, quantity: 9 },
* ];
* 
* function getProductPrice(productName) {
*   // Change code below this line
*   // Change code above this line
* }
*/

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) return product.price;
//   }

//   return null;
//   // Change code above this line
// }

//// Вариант "Расширеный"))
// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) return `Цена товара с названием ${product.name} составляет ${product.price} кредитов.`;
//   }

//   return `Искомый товар не обнаружен: ${null}.`
//   // Change code above this line
// }

// console.log(getProductPrice("Grap"));

/*=======================================================*/
// Задача № 19: "КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА"

/*
* const products = [
*   { name: "Radar", price: 1300, quantity: 4 },
*   { name: "Scanner", price: 2700, quantity: 3 },
*   { name: "Droid", price: 400, quantity: 7 },
*   { name: "Grip", price: 1200, quantity: 9 },
* ];
* 
* function getAllPropValues(propName) {
*   // Change code below this line
*   // Change code above this line
* }
*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// //// Вариант 1.
// function getAllPropValues(propName) {
//   // Change code below this line
//   let propValues = [];
  
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//         propValues.push(product[propName]);
//     };
//   };

//   return propValues;
//   // Change code above this line
// };

// //// Вариант 2.
// function getAllPropValues(propName) {
//   // Change code below this line
//   let propValues = [];
  
//     for (const product of products) {
      
//         for (const key of Object.keys(product)) {
            
//             if (key === propName) {
//                 propValues.push(product[key]);
//             };
//         };
//     };

//   return propValues;
//   // Change code above this line
// };

// console.log(getAllPropValues('name'));

/*=======================================================*/
// Задача № 20: "ОБЩАЯ СТОИМОСТЬ ТОВАРА"

/*
* const products = [
*   { name: "Radar", price: 1300, quantity: 4 },
*   { name: "Scanner", price: 2700, quantity: 3 },
*   { name: "Droid", price: 400, quantity: 7 },
*   { name: "Grip", price: 1200, quantity: 9 },
* ];
* 
* function calculateTotalPrice(productName) {
*   // Пиши код ниже этой строки
*   // Пиши код выше этой строки
* }
*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (product.name === productName) return product.price * product.quantity;
//   }

//   return 0;
//   // Пиши код выше этой строки
// };

// console.log(calculateTotalPrice('Grip'));

/*=======================================================*/
// Задача № 21: "ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ"

/*
* const highTemperatures = {
*   yesterday: 28,
*   today: 26,
*   tomorrow: 33,
* };
* // Change code below this line
* 
* const yesterday = highTemperatures.yesterday;
* const today = highTemperatures.today;
* const tomorrow = highTemperatures.tomorrow;
* 
* // Change code above this line
* const meanTemperature = (yesterday + today + tomorrow) / 3;
*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(`Средний показатель максимальных температур за 3 дня составляет ${meanTemperature} градусов.`);

/*=======================================================*/
// Задача № 22: "ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ"

/*
* const highTemperatures = {
*   yesterday: 28,
*   today: 26,
*   tomorrow: 33,
* };
* // Change code below this line
* 
* const yesterday = highTemperatures.yesterday;
* const today = highTemperatures.today;
* const tomorrow = highTemperatures.tomorrow;
* const icon = highTemperatures.icon;
* 
* // Change code above this line
* const meanTemperature = (yesterday + today + tomorrow) / 3;
*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(`Средний показатель максимальных температур за 3 дня составляет ${meanTemperature} градусов.`);

/*=======================================================*/
// Задача № 23: "ИЗМЕНЕНИЕ ИМЕНИ ПЕРЕМЕННОЙ"

/*
* const highTemperatures = {
*   yesterday: 28,
*   today: 26,
*   tomorrow: 33,
* };
* // Change code below this line
* 
* const highYesterday = highTemperatures.yesterday;
* const highToday = highTemperatures.today;
* const highTomorrow = highTemperatures.tomorrow;
* const highIcon = highTemperatures.icon;
* 
* // Change code above this line
* const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// (highYesterday + highToday + highTomorrow) % 3 !== 0
//     ? console.log(`Средний показатель максимальных температур за 3 дня составляет ${meanTemperature.toFixed(1)} градусов.`)
//     : console.log(`Средний показатель максимальных температур за 3 дня составляет ${meanTemperature} градусов.`);

/*=======================================================*/
// Задача № 24: "ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ"

/*
* const colors = [
*   { hex: "#f44336", rgb: "244,67,54" },
*   { hex: "#2196f3", rgb: "33,150,243" },
*   { hex: "#4caf50", rgb: "76,175,80" },
*   { hex: "#ffeb3b", rgb: "255,235,59" },
* ];
* 
* const hexColors = [];
* const rgbColors = [];
* // Change code below this line
* 
* for (const color of colors) {
*   hexColors.push(color.hex);
*   rgbColors.push(color.rgb);
* }
*/

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// // //// Вариант 1.
// // for (const color of colors) {
// //   const {hex, rgb,} = color;
// //   hexColors.push(hex);
// //   rgbColors.push(rgb);
// // };

// //// Вариант 2.
// for (const {hex, rgb,} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// };

// console.table(hexColors);
// console.table(rgbColors);

/*=======================================================*/
// Задача № 25: "ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ"

/*
* const forecast = {
*   today: {
*     low: 28,
*     high: 32,
*     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
*   },
*   tomorrow: {
*     low: 27,
*     high: 31,
*   },
* };
* // Change code below this line
* 
* const highToday = forecast.today.high;
* const lowToday = forecast.today.low;
* const todayIcon = forecast.today.icon;
* 
* const highTomorrow = forecast.tomorrow.high;
* const lowTomorrow = forecast.tomorrow.low;
* const tomorrowIcon = forecast.tomorrow.icon;
*/

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(highToday);
// console.log(lowToday);
// console.log(highTomorrow);
// console.log(lowTomorrow);

/*=======================================================*/
// Задача № 26: "ПАТТЕРН «ОБЪЕКТ НАСТРОЕК»"

/*
* // Change code below this line
* function calculateMeanTemperature(forecast) {
*   const todayLow = forecast.today.low;
*   const todayHigh = forecast.today.high;
*   const tomorrowLow = forecast.tomorrow.low;
*   const tomorrowHigh = forecast.tomorrow.high;
* 
*   // Change code above this line
*   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
* }
*/

// const forecast = {
//     today: { low: 10, high: 20 },
//     tomorrow: { low: 20, high: 30 }
// };

// function calculateMeanTemperature(forecast) {
  
//     const {
//         today: {
//             low: todayLow,
//             high: todayHigh,
//         },
//         tomorrow: {
//             low: tomorrowLow,
//             high: tomorrowHigh,
//         },
//     } = forecast
//         // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) % 4 !== 0
//         ? Number(((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4).toFixed(1))
//         : (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// };


// console.log(calculateMeanTemperature(forecast));
        
/*=======================================================*/
// Задача № 27: "ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ"

/*
* const scores = [89, 64, 42, 17, 93, 51, 26];
* // Change code below this line
* const bestScore = scores;
* const worstScore = scores;
*/

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);
// console.log(scores);

/*=======================================================*/
// Задача № 28: "ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА"

/*
* const firstGroupScores = [64, 42, 93];
* const secondGroupScores = [89, 14, 51, 26];
* const thirdGroupScores = [29, 47, 18, 97, 81];
* // Change code below this line
* const allScores = [];
* const bestScore = allScores;
* const worstScore = allScores;
*/

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

/*=======================================================*/
// Задача № 29: "ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА"

/*
* const defaultSettings = {
*   theme: "light",
*   public: true,
*   withPassword: false,
*   minNumberOfQuestions: 10,
*   timePerQuestion: 60,
* };
* const overrideSettings = {
*   public: false,
*   withPassword: true,
*   timePerQuestion: 30,
* };
* // Change code below this line
* const finalSettings = {};
*/

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

/*=======================================================*/
// Задача № 30: "КАРТОЧКИ ЗАДАЧ"

/*
* function makeTask(data) {
*   const completed = false;
*   const category = "General";
*   const priority = "Normal";
*   // Change code below this line
* 
*   // Change code above this line
* }
*/

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return { completed, category, priority, ...data,};
//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

/*=======================================================*/
// Задача № 31: "ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ"

/*
* // Change code below this line
* function add() {
*   // Change code above this line
* }
*/

// // Change code below this line
// function add(...args) {
//     let sum = 0;

//     for (const arg of args) {
//         sum += arg;
//     };

//     return sum;
//   // Change code above this line
// };

// console.log(add());

/*=======================================================*/
// Задача № 32: "ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ"

/*
* // Change code below this line
* function addOverNum(...args) {
*   let total = 0;
* 
*   for (const arg of args) {
*     total += arg;
*   }
* 
*   return total;
*   // Change code above this line
* }
*/

// ///// Блочный вариант.
// function addOverNum(comparedNum , ...args) {
//   let total = 0;

//   for (const arg of args) {
      
//     if (arg > comparedNum) {
//         total += arg
//     };
//   };

//   return total;
//   // Change code above this line
// };

// ///// Строчный вариант.
// function addOverNum(comparedNum , ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > comparedNum) total += arg;
//   };

//   return total;
//   // Change code above this line
// };

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

/*=======================================================*/
// Задача № 33: "МАССИВ СОВПАДЕНИЙ"

/*
* // Change code below this line
* function findMatches() {
*   const matches = []; // Don't change this line
* 
*   // Change code above this line
*   return matches;
* }
*/

// ///// Вариант 1.
// // Change code below this line
// function findMatches(massiv, ...otherArgs) {
//   const matches = []; // Don't change this line

//   for (const arg of otherArgs) {
//     if (massiv.includes(arg)) matches.push(arg);
//   };
//   // Change code above this line
//   return matches;
// };

// ///// Вариант 2.
// // Change code below this line
// function findMatches(massiv, ...otherArgs) {
//   const matches = []; // Don't change this line

//   for (const arg of otherArgs) {
//     for (const element of massiv) {
//         if (element === arg) matches.push(arg);
//     };
//   };
//   // Change code above this line
//   return matches;
// };

// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

/*=======================================================*/
// Задача № 34: "МЕТОДЫ ОБЪЕКТА"

/*
* const bookShelf = {
*   // Change code below this line
*   books: ["The last kingdom", "The guardian of dreams"],
*   getBooks() {
*     return "Returning all books";
*   },
*   addBook(bookName) {
*     return `Adding book ${bookName}`;
*   },
*   // Change code above this line
* };
*/

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

/*=======================================================*/
// Задача № 35: "ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ"

/*
* const bookShelf = {
*   books: ["The last kingdom", "Haze", "The guardian of dreams"],
*   updateBook(oldName, newName) {
*     // Change code below this line
*     // Change code above this line
*   },
* };
*/

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     // Change code above this line
//   },
// };

// ///// Вариант 2.
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };

// bookShelf.updateBook('Haze', 'Peace of the world');
// console.log(bookShelf.books);

/*=======================================================*/
// Задача № 36: "ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»"

/*
* const atTheOldToad = {
*   // Change code below this line
*   // Change code above this line
* };
*/

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };

/*=======================================================*/
// Задача № 37: "ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ"

/*
* const atTheOldToad = {
*   potions: ["Speed potion", "Dragon breath", "Stone skin"],
*   // Change code below this line
*   // Change code above this line
* };
*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

/*=======================================================*/
// Задача № 38: "ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ"

/*
* const atTheOldToad = {
*   potions: ["Speed potion", "Dragon breath", "Stone skin"],
*   addPotion(potionName) {
*     // Change code below this line
*     // Change code above this line
*   },
* };
*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion('Flight of the Bumblebee');
// console.log(atTheOldToad.potions);

/*=======================================================*/
// Задача № 39: "УДАЛЯЕМ ЗЕЛЬЕ"

/*
* const atTheOldToad = {
*   potions: ["Speed potion", "Dragon breath", "Stone skin"],
*   removePotion(potionName) {
*     // Change code below this line
*     // Change code above this line
*   },
* };
*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);

//     for (const potion of this.potions) {
//       if (potion === potionName) this.potions.splice(potionIndex, 1);
//     };
//     // Change code above this line
//   },
// };

// ///// Вариант 2.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     for (const potion of this.potions) {
//       if (potion === potionName) this.potions.splice(this.potions.indexOf(potionName), 1);
//     };
//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Stone skin");
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);

/*=======================================================*/
// Задача № 40: "ОБНОВЛЯЕМ ЗЕЛЬЕ"

/*
* const atTheOldToad = {
*   potions: ["Speed potion", "Dragon breath", "Stone skin"],
*   updatePotionName(oldName, newName) {
*     // Change code below this line
*     // Change code above this line
*   },
* };
*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);

//     for (const potion of this.potions) {
//       if (potion === oldName) this.potions.splice(potionIndex, 1, newName);
//     };
//     // Change code above this line
//   },
// };

// ///// Вариант 2.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//       for (const potion of this.potions) {
//       if (potion === oldName) this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     };
//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName('Dragon breath', 'Wasp sting');
// console.log(atTheOldToad.potions);

/*=======================================================*/
// Задача № 41: "РАСШИРЯЕМ ИНВЕНТАРЬ"

/*
* const atTheOldToad = {
*   potions: [
*     { name: "Speed potion", price: 460 },
*     { name: "Dragon breath", price: 780 },
*     { name: "Stone skin", price: 520 },
*   ],
*   // Change code below this line
*   getPotions() {
*     return this.potions;
*   },
*   addPotion(newPotion) {
*     if (this.potions.includes(newPotion)) {
*       return `Error! Potion ${newPotion} is already in your inventory!`;
*     }
* 
*     this.potions.push(newPotion);
*   },
*   removePotion(potionName) {
*     const potionIndex = this.potions.indexOf(potionName);
* 
*     if (potionIndex === -1) {
*       return `Potion ${potionName} is not in inventory!`;
*     }
* 
*     this.potions.splice(potionIndex, 1);
*   },
*   updatePotionName(oldName, newName) {
*     const potionIndex = this.potions.indexOf(oldName);
* 
*     if (potionIndex === -1) {
*       return `Potion ${oldName} is not in inventory!`;
*     }
* 
*     this.potions.splice(potionIndex, 1, newName);
*   },
*   // Change code above this line
* };
*/

// //// Вариант 1.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//         if (potion.name === newPotion.name) return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     };

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
     
//     for (const potion of this.potions) {
//         const indexPotion = this.potions.indexOf(potion);
        
//         if (potion.name === potionName) {
            
//             this.potions.splice(indexPotion, 1);
//             return;
//         };
//     };
      
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
    
//     for (const potion of this.potions) {
//         const potionIndex = this.potions.indexOf(potion);

//         if (potion.name === oldName) {

//             potion.name = newName;
//             return;
//         };
//     };
    
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// //// Вариант 2.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const {name} of this.potions) {
//         if (name === newPotion.name) return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     };

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
     
//     for (const potion of this.potions) {
//         const indexPotion = this.potions.indexOf(potion);
        
//         if (potion.name === potionName) {
            
//             this.potions.splice(indexPotion, 1);
//             return;
//         };
//     };
      
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
    
//     for (const potion of this.potions) {

//         if (potion.name === oldName) {

//             potion.name = newName;
//             return;
//         };
//     };
    
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: "New potion", price: 444 }));
// console.table(atTheOldToad.getPotions());

// console.log(atTheOldToad.removePotion('Stone skin'));
// console.table(atTheOldToad.getPotions());

// console.log(atTheOldToad.updatePotionName('New potion', "SuperNew potion"));
// console.table(atTheOldToad.getPotions());
