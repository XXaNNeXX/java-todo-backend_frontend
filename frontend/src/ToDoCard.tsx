import {ToDo} from "./ToDo.tsx";
import axios from "axios";
import {ChangeEvent, useState} from "react";
import {ToDoStatus} from "./ToDoStatus.tsx";

type Props = {
    todo: ToDo,
    onItemChange: () => void
}

export default function ToDoCard(props: Props) {

    const [text, setText] = useState(props.todo.description)

    function deleteCard() {
        axios.delete("/api/todo/" + props.todo.id)
            .then(props.onItemChange)
    }

    function changeTodo(event: ChangeEvent<HTMLInputElement>) {
        const newDescription = event.target.value
        setText(newDescription)
        axios.put("/api/todo/" + props.todo.id, {
            ...props.todo,
            description: newDescription,
        } as ToDo)
    }

    function move(targetStatus: ToDoStatus) {
        axios.put("/api/todo/" + props.todo.id, {
            ...props.todo,
            status: targetStatus
        } as ToDo)
            .then(props.onItemChange)
    }


    return (

        <div className="todo-card">
            <input value={text} onChange={changeTodo}/>
            <button onClick={deleteCard}>Delete</button>
            {
                props.todo.status === "OPEN"
                    ? <div></div>
                    : (
                        props.todo.status === "IN_PROGRESS"
                        ? <button onClick={() => move("OPEN")}>Prev</button>
                        : <button onClick={() => move("IN_PROGRESS")}>Prev</button>
                    )
            }
            {
                props.todo.status === "DONE"
                    ? <div></div>
                    : (
                        props.todo.status === "OPEN"
                            ? <button onClick={() => move("IN_PROGRESS")}>Next</button>
                            : <button onClick={() => move("DONE")}>Next</button>
                    )
            }

        </div>
    )
}