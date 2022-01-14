import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <div>
      <div>
        <Table responsive="sm">
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Qty Change</th>
          </tr>
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
        </ Table>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Cart);