// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";


function TodoList(props){
  console.log(props.toDoDo.id);
  return (
<ul>
<li className={props.toDoDo.completed ? "completed": ''} onClick={() => props.toggleComplete (props.toDoDo.id)}>{props.toDoDo.task} </li>
</ul>
  )
}

 export default TodoList;