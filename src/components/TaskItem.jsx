import { useState } from "react"

function ListItem ({task, toggleComplete, deleteTask, editTask}) {
    const [edit, setEdit] = useState(false)
    const [editedText, setEditedText] = useState(task.text)

    const handleEdit = () => {
        if(editedText === '') return
        editTask(task.id, editedText)
        setEdit(false)
    }


    return (
        <li>
            {edit ? (
            <input type='text'
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onKeyDown={(e) => e.key === 'done' && handleEdit()} />
            ):( <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text} </span> 
            )}

            <input type="checkbox" 
                checked={task.completed}
                onChange={() => toggleComplete(task.id)} />

            {edit ? (
                <button onClick={handleEdit}>save</button>
            ):( <button onClick={() => setEdit(true)}>edit</button>
            )}

            <button onClick={() => deleteTask(task.id)}>🗑️</button>
        </li>
    )
}

export default ListItem