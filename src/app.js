import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

//  altjs
import AltContainer from 'alt-container';
import actions from './actions/TodoListActions';
import store from './stores/TodoListStore';

//  Components
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => (
  <AltContainer
    stores={{ store }}
    actions={{ actions }}
  >
    <AddTodo />
    <TodoList />
  </AltContainer>
);

export default App;
