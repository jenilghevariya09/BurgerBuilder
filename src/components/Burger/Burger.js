import React from 'react'
import BurgerIngredients from './BergerIngredients/BergerIngredients';
import './Burger.css';

const Burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />; 
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    },[]);
    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>Please Start addnig ingredient</p>
    }
  return (
      <div className='Burger'>
        <BurgerIngredients type="bread-top" />
          {transformedIngredient}
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}

export default Burger
