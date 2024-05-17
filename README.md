# Guestara Assignment

Created a Nodejs backend server for menu management.

## Setup Locally

Clone the project

```bash
  git clone https://github.com/nishantdotcom/Guestara.git
```

Go to the project directory

```bash
  cd Guestara
```

Install dependencies

```bash
  npm install
```

## Setup db server

Go to src folder

```bash
   create .env file from .env.example file
```

Go to the Neon db website get online SQL db

```bash
   https://console.neon.tech/app/projects
```

Add PORT and DB link in .env file and run this command

```bash
   npx prisma migrate dev --name user

```

Generate prisma Schema

```bash
   npx prisma generate
```

## Run project Locally

#### we are using typescript so please add rootdir to ./src and outdir to ./dist in tsconfig.json

Go to main folder build tsc

```bash
    tsc -b
```

Run Locally

```bash
   node ./dist/index.js
```

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

8. POST (create) Item of specific subcategory

POST=>v1/subcategory/:subcategoryId/item

9. Get all items
   GET=>V1/category/subcategory/item

10. GET All item of a subcategory
    GET =>v1/category/subcategory/:subcategoryId/item

11. GET ALL ITEMS SEARCH VIA NAME OR ID

GET=>v1/subcategory/item/search

12. PATCH (Update) subcategory via subcategory id

PATCH =>/subcategory/:subcategoryId

13. PATCH(UPDATE) item via item name

PATCH => /subcategory/item/:itemId

14. POST (API to search the item by its name)

POST => /subcategory/item/search&name=itemname
