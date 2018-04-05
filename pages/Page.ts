import { browser, by, element } from 'protractor';

export default class Page {
  public url?: string;

  constructor(url?: string) {
    this.url = url;
  }

  goTo = async () => {
    if (this.url) {
      await browser.get(this.url);
    }

    return this;
  }

  title = async (): Promise<string> => browser.getTitle();
}
