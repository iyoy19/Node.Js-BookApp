const express = require('express');
const router = express.Router();
const BookReview = require('../models/BookReview');

// Add or modify a review
router.post('/:bookId/reviews', async (req, res) => {
  const { userId, review, rating } = req.body;
  const { bookId } = req.params;

  try {
    let bookReview = await BookReview.findOne({ bookId, userId });
    if (bookReview) {
      // Update existing review
      bookReview.review = review;
      bookReview.rating = rating;
      bookReview = await bookReview.save();
    } else {
      // Create new review
      bookReview = new BookReview({ bookId, userId, review, rating });
      await bookReview.save();
    }
    res.status(200).json(bookReview);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
