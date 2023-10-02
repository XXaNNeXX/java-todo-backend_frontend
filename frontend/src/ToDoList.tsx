import ToDoCard from "./ToDoCard.tsx";
import {ToDo} from "./ToDo.tsx";

type ToDoList = {
    allTodos: ToDo[]
}

export default function ToDoList(props: ToDoList) {

    return (

        <div>
            <h1>My To Do List:</h1>
            {props.allTodos.map((todo => <ToDoCard
                    key={todo.id}
                    todos={todo}
            />))}
        </div>
    )
}