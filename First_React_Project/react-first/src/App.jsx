import React, { createContext, useReducer } from "react";

import ProductInfo from "./components/ProductInfo";
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
      break;
    default:
      break;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <ProductInfo />
    </>
  );
};

export default App;
