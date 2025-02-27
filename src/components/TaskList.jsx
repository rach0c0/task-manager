//import { useState } from 'react'

import ListItem from "./TaskItem"


function CreateList({tasks, toggleComplete, deleteTask, editTask}) {
    return(
        <ul>
            {tasks.length > 0 ? (
            tasks.map((task) => (
                <ListItem 
                key={task.id} 
                task={task} 
                toggleComplete={toggleComplete} 
                deleteTask={deleteTask} 
                editTask={editTask}/>
            )) ) : (
            <li>No tasks yet. Add one Below!</li>
            )}
        </ul>
    )
}

export default CreateList
