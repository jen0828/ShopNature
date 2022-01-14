import { Table } from 'react-bootstrap';
import {connect} from 'react-redux';

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
      <tr>
        <td>1</td>
        <td>{props.state[0].name}</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </ Table>
</div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    state : state
  }
}

export default connect(mapStateToProps)(Cart);