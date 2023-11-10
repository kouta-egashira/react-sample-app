import React, { useState } from 'react'
import { ToDoType } from '../types/todo'

type ToDoPropsType = {
    todo: ToDoType,
    setTodosTitle: (id: number, title: string) => void
}

export const ToDo = ({
    todo,
    setTodosTitle
}: ToDoPropsType) => {
    const { id, title, done, limit } = todo 
    return (
        <>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{done ? "完了" : "未完了"}</h2>
            <p>{limit > new Date() ? "まだいける" : "期限切れ"}</p>
            <input type="text" onChange={e => setTodosTitle(id, e.target.value)} />
        </>
    )
}

export type { ToDoType }
