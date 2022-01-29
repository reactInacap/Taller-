import React from 'react'
export function TodoCita({todo}){
    const {id, cita, comentario}=todo;

    
    return (
 
  
    <div class="card" style={{ background: "#FFFFCC" }} >
        <div class="card-header">
            <button type="button" class="btn-close float-end" aria-label="Close"></button>
        </div>
        <div class="card-body" style={{ background: "#FFFFCC" }}>
            <h7>{id}</h7>
            <h5 class="card-title">{cita}</h5>
            <p  class="card-text" >{comentario} </p>
        </div>
    </div>
    );  
} 