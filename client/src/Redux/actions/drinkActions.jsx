import { API_URL } from "./apiUrl";
import * as types from "../constants/actionTypes";

export const setDrinks = drinks => {
  return {
    type: types.REQUEST_DRINKS,
    drinks
  };
};

export const getDrinks = () => {
  return dispatch => {
    return fetch(`${API_URL}`)
      .then(response => response.json())
      .then(drinks => {
        dispatch(setDrinks(drinks));
      })
      .catch(error => console.log(error));
  };
};

export const addDrink = drink => {
  console.log("add drink called");
  return {
    type: types.ADD_DRINK,
    drink
  };
};

export const addDrinkForm = () => {
  return {
    type: types.ADD_DRINK_FORM
  };
};

export const createDrink = drink => {
  return dispatch => {
    console.log({ drink });
    return fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ drink: drink })
    })
      .then(response => response.json())
      .then(drink => {
        dispatch(addDrink(drink));
        dispatch(resetDrinkForm());
      })
      .catch(error => console.log(error));
  };
};

export const destroyDrink = drink => {
  return {
    type: types.DELETE_DRINK,
    id: drink
  };
};

export const deleteDrink = drinkId => {
  return dispatch => {
    return fetch(`${API_URL}/${drinkId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(drink => {
        dispatch(destroyDrink(drinkId));
      })
      .catch(error => console.log(error));
  };
};

const resetDrinkForm = () => {
  console.log("resetting form");
  return {
    type: types.RESET_FORM
  };
};
