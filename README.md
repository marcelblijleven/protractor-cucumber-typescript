# protractor-cucumber-typescript
Boilerplate for protractor with cucumber (version 4 and up) and typescript

# Getting started
I like to use yarn, but you can use npm instead if you want to.

After cloning this repository to your computer, run the following command to install all dependencies:
```bash
yarn install
```

When it's finished, run:
```bash
yarn run e2e
```

The e2e script will also call `webdriver-manager update --standalone false --gecko false` which will download/update
chromedriver.

## Example tests
The e2e script will run a basic feature against the search functionality on the Google homepage.
