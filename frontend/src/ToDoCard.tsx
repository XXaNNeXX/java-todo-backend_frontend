import {ToDo} from "./ToDo.tsx";
import axios from "axios";
import {ChangeEvent, useState} from "react";

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

    return (

        <div className="todo-card">
            <input value={text} onChange={changeTodo}/>
            <button onClick={deleteCard}>Delete</button>
        </div>
    )
}