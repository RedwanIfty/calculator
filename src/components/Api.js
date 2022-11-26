import axios from "axios";
import { useState,React } from "react";

const Api=()=>{
    const [res,setRes]=useState([])
    const fetch=()=>{
        axios.get('https://my-json-server.typicode.com/typicode/demo/db').then(
            (suc)=>{
                setRes(suc.data)
                console.log(suc.data)
            },
            (err)=>{

            }
        )
    }
    return(
        <div>
            <button onClick={fetch}>Button</button>
            {
                <>{res.posts}</>
            }
        </div>
    )
}
export default Api;