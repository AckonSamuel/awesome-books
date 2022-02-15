/* eslint-disable linebreak-style */
let bookList = [];

const addBook = (title = '', author = '') => {
  const list = document.querySelector('.booklist');
  list.style.padding = '0';
  const li = document.createElement('li');
  li.style.margin = '0';
  li.style.listStyleType = 'none';
  const bookTitle = document.createElement('p');
  bookTitle.className = 'title';
  bookTitle.innerText = title;
  const bookAuthor = document.createElement('p');
  bookAuthor.className = 'author';
  bookAuthor.innerText = author;
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove';
  removeBtn.innerText = 'Remove';
  li.appendChild(bookTitle);
  li.appendChild(bookAuthor);
  li.appendChild(removeBtn);
  list.appendChild(li);
  const book = { title, author };
  bookList.push(book);
  window.localStorage.setItem('bookList', JSON.stringify(bookList));
};

const removeBook = (index) => {
  bookList = bookList.filter((book, i) => bookList[index] !== bookList[i]);
  window.localStorage.setItem('bookList', JSON.stringify(bookList));
};

const bookAdd = () => {
  const title = document.querySelector('#book_title').value;
  const author = document.querySelector('#book_author').value;
  addBook(title, author);
};

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', bookAdd);

const bookRemove = (e) => {
  if (e.target.classList.contains('remove')) {
    const getLi = document.querySelectorAll('li');
    const index = Array.from(getLi).indexOf(e.target.parentNode);
    removeBook(index);
    document.querySelectorAll('li')[index].remove();
  }
};
document.addEventListener('click', bookRemove);

const showBookList = () => {
  const books = JSON.parse(window.localStorage.bookList);
  books.forEach((book) => addBook(book.title, book.author));
};
showBookList();
