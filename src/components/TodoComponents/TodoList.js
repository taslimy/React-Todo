// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";


function TodoList(props){
  // console.log(props.toDoDo);
  return (
<ul>
<li>{props.toDoDo.task}</li>
</ul>
  )
}

 export default TodoList;