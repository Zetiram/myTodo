import React, {useState} from 'react';

const initialValues = {
	StartD: "",
	Deadline: "",
	Description: ""
}



const Tododata = (props) => {
	const [values, setValues] = useState(initialValues)
	const Submit = (e) => {
		const {name, value} = e.target;
		e.preventDefault()
		props.addTodo(e.target.value)

		setValues("")
		

		setValues({
			...values,
			[name]: value,
		})
	}

    return (
    	<form onSubmit={Submit} action="">
    	 <input value={values.StartD} onChange={Submit}type="date" name="StartD" placeholder="StartD"/>
    	 <input value={values.Deadline} onChange={Submit}type="date" name="Deadline" placeholder="Deadline"/>
    	 <input value={values.Description} onChange={Submit}type="text" name="description" placeholder="Description"/>
    	 </form>
        
    );
};


export default Tododata;
