import React from "react";
import ListItem from "./ListItem";
import { useObserver } from "mobx-react-lite";
import Store from "../Stores";

const store = new Store();

const TodoList = () => {
  return useObserver(() => (
    <>
      <h1>Todo List</h1>
      <input
        onKeyPress={store.addTodo}
        value={store.value}
        onChange={store.handleChange}
      />
      <ul>
        {store.todos.map((todo) => (
          <ListItem todo={todo} store={store} key={todo.id} />
        ))}
      </ul>
    </>
  ));
};

export default TodoList;
