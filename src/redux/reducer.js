
let initialState = [];

export default function reducer(state = initialState, action) {
  
  let sameItemFinder = state.findIndex((a) => { return a.id === action.data.id });
  
  switch(action.type){
      case 'Add to Basket':
          if (sameItemFinder >= 0) {
          let copy= [...state];
          copy[sameItemFinder].qty++
          copy[sameItemFinder].price += action.data.price
          return copy
         } else {
          let copyItem = [...state];
          copyItem.push(action.data)
          return copyItem
         } 

    case 'Delete item':
        return state = state.filter((x)=>{
          return x.id !== action.data.id
        })

    case 'Qty increase':
        let copy = [...state];
        copy[sameItemFinder].qty++;
        let oneItemPrice = (action.data.price)/(action.data.qty);
        copy[sameItemFinder].price += oneItemPrice;
        return copy

    case 'Qty decrease':
        let copy2 = [...state];
        copy2[sameItemFinder].qty--;
        let oneItemPrice2 = (action.data.price)/(action.data.qty);
        copy2[sameItemFinder].price -= oneItemPrice2;
        return copy2

    default :
        return state
   }
  }
