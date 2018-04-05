# protractor-cucumber-typescript
Boilerplate for protractor with cucumber (version 4 and up) and typescript

# Getting started
I like to use yarn, but you can use npm instead if you want to.

Make sure you have `protractor` and `typescript` globally installed:
```bash
yarn global add protractor typescript
```

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

`tests/features/example.feature`
```feature
Feature: Example

    Scenario: Searching Google
        Given I am on the Google homepage
        When I search for "SpaceX"
        Then I see "SpaceX" in the browser title

```

The corresponding steps are defined in `tests/steps/example.steps.ts`.

Example:
```ts
Then('I see {string} in the browser title', async (string: string) => {
  await expect(this.searchResultPage.title()).to.eventually.contain(string);
});
```
