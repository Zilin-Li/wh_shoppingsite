import React, { Component } from 'react';
import { Row, Col, Divider,Icon } from 'antd';
import { HeartOutlined,HeartFilled} from '@ant-design/icons';

import './index.css'

class Header extends Component {

    render() { 
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
                    <Col span={4} className="navBox">
                        <HeartOutlined className='wishlistheart' style={{fontSize:20,color:'#41173F'}} />
                        {/* <HeartFilled style={{fontSize:20,color:'#41173F'}}/> */}
                    </Col>
                    
                   
                  
                </Row> 
            </header>
         

          );
    }
}
 
export default Header;