import { combineReducers } from "redux";
import drinkReducers from "./drinkReducers";

const rootReducer = combineReducers({
  drinks: drinkReducers
});
export default rootReducer;
