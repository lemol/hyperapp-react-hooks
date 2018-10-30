import React, { useState } from "react";
import ReactDOM from "react-dom";

function useApp(initialState, actionsDefs) {
  const [state, setState] = useState(initialState);
  let actions = {};

  for (const name in actionsDefs) {
    const action = actionsDefs[name];
    actions[name] = value => {
      const result = action(value)(state, actions);
      if (result !== undefined) {
        setState(result);
      }
    };
  }

  return {
    state,
    actions
  };
}

export function app(initialState, actionsDefs, view, element) {
  function App() {
    const { state, actions } = useApp(initialState, actionsDefs);
    return view(state, actions);
  }

  ReactDOM.render(<App />, element);
}

export { React };
