import { useState } from "react";

export default function TaskManager () {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({id: null, title: '', completed: false});

    const addTask = () => {
        const newTask = {...task, id: Date.now()};
        setTasks([...tasks, newTask]);
        setTask({id:null, title:'', completed:false});
    };

    const toggleTaskCompletion = (id) => {
      setTasks (tasks.map((task) => task.id === id ? {...task,completed:!task.completed} : task));
    };

    return (
        <div>
            <p>Task title</p>
            <input
                value={task.title}
                onChange={(e) => setTask({...task, title:e.target.value})}
            />
            <button onClick={addTask}>Add task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}
                    <input onChange={() => toggleTaskCompletion(task.id)} type="checkbox" id={task.id} name={task.title} checked={task.completed}></input>
                    </li>
                ))}
            </ul>
        </div>
    );
}