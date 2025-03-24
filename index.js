document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});

const baseURL = "https://anapioficeandfire.com/api/books";

// Fetch books from API
function fetchBooks() {
  return fetch(baseURL)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(books => {
          renderBooks(books);
      })
      .catch(error => console.error("Error fetching books:", error));
}

// Render books in the DOM
function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear previous data

  books.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book.name; // Display book title
      bookList.appendChild(li);
  });
}
