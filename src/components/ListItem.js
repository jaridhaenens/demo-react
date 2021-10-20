import React from "react";
import { useObserver } from "mobx-react-lite";

const ListItem = ({ store, todo }) => {
  const handleRemove = () => {
    store.removeTodo(todo.id);
  };

  return useObserver(() => (
    <>
      <li>
        {todo.text}
        <button onClick={handleRemove}>x</button>
      </li>
    </>
  ));
};

export default ListItem;
