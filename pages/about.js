import React,{useState,useEffect} from 'react';
import {post } from './Helper';

const Aboutus = (props) => {
const [state, setState] = useState({
    data:[]
});
useEffect(() => {
    handleGet();
}, [state])

const handleGet=()=>{
    debugger
    post("api/database",{},"POST").then(res=>{
        if(res){
            var data = res.admin
            setState({
                ...state,
                data:data
            })
        }
    })
}
    return (
        <div>
            <h1>About us </h1>
        </div>
    );
}

export default Aboutus;
