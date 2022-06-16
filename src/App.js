import React, {Component} from 'react';
import Header from './component/Header';
import ProductList from './pages/products/ProductList';
import WishList from './pages/wishlist/WishList';
import MyNavLink from './component/MyNavLink';

import {Route,Routes,Navigate } from 'react-router-dom'

import './App.css';
import 'antd/dist/antd.min.css';
import Data from './data.json'

class App extends Component {
  
  state = {
    productInfo:Data.Products,
    wishList:[18440201]  
  }

  updateWishList=(itemId)=>{  
    const {wishList} = this.state
    if (wishList.includes(itemId)){
      var newWishList = wishList.filter((wishlistItem)=>{
        return wishlistItem !== itemId
      })
    }else{
      var newWishList=[itemId,...wishList]
    }
		this.setState({wishList:newWishList}) 
  }
  
  render() { 
    const {productInfo,wishList} =this.state
    return (    
      <div>       
          <Header wishList={wishList}/>
        
          <Routes>
          <Route exact path="/" element={
              <ProductList 
                productInfo={productInfo} 
                wishList={wishList}
                updateWishList={this.updateWishList}            
              /> 
            }></Route>
          <Route path="/wishlist" element={<WishList/>}></Route>
            
          {/* <Navigate to="/product"/> */}

					</Routes>
          
      </div>
      
    );
  }
}
 
export default App;