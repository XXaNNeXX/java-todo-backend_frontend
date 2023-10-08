import ToDoCard from "./ToDoCard.tsx";
import {ToDo} from "./ToDo.tsx";
import {ToDoStatus} from "./ToDoStatus.tsx";
import AddToDo from "./AddToDo.tsx";

type Props = {
    status: ToDoStatus,
    todos: ToDo[]
    onItemChange: () => void
}

export default function ToDoList(props: Props) {

    return (

        <div className="ToDoListColumn">
            <h2>{props.status}</h2>
            {
                (props.status === "OPEN") && <AddToDo onItemChange={props.onItemChange}/>
            }
            <br/>
            {
                props.todos.map((todo => <ToDoCard
                    key={todo.id}
                    todo={todo}
                    onItemChange={props.onItemChange}/>))
            }

        </div>
    )
}