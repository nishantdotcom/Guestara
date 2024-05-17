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

## API Reference

#### API to get all categories

```http
  GET /v1/catgeory
```

### API to get a category by name or ID along with its attributes

```http
  GET v1/category/search?id=1&name=nishant
```

| Parameter | Type      | Description               |
| :-------- | :-------- | :------------------------ |
| `id`      | `integer` | Id of category to fetch   |
| `name`    | `string`  | name of category to fetch |

### API to get all sub-categories

```http
  GET v1/category/subcategory
```

### API to get all sub categories under a category

```http
  GET /category/subcategory/:catgoryId

  ex :  /category/subcategory/1
```

### API to get a sub-category by name or ID along with its attributes

```http
  GET /v1/subcategory/search?id=1&name=Test123
```

| Parameter | Type      | Description               |
| :-------- | :-------- | :------------------------ |
| `id`      | `integer` | Id of category to fetch   |
| `name`    | `string`  | name of category to fetch |

### API to get all items

```http
  GET v1/category/subcategory/item
```

### API to get all items under a sub-category

```http
 GET  v1/category/subcategory/:subcategoryId/item
```

### API to get all items under a category

```http
Left
```

### API to get an item by name or ID along with its attributes

```http
 GET v1/subcategory/item/search?id=1&name=nishant
```

| Parameter | Type      | Description               |
| :-------- | :-------- | :------------------------ |
| `id`      | `integer` | Id of category to fetch   |
| `name`    | `string`  | name of category to fetch |

## CREATE (POST APIs)

### API to create a category

```http
  POST   /v1/category
```

| Body   | Type      |
| :----- | :-------- |
| `id`   | `integer` |
| `name` | `string`  |

### API to create Sub-categories will be created under a category

```http
  POST  v1/category/:categoryId/subcategory

  ex : v1/category/1/subcategory
```

| Body   | Type      |
| :----- | :-------- |
| `id`   | `integer` |
| `name` | `string`  |

### API to create Item under a sub-category

```htpp
  POST  v1/subcategory/:subcategoryId/item

  ex: v1/subcategory/1/item
```

| Body   | Type      |
| :----- | :-------- |
| `id`   | `integer` |
| `name` | `string`  |

## EDIT category

### API to edit category attributes

```http
    PATCH  v1/category/:categoryId
```

### API to edit sub category attributes

```http
    PATCH  v1/subcategory/:subcategoryId
```

### API to edit item attributes

```http
    PATCH  v1/subcategory/item/:itemId
```

### API to search the item by its name

```http
    GET  /subcategory/item/search&name=itemname




```
