import { browser, by, element, ExpectedConditions, Key, WebElement } from 'protractor';
import Page from './Page';

export default class GoogleSearchResultPage extends Page {
  getResultsOnPage = async () => browser.findElements(by.css('h3.r'));
}
