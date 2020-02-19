import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

  // const transformedIngredient = Object.keys(props.ingredients)
  //   .map(igKey => { 
  //     for (let i = 0; i < props.ingredients[igKey]; i++) {
  //       return <BurgerIngredient key={igKey + i} type={igKey}/>
  //     }
  //   });

  let transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey}/>
      })
    })
    .flat();
    // .reduce((arr, el) => {
    //   return arr.concat(el);
    // }, []);

  if (!transformedIngredient.length) {
    transformedIngredient = <p>Please start adding ingredients!!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )  
}

export default burger;