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
</table>
