# ember-css-modules-poc

Proof of concept, running Ember with CSS modules with different approaches

## Using ember-css-modules

Conventional setup using [ember-css-modules](https://github.com/salsify/ember-css-modules)

App: [ember-css-modules-app](./apps/ember-css-modules-app/)

## Using webpack native css-loader

Importing CSS modules using [css-loader](https://webpack.js.org/loaders/css-loader/), manually assigning scoped classes in template.

App: [webpack-css-modules-app](./apps/webpack-css-modules-app/)

## Status

| App                     | Classic | Embroider Safe | Embroider Optimized |
| ----------------------- | ------- | -------------- | ------------------- |
| ember-css-modules-app   | ✅      | ✅             | ❌ [^1]             |
| webpack-css-modules-app | ❌ [^2] | ✅             | ✅                  |

We are running the above matrix in CI, compare this to the [latest CI runs](https://github.com/simonihmig/ember-css-modules-poc/actions?query=branch%3Amaster).

[^1]: ember-css-modules does not support optimized mode
[^2]: we cannot import colocated CSS from our own app. Would get fixed by https://github.com/ef4/ember-auto-import/issues/565
