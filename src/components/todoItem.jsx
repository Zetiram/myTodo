import React, {useState, useEffect} from 'react'
import '../styles/stylesPC.css'
import dltIcon from '../assets/delete-icon.svg'
import editIcon from '../assets/edit-icon1.svg'
import check from '../assets/check-icon.svg'
import time from '../assets/time-icon.svg'
import calendar1 from '../assets/calendar-icon1.svg'
import deadlineIcon from '../assets/calendar-icon2.svg'
import team from '../assets/team-icon.svg'


const TodoItem = (props) => {
    const { todo, removeTodo, completeTodo } = props;
    const [todoEditing, setTodoEditing] = useState(null)
     const [editingText, setEditingText] = useState({
        title: "",
        time: "",
        team: ""
     })
     const [edit, setEdit] = useState(false)
     const [error, setError] = useState(false)



    const date = Date.parse(props.todo.time) - Date.now()
     let dayL = Math.floor(date / (1000 * 60 * 60 * 24) + 1);
    let deadline = `${dayL} day(s) left`;

    useEffect(() => {
        const interval = setInterval(() => {
            
        }, 500000)
        return () => clearInterval(interval)
    }, []) 
    

    if(dayL === 0) {
        deadline = 'Today'
    } else if(dayL < 0) {
        deadline = 'Over'
    }

    const inputEdit = (event) => {
        setEditingText(event.target.value)
    }


    const editTodo = () => {
        setEdit(true)
     }

     const newTodo = (e) => {
        const {name, value} = e.target
        setEditingText((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const confirmTodo = () => {

        if(editingText.newTitle === undefined || editingText.newDate === undefined || editingText.newTeam === undefined) {
            setError(true)
        } else if(editingText.newTitle.length === 0 || editingText.newDate.length === 0 || editingText.newTeam.length === 0)  {
            setError(true)
        } else {
            todo.title = editingText.newTitle.trim()
            todo.time = editingText.newDate
            todo.team = editingText.newTeam
            todo.completed = !todo.completed
            setEdit(false) 
            setError(false)
        }
        
    }
         

    return (
    	<div className={todo.completed ? "todo-list completed" : "todo-list"}>
            <span className="title-edit">
            <small>{props.todo.id}</small>
                {edit === true ? <input type="text" onChange={newTodo}  className="newInput" maxLength="20" name="newTitle"/> : <h4>{props.todo.title}</h4>}
                     <span className="del-edit-container">
                         {edit === true ? <button onClick={confirmTodo}>Ok</button> : <img src={check} onClick={() => props.completeTodo(todo.id)} alt=""/>}
                         {todo.completed === true ? console.log('completed!') : <img src={editIcon} onClick={editTodo}alt=""/>}
                         <img className="iconsContainer__icons" onClick={() => props.removeTodo(todo.id)} src={dltIcon} alt=""/>
                     </span>
            </span>
    		
    		<div className="iconsContainer">
            <span className="icons">
                <img className="iconsContainer__icons" src={deadlineIcon} alt=""/>
                {edit === true ? <input type="date" onChange={newTodo}  className="newInput" name="newDate"/> : <small>{props.todo.time}</small> }
            </span>
    			
                <span className="icons">
                    <img className="iconsContainer__icons" src={time} alt=""/>
                    <small>{deadline}</small>
                </span>
    			
                <hr/>
                
                <span className="icons team">
                     <img src={team} alt=""/>
                     
                    {edit === true ? <input type="number" onChange={newTodo}  className="newInput" name="newTeam"/> : <small onClick={() => editTodo(todo.id)}>{todo.team}</small> }
                </span>

                {error === true ? <p>You can not leave an input empty!</p> : ''}
                
    		</div>
         </div>

        
    );
};


export default TodoItem;
