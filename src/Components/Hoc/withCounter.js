import React, { useState } from "react";
import {createStore} from "redux";

const UpdatedComp = (OldComp) => {
  const NewComp = () => {
    const ADD_PRODUCT = "ADD_PRODUCT";
    const SUBTRACT_PRODUCT = "SUBTRACT_PRODUCT";

    const addFunction = () => {
     return{
       type: ADD_PRODUCT,
     };
    };

    const subtractFunction = () => {
      return{
        type: SUBTRACT_PRODUCT,
      };
     };

     const initialState = {
       count: 0,
       type: "Something",
       status: false
     };

     const reducer = (state = initialState, action) => {
       switch (action.type) {
         case ADD_PRODUCT:
           return {...state, count: state.count + 1};

        case SUBTRACT_PRODUCT:
           return {...state, count: state.count - 1};

           default:
             return state;
       }
     };
     const store = createStore(reducer);

     store.subscribe(() => console.log(store.getState()));
    return (
      <OldComp
        count={store.getState().count}
        incrementCount={ () => store.dispatch(addFunction())}
        decrementCount={ () => store.dispatch(subtractFunction())}
        
      />
    );
  };
  return NewComp;
};

export default UpdatedComp;