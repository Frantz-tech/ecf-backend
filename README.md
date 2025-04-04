# Rallyscope

### GET STARTED

1. **Clone repository** :

```bash
git clone https://github.com/Frantz-tech/ecf-backend/.git
```

2. ** Install dependencies**

```bash
npm install
```

```bash
npm start
```

This will start the server on port "http://Localhost:3000"

# 📂 Rallyscope

`├──` [config](./config/) <br>
`├──` [controllers](./controllers/) <br>
`├──` [middleware](./middleware/)<br>
`├──` [models](./models/) <br>
`├──` [public](./public/)<br>
`├──` [repository](./repository/) <br>
`├──` [routes](./routes/) <br>
`├──` [services](./services/) <br>
`├──` [utils](./utils/) <br>
`├──` [package.json](./package.json) <br>
`├──` [README.md](./README.md) <br>
`└──` [server.js](./server.js) <br>

## Project structure

Here's an overview of the project repository structure :

- `config/` : Contains configuration folder for the application (database, variables, env, etc.)
- `controllers/` : Contains controllers that manage the API logic
- `middleware/` : Contains middleware used for authentification, validation, etc
- `models/` : Contains models representing the data structure
- `repository/` : Contains classes or function for the data access
- `routes/` : Contains the definition of the API routes
- `services/` : Contains services that hold the business logic
- `tests/` : Contains unit and integrations tests
- `utils/` : Contains general utilities (helpers, error handling, etc.)

## Contribution

If you want to contribute on this project, here's how to proceed :

1. Fork this repository
2. Create a branch for your new functionalitly( `git checkout-b feature/newfuntionality)
3. Do your modifications and write test if necessary
4. Commit changes (`git commit -am ' add a new functionality'`)
5. Push your branch (`git push origin feature/new-functionality`)
6. Open a pull request

### Usefull commands

npm run commit => for conventionals commits
npm run prepare => husky install
npm run dev:api => start server and reset every time we save changes
npm run start: => start server
npm run prettier: => Format all folder affected by prettier

### Dependencies installation

npm install express
npm init @eslint/config@latest
npm install --save-dev prettier
npm install --save-dev husky
npx husky install
npm install --save-dev @commitlint/{config-conventional,cli}
npm install --save-dev lint-staged
npm install --save-dev cz-customizable
