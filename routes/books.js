const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new book
router.post('/', async (req, res) => {
  const { title, author, genre, price, isbn } = req.body;

  try {
    const book = new Book({ title, author, genre, price, isbn });
    const newBook = await book.save();
    res.status(201).json({
      message: 'Book created successfully!',
      book: newBook
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (deletedBook) {
      res.json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search by ISBN
router.get('/search/isbn/:isbn', (req, res) => {
  const { isbn } = req.params;

  Book.findOne({ isbn })
    .then(book => {
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    })
    .catch(err => res.status(500).json({ message: err.message }));
});

// Search by Author
router.get('/search/author/:author', (req, res) => {
  const { author } = req.params;

  Book.find({ author })
    .then(books => {
      if (books.length > 0) {
        res.json(books);
      } else {
        res.status(404).json({ message: 'No books found for this author' });
      }
    })
    .catch(err => res.status(500).json({ message: err.message }));
});

// Search by Title
router.get('/search/title/:title', (req, res) => {
  const { title } = req.params;

  Book.find({ title: new RegExp(title, 'i') }) // Case-insensitive search
    .then(books => {
      if (books.length > 0) {
        res.json(books);
      } else {
        res.status(404).json({ message: 'No books found with this title' });
      }
    })
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;

module.exports = router;
