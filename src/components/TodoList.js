import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const TodoList = (props) => {
  const { todos, currFilter } = props.store;
  const { toggleTodo, removeTodo } = props.actions;

  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={4} mdOffset={4} className="todo-list">
          { todos.length ? <h2>Todo List</h2> : null }
          <ul>
            {
              todos.map((todo) => {
                return (
                  <li
                    key={todo.id}
                    onClick={() => {
                      removeTodo(todo.id);
                    }}
                  >
                  {todo.text}
                  </li>
                );
              })
            }
          </ul>
        </Col>
      </Row>
    </Grid>
  );
};

export default TodoList;
