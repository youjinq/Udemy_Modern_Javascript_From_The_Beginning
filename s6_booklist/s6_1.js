// book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

// Store constructor

function Store() {}

// get item-part 4
Store.prototype.getBooks = function () {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    // convert to js object in array
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
};
// add item-part 4
Store.prototype.addBooks = function (book) {
  const books = store.getBooks();
  books.push(book);
  // rmb to set items to key and value
  localStorage.setItem("books", JSON.stringify(books));
};

// load item-part 4
Store.prototype.displayBooks = function () {
  const books = store.getBooks();
  books.forEach(function (book) {
    const ui = new UI();

    ui.addBookToList(book);
  });
};

// remove item-part 4
Store.prototype.deleteBook = function (isbn) {
  const books = store.getBooks();
  // display by loop
  books.forEach(function (book, index) {
    if (book.isbn === isbn) {
      books.splice(index, 1);
    }
  });
  // rmb to set items to key and value
  localStorage.setItem("books", JSON.stringify(books));
};

// Add book to list function-part 1
UI.prototype.addBookToList = function (book) {
  // console.log(book);
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");

  // insert cols in list
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X<a></td>`;

  list.appendChild(row);
};

// show Alert- part 2
UI.prototype.showAlert = function (msg, className) {
  // create div
  const div = document.createElement("div");
  //  add classess
  div.className = `alert ${className}`;
  //  add text
  div.appendChild(document.createTextNode(msg));
  // get parent
  const container = document.querySelector(".container");

  // get form
  const form = document.querySelector("#book-form");
  // insert alert
  container.insertBefore(div, form);

  // timeout after 3s
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// delete book-part3
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    // target located at X now, so wanna remove its parentelement
    target.parentElement.parentElement.remove();
  }
};

// clear fields-part 1
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Dom load and display event-part 4
const store = new Store();

document.addEventListener("DOMContentLoaded", store.displayBooks);

// Even listener for add book

document.getElementById("book-form").addEventListener("submit", function (e) {
  // get form value
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  console.log(title, author, isbn);
  e.preventDefault();

  const book = new Book(title, author, isbn);

  //   Inistiate UI
  const ui = new UI();
  const store = new Store();

  //   validate -part2
  if (title === "" || author === "" || isbn === "") {
    // error alert- part 2
    ui.showAlert("Please fill in all fields", "error");
  } else {
    //   Add book to list
    ui.addBookToList(book);

    // part 4- add to LS
    store.addBooks(book);
    // - part 2
    ui.showAlert("Book Added!", "success");

    // clear fields
    ui.clearFields();
  }
});

// Even listener for delete book

document.getElementById("book-list").addEventListener("click", function (e) {
  //   Inistiate UI-part 3
  const ui = new UI();
  const store = new Store();

  // delete book-part3
  ui.deleteBook(e.target);

  //   delete from LS-part4
  store.deleteBook(e.target.parentElement.previousElementSibling.innerText);

  // showalert for delete-part 3
  ui.showAlert("Book Removed!", "success");

  e.preventDefault();
});
