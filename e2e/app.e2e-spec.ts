import { ArcgisApiWithAngular2IntegrationPage } from './app.po';

describe('arcgis-api-with-angular2-integration App', () => {
  let page: ArcgisApiWithAngular2IntegrationPage;

  beforeEach(() => {
    page = new ArcgisApiWithAngular2IntegrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
