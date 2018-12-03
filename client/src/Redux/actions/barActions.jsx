import * as types from "../constants/actionTypes";

export const googleSearch = query => {
  return dispatch => {
    return fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}+Bar&key=MYKEY`
    )
      .then(response => response.json())
      .then(bar => {
        dispatch(makeSearch(bar.results));
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
