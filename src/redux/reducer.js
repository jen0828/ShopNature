
let initialState = [];

export default function reducer(state = initialState, action) {
  
  let sameItemFinder = state.findIndex((a) => { return a.id === action.data.id });
  
  if (action.type === 'Add to Basket') {

        if (sameItemFinder >= 0) {
          const copy= [...state];
          copy[sameItemFinder].qty++
          copy[sameItemFinder].price += action.data.price
          return copy
        } else {
          let copyItem = [...state];
          copyItem.push(action.data)
          return copyItem
        }

  } else if (action.type === 'Delete item') { 
    return state = state.filter((x)=>{
      return x.id !== action.data.id
  })

  } else if (action.type === 'Qty increase') {

    let copy = [...state];
    copy[sameItemFinder].qty++;
    let oneItemPrice = (action.data.price)/(action.data.qty);
    copy[sameItemFinder].price += oneItemPrice;
    return copy

  } else if (action.type === 'Qty decrease') {

    let copy = [...state];
    copy[sameItemFinder].qty--;
    let oneItemPrice = (action.data.price)/(action.data.qty);
    copy[sameItemFinder].price -= oneItemPrice;
    return copy

  } else {
    return state
  }
}


