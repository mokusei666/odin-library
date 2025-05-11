const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

const theHobbit = new Book('J.R.R Tolkien', 'The Hobbit', 368, 'check');
console.log(theHobbit);
const theWitcher = new Book('Andrzej Sapkowski', 'The Witcher The Last Wish', 384, 'circle-xmark');

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(theWitcher);
console.log(myLibrary);

function render() {
  myLibrary.forEach(book => {
    const libraryContainer = document.getElementById('library');
    libraryContainer.innerHTML += `
      <div class="card">
        <div class="card__highlight"></div>
        <div class="card__info">
          <div class="card__header">
            <h2 id="card__title">${book.title}</h2>
            <h3 id="card__author">by ${book.author}</h3>
          </div>
          <div class="card__subheader">
            <p class="card__pages">
            ${book.pages} pages
            </p>
            <button class="card__toggle-read toggled-${book.read}">
              <i class="fa-solid fa-${book.read}"></i>
            </button>   
          </div>
          <button class="card__remove-btn">
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
      </div>
    `;
  });
};  

render();

function formControl() {
  const newBookButton = document.querySelector('.add-book');
  const dialog = document.querySelector('dialog');
  newBookButton.addEventListener('click', () => {
    dialog.showModal();
  })
  const formCloseButton = document.querySelector('.form__close-btn');
  formCloseButton.addEventListener('click', () => {
    dialog.close();
  })
}

formControl();