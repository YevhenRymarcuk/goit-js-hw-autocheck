// ====================================================

// const book = {
//   _1title: "The Last Kingdom",
//   '1 2 author': "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);

// ====================================================

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user);

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// book.genres[1] = 'bla-bla-bla';

// console.log(book.genres[1]);

// ====================================================

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// console.log(book);

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// console.log(book);

// ====================================================

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(name);
// console.log(age);

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25

// ====================================================

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генри Сибола";
// console.log(user.name); // 'Генри Сибола'

// console.log(user);

// ====================================================

// const propName = "imya";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
// };

// console.log(user.name); // 'Генри Сибола'

// console.log(user);
// console.log(user.imya);

// ====================================================

// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
    
//        bookShelf.books.push(bookName);
    
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");
// bookShelf.addBook("Новая книга-2");

// console.log(bookShelf);

// ====================================================

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//     console.log(bookShelf);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// ====================================================

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
// //   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// ====================================================

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// // ❌ Возвращает true для всех свойств
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const addBook = Object.create(book);
// addBook.price = 100;
// addBook.format = ['pdf', 'word', 'fb2'];

// for (const key in addBook) {
//   // Если это собственное свойство - выполняем тело if
//   if (addBook.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(addBook[key]);
//     }
    
//     // console.log(key);
//     // console.log(addBook[key]);

//   // Если это не собственное свойство - ничего не делаем
// }

// const key1 = Object.keys(book);
// console.log(key1);
//
// const key2 = Object.keys(addBook);
// console.log(key2);


// // Вариант 1
// const arrayFromAddBookPropertyes = Object.keys(addBook)

// for (const key of arrayFromAddBookPropertyes) {
//     console.log(key);
//     console.log(addBook[key]);
// }

// // Вариант 2
// for (const key of Object.keys(addBook)) {
//     console.log(key);
//     console.log(addBook[key]);
// }

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const addBook = Object.create(book);
// addBook.price = 100;
// addBook.format = ['pdf', 'word', 'fb2'];

// for (const key of Object.keys(addBook)) {
//     console.log(key);
// }

// for (const value of Object.values(addBook)) {
//     console.log(value);
// }

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const addBook = Object.create(book);
// addBook.price = 100;
// addBook.format = ['pdf', 'word', 'fb2'];

// console.log(Object.entries(addBook));
// console.log(Object.apply(addBook));
// console.log(Object.assign(addBook));
// console.log(Object.freeze(addBook));
// console.log(Object.seal(addBook));
// console.log(Object.toString(addBook));

// ====================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//     // console.log(book);
//     // console.log(book.author);
//     // console.log(book.title);
//     // console.log(book.rating);
// }

// let total = 0;

// for (const book of books) {
//     total += book.rating;
// }

// const averagRating = Number((total / books.length).toFixed(2));

// console.log(total);
// console.log(averagRating);

// ====================================================

// const temps = [14, -4, 25, 8, 11];
// const apple = { name: '🍎', price: 50 };
// const grape = { name: '🍇', price: 70 };
// const lemon = { name: '🍋', price: 60 };
// const strawberry = { name: '🍓', price: 110 };

// // В консоли будет массив
// console.log(apple);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(apple)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...apple);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...apple)); // 25

// ====================================================

// const apple = { name1: '🍎', price1: 50 };
// const grape = { name2: '🍇', price2: 70 };
// const lemon = { name3: '🍋', price3: 60 };

// // Это точная, но независимая копия массива temps
// const allFruits = { ...apple, ...grape, ...lemon };
// console.log(allFruits); // [14, -4, 25, 8, 11]

// ====================================================

// function multiply({...args}) {
//   console.log(args); // массив всех аргументов
// }

// multiply({ a: 1, b: 2, c: 3, });
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ====================================================

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: false,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "публичном" : "закрытом";
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;

// console.log(message);

// ====================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title: newTitle, author: master, isPublic, rating, coverImage = 'x' } = book;
// // console.log(coverImage); // undefined

// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${newTitle} автора ${master} с рейтингом ${rating} находится в ${accessType} доступе. "${coverImage}"`;

// console.log(message);

// ====================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const { title, author, rating } of books) {
   
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// ====================================================

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag: newTag = "xxx",
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(newTag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ====================================================

// const rgb = [200, 'xxx', 255, 100, ];
// const [red, green, blue, gray] = rgb;

// console.log(red);
// console.log(green);
// console.log(blue);
// console.log(gray);

// console.log(`R:${red},G:${green},B:`); // "R:200,G:255,B:100"

// ====================================================

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const addAge = function (user) {

    const { name: newName, tag, stats: {followers, views, likes,}, } = user;
    
    return { age: 23, newName, stats: { likes, disLikes: 1000} };
};

console.log(addAge(user));

// ====================================================



// ====================================================