import React from 'react'
import devIcon from '../../assets/code-icon.svg'


function DevNav() {
	return(
		<div className="navigation-icons">
			<img src={devIcon} alt="devIcon" className="navigation-img"/>
			<h4 className="navigation-text">Development</h4>
		</div>
		)
}

export default DevNav