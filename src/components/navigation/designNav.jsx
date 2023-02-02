import React from 'react'
import Pencil from '../../assets/pencil-icon.svg'



function DesignNav() {
	return(
		<div className="navigation-icons">
			<img src={Pencil} alt="Design Logo" className="navigation-img"/>
			<h4 className="navigation-text">Design</h4>
		</div>
		)
}

export default DesignNav