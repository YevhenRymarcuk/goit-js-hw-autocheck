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
// Задача № 11: "------"



/*=======================================================*/
// Задача № 12: "------"



/*=======================================================*/
// Задача № 13: "------"



/*=======================================================*/
// Задача № 14: "------"



/*=======================================================*/
// Задача № 15: "------"



/*=======================================================*/
// Задача № 16: "------"



/*=======================================================*/
// Задача № 17: "------"



/*=======================================================*/
// Задача № 18: "------"



/*=======================================================*/
// Задача № 19: "------"



/*=======================================================*/
// Задача № 20: "------"



/*=======================================================*/
// Задача № 21: "------"



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



/*=======================================================*/
// Задача № 33: "------"



/*=======================================================*/
// Задача № 34: "------"



/*=======================================================*/
// Задача № 35: "------"



/*=======================================================*/
// Задача № 36: "------"



/*=======================================================*/
// Задача № 37: "------"



/*=======================================================*/
// Задача № 38: "------"



/*=======================================================*/
// Задача № 39: "------"



/*=======================================================*/
// Задача № 40: "------"



/*=======================================================*/
// Задача № 41: "------"




