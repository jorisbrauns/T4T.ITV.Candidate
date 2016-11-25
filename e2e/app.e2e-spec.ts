import { CandidatePage } from './app.po';

describe('candidate App', function() {
  let page: CandidatePage;

  beforeEach(() => {
    page = new CandidatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
