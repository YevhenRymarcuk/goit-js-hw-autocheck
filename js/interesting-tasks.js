/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*================= <ИНТЕРЕСНЫЕ ЗАДАЧИ> =================*/
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

/*=======================================================*/
// Задача № 1: "ЮВЕЛИРКА"

/*
3. Напишите ф-цию calcTotalPrice(stones, stoneName), которая 
принимает массив обьектов и строку с названием камня. 
Ф-ция считает и возвращает общую стоимость камней с таким именем, 
ценой и количеством из обьекта
*/

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 }
];

// function calcTotalPrice(stones, stoneName) {
//   if (stones.length === 0) return;
//   if (!stoneName) return;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, "Сапфир"));



/*=======================================================*/
// Задача № 2: "ЛИЧНЫЙ КАБИНЕТ В ИНТЕРНЕТ-БАНКЕ"

/*
6. Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы 
для работы с балансом и историей транзакций.
*/

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
//   id: 0,

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
//   createTransaction(amount, type) {
//     return { amount, type, id: (this.id += 1) };
//   },
  
    createTransaction(amount, type) {
        return {amount, type, id: Date.now()};
  },
  
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },
    
    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
    },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "Недостаточно средств";
//     } else {
//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//     }
//   },
    
    withdraw(amount) {
        if (amount > this.balance) return 'Транзакция невозможна, не достаточно средств!';
        this.balance -= amount;
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
    },

  /*
   * Метод возвращает текущий баланс
   */
//   getBalance() {
//     return this.balance;
//   },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) return transaction;
//     }
//   },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const transactionTyped = [];
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        transactionTyped.push(transaction);
      }
    }

    return transactionTyped;
  }
};

// // Мои проверки
// account.deposit(1000);
// console.log(account);
// account.deposit(2000);
// console.log(account);

// account.withdraw(2000);
// console.log(account);
// account.withdraw(2000);
// console.log(account);




// account.deposit(500);
// account.deposit(2500);
// console.log(account.getBalance());
// console.log(account.transactions);
// account.withdraw(500);
// account.withdraw(100);
// account.withdraw(1500);
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(2));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

/*=======================================================*/
// Задача № 3: "КОРЗИНА ТОВАРОВ"

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const apple = { name: '🍎', price: 50 };
// const grape = { name: '🍇', price: 70 };
// const lemon = { name: '🍋', price: 60 };
// const strawberry = { name: '🍓', price: 110 };

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {

//     for (const item of this.items) {
    
//       if (product === item) {
//         return item.quantity += 1;
//       } 
//     }
    
//     this.items.push(product);
//     product.quantity = 1;

//   },
//   remove(productName) {
    
//     for (const item of this.items) {

//       if (productName === item.name) {
//         this.items.splice(this.items.indexOf(item), 1)
//       }
//     };
//   },
//   clear() {
//     this.items.splice(0, this.items.length)

//     return 'Корзина очищена!'
//   },
//   countTotalPrice() {
//     let totalPrice = 0;

//     for (const item of this.items) {

//       totalPrice += (item.price * item.quantity);
//     }
    
//     return totalPrice;
//   },
//   increaseQuantity(productName) {

//     for (const item of this.items) {
      
//       if (productName === item.name) {

//         return item.quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {

//     for (const item of this.items) {

//       if (productName === item.name) {
        
//         item.quantity -= 1;
//       }

//       if (item.quantity < 1) {
        
//         return this.remove(productName);
//       }
//     }
//   },
// };

// console.table(cart.getItems());

// cart.add(apple);
// cart.add(apple);
// cart.add(apple);
// cart.add(grape);
// cart.add(grape);
// cart.add(grape);
// cart.add(lemon);
// cart.add(lemon);
// cart.add(strawberry);
// cart.add(strawberry);

// console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// console.log(cart.clear());
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

/*=======================================================*/
// Задача № 4: "------"



/*=======================================================*/
// Задача № 5: "------"



/*=======================================================*/
// Задача № 6: "------"



/*=======================================================*/
// Задача № 7: "------"



/*=======================================================*/
// Задача № 8: "------"



/*=======================================================*/
// Задача № 9: "------"



/*=======================================================*/
// Задача № 10: "------"



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



