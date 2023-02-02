import React, {useState, useEffect} from 'react';
import '../../styles/card.css'
import Todo from '../Todo.jsx'
import TodoItem from '../todoItem.jsx'
import Tododata from '../todo-data.jsx'

const MarketingCard = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('marketing-list')) || [])
      const [todoEditing, setTodoEditing] = useState('')
     const [editingText, setEditingText] = useState({
        id: '',
        title: '',
        team: ''
     })
     const [edit, setEdit] = useState(false)

     useEffect(() => {
        localStorage.setItem('marketing-list', JSON.stringify(todos))
     }, [todos])

    const addTodo = (title, time, team) =>{
        let id = 1;
        if(todos.length > 0) {
            id = todos[0].id + 1
        }
        let todo = {id: id, title: title, time: time, team: team, completed: false}
        let newTodos = [todo, ...todos]
        setTodos(newTodos)

    };

    const removeTodo = (id) => {
        let updateTodos = [...todos].filter((todo) => todo.id !== id)
        setTodos(updateTodos)

    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodos(updatedTodos)
    }


   const confirmTodo = () => {

    }

    const editTodo = (e) => {
 
    }
    

    return (
    	<div className="content">
             <Todo addTodo={addTodo}/>
             <div className="todo-container">
                 {todos.map((todo) => {
                return (
                    <TodoItem key={todo.id} editTodo={editTodo} confirmTodo={confirmTodo} completeTodo={completeTodo} removeTodo={removeTodo} todo={todo} />)
             })}
             </div>
    	</div>
        
    );
};


export default MarketingCard;
