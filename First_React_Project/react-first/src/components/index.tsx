import React, { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}
interface Action {
  type: "increment" | "decrement";
}
function reducer(state: State, action: Action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
const index = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return <div></div>;
};

export default index;
