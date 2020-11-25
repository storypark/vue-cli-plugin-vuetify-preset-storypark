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

      **DO NOT commit these changed files.**

5. Make the changes you need to in both the `vue-cli-plugin-vuetify-preset-storypark` code and the `storyjar/education` code.
    - everytime you make a change you will need to run `yarn add ...` again and restart your server.

    - commit changes
    - BUT not the changes to the `package.json` or `yarn.lock` in the `storyjar` repo

    *Note*: for quicker development you could:
      - go to `storyjar/education/node_modules/vue-cli-plugin-vuetify-preset-storypark` and make the changes to the preset in there
      - this will mean that you only need to reset the server and can miss the first step of running `yarn add` again
      - if you do this, DO NOT commit the changes in the `storyjar` repo, make sure you move them to the `vue-cli-plugin-vuetify-preset-storypark`


6. Get the changes for the preset agreed upon, reviewed and merged first.

7. Once the preset change is merged, run `yarn add https://github.com/storypark/vue-cli-plugin-vuetify-preset-storypark` in the `storyjar/education` repo.

    This will update the `yarn.lock` file in `education`, which you should then commit to your pull request.

    Once the pull request is on staging you should see the preset changes on there.

<br>
