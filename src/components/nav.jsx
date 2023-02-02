import React from 'react';
import '../App.css'
import {NavLink} from 'react-router-dom'
import HomeNav from './navigation/homeNav.jsx'
import DevNav from './navigation/devNav.jsx'
import DesignNav from './navigation/designNav.jsx'
import MarketingNav from './navigation/marketingNav.jsx'


const Navbar = () => {
    return (
        <nav>

         <div className="navigation">
                
     	       <NavLink to="/" className="NavLink"  style={({isActive}) => {return {color: isActive?'black':''}}}><HomeNav/></NavLink>
         </div>

     	 <div className="NavLink-Dev navigation">
     	 	   
      		   <NavLink to="/development" className="NavLink" style={({isActive}) => {return {color: isActive?'black':''}}}><DevNav/></NavLink>
     	 </div>

         <div className="navigation">
              
     	      <NavLink to="/design" className="NavLink" style={({isActive}) => {return {color: isActive?'black':''}}} ><DesignNav/></NavLink>
         </div>

         <div className="navigation">
              
              <NavLink to="/marketing" className="NavLink" style={({isActive}) => {return {color: isActive?'black':''}}} ><MarketingNav/></NavLink>
         </div>
        </nav>
    );
};

export default Navbar;
