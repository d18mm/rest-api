# rest-api
REST API, documentation with markdown, securing API with JWT

Route api

| Route |  HTTP | Description |
|:---------:|:-------:|:-------:|
|`/api/signup`|POST|Sign up with new user info|
|`/api/signin`|POST|Sign in while get an access tokenbased on credentials|
|`/api/user`|GET|Get all the users|
|`/api/user/:id`|GET|Get a single user|
|`/api/user/`|POST|Create a user|
|`/api/user/:id`|DELETE|Delete a user|
|`/api/user/:id`|PUT|Update a user with new info|
|`/api/user/:id`|PATCH|Update a user with specific new info|


## Usage
With only npm:

```sh
npm install
npm start
npm run dev
```

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`.
