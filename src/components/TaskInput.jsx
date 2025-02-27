import {useState} from 'react'

function Input({addTasks}) {
  const [taskText, setInput] =useState([])

  const onSubmit =(e) => {
    e.preventDefault()
    if (taskText ==='') return

    addTasks(taskText)
    setInput('')
  }

      return (
        <form onSubmit={onSubmit}> 
            <input type='text' placeholder='Enter task here ... ' value={taskText} onChange={(e) => setInput(e.target.value)}></input>
            <button type='submit' onClick={() => console.log(`"${taskText}" added`)}>Add Task</button>
        </form>

      )
      
}

export default Input