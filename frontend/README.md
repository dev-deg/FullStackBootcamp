# How to set up React

1. Installed Visual Studio Code
2. Installed Node
3. We checked if node and npm were installed successfully by executing the following commands:

```bash
npm --version
node --version
```

4. Installed Google Chrome
5. Installed React Developer tools plugin (optional)
6. Installed a few VS Code plugins:

- Prettier (Shift + Alt + F)

7. Created a new project by creating a folder, named Lecture 2
8. We opened the folder using VS Code
9. Opened VS Code terminal
10. Executed the following command:

```bash
npx create-react-app shopping-cart
cd shopping-cart
```

11. Installed Bootstrap by running the command:

```bash
npm i bootstrap@latest
```

12. Deleted all the files inside the src

13. Installing Axios

```bash
npm install axios
```

## Flow of Components

cartItem <- cart <- app <- index


# Setting up Font Awesome

Step 1: Download and Install FA packages
```bash
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
npm i babel-plugin-macros
```

Step 2: Create babel.config.js in frontend

```js
module.exports = function (api) {
  return {
    plugins: ['macros'],
  }
}
```

Step 3: Crete babel-plugin-macros.config.js in frontend

```js
module.exports = {
  'fontawesome-svg-core': {
    'license': 'free'
  }
}
```

Step 4: Use FA

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
<FontAwesomeIcon icon={regular('coffee')} />
```