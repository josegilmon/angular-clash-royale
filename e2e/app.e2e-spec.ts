import { NgClashRoyalePage } from './app.po';

describe('ng-clash-royale App', function() {
  let page: NgClashRoyalePage;

  beforeEach(() => {
    page = new NgClashRoyalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
