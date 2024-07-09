import React from "react";
import Delete from "./delete";


const List = (props) => {
    return (
        <ul className="list-group list-group-flush">
            {props.taskAdded.map((element, index) => (            
                <li key={index} className="list-group-item d-flex justify-content-between">{element.label}<Delete id={index} taskList={props.taskAdded} setTask={props.setTask}/></li>
            ))}         
        </ul>
    ) 
}

export default List;