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
        <li className="itemContainer">
            <div className="item">
            {edit ? (
            <input type='text'
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onKeyDown={(e) => e.key === 'done' && handleEdit()} />
            ):( <span className="newItem" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text} </span> 
            )}
            
            <input type="checkbox" 
                checked={task.completed}
                onChange={() => toggleComplete(task.id)} />
                </div>

            <div className="actions">
            {edit ? (
                <button onClick={handleEdit}>save</button>
            ):( <button onClick={() => setEdit(true)}>edit</button>
            )}

            <button onClick={() => deleteTask(task.id)}>🗑️</button>
            </div>
        </li>
    )
}

export default ListItem