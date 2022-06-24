import { Col, Row } from 'antd';
import React from 'react';
import styles from './Footer.module.css';
import { Input, Space } from 'antd';
import Image from 'next/image'

const { Search } = Input;

const Footer = (props) => {
    const onSearch = (value) => console.log(value);

    return (
        <div className={styles.Footer}>
            <Row  style={{paddingTop:20}}>
                <Col span={8} className={styles.ViewStora}><h2>Stora</h2></Col>
                <Col span={4} className={styles.ViewStora}><h2>INFORMATION</h2></Col>
                <Col span={4} className={styles.ViewStora}><h2>MY ACOUNT</h2></Col>
                <Col span={8} className={styles.ViewStora}><h2>SUBSCRIBE TO OUR NEWSLETTER</h2></Col>
            </Row>
            <Row>
                <Col span={8} className={styles.ViewStora}>
                    <div>
                        <p style={{fontSize:15,color:"#000"}}>7176 Blue Spring Lane Santa</p>
                        <p style={{fontSize:15,color:"#000"}}>Monica, Ca 90403</p>
                        <span style={{fontSize:15,color:"#000"}}>855+ 964559121</span>
                    </div>
                </Col>
                <Col span={4} className={styles.ViewStora}>
                    <div>
                        <p style={{fontSize:15,color:"#000"}}>About Us</p>
                        <p style={{fontSize:15,color:"#000"}}>Contact Us</p>
                        <p style={{fontSize:15,color:"#000"}}>Testmonials</p>
                        <p style={{fontSize:15,color:"#000"}}>Terms & Condition</p>
                        <p style={{fontSize:15,color:"#000"}}>AffiliateProgram</p>
                    </div>
                </Col>
                <Col span={4} className={styles.ViewStora}>
                    <div>
                        <p style={{fontSize:15,color:"#000"}}>Orders</p>
                        <p style={{fontSize:15,color:"#000"}}>Download</p>
                        <p style={{fontSize:15,color:"#000"}}>Address</p>
                        <p style={{fontSize:15,color:"#000"}}>Acount detials</p>
                        <p style={{fontSize:15,color:"#000"}}>Logout</p>
                    </div>
                </Col>
                <Col span={8} className={styles.Col}>
                    <div>
                        <p style={{fontSize:15,color:"#000"}}>Subscribe to out newsletter and get 10% of your first purchase</p>
                        <Search
                            placeholder="Your email "
                            allowClear
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        />
                        <div>
                            {/* <Image
                                src={require("../../../assets/logo/payment.png")}
                            /> */}
                            <span>image</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className={styles.BottomFooter}>
                <span>ឬក៏អាចទំនាក់ទំនងបានតាមរយៈ</span>
                <span style={{paddingLeft:5,color:'#000',fontWeight:'bold'}}>gmail:</span>
                <span  style={{color:'#000',fontWeight:'bold',paddingLeft:2}}>DyVannak@gmail.com</span>
            </div>
        </div>
    );
}

export default Footer;