function addBook() {
    var bookNameInput = document.getElementById('bookName');
    var authorInput = document.getElementById('author');
    var bookList = document.getElementById('bookList');

    // Validate inputs
    if (bookNameInput.value === '' || authorInput.value === '') {
        alert('Please enter both book name and author.');
        return;
    }

    // Create a new book entry
    var bookEntry = document.createElement('div');
    bookEntry.className = 'book-entry';

    // Book details (name and author)
    var bookDetails = document.createElement('span');
    bookDetails.innerHTML = '<strong>' + bookNameInput.value + '</strong> by ' + authorInput.value;

    // Delete button
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        bookList.removeChild(bookEntry);
    };

    // Append details and delete button to the book entry
    bookEntry.appendChild(bookDetails);
    bookEntry.appendChild(deleteButton);

    // Append the new book entry to the book list
    bookList.appendChild(bookEntry);

    // Clear input fields
    bookNameInput.value = '';
    authorInput.value = '';
}
