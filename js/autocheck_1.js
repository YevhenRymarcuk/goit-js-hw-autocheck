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

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  };

  console.log(message);

  // Change code above this line
  return message;
}

checkStorage(20, 0);
