import React from 'react'
import Home from '../../assets/home-icon.svg'
import '../../App.css'

function HomeNav() {
	return(
		<div className="navigation-icons">
			<img src={Home} alt="Home Logo" className="navigation-img"/>
			<h4 className="navigation-text">Home</h4>
		</div>
		)
}

export default HomeNav;