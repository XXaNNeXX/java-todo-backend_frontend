import {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header.tsx";
import ToDoList from "./ToDoList.tsx";
import {ToDo} from "./ToDo.tsx";
import axios from "axios";
import {allPossibleTodos} from "./ToDoStatus.tsx";

export default function App() {

  const [todos, setTodo] = useState<ToDo[]>([])

  function fetchData() {
        axios.get("/api/todo")
            .then(response=> setTodo(response.data))
            .catch(reason => console.error(reason.message))
  }

  useEffect(fetchData, [])

  return (
    <>
        <Header/><br/>
        <div className="ToDoLists">
        {
            allPossibleTodos.map(status => {
               const filteredTodos = todos.filter(todo => todo.status === status)
               return <ToDoList key={status} status={status} todos={filteredTodos} onItemChange={fetchData}/>
            })
        }
        </div>

    </>
  )
}

