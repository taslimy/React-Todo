import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input
        placeholder="...to do"
        name="task"
        value={props.task}
        onChange={props.handleInputChange}
      />
      <button onClick={props.newToDo}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
