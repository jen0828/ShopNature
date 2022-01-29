

let initialState = [{ id: 0, name: 'DAILY RENEW FACIAL CREAM', qty: 1 }];

export default function reducer(state = initialState, action) {

  if (action.type === 'Add to Basket') {

    let sameItemFinder = state.findIndex((a) => { return a.id === action.data.id });

    if (sameItemFinder >= 0) {
      let copy = [...state];
      copy[sameItemFinder].qty++
      return copy
    } else {
      let copy = [...state];
      copy.push(action.data)
      return copy
    }

  } else if (action.type === 'Qty increase') {

    let copy = [...state];
    copy[action.data].qty++;
    return copy

  } else if (action.type === 'Qty decrease') {

    let copy = [...state];
    copy[action.data].qty--;
    return copy

  } else {
    return state
  }
}


