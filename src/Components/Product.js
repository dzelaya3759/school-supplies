import React from 'react';
import '../App.css';
 
const itempurchase = () => { 
    alert("Your Item was Added to Cart")
}

function Product(props) {
  return(
    <div className="product" onClick = {() =>{props.purchase(props.type, props.price)}}>
      <p>Click me to buy a {props.type} for {props.price}!</p>
    </div>
  );
}

export default Product;
