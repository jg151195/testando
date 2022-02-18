import styles from "../style.module.css"
import React from "react";

export default function Buttons({value,setValue,array,setArray}){
    

    const clear = ()=>{
        setValue('');
    }
    const erase = ()=>{
        const a = value.slice(0, -1);;
        setValue(a);
    }

    const getValue = (event)=>{
        const a = value.concat(event.target.value);
        setValue(a);
    }
    const getSum = ()=>{
       const valor1 = array;
       valor1.push(Number(value),"+");
       setValue('');
       setArray(valor1);
       console.log(array);
    }

    const getEqual = ()=>{
        array.push(Number(value));
        console.log(array);
        let result = 0;
        for(let i = 0; i<array.length; i++){
            if(array[i] == "+"){
                result = array[i-1]+array[i+1];
            }
            else if(array[i] == "-"){
                result = array[i-1]-array[i+1];
            }
            else if(array[i] == "/"){
                result = array[i-1]/array[i+1];
            }
            else if(array[i] == "X"){
                result = array[i-1]*array[i+1];
            }
        }
        console.log(result);
        setValue(result);
    }

    const getLess = ()=>{
        const valor1 = array;
        valor1.push(Number(value),"-");
        setValue('');
        setArray(valor1);
        console.log(array);
     }
     const getDiv = ()=>{
        const valor1 = array;
        valor1.push(Number(value),"/");
        setValue('');
        setArray(valor1);
        console.log(array);
     }
     const getMulti = ()=>{
        const valor1 = array;
        valor1.push(Number(value),"X");
        setValue('');
        setArray(valor1);
        console.log(array);
     }
    
    

    return <div className={styles.buttonContainer}>
    <input id={styles.clear} type="button" value="C" onClick={clear}></input>
    <input id={styles.erase} type="button" value="E" onClick={erase}></input>
    <input className={styles.inputValue} type="button" value="1" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="2" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="3" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="/" onClick={getDiv}></input>
    <input className={styles.inputValue} type="button" value="4" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="5" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="6" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="X" onClick={getMulti}></input>
    <input className={styles.inputValue} type="button" value="7" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="8" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="9" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="+" onClick={getSum}></input>
    <input id={styles.equal} type="button" value="=" onClick={getEqual}></input>
    <input className={styles.inputValue} type="button" value="0" onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="." onClick={getValue}></input>
    <input className={styles.inputValue} type="button" value="-" onClick={getLess}></input>
   
    
    </div>
}

