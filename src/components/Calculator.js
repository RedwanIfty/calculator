import { useState } from 'react'
import index from '../index.css' 
const Calculator=()=>{
    const[calculate,setCalculate]=useState('')
    const[result,setResult]=useState('');

    const ops= ['/','*','+','-','.'];

    const updateCalculate=(value)=>{
        if 
        (
            ops.includes(value) && calculate==='' ||
            ops.includes(value) && ops.includes(calculate.slice(-1)
            )
        ){
            return;
        }
        setCalculate(calculate+value);

        if(!ops.includes(value)){
            setResult(eval(calculate+value).toString());
        }
    }

    const createDigits=()=>{
        const digits=[]

        for(let i=1;i<10;i++){
            digits.push(
                <button 
                    onClick={()=>updateCalculate(i.toString())}
                    key={i}>{i}
                </button>
            )
        }
        return digits
   }
   const cal=()=>{
    setCalculate(eval(calculate).toString())
   }
   const deleteCal=()=>{
    if(calculate ===''){
        return;
    } 
    const value=calculate.slice(0,-1);
    setCalculate(value);
   }
    return(
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {result ? <span style={{color:'green'}}>({result})</span> : ''}
                    &nbsp;
                    {calculate || '0'}
                </div>
                <div className="operators">
                     <button onClick={()=>updateCalculate('/')}>/</button>
                     <button onClick={()=>updateCalculate('*')}>*</button>
                     <button onClick={()=>updateCalculate('+')}>+</button>
                     <button onClick={()=>updateCalculate('-')}>-</button>
                     <button onClick={deleteCal}>DEL</button>
                </div>
                <div className="digits">
                    {createDigits()}
                    <button onClick={()=>updateCalculate('0')}>0</button>
                    <button onClick={()=>updateCalculate('.')}>.</button>
                    <button onClick={cal}>=</button>
                </div>
            </div>
        </div>
    )
}
export default Calculator;