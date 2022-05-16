console.log('This is ES6 version of the Reboot Library App.');

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        // console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString =
            `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr>`
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type,displayMessage){
        let message =  document.getElementById('message');
        let status;
        if(type === 'success'){
            status = 'Success';
        }else{
            status = 'Error';
        }
        message.innerHTML = `<div class="alert alert-${type}" role="alert">
        ${status} : ${displayMessage}
      </div>
      `;
      setTimeout(()=>{
          message.innerHTML = '';
      },3000);
    }

}

let libraryForm = document.getElementById('libraryForm').addEventListener('submit',libraryFormSubmit);
function libraryFormSubmit(e){
    // console.log('You have sumitted library form.');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type = document.querySelector('input[name="type"]:checked').value;
    let book = new Book(name,author,type);
    // console.log(book);
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your book has been successfully added.');
    }else{
        display.show('danger','Sorry you cannot add this book.');
    }
    e.preventDefault();   
}

// Todos
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view