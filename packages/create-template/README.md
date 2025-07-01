# create-apex-rn-app

This is a template package to bootstrap a new APEX RN project with the following command:

```
npm_config_registry=REGISTRY_URL npx @react-native-community/cli@latest init MyProjectName --template=apex-rn-app-template --pm=npm --skip-install
```

Note: for testing perspective you can use Verdaccio project, and in this case the `REGISTRY_URL=http://localhost:4873`.

`npm_config_registry` is required to take the template from the private registry. 
But the `init` script doesn't respect this variable when it tries to install the app's dependencies, 
that's why we need to pass `--skip-install` option.

When the initialization will be completed, you have two options:
1. create `.npmrc` inside the project's directory with corresponding configuration (recommended)
2. or run the `npm i --registry=REGISTRY_URL` command
