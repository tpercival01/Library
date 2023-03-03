
import "./styles.css";

const library = [
  {
    title: "Path of Destruction",
    author: "Drew Karpyshyn",
    pages: 400,
    read: true
  },
  { title: "Rule of Two", author: "Drew Karpyshyn", pages: 500, read: false },
  {
    title: "Dynasty of Evil",
    author: "Drew Karpyshyn",
    pages: 600,
    read: false
  }
];

// handle add book form
let addBookButton = document.getElementById("addBookButton");
let addBookDiv = document.getElementById("addBookDiv");

addBookButton.addEventListener("click", () => {
  if (addBookDiv.style.display === "flex") {
    addBookDiv.style.display = "none";
  } else {
    addBookDiv.style.display = "flex";
  }
});

let addBook = document.getElementById("addBookForm");

addBook.addEventListener("submit", createBook);

function createBook(e) {
  e.preventDefault();
  console.log(e.target);

  let newBook = new Book(
    e.target[0].value,
    e.target[1].value,
    e.target[2].value,
    e.target[3].value
  );

  library.push(newBook);
  newBook.createBookDisplay();

  addBookDiv.style.display = "none";
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  handleRead() {
    this.read = !this.read;
  }

  handleDelete() {
    console.log(this.title);
    let deleteParent = document.getElementById("body");
    let deleteDiv = document.getElementsByClassName(this.title);
    console.log(deleteDiv);
    deleteParent.removeChild(deleteDiv[0]);
  }

  createBookDisplay() {
    let div = document.createElement("div");
    div.id = "bookDiv";
    div.className = this.title;

    let bookTitle = document.createElement("h3");
    bookTitle.id = "bookTitle";
    bookTitle.innerHTML = this.title;
    div.appendChild(bookTitle);

    let bookAuthor = document.createElement("p");
    bookAuthor.id = "bookAuthor";
    bookAuthor.innerHTML = this.author;
    div.appendChild(bookAuthor);

    let bookPages = document.createElement("p");
    bookPages.id = "bookPages";
    bookPages.innerHTML = this.pages + " pages";
    div.appendChild(bookPages);

    let bookReadDiv = document.createElement("div");
    bookReadDiv.id = "bookReadDiv";

    let bookReadText = document.createElement("p");
    bookReadText.id = "bookReadText";
    bookReadText.innerHTML = "Read it: ";
    bookReadDiv.appendChild(bookReadText);

    let bookRead = document.createElement("input");
    bookRead.setAttribute("type", "checkbox");
    bookRead.id = "bookRead";
    bookRead.checked = this.read;
    bookRead.addEventListener("change", this.handleRead);
    bookReadDiv.appendChild(bookRead);

    div.appendChild(bookReadDiv);

    let bookDelete = document.createElement("button");
    bookDelete.id = "bookDelete";
    bookDelete.innerHTML = "Delete";
    bookDelete.addEventListener("click", this.handleDelete.bind(this));
    div.appendChild(bookDelete);

    let body = document.getElementById("body");

    body.appendChild(div);
  }
}

function displayBook() {
  for (let i = 0; i < library.length; i++) {
    let test = new Book(
      library[i].title,
      library[i].author,
      library[i].pages,
      library[i].read
    );

    test.createBookDisplay();
  }
}

displayBook();
