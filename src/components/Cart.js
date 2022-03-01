import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

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
            {state.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>£{item.price}.00</td>
                  <td>{item.qty}</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example">
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={() => {
                          item.qty > 0 &&
                            dispatch({
                              type: 'Qty increase',
                              data: {
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                qty: item.qty,
                              },
                            });
                        }}>
                        +
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={() => {
                          item.qty > 0 &&
                            dispatch({
                              type: 'Qty decrease',
                              data: {
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                qty: item.qty,
                              },
                            });
                        }}>
                        -
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => {
                        dispatch({
                          type: 'Delete item',
                          data: {
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            qty: item.qty,
                          },
                        });
                      }}></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {state.length === 0 && (
          <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
              <div className="row">
                <h3>Your Cart is Empty</h3>
              </div>
            </div>
          </div>
        )}
        {state.length !== 0 && (
          <div className="container">
            <div className="col-12">
              <NavLink to="/checkout" className="btn btn-outline-dark mx-auto">
                Checkout
              </NavLink>
            </div>
          </div>
        )}
        <br></br>
      </div>
    </div>
  );
}

export default Cart;
