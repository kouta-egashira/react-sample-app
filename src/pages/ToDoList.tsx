import { useState } from "react"
import { ToDo, ToDoType } from "../components/ToDo"

export const ToDoList = () => {

    const [todos, setTodos] = useState<ToDoType[]>([
        { id: 1, title: '筋トレ', done: false, limit: new Date(2023, 8) },
        { id: 2, title: '勉強', done: false, limit: new Date(2023, 8) },
        { id: 3, title: '犬の散歩', done: false, limit: new Date(2023, 7) },
        { id: 4, title: '選択', done: false, limit: new Date(2023, 7) },
        { id: 5, title: '料理', done: false, limit: new Date(2023, 7) },
    ])

    const setTodosTitle = (id: number, title: string) => {
        console.log('id', id);
        console.log('title', title);
        console.log('todos', todos);

        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title
                    }
                }
                return todo
            })
        )
    }

    return (
    <>
        <h2>ToDoList</h2>
        {
            todos.map(todo => (
                <ToDo key={todo.id} todo={todo} setTodosTitle={setTodosTitle} />
            ))
        }
    </>
    )
}
