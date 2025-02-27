import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import CreateList from './components/TaskList.jsx'
import Input from './components/TaskInput.jsx'
import Note from './components/Header.jsx'

function App() {
 
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);


  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText} : task
    ))
  }
  

  return (
    <main>
      <nav>
        <Link to="/About">About</Link>
      </nav>
      <Note/>
      <h1>task manager</h1>

      <CreateList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask}/>
      <Input addTasks={addTask} />
      
    </main>
  )
}

export default App