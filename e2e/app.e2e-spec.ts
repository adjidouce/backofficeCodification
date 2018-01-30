import { TrackerContPage } from './app.po';

describe('tracker-cont App', () => {
  let page: TrackerContPage;

  beforeEach(() => {
    page = new TrackerContPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
