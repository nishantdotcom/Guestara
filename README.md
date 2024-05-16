# Guestara

# APIs

1. Create new Category
   POST => /v1/category

2. Get all Category
   GET => /v1/catgeory

3. Get category with id or name
   GET => /v1/category/search?id=1&name=nishant

4. Patch (update) data with specific category id

   PATCH => v1/category/:categoryId

5. POST (create ) subcategory under a category

POST =>v1/category/:categoryId/subcategory

6. GET all sub categories

GET => v1/category/subcategory

7. GET all the subcategory from id or name

GET =>/v1/subcategory/search?id=1&name=Test123
