import { AAssignment73Page } from './app.po';

describe('a-assignment73 App', function() {
  let page: AAssignment73Page;

  beforeEach(() => {
    page = new AAssignment73Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
