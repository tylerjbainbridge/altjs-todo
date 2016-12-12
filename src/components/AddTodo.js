import React from 'react';
import { Button, Grid, Row, Col, FormControl } from 'react-bootstrap';

const AddTodo = (props) => {
  let input;
  const { actions: { addTodo }} = props;

  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={4} mdOffset={4} className="form-style">
          <h2>Add Todo</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              addTodo(input.value);
              input.value = '';
            }}
          >
            <input
              ref={node => { input = node }}
              type="text"
              className="form-control"
            />
            <Button
              bsStyle="primary"
              type="submit"
              bsSize="small"
              block
            >
              Add Todo
            </Button>
          </form>
        </Col>
      </Row>
    </Grid>
  );
};

export default AddTodo;
