import {ChangeEvent, FormEvent, useState} from "react";
import {ToDo} from "./ToDo.tsx";

type Add = {
    addCard: (item: ToDo) => void
}

export default function AddToDo(props: Add) {

    // const [todo, setTodo] = useState<ToDo[]>([])
    const [newTodo, setNewTodo] = useState<string>("")

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTodo(event.target.value)
    }
    function addNewTodo(event: FormEvent<HTMLFormElement>) {
        setNewTodo("")
        event.preventDefault()

    const myNewTodo: ToDo = {description: newTodo, status: "OPEN"}

    props.addCard(myNewTodo)

    /*const newTodoList: ToDo[] = [...todo, myNewTodo]

    setTodo(newTodoList)*/

    }

    return (

        <div>
            <form onSubmit={addNewTodo}>
                <input value={newTodo} onChange={onInputChange}/>
                <button>Add</button>
            </form>
        </div>
    )
}