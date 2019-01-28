import * as types from "../constants/actionTypes";
import { googleKey } from "./../constants/googleKey";

export const googleSearch = query => {
  return dispatch => {
    return fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}+Bar&key=${googleKey}`
    )
      .then(response => response.json())
      .then(bar => {
        dispatch(makeSearch(bar.results));
        console.log(bar);
      })

      .catch(error => console.log(error));
  };
};

export const makeSearch = bars => {
  return {
    type: types.GOOGLE_BAR,
    bars
  };
};
