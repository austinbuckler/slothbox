export class SlothboxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('slothbox-app h1')).getText();
  }
}
