import React, { useState } from 'react';
import Head from 'next/head';
import { AiOutlineAppstoreAdd, AiOutlineAppstore } from "react-icons/ai";
import MasterPage from './component/masterpage/MasterPage';
import styles from '../styles/Home.module.css';
import { Menu, Button } from 'antd';
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
        iconOpen: true
    })
    const { iconOpen } = state;
    const handleOpen = () => {
        setState({
            ...state,
            iconOpen: !iconOpen
        })
    }
    return (
        <div>
            <Head>
                <title>Product</title>
                <meta property="og:title" content="My page" key="title" />
            </Head>
            <MasterPage>
                <h3>ព័ត៌មានថ្មី</h3>
                <div
                    style={{
                        width: 256,
                    }}
                >
                    <Button
                        type="primary"
                        onClick={toggleCollapsed}
                        style={{
                            marginBottom: 16,
                        }}
                    >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                    />
                </div>
            </MasterPage>
        </div>
    );
}

export default product_list;