import React, {useState, useEffect} from "react";
import Input from "./input";
import List from "./list";

//create your first component
const Home = () => {

	const [task, setTask] = useState("");
	const [listTask, setListTask] = useState([]);
	
	//read the task
	const addTask = (e) => {
		setTask(e.target.value);
		
	}
	//add a task to the array
	const addListTask = (e) => {
		if(e.keyCode === 13 && e.key !== "") {
			// setListTask(listTask.concat(e.target.value))
			addTaskToList();
			setTask("");
		}	
	}
	console.log(listTask);

	//conection with the todo api
	//create user with POST method

	const createUser = () => {
		fetch('https://playground.4geeks.com/todo/users/tgodoy', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			if(response.status === 201) {
				getMyList();
			}
			return response.json()
		})
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
	}

	//get my user toDos array 
	const getMyList = () => {
		fetch('https://playground.4geeks.com/todo/users/tgodoy')
		.then((response) => {
			if(response.status === 404) {
				createUser();
			}
			return response.json();
		})
		.then((data) => setListTask(data.todos))
		.catch((error) => console.log(error));
	}

	//add a task to the list
	const addTaskToList = () => {
		fetch('https://playground.4geeks.com/todo/todos/tgodoy', {
			method: "POST",
			body: JSON.stringify({
				label: task,
				is_done: false
			  }),
			headers: {
				'Content-Type': 'application/json'
			}	
		})
		.then((response) => {
			console.log(response);
			if(response.status === 201) {
				getMyList();
			}
			return response.json();
			
		})
		.catch((error) => console.log(error))
	}

	// const deleteTask = () => {
	// 	fetch("https://playground.4geeks.com/todo/todos/{id}", {
	// 		method: "DELETE"	
	// 	})
	// 	.then((response) => {
	// 		console.log(response);
	// 		return response.json();
	// 	})
	// 	.catch((error) => console.log(error))

	// }

	//each time my page is loaded, my user task list is shown 
	useEffect(() => {
		getMyList();
	},[]);

	return (
		<div className="container">
			<div className="w-50 mx-auto mt-5 text-center">
				<p className="fs-1 m-0 text-secondary fw-bolder">TODO List</p>
			</div>
			
			<div className="card w-50 mx-auto mt-5">
				
				<Input onChange={addTask} value={task} onKeyDown={addListTask}/>
				<List taskAdded={listTask} setTask={setListTask} getList={getMyList}/>			

				<div className="card-footer">
					<div className="items-left">
						<p className="text-black-50 m-0" style={{ fontSize: "smaller" }}>
							{listTask.length} item{listTask.length !== 1 ? 's' : ''} left
						</p> 
					</div>
  				</div>

			</div>
		</div>
	);
};

export default Home;
