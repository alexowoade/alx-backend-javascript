# 0x01. ES6 Promises

## Learning Requirements

- Understand the concept of Promises and when to use them
- Learn how to use the `then`, `resolve`, and `catch` methods
- Learn how to use all the methods of the Promise object, including `throw`/`try`, the `await` operator, and async functions

## Project Dependencies

- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/) for testing
- [Babel](https://babeljs.io/) for transpiling ES6 code
- [ESLint](https://eslint.org/) for linting

Make sure to have these installed before starting the project.

## Getting Started

1. Clone the project repository: `git clone https://github.com/Obelem/alx-backend-javascript.git`
2. Navigate to the project directory: `cd alx-backend-javascript/0x01-ES6_promise`
3. Install the project dependencies: `npm install` or `yarn`
4. Run the project tests: `npm test` or `yarn test`

## Scripts

The project comes with the following scripts in the `package.json` file:

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9].js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9].js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

- `lint`: Runs ESLint on the project
- `check-lint`: Checks for linting errors on files matching the pattern `[0-9]*.js`
- `dev`: Runs the project using Babel and Node.js
- `test`: Runs the tests using Jest
- `full-test`: Runs ESLint and Jest on the project

The project also comes with a `babel.config.js` file:

```javascript
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};
```

The project also comes with a utils.js file:

```javascript
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: "photo-profile-1",
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: "Guillaume",
    lastName: "Salva",
  });
}
```

And finally, the project also comes with a .eslintrc.js file:

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: ["airbnb-base", "plugin:jest/all"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "no-console": "off",
    "no-shadow": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
  },
  overrides: [
    {
      files: ["*.js"],
      excludedFiles: "babel.config.js",
    },
  ],
};
```

Resources
MDN - JavaScript Promises
JavaScript Promises: an Introduction
[Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global
