# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

https://github.com/gopinav/React-MUI-Tutorials/tree/master/react-mui-demo

## [Live Site (Netlify)](https://muii-material-ui.netlify.app/)

<table>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/b619e329-7e12-45be-97f4-e34486989df8" alt="MUI Typography" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/835daa14-c2df-423d-a240-bc164e148b9c" alt="MUI Button" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/f7ead461-b601-4f47-a832-add5f45fab73" alt="MUI Textfield" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/85d1e52d-53a2-4244-9e82-a14e5a549f77" alt="MUI Select" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/995c8c31-529c-41af-a8dd-8ad9156bb122" alt="MUI Radio Button" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/122ebc46-9f56-4eca-b790-9c484428fcc3" alt="MUI Checkbox" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/02c28199-92a9-4fed-8ba2-a6df7a9465d8" alt="MUI Switch" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/2637f394-7908-4e8f-91c0-e9094233e02f" alt="MUI Rating" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/caa9c270-9da1-4059-8ca2-8b124e4c03f5" alt="MUI Autocomplete" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/af30c9e7-2cff-4057-9828-3cab0adef326" alt="MUI Box/Stack/Grid" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/f92c2ae2-be2d-4be9-b239-33b5b3671e32" alt="MUI Card" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/264ced05-d367-46c8-bafa-b66b86673b7b" alt="MUI Accordion" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/286bde67-a5b6-45a0-9091-59619e40e5a5" alt="MUI Image List" width="500px"></td>
    </tr>
</table>
