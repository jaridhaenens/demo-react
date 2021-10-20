import React from "react";
import { useObserver } from "mobx-react-lite";

import Store from "../Stores";
const store = new Store();

const ListItem = ({ todo }) => {
  
  const handleRemove = () => {
    store.removeTodo(todo.id)
  }

  return useObserver(() => (
    <>
      <li>
        {todo.text}
        <button onClick={handleRemove}>x</button>
      </li>
    </>
  ));
}

export default ListItem;