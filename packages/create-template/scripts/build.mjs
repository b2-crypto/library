#!/usr/bin/env node
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import PackageJson from '@npmcli/package-json';
import ora from 'ora';
import { $ } from 'execa';

const __dirname =
  import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url));

const appPath = path.resolve(__dirname, '../../app');
const templateDir = path.resolve(__dirname, '../template');

console.log('Building template for the app');
const spinner = ora().start();

// Clean `template` directory if exists
try {
  await fs.access(templateDir);
  spinner.start('Removing `template` directory');
  await $`rm -rf ${templateDir}`;
} catch {}

// await $`mkdir -p ${templateDir}`;
// spinner.succeed('`template` directory created.');

// Copy `packages/app` into `packages/initializer/template`
spinner.start('Copy `packages/app` into `./template`');
await $`cp -r ${appPath} ${templateDir}`;

// Cleanup the template directory
spinner.start('Cleanup the template directory');
const toBeRemoved = [
  '.bundle',
  '.nx',
  'android/.gradle',
  'android/build',
  'android/app/build',
  'env',
  'ios/build',
  'ios/Pods',
  'ios/Podfile.lock',
  'ios/.xcode.env.local',
  'ios/.tool-versions',
  '.tool-versions',
  'node_modules',
  '.env',
  '.eslintrc.cjs',
  'metro.config.js',
  'vendor',
];
for await (const dirOrFile of toBeRemoved) {
  await $`rm -rf ${path.join(templateDir, dirOrFile)}`;
}
spinner.succeed('The app source code is copied into `template`.');

// Update package.json by coping the original devDependencies from react-native template
spinner.start('Updating package.json for the template');
const templatePkg = await PackageJson.load(templateDir);
let devDependencies = { ...templatePkg.content.devDependencies };
let rnVersion = templatePkg.content.dependencies['react-native'];
if (rnVersion.startsWith('^')) {
  rnVersion = rnVersion.substring(1);
}
const origPkgJson = await fetch(
  `https://raw.githubusercontent.com/react-native-community/template/refs/tags/${rnVersion}/template/package.json`,
).then(r => r.json());
Object.entries(origPkgJson.devDependencies).forEach(([pkgName, pkgVersion]) => {
  devDependencies[pkgName] = pkgVersion;
});

// Add additional infrastructure devDependecies from the project's root
const rootPkg = await PackageJson.load(path.resolve(__dirname, '../../..'));
const packagesToInstall = [
  'eslint-plugin-import',
  'patch-package',
  'postinstall-postinstall',
];
for (const pkgName of packagesToInstall) {
  devDependencies[pkgName] = rootPkg.content.devDependencies[pkgName];
}

// Update and save package.json for the template
templatePkg.update({
  version: '1.0.0',
  name: 'apex-react-native',
  scripts: {
    ...templatePkg.content.scripts,
    lint: 'eslint .',
    postinstall: 'npm exec patch-package',
  },
  dependencies: {
    ...templatePkg.content.dependencies,
  },
  devDependencies,
});
await templatePkg.save();
spinner.succeed('package.json updated.');

spinner.start('Adding configuration for tools');
// Add patches
await $`cp -r ${path.resolve(__dirname, '../../../patches')} ${templateDir}`;

// Copy eslintrc
await $`cp ${path.resolve(__dirname, '../../../.eslintrc.cjs')} ${path.join(
  templateDir,
  '_eslintrc.js',
)}`;

// Copy prettierrc
await $`cp ${path.resolve(__dirname, '../../../.prettierrc.js')} ${path.join(
  templateDir,
  '_prettierrc.js',
)}`;

// Copy watchmanconfig
await $`cp ${path.resolve(__dirname, '../../../.watchmanconfig')} ${path.join(
  templateDir,
  '_watchmanconfig',
)}`;

// Add predefined template configs
const confDir = path.resolve(__dirname, '../configs');
for await (const file of await fs.readdir(confDir)) {
  await $`cp ${path.join(confDir, file)} ${templateDir}`;
}
spinner.succeed('Configuration for tools done.');

// Fix node_module path in ios/android app
spinner.start('Fixing "node_modules" directory path.');
const files = [
  'android/settings.gradle',
  'android/app/build.gradle',
  'ios/ApexReactNative.xcodeproj/project.pbxproj',
];
for await (const file of files) {
  const filePath = path.join(templateDir, file);
  let content = await fs.readFile(filePath, { encoding: 'utf8' });
  content = content.replace(/\.\.\/\.\.\/node_modules/g, 'node_modules');
  content = content.replace('hermesCommand', '// hermesCommand');
  await fs.writeFile(filePath, content);
}
spinner.succeed(
  'Fixed "node_modules" path in the "ios" and "android" solutions.',
);
spinner.stop();

console.log('Done!');
