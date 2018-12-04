import { EquitablePage } from './app.po';

describe('equitable App', () => {
  let page: EquitablePage;

  beforeEach(() => {
    page = new EquitablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
