import React, {useState, useEffect} from "react";

const Update = (props) => {

    const [checked, setChecked] = useState(props.isDone);

    const checkTask = () => {
        setChecked(!checked);    
    }
    
    const updateTask = () =>{
        console.log(checked);
        fetch(`https://playground.4geeks.com/todo/todos/${props.id}`, {
			method: "PUT",
            body: JSON.stringify({
                "label": props.label,
                "is_done": checked
            }),
            headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {   
            if(response.status === 200) {            
            props.getList(); 
            console.log(response);       
            }        
		})
		.catch((error) => console.log(error))    
    }

    useEffect(() => {
        updateTask();
    },[checked])

    return (
        <span className="me-3 d-flex align-items-center">
            <input className="form-check-input me-3" checked={checked} onChange={checkTask} 
                type="checkbox" value="" id={props.id}/>
            <span className={checked ? "text-decoration-line-through" : ""}>{props.label}</span>
        </span>
    );
}

export default Update;