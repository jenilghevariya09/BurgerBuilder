import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';


const NavigationItems = () => {
  return (
    <ul className='NavigationItems'>
        <NavigationItem link="/" active>
            Burger Builder
        </NavigationItem>
        <NavigationItem link="/">
            CheckOut
        </NavigationItem>
    </ul>
  )
}

export default NavigationItems
