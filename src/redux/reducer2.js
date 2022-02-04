let alertInitialState = true;

export default function reducer2(state = alertInitialState, action) {
  if (action.type === 'Close Alert') {
    return false
  } else {
    return state
  }
}
