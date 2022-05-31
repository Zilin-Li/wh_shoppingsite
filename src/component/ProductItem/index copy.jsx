import React, { Component } from 'react';
import './index.css';
import { HeartOutlined,HeartFilled} from '@ant-design/icons';



class ProductItem extends Component {
    state={
        imgUrl:this.props.product.images[0],
        isWishlist: this.props.product.isWishlist
    }

    handleMouse =(imageURL)=>{
        return ()=>{ 
           this.setState({imgUrl:imageURL}) 
        }
    }
    addToWishlist=()=>{
        this.setState({isWishlist:!this.state.isWishlist})
        console.log(this.state.isWishlist)     
    }
    
    render() { 
        const {imgUrl,isWishlist}=this.state
        const {product} =this.props
        return (
            <div>
                <li className="product-list_tile" >
                    <div className="product-tile" onMouseEnter={this.handleMouse(product.images[1])} onMouseLeave={this.handleMouse(product.images[0])}>
                        <a href="#" className="product-tile_link">
                            <div className="product-tile_image" >
                                <img src={"images/"+imgUrl} alt="" className="product-tile_default-image" />
                            </div>
                            <div className="product-tile_attributes">
                                <div className='product-tile_wishlist-icon' onClick={this.addToWishlist}> 
                                    {isWishlist ? <HeartFilled style={{fontSize:16,color:'#41173F'}} />: <HeartOutlined style={{fontSize:16,color:'#41173F'}} />}   
                                </div>    
                                <div className="product-tile_badge">NEW IN</div>
                                
                            </div>
                            <div className="product-tile_content">
                                <div className="product-tile_prices">
                                    <span>{"$"+product.price}</span>
                                </div>
                                <div className="product-tile_title">
                                    {product.title}
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
            </div>
        );
    }
}
 
export default ProductItem;