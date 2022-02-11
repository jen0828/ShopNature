import { Tabs, Tab } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import './ProductDetail.css';
import { useDispatch } from 'react-redux';


function ProductDetail(props) {

  let dispatch = useDispatch()
  let { id } = useParams();
  let history = useHistory();
  let myProduct = props.products.find(function (product) {
    return product.id == id
  });
  
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => { setAlert(false) }, 1000);
    return () => { clearTimeout(timer) }
  }, []);

  return (
    <div>
      <div className="container">
        {
          alert === true
            ? (<div className="my-alert">
              <p>Only few in stock</p>
            </div>)
            : null
        }
        <div className="row justify-content-md-center">
          <div className="col-md-6 mt-4">
            <div className="pt-5">
              <img src={myProduct.image} width="100%" alt='' />
              <h4>{myProduct.title}</h4>
              <p>£{myProduct.price}.00</p>

              <button className="btn btn-secondary" onClick={() => {
                dispatch({ type: 'Add to Basket', data: { id: myProduct.id, name: myProduct.title, price: myProduct.price, qty: 1 } })

              }}>Add to Cart</button>{' '}

              <button onClick={() => { history.goBack() }} className="btn btn-secondary">Go back</button>

            </div>

          </div>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Info">
              <p>Our natural hyaluronic acid serum helps to hydrate your skin from within and plump fine lines and wrinkles. By using 200mg of concentrated low molecular weight hyaluronic acid per bottle, this serum is able to deeply penetrate the skin on your face and neck, leaving it glowing and naturally hydrated all day.</p>

              <p>Our fast absorbing COSMOS Organic formulation also includes organic pomegranate extract to aid cellular turnover, and a delicate, gentle fragrance of organic rosewater.</p>
            </Tab>
            <Tab eventKey="profile" title="Key ingridients">
              <p>
                <strong>Hyaluronic Acid:</strong> With the ability to hold up to 1,000 times its own weight in water, Hyaluronic Acid (HA) is a hydrating super ingredient. Our Evolve Hyaluronic Serum uses this incredible water retention ability to help reduce wrinkles and fine lines,</p>
              <p>
                <strong>Pomegranate Extract:</strong>High in ellagic acid, pomegranate extract helps to regulate cell turnover and strengthen the cell membrane. This helps to limit water loss and free radical damage, and these incredible benefits are the reason why we’ve included it in our natural Hyaluronic Acid Serum.</p>
            </Tab>
          </Tabs>
        </div>
      </div>

    </div>

  )
}

export default ProductDetail;