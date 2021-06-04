import { useState } from "react";
import initialState from "../initialState";

const UseInitialState = () => {
  const [state, setState] = useState(initialState);

  const addQuantity = (payload) => {
    setState({
      ...state,
      products: state.products.map((item) => {
        if (item.id === payload.id) {
          item.quantity += payload.quantity;
        }
        return item;
      }),
    });
  };

  const removeQuantity = (payload) => {
    setState({
      ...state,
      products: state.products.map((item) => {
        if (item.id === payload.id) {
          item.quantity -= payload.quantity;
        }
        return item;
      }),
    });
  };

  return {
    state,
    addQuantity,
    removeQuantity,
  };
};

export default UseInitialState;
