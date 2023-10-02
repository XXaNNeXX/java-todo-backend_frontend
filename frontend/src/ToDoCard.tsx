import {ToDo} from "./ToDo.tsx";

type ToDoCard = {
    todos: ToDo
}

export default function ToDoCard(props: ToDoCard) {

    return (

        <div className="todo-card">
            <p>{props.todos.description}</p>
        </div>
    )
}