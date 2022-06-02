import React from 'react';
import style from "./MasterPage.module.css";
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { BsArrowLeft } from "react-icons/bs";

const MasterPage = (props) => {
    const router = useRouter()

    const handlBack = (e, path) => {
        router.push(path)
    }
    return (
        <div>
            <div className={style.header}>
                <div className={style.contain_logo} onClick={(e)=>handlBack(e,'/')}>
                    <div style={{ width: 30, height: 30, borderRadius: "100px", overflow: 'hidden' }}>
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
