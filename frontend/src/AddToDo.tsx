import {ChangeEvent, FormEvent, useState} from "react";
import {ToDo} from "./ToDo.tsx";

type Add = {
    addCard: (item: ToDo) => void
}

export default function AddToDo(props: Add) {

    //const [todo, setTodo] = useState<ToDo[]>([])
    const [newTodo, setNewTodo] = useState<string>("")

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTodo(event.target.value)
    }
    function addNewTodo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    const myNewTodo: ToDo = {
        description: newTodo
    }

    props.addCard(myNewTodo)

    //const myNewTodoList: ToDo[] = [...todo, myNewTodo]

    //setTodo(myNewTodoList)

    return (

        <div>
            <form onSubmit={addNewTodo}>
                <input value={newTodo} onChange={onInputChange}/>
                <button>Add</button>
            </form>

        </div>
    )
}