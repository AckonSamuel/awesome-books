/* eslint-disable linebreak-style */
class BookList {
  constructor() {
    this.bookList = [];
  }

  add_book(title = '', author = '') {
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
    window.localStorage.setItem('bookList', this.bookList);
  }

  remove_book(index) {

      this.bookList = this.bookList.filter((book, i) => {

              return this.bookList[index] !== this.bookList[i]
        })
  }
}

const listOfBooks = new BookList();
