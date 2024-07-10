import React from "react";
import Delete from "./delete";



const List = (props) => {
    return (
        <ul className="list-group list-group-flush">
            {props.taskAdded.map((element, index) => (            
                <li key={index} className="list-group-item d-flex justify-content-between">
                    {element.label}<Delete id={element.id} taskList={props.taskAdded} setTask={props.setTask} getList={props.getList}/></li>
            ))}         
        </ul>
    ) 
}

export default List;