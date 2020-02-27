import React from 'react';

import classes from './Order.module.scss';

const order = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => props.ingredients[igKey] > 0 ? (<span key={igKey} style={{textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid #ccc', padding: '5px'}}>{igKey} ({props.ingredients[igKey]})</span>) : null);
    
    // const ingredeints = [];

    // for (let ingredientName in props.ingredeints) {
    //     ingredeints.push({name: ingredientName, amount: props.ingredeints[inngredientName]})
    // }

    // const ingredientOutput = ingredeints.map(ig => {

    // })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientSummary}</p>
            <p>Price: <strong>INR {+props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;