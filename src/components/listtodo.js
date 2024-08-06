import React,{Fragment,useEffect,useState} from 'react';
import { Editodo } from './editodo';

export const Listtodo = () => {
    const [todos,setTodos] = useState([]);
    
    const deletetodo = async(id) => {
        try {
            const deltodo = await fetch(`http://localhost:5000/todo/${id}`,{
                method: "DELETE"
            }


            );
            setTodos(todos.filter(todo => todo.todo_id != id))
        } catch (error) {
            
        }
    }

    const getTodos = async() => {
        try {
            const response =  await fetch("http://localhost:5000/todo")
            const jsondata = await response.json()

            setTodos(jsondata);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getTodos();
    }
    ,[]
    )
    console.log(todos);
  return (
    <Fragment>
        <table class="table table-striped mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      
      {todos.map(todo =>(
        <tr key = {todo.todo_id}>
            <td>{todo.description}</td>
            <td><Editodo todo = {todo}/></td>
            <td><button className='btn btn-danger' onClick={()=> deletetodo(todo.todo_id)}>Delete</button></td>
            </tr>)
        
        
      )}
    </tbody>
  </table></Fragment>
  )
}
