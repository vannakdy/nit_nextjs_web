import React from 'react';
import styles from './Footer.module.css';
const Footer=(props)=> {
    return (
        <div className={styles.Footer}>
            <div className={styles.headerFooter}>
                <h1 style={{color:'#fff'}}>Footer</h1>
            </div>
        </div>
    );
}

export default Footer;