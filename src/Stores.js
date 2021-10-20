import { decorate, observable, action } from "mobx";

class Store {
  constructor() {
    this.value = "";
    this.nextTodoId = 1;
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.todos = [
      { id: this.nextTodoId++, text: "Clean dishes" },
      { id: this.nextTodoId++, text: "Take out the trash" },
      { id: this.nextTodoId++, text: "Make dinner" },
    ];
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  setValue() {
    this.value = "";
  }

  addTodo(event) {
    if (event.key === "Enter") {
      this.todos.push({
        id: this.nextTodoId++,
        text: this.value,
      });
      console.log(this.todos);
      this.setValue();
    }
  }

  removeTodo(idToRemove) {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== idToRemove;
    });
    console.log(this.todos);
  }
}

decorate(Store, {
  todos: observable,
  value: observable,
  setValue: action,
  addTodo: action,
  removeTodo: action,
  handleChange: action,
});

export default Store;
