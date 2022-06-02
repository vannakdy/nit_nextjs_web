import React, { useState } from 'react';
import Head from 'next/head';
import { AiOutlineAppstoreAdd, AiOutlineAppstore } from "react-icons/ai";
import MasterPage from './component/masterpage/MasterPage';
import styles from '../styles/Home.module.css';
import { Menu, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];
function product_list(props) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const [state, setState] = useState({
        iconOpen: true,
        news: false
    })
    const { iconOpen,news } = state;
    const handleOpen = () => {
        setState({
            ...state,
            iconOpen: !iconOpen
        })
    }
    const data = [{ title: 'អត្ថបទ',news:true }, { title: 'ព័ត៌មាន',news:false }, { title: 'បង្ហាញ',news:false }];
    const handelNews=()=>{
        setState({
            ...state,
            news: true
        })
    }
    return (
        <div>
            <Head>
                <title>Product</title>
                <meta property="og:title" content="My page" key="title" />
            </Head>
            <MasterPage>
                <div className={styles.contener}>
                    <div style={{ width: '25%' }}>
                        <div>
                            <a style={{ fontSize: 19, fontWeight: 'bold' }} onClick={toggleCollapsed}>ព័ត៌មានថ្មី</a>
                        </div>
                        <div
                            style={{
                                width: 256,
                            }}
                        >
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                onClick={toggleCollapsed}
                                inlineCollapsed={collapsed}
                                items={items}
                            />
                        </div>
                    </div>
                    <div style={{ width: '100%' }}>
                        <div>
                            <div className={styles.ConternHead}>
                                <Row>
                                    {data.map((item, i) => {
                                        return (
                                            <Col key={i}>
                                                <div className={styles.headerButton} onClick={handelNews}>
                                                    <Button>{item.title}</Button>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </div>
                            {news &&
                                <div style={{background:'green',height:250}}>
                                    <h1>dfdf</h1>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </MasterPage>
        </div>
    );
}

export default product_list;