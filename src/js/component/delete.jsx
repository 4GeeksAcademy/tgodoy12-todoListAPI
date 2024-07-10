import React from "react";

const Delete = (props) => {
    const deleteTask = () =>{
        // const newTasksList = props.taskList.filter((_,index)=> index !== props.id);

        fetch(`https://playground.4geeks.com/todo/todos/${props.id}`, {
			method: "DELETE"	
		})
		.then((response) => { 
            if(response.status === 201 || response.status === 204) {
            console.log(response);
            console.log(props.id);   
            props.getList();   
            // console.log(newTasksList);
        }

		})
		.catch((error) => console.log(error))

        // props.setTask(newTasksList);
    }
    
    return(
       <span><button id={props.id} type="button" className="btn-close" aria-label="Close" onClick={deleteTask}></button></span>
       
    );
}

export default Delete;