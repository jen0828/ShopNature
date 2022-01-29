import { Table, Alert, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {

  let state = useSelector((state) => state)
  console.log(state.reducer)
  let dispatch = useDispatch()

  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Qty Change</th>
            </tr>
          </thead>
          <tbody>
            {state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.qty}</td>
                  <td>
                    <button type="button" className="btn btn-success"
                      onClick={() => { dispatch({ type: 'Qty increase', data: { id: a.id, name: a.name, qty: a.qty } }) }}> + </button>{' '}
                    <button type="button" className="btn btn-success"
                      onClick={() => { a.qty > 0 && dispatch({ type: 'Qty decrease', data: { id: a.id, name: a.name, qty: a.qty } }) }}> - </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </ Table>

        {state.reducer2 === true
          ? (<Alert variant="success">
            <p>20% discount offer ends today</p>
            <Button variant="success" onClick={() => { dispatch({ type: 'Close Alert' }) }}>Close me !</Button>
          </Alert>)
          : null
        }
      </div>
    </div>
  )
}

export default Cart;