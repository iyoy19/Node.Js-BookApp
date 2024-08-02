Here's the translation to English for testing your API endpoints:

**Testing API Endpoints:**

1. **Register a New User:** Send a `POST` request to `/api/auth/register` with the following JSON data:
   ```json
   {
     "username": "user",
     "password": "pass"
   }
   ```

2. **Login User:** Send a `POST` request to `/api/auth/login` with the following JSON data to receive a token:
   ```json
   {
     "username": "user",
     "password": "pass"
   }
   ```

3. **Get All Books:** Send a `GET` request to `/api/books`.

4. **Add/Modify a Book Review:** Send a `POST` request to `/api/books/:bookId/reviews` with the following JSON data:
   ```json
   {
     "userId": "userId",
     "review": "Great book!",
     "rating": 5
   }
   ```

5. **Delete a Book Review:** Send a `DELETE` request to `/api/books/:bookId/reviews/:reviewId`.

6. **Search Books by ISBN/Author/Title:** Send a `GET` request to the appropriate endpoint:
   - **By ISBN:** `/api/books/search?isbn=isbn`
   - **By Author:** `/api/books/search?author=author`
   - **By Title:** `/api/books/search?title=title`

These instructions should help you test each of the endpoints. If you need further assistance or run into any issues, let me know!
