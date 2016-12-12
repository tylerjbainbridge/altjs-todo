import alt from '../alt';

class TodoActions {
  constructor() {
    this.generateActions(
      'addTodo',
      'removeTodo',
      'toggleTodo',
      'setVisibilityFilter',
    );
  }
}

export default alt.createActions(TodoActions);
