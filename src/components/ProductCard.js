import { useHistory } from 'react-router-dom';


export default function ProductCard(props) {

  //console.log(props) // products in DATA
  
  let history = useHistory();
  return (
    <div className="col-md-4" onClick={() => { history.push('/detail/' + props.products.id) }}>
      <img className='product-card' src={props.products.image} width="100%" alt='product-card'/>
      <h4 className='title'>{props.products.title}</h4>
      <p>{props.products.content}</p>
      <p>£{props.products.price}.00</p>
    </div>
  )
}