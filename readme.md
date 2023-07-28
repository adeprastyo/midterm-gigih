# Database Structure

### Collection Videos:

```
{
  "_id": ObjectId(),
  "title": string,
  "description": string,
  "thumbnailUrl": string,
  "youtubeUrl": string,
  "comments": [
    {
        "username": "user1",
        "comments": "lorem ipsum"
    }
  ],
  "products": [
    {
        "name": "produk1",
        "price": 100000
    }
  ]
}
```

saya belum terlalu paham tentang database design, jadi saya buat sesuai pemahaman saya.
ada 1 collection, yaitu video.
ada 6 field, yaitu:

- title(string), untuk judul dari video.
- description(description), untuk deskripsi video.
- thumbnailUrl(string), url gambar untuk thumbnail video.
- comments(array), untuk comments dari user, 1 video bisa banyak comment jdi saya gunakan array.
- products(array), untuk products, 1 video bisa banyak products jdi saya gunakan array

\*note: saya sadar untuk comments, products, dan users harus nya ini mungkin bisa dibikin collection baru tapi saya belum paham mendesain databasenya dan bagaimana menghubungkannya.

# API Structure

### Folder structure:

```
- midterm
  -- models
     --- video.js
  -- node_modules
  -- routes
     --- routes.js
  -- .env
  -- .gitignore
  -- index.js
  -- package-lock.json
  -- package.json
  -- readme.md
```

# List API request and response

## Root : /api

## Videos

- Videos object

```
{
  "_id": ObjectId(),
  "title": string,
  "description": string,
  "thumbnailUrl": string,
  "youtubeUrl": string,
  "comments": array,
  "products": array
}
```

## GET /videos

Returns all users in the system.

- URL Params : None
- Data Params : None
- Headers :
  Content-Type: application/json
- Success Response:
  Code: 200
  Content:

```
[
    {<video_object>},
    {<video_object>},
    {<video_object>}
]

```

- Error Response:
  Code: 500
  Content: { message: err.message }

## GET /videos/:id

Returns all users in the system.

- URL Params : Required: id
- Data Params : None
- Headers :
  Content-Type: application/json
- Success Response:
  Code: 200
  Content:

```
    {
        <video_object>
    }
```

- Error Response:
  Code: 500
  Content : { message: err.message }

## POST /videos

Returns all users in the system.

- URL Params : None
- Data Params :

```
{
  "title": string,
  "description": string,
  "thumbnailUrl": string,
  "youtubeUrl": string,
  "comments": array,
  "products": array
}
```

- Headers :
  Content-Type: application/json
- Success Response:
  Code: 200
  Content:

```
    {
        <video_object>
    }
```

- Error Response:
  Code: 400
  Content: { message: err.message }

## PATCH /videos/:id

Returns all users in the system.

- URL Params : Required: id
- Data Params :

```
{
  "title": string,
  "description": string,
  "thumbnailUrl": string,
  "youtubeUrl": string,
  "comments": array,
  "products": array
}
```

- Headers :
  Content-Type: application/json
- Success Response:
  Code: 200
- Content:

```
    {
        <video_object>
    }
```

- Error Response:
  Code: 400
  Content : { message: err.message }

## DELETE /users/:id

Deletes the specified user.

- URL Params : Required: id=[integer]
- Data Params : None
- Headers : Content-Type: application/json
- Success Response:
  Code: 200
  Content: "Video ${video.title} successfully deleted"
- Error Response:
  Code: 400
  Content: { message: err.message }
