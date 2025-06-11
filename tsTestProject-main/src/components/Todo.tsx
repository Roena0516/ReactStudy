import React, { useState } from 'react'
import { useTodoStore } from '../store/todoStore'

// Todo 컴포넌트: 할 일 목록을 관리하는 메인 컴포넌트
function Todo() {
  // 로컬 상태: 입력 필드의 값을 관리
  const [input, setInput] = useState('')
  
  // Zustand store에서 필요한 상태와 액션들을 가져옴
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore()

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // 기본 폼 제출 동작 방지
    if (input.trim()) { // 입력값이 비어있지 않은 경우에만 처리
      addTodo(input.trim()) // 새로운 할 일 추가
      setInput('') // 입력 필드 초기화
    }
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      {/* 할 일 입력 폼 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
      {/* 할 일 목록 */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* 완료 상태 토글 체크박스 */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {/* 할 일 텍스트 (완료된 경우 취소선 표시) */}
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            {/* 삭제 버튼 */}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo