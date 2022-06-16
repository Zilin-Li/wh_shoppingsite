import React, { Component } from 'react';
import { Row, Col} from 'antd';
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
    openWishlist=()=>{
        console.log("click")
    }
   

    render() { 
        const {wishList} = this.props
        return (
            <header>
                <div className='topside'></div>
                <Row className='navBar'>
                    <Col className="navBox" span={4}>
                        <img className="logoImg" src='images/logo.svg' alt="" />
                    </Col>
                    <Col span={16} className="navBox">
                        ENGAGEMENT & WEDDINGS
                        JEWELLERY
                        COLLECTIONS
                        GIFTS
                        SALE
                        LEARN                   
                    </Col>
                    <Col span={4} className="navBox iconList">
                        
                            <Link to="/wishlist" onClick={this.openWishlist}>
                                {wishList.length===0? <i className="fa-regular fa-heart"></i>:<i className="fa-solid fa-heart"></i>}    
                            </Link>  
                       
                        
                      
                       
                        {   /* 
                        <div onClick={this.openWishlist}>
                            {wishList.length===0? <HeartOutlined className='wishlistheart' style={{fontSize:20,color:'#41173F'}} />:<HeartFilled className='wishlistheart' style={{fontSize:20,color:'#41173F'}}/> }

                        </div> */}
                        
                        
                       
                    </Col>  
                </Row> 
            </header>
         

          );
    }
}
 
export default Header;