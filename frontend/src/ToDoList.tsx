import ToDoCard from "./ToDoCard.tsx";
import {ToDo} from "./ToDo.tsx";
import {ToDoStatus} from "./ToDoStatus.tsx";

type ToDoList = {
    status: ToDoStatus,
    allTodos: ToDo[]
    deleteCard: () => void
}

export default function ToDoList(props: ToDoList) {

    return (

        <div className="ToDoListColumn">
            <h2>{props.status}</h2>
            {props.allTodos.map((todo => <ToDoCard
                    key={todo.id}
                    todos={todo}
                    deleteCard={props.deleteCard}
            />))}
        </div>
    )
}