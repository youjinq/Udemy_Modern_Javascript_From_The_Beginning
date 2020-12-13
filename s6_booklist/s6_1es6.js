// class of book and Ui ES6

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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
  }

  showAlert(msg, className) {
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
  }

  deleteBook(target) {
    if (target.className === "delete") {
      // target located at X now, so wanna remove its parentelement
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}
//  local storage class -part4 (make static)
class Store {
  // (1)
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      // convert to js object
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  //   (3)
  static displayBooks() {
    const books = Store.getBooks();
    // display by loop
    books.forEach(function (book) {
      const ui = new UI();

      ui.addBookToList(book);
    });
  }

  //   (2)
  static addBooks(book) {
    const books = Store.getBooks();
    books.push(book);
    // rmb to set items to key and value
    localStorage.setItem("books", JSON.stringify(books));
  }
  //   (4) get element de isbn number?
  static removeBooks(isbn) {
    const books = Store.getBooks();
    // display by loop
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    // rmb to set items to key and value
    localStorage.setItem("books", JSON.stringify(books));

  }
}

// dom load event and display event
document.addEventListener("DOMContentLoaded", Store.displayBooks);

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

  //   validate -part2
  if (title === "" || author === "" || isbn === "") {
    // error alert- part 2
    ui.showAlert("Please fill in all fields", "error");
  } else {
    //   Add book to list
    ui.addBookToList(book);

    //   Addto LS -part4
    Store.addBooks(book);

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

  // delete book-part3
  ui.deleteBook(e.target);

  //   delete from LS -part 4
  Store.removeBooks(e.target.parentElement.previousElementSibling.innerText);
  // showalert for delete-part 3
  ui.showAlert("Book Removed!", "success");

  e.preventDefault();
});
