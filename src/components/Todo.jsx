import React, {useState, useEffect} from 'react';
import '../styles/formContainer.css'
import add from '../assets/add-icon.svg'

const initialValues = {
	name: "",
	time: "",
	deadL: "",
	team: ""
}

const Todo = (props) => {
	const [values, setValues] = useState(initialValues)
	const [create, setCreate] = useState(false)
	const [error, setError] = useState(false)


	const Submit = (e) => {
		e.preventDefault()
		
		const name = values.name.trim()
		const time = values.time
		const team = values.team.trim()

		if(name.length == 0 || time.length == 0 || team.length == 0) {
			setError(true)
			
		} else {
			props.addTodo(name, time, team)
		
		setCreate(false)
		setError(false)

		}
		
		
	}

	const Text = (e) => {
		const {name, value} = e.target;
		setValues((prev) => {
			return {...prev, [name]: value}
		})
	}

	const activate = () => {
		setCreate(true)

	}

	const date = new Date()
   let defaultDate = date.toISOString().substring(0,10)

    return (
    	<div>
    	{create === true ? 
    	<div className="form-container">

   		 <form onSubmit={Submit} className="todo-form">
    		<label>Title</label>
        	<input className="input-form" type="text" value={values.name} onChange={Text}  placeholder="Interview" name="name"/>
        	

        	<label>Date</label>
        	<input className="input-form" type="date" value={values.time} onChange={Text} name="time"/>
       		
       		<label>Team</label>
       		<input className="input-form" type="number" value={values.team} onChange={Text} min="1" placeholder="(quantity)" name="team"/>
    		
    		<button type="submit" className="todo-button">create</button>

    		{error == true ?  <p>An input is empty!</p> : ''}
    	</form> 
    	</div>

    	:

    	<button className="create-todo" onClick={activate}><img src={add}/></button>
    	
    	}
    	</div>
    	
        
    );


};


export default Todo;