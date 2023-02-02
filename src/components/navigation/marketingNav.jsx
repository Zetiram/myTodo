import React from 'react'
import Marketing from '../../assets/marketing-pie-icon.svg'


function MarketingNav() {
	return(
		<div className="navigation-icons">
			<img src={Marketing} alt="Marketing Logo" className="navigation-img"/>
			<h4 className="navigation-text">Marketing</h4>
		</div>
		)
}

export default MarketingNav