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
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/d65b3b95-8278-44b2-8681-e33adfd56799" alt="MUI Navbar/Menu" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/4159db3b-e0d3-444c-9e02-81282ab13d0a" alt="MUI Link" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/46d19b4c-dbe8-4768-9db6-c346156db627" alt="MUI Breadcrumbs" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/cc55e22c-8a93-41f8-a93b-2097ce20680d" alt="MUI Drawer" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/c71ebeab-daba-4780-952d-6d12b72842bf" alt="MUI Bottom Navbar" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/8a433e19-70f0-4d1b-85da-0c3a23815d03" alt="MUI Avatar" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/930d64f9-c76f-4b8f-8643-773eaf450e72" alt="MUI Badge" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/57d390f4-0415-4ad4-9f6f-33785967bb84" alt="MUI List" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/65cc31b5-a8df-4aed-bb50-18bb4eb51f95" alt="MUI Chip" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/5346c062-1dd5-4fae-b278-3fce30c9c29d" alt="MUI Tooltip" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/f1ade673-6dd5-45f7-b082-4f8a3c4bff99" alt="MUI Table" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/0724910b-a891-44fd-b655-1a2988544ae0" alt="MUI Alert" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/d8c0c400-981c-4598-846a-813e19c49e2e" alt="MUI Snackbar" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/b5d08076-9fe1-4958-af4a-9a22215e6062" alt="MUI Dialog" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/4f0cace9-6ee5-42be-b403-7979525434be" alt="MUI Progress" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/7a4ffd16-013c-411a-81c4-15e2911eb4dc" alt="MUI Skeleton" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/f768a53c-445d-4a08-921c-9d967f147d38" alt="MUI Loading Button" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/c7655b0b-b256-41a0-859c-c51cb7ce25ed" alt="MUI Date, Time & Date Range Picker" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/58515eb4-ff72-4500-827a-6d8887d3be33" alt="MUI Tabs" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/376ea756-10aa-4f93-a44e-f7a295924787" alt="MUI Timeline" width="500px"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/chayan-1906/material-ui-demo/assets/82430454/111676b6-9a0b-48e1-a89d-99ed00478093" alt="MUI Masonry" width="500px"></td>
    </tr>
</table>
