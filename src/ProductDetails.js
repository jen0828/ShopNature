import { useHistory, useParams } from 'react-router-dom';


export default function ProductDetails(props) {
  let { id } = useParams();
  let history = useHistory();
  let myProduct = props.products.find(function(product){
    return product.id == id
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            <div className="pt-5">
            <img src={myProduct.image} width="100%" alt='' /> 
            <h4>{myProduct.title}</h4>
            <p>{myProduct.content}</p>
            <p>{myProduct.price}</p>
            <button className="btn btn-secondary">Order</button>
            <button onClick={()=>{ history.goBack() }} className="btn btn-secondary">Go back</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
