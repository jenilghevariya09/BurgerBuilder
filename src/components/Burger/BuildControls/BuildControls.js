import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';


const controls = [
    {label:'Salad' , type:'salad'},
    {label:'Chutney' , type:'chutney'},
    {label:'Cheese' , type:'cheese'},
    {label:'Tikki' , type:'tikki'},
];

const BuildControls = (props) => {
  return (
    <div className='BuildControls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
             key={ctrl.label} 
             label={ctrl.label}
             added={() => props.ingredientAdded(ctrl.type)}
             remove={() => props.ingredientRemove(ctrl.type)}
             disabled={props.disabled[ctrl.type]}
             />
        ))}
        <button onClick={props.ordered} className='OrderButton' disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
  )
}

export default BuildControls
