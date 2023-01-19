let initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'Add to Basket':
      return addToBasket(state, action);
    case 'Delete item':
      return deleteItem(state, action);
    case 'Qty increase':
      return qtyIncrease(state, action);
    case 'Qty decrease':
      return qtyDecrease(state, action);
    default:
      return state;
  }
}

function findItemIndex(state, action) {
  return state.findIndex((item) => item.id === action.data.id);
}

function addToBasket(state, action) {
  let sameItemFinder = findItemIndex(state, action);

  if (sameItemFinder >= 0) {
    let copy = [...state];
    copy[sameItemFinder].qty++;
    copy[sameItemFinder].price += action.data.price;
    return copy;
  } else {
    let copyItem = [...state];
    copyItem.push(action.data);
    return copyItem;
  }
}

function deleteItem(state, action) {
  return state.filter((item) => item.id !== action.data.id);
}

function qtyIncrease(state, action) {
  let sameItemFinder = findItemIndex(state, action);
  let copy = [...state];
  copy[sameItemFinder].qty++;
  let oneItemPrice = action.data.price / action.data.qty;
  copy[sameItemFinder].price += oneItemPrice;
  return copy;
}

function qtyDecrease(state, action) {
  let sameItemFinder = findItemIndex(state, action);
  let copy = [...state];
  copy[sameItemFinder].qty--;
  let oneItemPrice = action.data.price / action.data.qty;
  copy[sameItemFinder].price -= oneItemPrice;
  return copy;
}
