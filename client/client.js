const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

// Function to create a new book
const createBook = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/books`, {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      price: 10.99,
      isbn: '978-0743273565'
    });
    console.log('Book created:', response.data);
  } catch (error) {
    console.error('Error creating book:', error.message);
  }
};

// Call the function
createBook();

// Get all books
const getAllBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/books');
    console.log('All books:', response.data);
  } catch (error) {
    console.error('Error getting books:', error.message);
  }
};

// Add or modify a review
const addOrModifyReview = async (bookId, reviewData) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/books/${bookId}/reviews`, reviewData);
    console.log('Review added/modified:', response.data);
  } catch (error) {
    console.error('Error adding/modifying review:', error.message);
  }
};

// Delete a review
const deleteReview = async (bookId, reviewId) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/books/${bookId}/reviews/${reviewId}`);
    console.log('Review deleted:', response.data);
  } catch (error) {
    console.error('Error deleting review:', error.message);
  }
};

// Search by ISBN
const searchByISBN = async (isbn) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/books/search?isbn=${isbn}`);
    console.log('Book found by ISBN:', response.data);
  } catch (error) {
    console.error('Error searching by ISBN:', error.message);
  }
};

// Search by author
const searchByAuthor = async (author) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/books/search?author=${author}`);
    console.log('Books found by author:', response.data);
  } catch (error) {
    console.error('Error searching by author:', error.message);
  }
};

// Search by title
const searchByTitle = async (title) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/books/search?title=${title}`);
    console.log('Books found by title:', response.data);
  } catch (error) {
    console.error('Error searching by title:', error.message);
  }
};

// Example usages
getAllBooks();
addOrModifyReview('book123', { userId: 'user456', review: 'Great book!', rating: 5 });
deleteReview('book123', 'review789');
searchByISBN('978-3-16-148410-0');
searchByAuthor('J.K. Rowling');
searchByTitle('Harry Potter');
