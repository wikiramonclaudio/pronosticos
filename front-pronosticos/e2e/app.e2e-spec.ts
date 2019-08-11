import { FrontPronosticosPage } from './app.po';

describe('front-pronosticos App', () => {
  let page: FrontPronosticosPage;

  beforeEach(() => {
    page = new FrontPronosticosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
