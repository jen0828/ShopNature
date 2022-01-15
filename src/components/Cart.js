import { Table, Alert, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Qty Change</th>
            </tr>
          </thead>
          <tbody>
            {props.state.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.qty}</td>
                  <td><button onClick={() => { props.dispatch({ type: 'Qty increase' }) }}> + </button></td>
                  <td><button onClick={() => { props.dispatch({ type: 'Qty decrease' }) }}> - </button></td>
                </tr>
              )
            })}
          </tbody>
        </ Table>
        {props.alertOpen === true
          ? (<Alert variant="success">
            <p>20% discount offer ends today</p>
            <Button variant="success" onClick={() => { props.dispatch({ type: 'Close Alert' }) }}>Close me</Button>
          </Alert>)
          : null
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state)
  return {
    state: state.reducer,
    alertOpen: state.reducer2,
  }
}

export default connect(mapStateToProps)(Cart);