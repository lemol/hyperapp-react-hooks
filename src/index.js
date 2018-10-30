import { React, app } from "./hyperapp";

const state = {
  count: 0
};

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
};

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onClick={() => actions.down(1)}>-</button>
    <button onClick={() => actions.up(1)}>+</button>
  </div>
);

app(state, actions, view, document.getElementById("root"));
