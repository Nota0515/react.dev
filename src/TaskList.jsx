import { useState } from "react"

const TaskList = ({
    todos,
    onChangeTodo,
    onDeleteTodo
}) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Tiltle
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    )
}

function Tiltle({
    todo,
    onChange,
    onDelete
}) {

    const [isEditing, setIsEditing] = useState(false);

    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={e => {
                        onChange({
                            ...todo,
                            title: e.target.value
                        });
                    }}
                />
                <button className="bg-slate-400" onClick={() => { setIsEditing(false) }} >Save</button>
            </>
        )
    } else {
        todoContent = (
            <>
                {todo.title}
                <button className="bg-slate-400" onClick={()=>{setIsEditing(true)}}>Edit</button>
            </>
        )
    }

    return (
        <label>
            <input
            type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    });
                }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    );
}

export default TaskList
