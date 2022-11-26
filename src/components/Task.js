const Task=({name,increment,decrement})=>{
    console.log(name,increment,decrement)
    return(
        <div>
            <h2 style={
                    {
                        color:"blueviolet",
                        background:"yellow"
                    }
                }>{name}
            </h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
      

        </div>
    )
}
export default Task;