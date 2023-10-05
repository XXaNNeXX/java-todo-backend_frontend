import {ToDo} from "./ToDo.tsx";
import axios from "axios";

type ToDoCard = {
    todos: ToDo,
    deleteCard: () => void
}

export default function ToDoCard(props: ToDoCard) {

    function deleteCard() {
        axios.delete("/api/todo/" + props.todos.id)
            .then(props.deleteCard)
    }

    return (

        <div className="todo-card">
            <p>{props.todos.description}</p>
            <button onClick={deleteCard}>Delete</button>
        </div>
    )
}