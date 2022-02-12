/* ВАРИАНТ № 1 */
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
  

//   // Change code above this line
//   return passed;
  
// }


// let message;

// // if (isAdult(prompt())) {
// //   message = "Ооо..., здAровA! Проходи!)";
// // } else {
// //   message = "Иди гуляй, школота!!!...";
// // };

// isAdult(prompt()) ? message = "Ооо..., здорова! Проходи" : message = "Иди гуляй, школота!!!...";

// // console.log(message);
// alert(message);

/* ВАРИАНТ № 2 */
// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'Ооо..., здAровA! Проходи!)';
//   } else {
//     message = 'Иди гуляй, школота!!!...';
//   }

//   // console.log(message);
//   alert(message);

//   return message;

  
// }

// checkAge(prompt());

/*===================================*/
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available <= ordered) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you!';
//   };

//   console.log(message);

//   // Change code above this line
//   return message;
// }

// checkStorage(17, 9);

/*===================================*/
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// console.log(a += 2);
// console.log(b -= 4);
// console.log(c *= 3);
// console.log(d /= 10);

/*===================================*/
// Задача № 18 "ПРОВЕРКА БАЛАНСА И СПИСАНИЕ КРЕДИТОВ"

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits -= totalPrice} credits left`;
//   };

//   console.log(message);

//   // Change code above this line
//   return message;
// }

// makeTransaction(10, 2, 30);

/*===================================*/
// Задача № 19 "ПРОВЕРКА ПАРОЛЯ"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   console.log(message);

//   return message;
// }

// checkPassword('jqueryismyjam');

/*===================================*/
// Задача № 20 "ПРОВЕРКА НАЛИЧИЯ ТОВАРА НА СКЛАДЕ"

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   };

//   console.log(message);

//   // Change code above this line
//   return message;
// }

// checkStorage(20, 0);

/*===================================*/
// Задача № 21 "ВХОЖДЕНИЕ ЧИСЛА В ПРОСТОЙ ДИАПАЗОН"

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   console.log(isInRange);

//   return isInRange;
// }

// isNumberInRange(10, 100, 440);

/*===================================*/
// Задача № 22 "ПРОВЕРКА ДОСТУПА ПО ТИПУ ПОДПИСКИ"

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   console.log(canAccessContent);

//   return canAccessContent;
// }

// checkIfCanAccessContent('free')

/*===================================*/
// Задача № 23 "!!НЕ!!ВХОЖДЕНИЕ ЧИСЛА В ПРОСТОЙ ДИАПАЗОН"

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   console.log(isInRange);
//   console.log(isNotInRange);

//   return isNotInRange;
// }

// isNumberNotInRange(10, 100, 888);

/*===================================*/
// Задача № 24 "ОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ СКИДКИ ПО НАКОПИТЕЛЬНОЙ СИСТЕМЕ"

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }

//   console.log(discount * 100 + '%');

//   // Change code above this line
//   return discount;
// }

// getDiscount(50000);

/*===================================*/
// Задача № 25 "ПРОВЕРКА НАЛИЧИЯ ТОВАРА НА СКЛАДЕ С ПОМОЩЬЮ ТЕРНАРНОГО ОПЕРАТОРА"

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message = ordered > available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';
  
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// checkStorage(2,10);

/*===================================*/
// Задача № 26 "ПРОВЕРКА ПАРОЛЯ С ПОМОЩЬЮ ТЕРНАРНОГО ОПЕРАТОРА"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';

//   console.log(message);

//   // Change code above this line
//   return message;
// }

// checkPassword('jqueryismyjam');

/*===================================*/
// Задача № 27 "ПРОВЕРКА ТИПА ПОДПИСКИ С ПОМОЩЬЮ 'SWITCH'"

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case 'starter': // Change this line
      price = 0; // Change this line
      break;

    case 'professional': // Change this line
      price = 20; // Change this line
      break;

    case 'organization': // Change this line
      price = 50; // Change this line
      break;
  }

  console.log(price);

  // Change code above this line
  return price;
}

getSubscriptionPrice('organization');

/*===================================*/
// Задача № 28 "ПРОВЕРКА ТИПА ПОДПИСКИ С ПОМОЩЬЮ 'SWITCH'"


