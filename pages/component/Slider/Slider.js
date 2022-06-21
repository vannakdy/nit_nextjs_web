import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image'
import styles from './Slider.module.css';

const Slider = (props) => {
    return (
        <div>
            <Carousel autoplay>
                <div className={styles.Image}>
                    <Image
                        src={require("../../assets/logo/angkor.png")}
                        alt="NIT Cambodai"
                    />
                </div>
                <div className={styles.Image}>
                    <Image
                        src={require("../../assets/logo/INT_LOGO.png")}
                        alt="NIT Cambodai"
                    />
                </div>
                <div className={styles.Image}>
                    <Image
                        src={require("../../assets/logo/tokta.png")}
                        alt="NIT Cambodai"
                    />
                </div>
                <div className={styles.Image}>
                    <Image
                        src={require("../../assets/logo/INT_LOGO.png")}
                        alt="NIT Cambodai"
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default Slider;