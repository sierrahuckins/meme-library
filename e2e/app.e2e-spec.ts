import { MemeLibraryPage } from './app.po';

describe('meme-library App', () => {
  let page: MemeLibraryPage;

  beforeEach(() => {
    page = new MemeLibraryPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
