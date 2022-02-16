/* eslint-disable linebreak-style */
class BookList {
  constructor() {
    this.bookList = [];
  }

  addBook(title = '', author = '') {
    const list = document.querySelector('.booklist');
    list.style.padding = '0';
    const li = document.createElement('li');
    li.className = 'book-item';
    li.style.margin = '0';
    li.style.listStyleType = 'none';
    li.style.background = '#E7E9EB';
    const bookTitle = document.createElement('p');
    bookTitle.className = 'title';
    bookTitle.innerText = `"${title}" by`;
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

const bookRemove = (e) => {
  if (e.target.classList.contains('remove')) {
    const getLi = document.querySelectorAll('.book-item');
    const index = Array.from(getLi).indexOf(e.target.parentNode);
    listOfBooks.removeBook(index);
    document.querySelectorAll('.book-item')[index].remove();
  }
};
document.addEventListener('click', bookRemove);

const showBookList = () => {
  if (!localStorage.bookList) {
    return;
  }
  const books = JSON.parse(window.localStorage.bookList);
  books.forEach((book) => listOfBooks.addBook(book.title, book.author));
};

showBookList();


const displayListSection = () => {
  if(!document.querySelector('.booklist').classList.contains('dn')){
     return;
  }
  document.querySelector('.booklist').classList.remove('dn')
  document.querySelector('.add_book').classList.toggle('dn')
  document.querySelector('.contact').classList.toggle('dn')
}

const listOption = document.querySelector('#list');
listOption.addEventListener('click',displayListSection)


const displayInputSection = () => {
  
}

const inputOption = document.querySelector('#add-new');
inputOption.addEventListener('click',displayInputSection);

const displayContactSection = () => {
  
}

const contactOption = document.querySelector('#contact');
contactOption.addEventListener('click',displayContactSection)