import _ from 'lodash';
import alt from '../alt';
import TodoActions from '../actions/TodoListActions.js';

class TodoStore {
  constructor() {
    // binds the actions from TodoActions to this store.
    this.bindActions(TodoActions);
    this.todos = [];
    this.nextTodoId = 0;
    this.currFilter = 'SHOW_ALL';
  }

  onAddTodo(text) {
    this.todos.push({
      id: this.nextTodoId++,
      completed: false,
      text,
    });
  }

  onRemoveTodo(id) {
    _.remove(this.todos, todo => todo.id === id);
  }

  onToggleTodo(id) {
    this.todos.forEach((todo, index) => {
      if (index === id) {
        console.log('changed');
        this.todos[index].completed = !this.todos[index].completed;
      }
    });
  }

  onSetVisibilityFilter(filter) {
    this.currFilter = filter;
  }
}

export default alt.createStore(TodoStore, 'TodoStore');
