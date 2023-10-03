import {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header.tsx";
import axios from "axios";
import ToDoList from "./ToDoList.tsx";
import {Route, Routes} from "react-router-dom";
import {ToDo} from "./ToDo.tsx";
import AddToDo from "./AddToDo.tsx";

export default function App() {

  const [todo, setTodo] = useState<ToDo[]>([])

  useEffect(() => loadTodo, [])

  function loadTodo() {
     axios.get("/api/todo")
         .then((response) => setTodo(response.data))
         .catch((reason) => console.error(reason.message))
         .finally(() => console.log("Successful"))
  }

  function addCard(item: ToDo) {
      setTodo([...todo, item])
  }

  return (
    <>
     <Header/>
      <Routes>
        <Route path={"/"} element={<ToDoList allTodos={todo}/>}/>
      </Routes>
      <AddToDo addCard={addCard}/>
    </>
  )
}

