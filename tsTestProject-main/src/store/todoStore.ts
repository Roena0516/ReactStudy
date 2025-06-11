import { create } from 'zustand'

// Todo 항목의 타입 정의
interface Todo {
  id: number      // 고유 식별자
  text: string    // 할 일 내용
  completed: boolean  // 완료 여부
}

// Todo Store의 타입 정의
interface TodoStore {
  todos: Todo[]   // Todo 항목 배열
  addTodo: (text: string) => void    // 새로운 Todo 추가
  toggleTodo: (id: number) => void   // Todo 완료 상태 토글
  deleteTodo: (id: number) => void   // Todo 삭제
}

// useTodostore를 생성하고 export
  - 초기상태 : 빈 todo 배열
  - 추가 액션 정의: addTodo, toggleTodo(토글시 취소선 있음/없음), deleteTodo
