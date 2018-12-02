import * as types from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_DRINKS:
      return action.drinks;

    case types.ADD_DRINK:
      return state.concat(action.drink);

    case types.DELETE_DRINK:
      const drinks = state.filter(drink => drink.id !== action.id);
      return drinks;

    case types.ADD_DRINK_FORM:
      const toggle = action.toggle;
      return !toggle;

    case types.RESET_FORM:
      return state;

    default:
      return state;
  }
};
