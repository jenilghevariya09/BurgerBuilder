import React from 'react'
import Auxilary from '../../../hoc/Auxilary';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';


const SideDrawer = (props) => {

    let attachClasses = ['SideDrawer','Close'];
    if (props.open){
        attachClasses=['SideDrawer','Open'];
    }
  return (
    <Auxilary>
        <Backdrop 
        show={props.open} 
        clicked={props.close}/>
    <div className={attachClasses.join(' ')}>
      <Logo height='11%' marginBottom='32px'/>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Auxilary>
  )
}

export default SideDrawer
