import React from 'react';
import style from "./MasterPage.module.css";
import Image from 'next/image'
const MasterPage = (props) => {
    return (
        <div>
            <div className={style.header}>
                <div className={style.contain_logo}>
                    <div style={{width:30,height:30,borderRadius:"100px",overflow: 'hidden'}}>
                        <Image 
                            src={require("../../assets/logo/INT_LOGO.png")} 
                            alt="NIT Cambodai"
                        />
                    </div>
                    <div className={style.text_brandname}>NIT Cambodia</div> 
                </div>
            </div> 
            <div className={style.body}>
                {props.children}
            </div> 
        </div>
    );
}

export default MasterPage;
