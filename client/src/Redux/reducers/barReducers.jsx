import * as types from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case types.GOOGLE_BAR:
      console.log(action.bars);
      return action.bars;

    default:
      return state;
  }
};
