import React, {Component} from 'react';
import Header from './component/Header';
import ProductList from './component/ProductList';
import './App.css';
import 'antd/dist/antd.min.css';
import Data from './data.json'

class App extends Component {
  
  state = {productInfo:Data.Products}
  
  render() { 
    const {productInfo} =this.state
    return (
     
      <div>
         
          <Header/>
          <ProductList productInfo={productInfo}/> 
      </div>
      
    );
  }
}
 
export default App;