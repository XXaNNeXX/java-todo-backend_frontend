import {ChangeEvent, useState} from "react";
import axios from "axios";
import {ToDo} from "./ToDo.tsx";

type Props = {
    onItemChange: () => void
}

export default function AddToDo(props: Props) {

    const [text, setText] = useState<string>("")

    function addNewTodo() {
        setText("")
        axios.post("/api/todo", {
            description: text,
            status: "OPEN"
        } as ToDo)
            .then(props.onItemChange)
    }

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }


    return (

        <div>
            <form>
                <input value={text} onChange={onInputChange}/>
                <button onClick={addNewTodo}>Add</button>
            </form>
        </div>
    )
}