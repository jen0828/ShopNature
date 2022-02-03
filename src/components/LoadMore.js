import { Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from 'react';

export default function LoadMore(props) {
  //console.log(props) // products & setProducts
  
  let [showButton, setShowButton] = useState(true);

  return <div>

{showButton && (
            <Button className="color" variant="outline-light" size="lg" onClick={() => {

              axios.get('http://localhost:8000/products')
                .then((result) => {
                  props.setProducts([...props.products, ...result.data]);
                  setShowButton(false)
                })
                .catch(() => { console.log('Errors!') })
                
            }}>Click me to load more</Button>
          )}
  </div>;
}
