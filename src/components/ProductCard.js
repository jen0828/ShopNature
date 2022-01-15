import { useHistory } from 'react-router-dom';

export default function ProductCard(props) {
  let history = useHistory();
  return (
    <div className="col-md-4" onClick={() => { history.push('/detail/' + props.products.id) }}>
      <img src={props.products.image} width="100%" alt='' />
      <h4>{props.products.title}</h4>
      <p>{props.products.content}</p>
      <p>{props.products.price}</p>
    </div>
  )
}