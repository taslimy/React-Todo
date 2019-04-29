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
      <div className="form-button">
      <button className="button" onClick={props.newToDo}>Add Todo</button>
      <button className="button" onClick={props.removeTodo}>Clear Completed</button>
      </div>
    </form>
  );
}

export default TodoForm;
