import {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header.tsx";
import ToDoList from "./ToDoList.tsx";
import {Route, Routes} from "react-router-dom";
import {ToDo} from "./ToDo.tsx";
import AddToDo from "./AddToDo.tsx";
import axios from "axios";

export default function App() {

  const [todo, setTodo] = useState<ToDo[]>([])

    useEffect(() => {
        axios.get("/api/todo")
            .then(response => response.data)
            .then(response => setTodo(response))
            .catch(reason => console.error(reason.message))
    }, [])

    function addCard(item: ToDo) {
        axios.post("/api/todo", item)
            .then(request1 => request1.data)
            .then(request2 => setTodo([...todo, request2]))
            /*.then(request=> {
                setTodo(prevState => [...prevState, request.data])
            })*/
            .catch(reason => console.error(reason.message))
    }

  return (
    <>
     <Header/><br/>
     <AddToDo addCard={addCard}/>
     <Routes>
        <Route path={"/"} element={<ToDoList allTodos={todo}/>}/>
     </Routes>

    </>
  )
}

