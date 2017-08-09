import { NgTodoListPage } from './app.po';

describe('ng-todo-list App', () => {
  let page: NgTodoListPage;

  beforeEach(() => {
    page = new NgTodoListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
