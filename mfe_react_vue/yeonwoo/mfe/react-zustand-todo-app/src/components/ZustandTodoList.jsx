import React from 'react'
import ZustandTodoItem from './ZustandTodoItem'
import { useTodoStore } from '../zustand/store'

const ZustandTodoList = () => {
    // Vue의 ...state()와 동일
    // 리액트 용도가 명확하지 않고 두루뭉실하게 들어감
  const todos = useTodoStore((state) => state.todos)

  return (
    <ul>
      { todos.map((todo) => (
        <ZustandTodoItem key={todo.id} props={todo}/>
      ))}
    </ul>
  )
}

export default ZustandTodoList