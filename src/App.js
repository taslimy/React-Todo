import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const toDos = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false
  },
  {
    task: "Time to sleep",
    id: 3,
    completed: false
  },
  {
    task: "Dont forget to study",
    id: 4,
    completed: false
  }
];

// CCR - component, constructor, render

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDosState: toDos,
      task: ""
    };
  }

  handleInputChange = event => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  newToDo = event => {
    event.preventDefault();
    const newToDoItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDosState: [...this.state.toDosState, newToDoItem],
      task: ""
    });
  };

  toggleComplete = id => {
    const updatedList = this.state.toDosState.map(item => {
      if (item.id === id) return { ...item, completed: !item.completed };
      return item;
    });
    this.setState({
      toDosState: updatedList
    });
    console.log(updatedList);
  };

  // returning the !item.completed. with filter
  removeTodo = event => {
    event.preventDefault();
    const removeMe = this.state.toDosState.filter(item => {
      return !item.completed;
    });
    this.setState({
      toDosState: removeMe
    });
    console.log(removeMe);
  };

  /* WTF IS A SPREAD OPERATOR?
    my example 
    const oldObject = {
    name: 'Max'
    };

    const newObject = {
    ...oldObject,
    age: 28
    };
    newObject would then be
    {
    name: 'Max',
    age: 28
    }
   */
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="form-wrapper">
        <h2>Todo List</h2>
        {this.state.toDosState.map(eachToDos => (
          <TodoList toggleComplete={this.toggleComplete} toDoDo={eachToDos} />
        ))}

        <TodoForm
          newToDo={this.newToDo}
          handleInputChange={this.handleInputChange}
          task={this.state.task} // these are the pops args.
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
