import React, { useState } from 'react';
import Head from 'next/head';
import { AiOutlineAppstoreAdd, AiOutlineAppstore } from "react-icons/ai";
import MasterPage from './component/masterpage/MasterPage';
import styles from '../styles/Home.module.css'
function product_list(props) {
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
                <div className={iconOpen ? styles.Drawer:styles.DrawerClos}>
                    <a onClick={handleOpen}>
                        {iconOpen ? <AiOutlineAppstore style={{fontSize:30}}/> : <AiOutlineAppstoreAdd style={{fontSize:30}}/>}
                    </a>
                    {iconOpen && 
                    <div className={styles.headerList}>
                        <h3>មេរៀនទី១</h3>
                        <div  className={styles.headerview}>
                            <p>we are teach you about website</p>
                        </div>
                        <h3>មេរៀនទី២</h3>
                        <div className={styles.headerview}>
                            <p>we are teach you about website</p>
                        </div>
                        <h3>មេរៀនទី៣</h3>
                        <div className={styles.headerview}>
                            <p>we are teach you about website</p>
                        </div>
                    </div>
                    }
                </div>
            </MasterPage>
        </div>
    );
}

export default product_list;