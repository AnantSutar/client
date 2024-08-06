import React, { Fragment, useState } from 'react'

export const Editodo = ({todo}) => {
    const [description,setDescription] =  useState(todo.description);



    const updateDesc = async(e) => {
        e.preventDefault();
        try {
           const body =  {description};
           const response = await fetch(`http://localhost:5000/todo/${todo.todo_id}`,{
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(body)
           }) 
           window.location = "/";
        } catch (error) {
            
        }
    }
  return (
    <Fragment>
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
  EDIT
</button>


<div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

   
      <div class="modal-header">
        <h4 class="modal-title">EDIT TODO</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={()=> setDescription(todo.description)}></button>
      </div>

  
      <div class="modal-body">
        <input type='text' className='form-control' value={description} onChange={e=>setDescription(e.target.value)}/>
      </div>


      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-bs-dismiss="modal" onClick={e => updateDesc(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=> setDescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
  )
}
