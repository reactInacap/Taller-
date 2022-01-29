import React, { Fragment, useState, useRef } from 'react'
import { v4 as uuid } from 'uuid';
import { TodoCita } from './TodoCitas';

export function TodoList(){

    const [todos, setTodos] =useState([
        {id:1, cita:'Cita 1', comentario:'Bla bla bla'},
        {id:2, cita:'Cita 2',comentario:'Bla bla bla'}, 
        {id:3, cita:'Cita 3',comentario:'Bla bla bla'},
        {id:4, cita:'Cita 4',comentario:'Bla bla bla'}
    ]);

    const citaRef=useRef();
    const comentarioRef=useRef();

    const agregarCita = () => {

        const cita = citaRef.current.value;
        const comentario = comentarioRef.current.value;

        if (cita === '') return;

        setTodos((prevTodos) => {
            const newCita = {
                id: uuid(),
                cita: cita,
                comentario: comentario                   
            }
            return [...prevTodos, newCita]
        });

       // citaRef.current.value = null;
    
    }
    return (
    <Fragment>
        <h1>Post It Simulator!</h1>

        <div className="input-group mt-5 mb-5">

            <input ref='citaRef' className="form-control ms-4"type="text" placeholder='Titulo'></input>

            <input ref='comentarioRef' className="form-control ms-4"type="text" placeholder='Descripción'></input>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                 Importante!
                </label>
            </div>

            <button onClick={agregarCita} className="btn btn-success ms-4" type="text" >
                    Agregar
            </button>
        </div>

       <div class="row">

            <div class="col-xs-12 col-md-3"> 

                {todos.map((todo) => ( <TodoCita todo={todo} key={todo.id}  /> ))}
                
            </div>
          
        </div>
   </Fragment>
  );
}