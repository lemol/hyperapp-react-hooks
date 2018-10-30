# hyperapp-react-hook

Trying to build [Hyperapp](https://github.com/jorgebucaran/hyperapp) syntax with simple react hooks.

[![Edit 6joor0no6w](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6joor0no6w)

## Use

```bash
yarn         # OR npm install
yarn start   # OR npm start
```

## Result

With `create-react-app`, based on the [Hyperapp](https://github.com/jorgebucaran/hyperapp#getting-started)
getting started counter example, just:

1. Import `React` instead of `h`.

2. Replace `onclick` to `onClick`.

```javascript
import { React, app } from "./hyperapp"

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onClick={() => actions.down(1)}>-</button>
    <button onClick={() => actions.up(1)}>+</button>
  </div>
)

app(state, actions, view, document.body);
```

