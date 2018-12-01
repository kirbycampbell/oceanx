import { DRINK_ADD } from "../constants/actionTypes";
const doAddDrinks = drinks => ({
  type: DRINK_ADD,
  drinks
});

export { doAddDrinks };
