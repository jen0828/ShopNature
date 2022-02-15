import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'


function Cart() {

  let state = useSelector((state) => state)
  //console.log(state) // reducer & reducer2
  let dispatch = useDispatch()

  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Qty Change</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>£{a.price}.00</td>
                  <td>{a.qty}</td>
                  <td>
                   <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-success"
                    onClick={() => { a.qty > 0 && dispatch({ type: 'Qty increase', data: { id: a.id, name: a.name, price: a.price, qty: a.qty } }) }}>+</button>
                    <button type="button" className="btn btn-outline-success"
                    onClick={() => { a.qty > 0 && dispatch({ type: 'Qty decrease', data: { id: a.id, name: a.name, price: a.price, qty: a.qty } }) }}>-</button>
                   </div> 
                  </td>
                   <td>
                  <button type="button" className="btn-close" aria-label="Close"
                    onClick={()=> { dispatch({ type: 'Delete item', data: { id: a.id, name: a.name, price: a.price, qty: a.qty }})}} ></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </ Table>

        {state.reducer.length === 0 && 
        <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
        </div>
        }
        {state.reducer.length !== 0 && 
            <div className="container">
                <div className="col-12">
                    <NavLink to="/checkout" className="btn btn-outline-dark mx-auto">Checkout</NavLink>
                </div>
            </div>
        }
<br></br>

        {/* {state.reducer2 === true
          ? (<Alert variant="success">
            <p>20% discount offer ends today</p>
            <Button variant="success" onClick={() => { dispatch({ type: 'Close Alert' }) }}>Close me !</Button>
          </Alert>)
          : null
        } */}
          
      </div>
    </div>
  )
}

export default Cart;

