import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {


    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        
        if(!todo.text || /^\s*$/.test(todo.text)) { //공백/empty 값 확인
            return;
        }

        const newTodos = [ todo, ...todos] // 기존의 배열 앞에 새로운 todo 할일 을 추가
        console.log(newTodos)
        setTodos(newTodos)
    }

    return (
        <div className="todo-list">
            <h1>What's The Plan For Today?</h1>
            <TodoForm onSubmit={addTodo}></TodoForm> 
            <Todo></Todo>
        </div>
    )
}

export default TodoList

/** 
    onSubmit은 일반적으로 <form> 요소에서 발생하는 이벤트를 
    처리하기 위해 사용되는 이벤트 헨들러로 {}안에서 호출되는 함수를 지정할 수 있음 
*/