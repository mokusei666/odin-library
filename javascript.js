const myLibrary = [];

// function Book(author, title, pages, read) {
//   this.author = author;
//   this.title = title;
//   this.pages = pages;
//   this.read = read;
//   this.id = crypto.randomUUID();
// }

class Book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }
}

Book.prototype.toggleRead = function () {
  this.read = this.read === 'check' ? 'circle-xmark' :'check';
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  render();
}

function render() {
  const libraryContainer = document.getElementById('library');
  libraryContainer.innerHTML = '';
  myLibrary.forEach(book => {
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
            <button class="card__toggle-read toggled-${book.read}" data-id="${book.id}">
              <i class="fa-solid fa-${book.read}"></i>
            </button>   
          </div>
          <button data-id="${book.id}" class="card__remove-btn">
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
      </div>
    `;
    const removeButton = document.querySelectorAll('.card__remove-btn');
    removeButton.forEach(button => {
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        const index = myLibrary.findIndex(book => book.id === id);
        myLibrary.splice(index, 1)
        render();
      });
    });
    const toggleReadButton = document.querySelectorAll('.card__toggle-read');
    toggleReadButton.forEach(button => {
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        const index = myLibrary.findIndex(book => book.id === id);
        myLibrary[index].toggleRead();
        render();
      })
    })
  });
};

const dialog = document.querySelector('dialog');

function formControl() {
  const newBookButton = document.querySelector('.add-book');
  newBookButton.addEventListener('click', () => {
    dialog.showModal();
  })
  const formCloseButton = document.querySelector('.form__close-btn');
  formCloseButton.addEventListener('click', () => {
    dialog.close();
  })
}

formControl();

const formSubmitButton = document.querySelector('.form__submit-btn');
formSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const readElement = document.querySelector('input[name="read-status"]:checked');
  const readStatus = readElement ? readElement.value : readStatus = false;
  if (title && author && pages && readStatus) {
    addBookToLibrary(new Book(title, author, pages, readStatus));
    render();
    document.querySelector('form').reset();
    dialog.close();
  }
});