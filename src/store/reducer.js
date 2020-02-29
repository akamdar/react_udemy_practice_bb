import * as actionTypes from './actions';

const initialState = {
  ingredients : {
    salad: 0,
    bacon: 0,
    cheese: 0,
    potato: 0
  },
  totalPrice: 70,
};

const INGREDIENT_PRICES = {
  salad: 10,
  bacon: 20,
  cheese: 30,
  potato: 10
}

const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }
  }
  return state;
}

export default reducer;