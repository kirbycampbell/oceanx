import { combineReducers } from "redux";

import drinkReducer from "./drink";

const rootReducer = combineReducers({
  drinkState: drinkReducer
  //archiveState: archiveReducer
});

export default rootReducer;
