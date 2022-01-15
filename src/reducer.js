

let initialState = [{ id: 0, name: 'Organic Cream', qty: 2 }];

export default function reducer(state = initialState, action) {
  if (action.type === 'Add to Basket') {
    let copy = [...state];
    copy.push(action.payload);
    return copy;

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


