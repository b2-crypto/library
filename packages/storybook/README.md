## Storybook

This package provides Storybook stories and documentation for the `@apex-rn/library` package:

* stories for the majority of the components
* documentation on how to build a particular feature with the widgets and/or components and hooks provided by the library.

## Development

To run the storybook locally you can run `npm run storybook` inside the `packages/storybook` directory   
OR run `npx lerna run storybook --scope=@apex-rn/storybook` in the project's root.

## Build

To prepare the build for deployment on the server, run the command `npm run build-storybook` inside the `packages/storybook` directory    
OR run `npx lerna run build-storybook` inside the project's root directory.
