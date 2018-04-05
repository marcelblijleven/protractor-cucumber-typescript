import { Given, Then, When } from 'cucumber';
import { expect } from './helpers/chaiHelper';
import GoogleHomePage from '../../pages/GoogleHomepage';
import GoogleSearchResultPage from '../../pages/GoogleSearchResultPage';

Given('I am on the Google homepage', async () => {
  this.google = new GoogleHomePage('https://www.google.nl/');
  await this.google.goTo();
});

When('I search for {string}', async (string: string) => {
  this.searchResultPage = await this.google.search(string);
});

Then('I see {string} in the browser title', async (string: string) => {
  await expect(this.searchResultPage.title()).to.eventually.contain(string);
});
