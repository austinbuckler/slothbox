import { SlothboxPage } from './app.po';

describe('slothbox App', function() {
  let page: SlothboxPage;

  beforeEach(() => {
    page = new SlothboxPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('slothbox works!');
  });
});
