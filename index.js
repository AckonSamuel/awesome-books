/* eslint-disable linebreak-style */
class BookList {
  constructor() {
    this.bookList = [];
  }

  addBook(title = '', author = '') {
    const list = document.querySelector('.booklist');
    const li = document.createElement('li');
    li.classList.add('show', 'delete');
    const bookTitle = document.createElement('p');
    bookTitle.className = 'title';
    bookTitle.innerText = title;
    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'author';
    bookAuthor.innerText = author;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove';
    removeBtn.innerText = 'Remove';
    const hr = document.createElement('hr');
    hr.className = 'bottom-border';
    li.appendChild(bookTitle);
    li.appendChild(bookAuthor);
    li.appendChild(removeBtn);
    li.appendChild(hr);
    list.appendChild(li);
    const book = { title, author };
    this.bookList.push(book);
    window.localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  removeBook(index) {
    this.bookList = this.bookList.filter((book, i) => this.bookList[index] !== this.bookList[i]);
    window.localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }
}

const listOfBooks = new BookList();

const bookAdd = () => {
  const title = document.querySelector('#book_title').value;
  const author = document.querySelector('#book_author').value;
  listOfBooks.addBook(title, author);
};

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', bookAdd);
