import {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header.tsx";
import ToDoList from "./ToDoList.tsx";
import {Route, Routes} from "react-router-dom";
import {ToDo} from "./ToDo.tsx";
import AddToDo from "./AddToDo.tsx";
import axios from "axios";
import {allPossibleTodos} from "./ToDoStatus.tsx";

export default function App() {

  const [todo, setTodo] = useState<ToDo[]>([])

    function fetchData() {
        axios.get("/api/todo")
            .then(response => response.data)
            .then(response => setTodo(response))
            .catch(reason => console.error(reason.message))
    }
    useEffect(fetchData, [])

    function addCard(item: ToDo) {
        axios.post("/api/todo", item)
            .then(response => response.data)
            .then(response => setTodo([...todo, response]))
            /*.then(request=> {
                setTodo(prevState => [...prevState, request.data])
            })*/
            .catch(reason => console.error(reason.message))
    }

  return (
    <>
     <Header/><br/>
     <AddToDo addCard={addCard}/>
        <div className="ToDoLists">
         <Routes>
            <Route path={"/"} element={
                allPossibleTodos.map(status => {
                   const filteredTodos = todo.filter(todo => todo.status === status)
                   return <ToDoList status={status} allTodos={filteredTodos} deleteCard={fetchData}/>
                })}/>
         </Routes>
        </div>

    </>
  )
}

