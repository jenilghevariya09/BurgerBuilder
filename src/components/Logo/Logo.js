import React from 'react'
import burgerLogo from "../../assets/images/BURGER~1.PNG";
import './Logo.css';


const Logo = (props) => {
  return (
    <div className='logo' style={{height: props.height,marginBottom:props.marginBottom}}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  )
}

export default Logo
