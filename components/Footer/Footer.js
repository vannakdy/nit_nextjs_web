import { Col, Row } from 'antd';
import React from 'react';
import styles from './Footer.module.css';
const Footer = (props) => {
    return (
        <div className={styles.Footer}>
            <Row>
                <Col span={12}>
                    <div>
                        <p style={{fontSize:15,color:"#000"}}>បង្រៀនដោយលោកគ្រួ: Dy Vannak</p>
                        <span style={{fontSize:15,color:"#000"}}>Tel:0964559121</span>
                    </div>
                </Col>
                <Col span={12} className={styles.Col}>
                    <div>
                        <p style={{fontSize:15,color:"#000"}}>9:00 AM - 10:30 AM</p>
                        <span style={{fontSize:15,color:"#000"}}>10:30 AM - 11:30 AM</span>
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