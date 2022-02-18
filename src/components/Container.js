import styles from "../style.module.css"

import Buttons from "./Buttons"
import { useState } from "react";
import React from "react";


function Container(){

    const [value, setValue] = useState('');
    const [array,setArray] = useState([]);
    
    

    const handleChange = ()=>{
        
    }


    return <>
        <input id={styles.result} type="text" value={value} onChange={handleChange}></input>
        <Buttons value = {value} setValue = {setValue} array={array} setArray={setArray}/>
    </>
}
export default React.memo(Container);
