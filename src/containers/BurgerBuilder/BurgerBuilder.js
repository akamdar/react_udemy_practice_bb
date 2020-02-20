import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 10,
  bacon: 20,
  cheese: 30,
  potato: 10
}

class BurgerBuilder extends Component {

  state = {
    ingredients : {
      salad: 0,
      bacon: 0,
      cheese: 0,
      potato: 0
    },
    totalPrice: 70,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState (ingredients) {
    const sum = Object.values(ingredients)
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0});
  }
  
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice});
    this.updatePurchaseState(updatedIngredient);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount < 1) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice});
    this.updatePurchaseState(updatedIngredient);
  }

  puchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    alert('You continue!!');
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalCanceled={this.purchaseCancelHandler}>
          <OrderSummary 
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdd={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.puchaseHandler}/>
      </Fragment>
    )
  }
}

export default BurgerBuilder;