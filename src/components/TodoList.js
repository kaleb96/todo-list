import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {


    //states
    const [todos, setTodos] = useState([]);

    //functions 
    //todo add
    const addTodo = (todo) => {
        
        if(!todo.text || /^\s*$/.test(todo.text)) { //공백/empty 값 확인
            return console.log('Add erro - empty value');
        }

        const newTodos = [ todo, ...todos] // 기존의 배열 앞에 새로운 todo 할일 을 추가
        console.log(newTodos)
        setTodos(newTodos)
    }

    //todo delete
    const removeTodo = (id) => {
        const removedArr = todos.filter(todo => todo.id !== id); // todo.id 값과 id값이 일치하지 않는 새로운 배열을 반환
        setTodos(removedArr);
    }

    //todo update
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return console.log('Update error - empty value');
        }
        setTodos(prev => prev.map(item => (item.id === todoId? newValue : item)))
        //각 요소의 id가 todoId와 일치하는지 확인하여 일치하면 newValue로 대체하고, 일치하지 않으면 원래 요소인 item을 그대로 유지
        // setTodos(변수명 => ...) 기존 값
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