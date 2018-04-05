import { browser, by, element, ExpectedConditions, Key, WebElement } from 'protractor';
import GoogleSearchResultPage from './GoogleSearchResultPage';
import Page from './Page';

export default class GoogleHomePage extends Page {
  search = async (query: string) => {
    const searchInput: WebElement = element(by.css('input[name="q"]'));
    await searchInput.sendKeys(query);
    await searchInput.sendKeys(Key.ESCAPE);
    await element(by.css('input[name="btnK"]')).click();
    return new GoogleSearchResultPage();
  }
}
