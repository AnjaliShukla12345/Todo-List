import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';




export default function ToDoList() {

let [todos , setTodos] = useState([{task: "Sample-Tasks" , id: uuidv4(), isDone:false}]);
let [newTodos , setNewTodos] = useState("");







let addnewTask = () =>{
//   setTodos([...todos , newTodos]);  OR
setTodos((prevTodos) => {
return [...prevTodos , {task: newTodos, id: uuidv4(), isDone:false}]
})
  setNewTodos("");
}



let updateTodoValue = (event) => {
    setNewTodos(event.target.value);
}






// delete  from arrays__________________________________________________________________
let deleteTodo = (id) => {
 setTodos((prevTodos) => (prevTodos.filter((prevTodos) => prevTodos.id != id)))
};

//______________________________________________________________________________________




//UpdateAll in array_____________________________________________________________________
let upperCaseAll = () => {
setTodos((prevTodos) => (
prevTodos.map((todo)  => {
return {
...todo, 
task: todo.task.toUpperCase(),
}
})
));
};
// _______________________________________________________________________________________




// Updating One Element in arrays:____________________________________________________________
// let upperCaseOne = (id) =>{
// setTodos((prevTodos) => (
// prevTodos.map((todo)  => {
//     if(todo.id === id){
// return {
// ...todo, 
// task: todo.task.toUpperCase(),
// }
// }
// else{
//     return todo; 
// }
// })
// ));
// }

// _________________________________________________________________________________________





// Done Task:++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let markAsDone = (id) =>{
setTodos((prevTodos) => (
prevTodos.map((todo)  => {
    if(todo.id === id){
return {
   ...todo, 
isDone: true,
 }
}
else{
    return todo; 
}
 })
 ));
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Mark All As Done___________________________________________________________________
let markAll = () => {
    setTodos((prevTodos) => (
    prevTodos.map((todo)  => {
    return {
    ...todo, 
 isDone: true,
    }
    })
    ));
    };

// ______________________________________________________________________________________








return (
    <div>
        <fieldset>
    <input placeholder="add a task" 
    value = {newTodos} 
    onChange={updateTodoValue}/>
    &nbsp; &nbsp; &nbsp; &nbsp;


    <button onClick={addnewTask}>Add Task</button>
    <br></br><br></br><br></br>
    <hr></hr>


    <h3 style={{textDecoration:"underline"}}>Tasks:</h3>
    <ul>
    {
    todos.map((todo) => (
    <li key={todo.id}>
    <span style={ todo.isDone ? {textDecorationLine:"line-through"} : {} }>
    {todo.task}</span>
    &nbsp;&nbsp;&nbsp;
    <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
    &nbsp;&nbsp;&nbsp;
    {/* <button onClick={()=> upperCaseOne(todo.id)}>UpperCase One</button> */}
    <button onClick={()=> markAsDone(todo.id)}>Mark</button>
    
    </li>
                       
 ))
}
    </ul>
    <br></br><br></br>
    <button onClick={upperCaseAll}>UpperCase All</button> 
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={markAll}>Mark All</button>   
    </fieldset>
    </div>  
  )
}
