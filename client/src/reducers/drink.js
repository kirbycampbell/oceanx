import { DRINK_ADD } from "../constants/actionTypes";

const INITIAL_STATE = {
  drinks: [],
  error: null
};

const applyAddDrinks = (state, action) => ({
  drinks: action.drinks,
  error: null
});

function drinkReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DRINK_ADD: {
      return applyAddDrinks(state, action);
    }
    default:
      return state;
  }
}
export default drinkReducer;
