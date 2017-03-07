import { Ng2DinamicComponentsPage } from './app.po';

describe('ng2-dinamic-components App', () => {
  let page: Ng2DinamicComponentsPage;

  beforeEach(() => {
    page = new Ng2DinamicComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
