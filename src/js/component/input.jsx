import React from "react";

const Input = (props) => {
    
    return (
        <div className="input-group">
             <input type="text" className="form-control" placeholder="Add a task" 
             onChange={props.onChange} value={props.value} onKeyDown={props.onKeyDown}/>
        </div>
    );
}

export default Input;