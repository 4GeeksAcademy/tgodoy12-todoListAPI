import React from "react";
import Delete from "./delete";
import Update from "./update";


const List = (props) => {
    return (
        <ul className="list-group list-group-flush">
            {props.taskAdded.map((element, index) => (            
                <li key={index} className="list-group-item d-flex justify-content-between">
                    <Update id={element.id} label={element.label} isDone={element.is_done} getList={props.getList} />
                    <Delete id={element.id} taskList={props.taskAdded} setTask={props.setTask} getList={props.getList} />
                </li>
            ))}         
        </ul>
    ) 
}

export default List;