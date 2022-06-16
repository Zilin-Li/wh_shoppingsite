import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import './index.css'

class ProductList extends Component {
    
    render() {
        const {productInfo,wishList, updateWishList}=this.props   
        return (
            <div className='product-list'>
                {/* {console.log(productInfo)} */}
                <ul className='product-list_content' >
                    {
                      productInfo.map((product)=>{
                          return <ProductItem key={product.id} product={product} wishList={wishList} updateWishList={updateWishList} />   
                      })  
                    }
                 </ul>
            </div>         
        
        );
    }
}
 
export default ProductList;