import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const list = [
  {
    task: "Organize Garage",
    id: 1528817084386,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Time to sleep",
    id: 1528817084397,
    completed: false
  },
  {
    task: "Dont forget to study",
    id: 1528817084356,
    completed: false
  }
];



// CCR - component, constructor, render

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      list: list,
      inputValue: ""
    };
  }



  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h2>Todo List: MVP</h2>

        <TodoList/>
        <TodoForm />
      </div>
    );
  }
}

export default App;