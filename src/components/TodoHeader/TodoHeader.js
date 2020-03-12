import React from "react";
import styled from "@emotion/styled";

import Form from "./TodoHeaderForm";

const Wrapper = styled.div({
  padding: "15px 200px",
  width: "100%",
  transition: "box-shadow 300ms",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
});

const TodoHeader = ({ todos, setTodos }) => {
  return (
    <Wrapper>
      <h1>Todododooo App</h1>
      <br/>
      <Form todos={todos} setTodos={setTodos}></Form>
    </Wrapper>
  );
};

export default TodoHeader;
