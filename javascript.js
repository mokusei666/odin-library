const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book('J.R.R Tolkien', 'The Hobbit', 368, 'No');
console.log(theHobbit);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(theHobbit);
console.log(myLibrary);