import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero.js';
import Product from './Components/Product.js';
import Summary from './Components/Summary.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        cart: [],
        total: 0
    } 
  } 

purchase = (item, price) => { 
    this.setState((state) =>{ 
        state.cart.push(item) 
        state.total += parseFloat(price) 
        return state
    })
}

  
  render() {
    return (
      <div className="App">
        <Hero />
        <Product type="Laptop" price="999.00" purchase = {this.purchase}/>
        <Product type="Mechanical Pencil" price="0.25"purchase = {this.purchase} />
        <Product type="College Ruled Loose Leaf" price="2.75" purchase = {this.purchase}/> 
        <Product type= "NoteBook" price= "10000000.00"purchase = {this.purchase}/>  
        <Product type ="Jacket" price="560.00"purchase = {this.purchase}/>
        <Summary globalState={this.state} />
      </div>
    );
  }
}

export default App;
