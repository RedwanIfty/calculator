import { useState } from "react"
import Task from "./Task";

const Count=()=>{
    var[count,setCount]=useState([0]);
    const [msg,setMsg]=useState('');
    const increment=()=>{
        count++;
        setCount(count);
        console.log(count)
    }
    const decrement=()=>{
        count--;
        if(count<0)
        {
            alert('can not count less than 0')
            setCount(0)
            setMsg("not less than 0 ")
        }
        else
        {
            setCount(count);
            setMsg(' ');
        }
        console.log(count)
    }
    
    return(
    <div>
        <p>count:{count}</p>
        <Task name="Hello I am Ifty I am interest in web development" increment={increment} />
    </div>
    )
}
export default Count