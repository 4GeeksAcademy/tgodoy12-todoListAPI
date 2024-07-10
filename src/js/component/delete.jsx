import React from "react";

const Delete = (props) => {


    const deleteTask = () =>{
        
        fetch(`https://playground.4geeks.com/todo/todos/${props.id}`, {
			method: "DELETE"	
		})
		.then((response) => { 
            if(response.status === 201 || response.status === 204) {
            console.log(response);   
            props.getList();   
        }

		})
		.catch((error) => console.log(error))
    }
    
    return(
       <button id={props.id} type="button" className="btn-close" aria-label="Close" onClick={deleteTask}></button>
       
    );
}

export default Delete;