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
    }
    this.setState({
      toDosState: [
        ...this.state.toDosState, 
        newToDoItem
      ],
      task: ""
    });
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h2>Todo List: MVP</h2>
        {this.state.toDosState.map(eachToDos => (
          <TodoList
            key={eachToDos.id}
            toDoDo={eachToDos}
            banannaToDoList={this.state.toDosOnState}
          />
        ))}

        <TodoForm
          newToDo={this.newToDo}
          handleInputChange={this.handleInputChange}
          task={this.state.task} // these are the pops args.
        />
      </div>
    );
  }
}

export default App;
