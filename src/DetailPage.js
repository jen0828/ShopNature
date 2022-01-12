import { useHistory, useParams } from 'react-router-dom';


export default function DetailPage(props) {
  let { id } = useParams();
  let history = useHistory();

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" width="100%" alt="product"/>
          </div> */}
          <div className="col-md-6 mt-4">
            <div className="pt-5">
            <img src={props.products[id].image} width="100%" alt='' /> 
            <h4>{props.products[id].title}</h4>
            <p>{props.products[id].content}</p>
            <p>{props.products[id].price}</p>
            <button className="btn btn-secondary">Order</button>
            <button onClick={()=>{ history.goBack() }} className="btn btn-secondary">Go back</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
