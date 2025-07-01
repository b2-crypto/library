# ApexReactNative

The repository contains the APEX ReactNative SDK (UI kit + SDK) to use as a 
dependency for client's RN apps and the demo app to test the functionality and 
distribute as an example and/or as a starter-kit for a new app.

The code is organaized as a monorepo of different packages:

* `lib` (`@apex-rn/library` package) — is a library of UI kit and SDK.
* `app` — demo app used also as a base for the client's template.
* `create-template` — template for `react-native init` command to bootstrap a new app (see it's [README.md](packages/create-template/README.md) for more details).
* `storybook` — a storybook demo of the UI kit and the documentation on how to use the SDK.

## Getting Started

First, follow React Native [official guide](https://reactnative.dev/docs/environment-setup) on setting up your local environment.

After you cloned the repo, you need to install dependencies:

```bash
npm i
```

Navigate to `packages/app` and install missing Ruby gems:
```bash
bundle install
```

Next, navigate to `packages/app/ios` and install pods: 
```bash
pod install
```

You need to create a proper environment configuration in the `packages/app/env` directory (`.env.dev`, `.env.staging`, `.env.prod` are supported). See `packages/app/.env.example` for the reference.

Now you can run the local app from inside the `packages/app` directory (see `package.json` for available commands).
For example:
```bash
npm run ios
```

## Development

### Library

The goal of the Library is:

* to provide the UI kit basic and reusable components (in the `components` directory).
* to provide the API endpoints configuration for RTK Query (in the `services` directory).
* to provide the functionality per feature (`features` directory)
  * functional UI components (without any integrations)
  * custom hooks to load and transform data
  * "widgets" that wrap the UI components with data loaded by hooks
* useful helpers

Please, pay attention, that we are shipping **UI components separated from widgets** (containers) and hooks, so the customers can use their own UI components with the provided hooks.

When you adding new UI for any feature, document as much as possible via storybook documentation (How To Use the components, hooks) and components demo.

Pay attention, the the library code shouldn't depend on the navigation — every navigation should be provided via props.

You can run the library code in the watch mode using command `npm run start` (inside the `packages/lib` directory) however the app will use the source code to run the app locally.

### App

The app contains mainly the navigator configuration with the screen layout composed of the widgets from the Library.

Note, that any configuration made for the react-native app configuration (metro bundler, jest, etc) should be reflected in the template creator.

### App Template

This package consists of the script (`scripts/build.mjs`) that packs an app as a template to be used by `react-native init` command to bootstrap a new project based on this starter kit. It will be ran when a new release will be created (see next section).

This package is needed because the `app` has some modifications in dependencies and configuration that has been added to work correctly on the monorepo project. So this script reverts these change to allow users to run the app without monorepo setup.

## Publishing changes

When you need to publish the packages (only the Library and Template are publishable) you can run the `npm run publish` command in the project's root directory. This will bump the version of the packages and dependencies, updates the CHANGELOG.md with changes introduced in the packages. In case you need to manually specify the type of the version to create please check the documentation of the [`lerna publish`](https://github.com/lerna/lerna/tree/main/libs/commands/publish) command.
