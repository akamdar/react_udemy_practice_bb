import React, { Fragment } from 'react';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => (<li><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>));
  return (
    <Fragment>
      <h1>Order Summary</h1>
      <p>A Delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Fragment>
  )
}

export default orderSummary;