export default function ProductCard(props) {
  return (
    <div className="col-md-4">
      <img src={props.products.image} width="100%" alt='' />
      <h4>{props.products.title}</h4>
      <p>{props.products.content} & {props.products.price}</p>
    </div>
  )
}