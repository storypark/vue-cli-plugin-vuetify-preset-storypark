# vue-cli-plugin-vuetify-preset-storypark
Storypark's vuetify preset

## Usage

### Within Storyjar
```
yarn add ssh:git@github.com:storypark/vue-cli-plugin-vuetify-preset-storypark.git
```

### Within vue cli project

```
yarn add ssh:git@github.com:storypark/vue-cli-plugin-vuetify-preset-storypark.git
vue invoke vue-cli-plugin-vuetify-preset-storypark
```

## Development

To be able to work on presets on your local machine.

1. Pull the repo down to your machine
    - a good place to have it would be the same folder that the `storyjar` repo is in

2. In your terminal, make sure you are in the `storyjar` repo and in the `education` folder

3. Run `yarn add ~<path to folder>/vue-cli-plugin-vuetify-preset-storypark`

   e.g. `yarn add ~libby/parkstory/vue-cli-plugin-vuetify-preset-storypark`

4. This will update the `package.json` to use the local preset:

    - `"vue-cli-plugin-vuetify-preset-storypark": "/Users/libby/parkstory/vue-cli-plugin-vuetify-preset-storypark",`

    - The `yarn.lock` file will also be updated.

      **DO NOT commit this changed files.**

5. Make the changes you need to in both the `vue-cli-plugin-vuetify-preset-storypark` code and the `storyjar/education` code.
    - commit changes
    - BUT not the changes to the `package.json` or `yarn.lock` in the `storyjar` repo

6. Get the changes for the preset reviewed and merged first

<br>

*To add:*
- next steps for getting the preset changes used in `storyjar`
