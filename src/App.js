import React from "react";
import "./styles.css";
import TodoList from "./containers/TodoList";
import AddTodo from "./containers/AddTodo";
import Footer from "./containers/Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen NOW!</h2>
      <AddTodo />
      <TodoList />
      <Footer/>
    </div>
  );
}
