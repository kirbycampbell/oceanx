import { combineReducers } from "redux";
import drinkReducers from "./drinkReducers";
import barReducers from "./barReducers";

const rootReducer = combineReducers({
  drinks: drinkReducers,
  bars: barReducers
});
export default rootReducer;
