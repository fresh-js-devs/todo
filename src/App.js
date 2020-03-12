import React, { useState } from "react";
import logo from "./logo.svg";
import Layout from "./components/Layout/Layout.js";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo.js";
import Todos from "./mocks/todos.json";
import List from "./components/List/List.js";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(Todos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toDateString());
  const handleAddTodoClick = () => {
    if ((title && description && date !== "") || null) {
      const newTodo = {
        id: todos.length + 10,
        title,
        description,
        date
      };
      console.log(`date:${date}`);
      setTodos([newTodo, ...todos]);
      setTitle("");
      setDescription("");
    }
  };

  const today = () => {
    const d = new Date();
    const today = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    return today;
  };

  let todayDate = today();

  console.log(`tu je dautm ${todayDate}`);
  const removeTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const renderTodosToday = () =>
    dueToday.map(({ id, title }) => (
      <List key={id} title={title} onCloseClicked={() => removeTodo(id)} />
    ));

  const renderTodos = () =>
    todos.map(({ id, title, description, date }) => (
      <Todo
        key={id}
        title={title}
        description={description}
        date={date}
        id={id}
        onCloseClicked={() => removeTodo(id)}
        updateTodo={updateTodo}
      />
    ));

  const dueToday = todos.filter(todo => today() === todo.date);

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    /*setEditing(false);
    const editedTodo = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTodo.title,
          description: updatedTodo.description,
          date: updatedTodo.date
        };
      }
      console.log(`TODODODOOO ${todo.title}`);
      return todo;
    });
    setTodos(editedTodo);*/
  };

  return (
    <Layout>
      <Header></Header>
      <main>
        <div className="main-div">
          <Form>
            <p>TODO</p>
            <input
              placeholder="Title"
              title="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Description"
              title="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <input
              type="date"
              value={date}
              min={todayDate}
              onChange={e => setDate(e.target.value)}
              required
            ></input>
            <p class="filled">All fields must be filled.</p>

            <button onClick={handleAddTodoClick}>Add TODO</button>
          </Form>
          <div className="todo">
            <div className="todo-heading">
              <h2>Due today</h2>
              <div className="actions"></div>
            </div>
            <ul>{renderTodosToday()}</ul>
          </div>
        </div>
        <div className="main-div">{renderTodos()}</div>
      </main>

      <Footer></Footer>
    </Layout>
  );
}

export default App;
