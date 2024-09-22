import React, {useState} from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]); 
    const [newTask, setNewTask] = useState("");

    function inChg(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function delTask(index){
        const updTasks = tasks.filter((_, i) => i !== index);
        setTasks(updTasks);
    }

    function taskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks]; 
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function taskDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];  
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    
    return (<div className="container1">
                <h1>Manage Tasks</h1>
                <div>
                    <input 
                        type="text"
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={inChg}/>
                    <button
                        className="add-btn"
                        onClick={addTask}>
                        Add
                    </button>
                </div>
                <ol>{tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className ="mv-btn"
                            onClick={() => taskUp(index)}>
                            ⬆️
                        </button>
                        <button
                            className ="mv-btn"
                            onClick={() => taskDown(index)}>
                            ⬇️
                        </button>
                        <button
                            className ="del-btn"
                            onClick={() => delTask(index)}>
                            DEL
                        </button>
                    </li>
                   )}
                </ol>
            </div>);
}



export default ToDoList