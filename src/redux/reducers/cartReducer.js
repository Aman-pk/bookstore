import { ActionTypes } from "../constants/action-types";

const initialState = {
  basket: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_BASKET: {
      console.log(state.basket);
      return {
        ...state,
        basket: [...state.basket, payload],
      };
    }

    default:
      return state;
  }
};
